// @ts-nocheck
import React, { useState, useMemo } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  GraduationCap, BookOpen, Users, Calculator, Atom, Plus,
  CalendarCheck, ClipboardList, MonitorPlay, Search, Filter,
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Zap, School
} from 'lucide-react'
import { useDataStore } from '@/store/dataStore'
import { fmtVNDShort } from '@/lib/helpers'

export default function ThcsManagementHub({ defaultSubject }: { defaultSubject?: string }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const paramSubject = searchParams.get('subject')

  const { classes, students, enrollments } = useDataStore()

  const [activeSubject, setActiveSubject] = useState<'all' | 'toan' | 'hoa'>(() => {
    if (defaultSubject?.toLowerCase().includes('hóa') || paramSubject === 'hoa') return 'hoa'
    if (defaultSubject?.toLowerCase().includes('toán') || paramSubject === 'toan') return 'toan'
    return 'all'
  })

  const [selectedGrade, setSelectedGrade] = useState<'all' | '6' | '7' | '8' | '9'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Lọc các lớp thuộc khối THCS (Khối 6, 7, 8, 9)
  const thcsClasses = useMemo(() => {
    return classes.filter(c => {
      const g = String(c.grade || '').trim()
      const isThcs = ['6', '7', '8', '9', 'Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Khối 6', 'Khối 7', 'Khối 8', 'Khối 9'].some(k => g.includes(k) || g === k)
      if (!isThcs) return false

      if (selectedGrade !== 'all') {
        if (!g.includes(selectedGrade)) return false
      }

      if (activeSubject === 'toan') {
        return (c.subject || '').toLowerCase().includes('toán')
      }
      if (activeSubject === 'hoa') {
        const sub = (c.subject || '').toLowerCase()
        return sub.includes('hóa') || sub.includes('khtn') || sub.includes('khoa học')
      }
      return true
    })
  }, [classes, selectedGrade, activeSubject])

  // Lọc học sinh thuộc khối THCS
  const thcsStudents = useMemo(() => {
    return students.filter(s => {
      const g = String(s.grade || '').trim()
      const isThcs = ['6', '7', '8', '9'].some(k => g.includes(k) || g === k)
      if (!isThcs) return false
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        return (s.name || '').toLowerCase().includes(q) || (s.phone || '').includes(q) || (s.student_code || '').toLowerCase().includes(q)
      }
      return true
    })
  }, [students, searchQuery])

  const mathCount = useMemo(() => classes.filter(c => ['6','7','8','9'].some(g => String(c.grade).includes(g)) && (c.subject || '').toLowerCase().includes('toán')).length, [classes])
  const chemCount = useMemo(() => classes.filter(c => ['6','7','8','9'].some(g => String(c.grade).includes(g)) && ((c.subject || '').toLowerCase().includes('hóa') || (c.subject || '').toLowerCase().includes('khtn'))).length, [classes])

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-teal-900/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-bold mb-3 border border-white/20">
            <GraduationCap className="w-4 h-4 text-emerald-300" />
            Cổng Quản Trị Khối Cấp 2 (THCS)
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            Quản Lý Toàn Diện Khối THCS – Thầy Thọ
          </h1>
          <p className="text-emerald-100/90 text-xs sm:text-sm max-w-2xl font-medium leading-relaxed">
            Hệ thống điều phối chuyên biệt cho học sinh Lớp 6, 7, 8, 9 gồm phân môn Toán THCS và Hóa học / KHTN.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">Tổng lớp THCS</div>
              <div className="text-2xl font-black mt-0.5">{thcsClasses.length} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">Toán THCS</div>
              <div className="text-2xl font-black mt-0.5 text-amber-200">{mathCount} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">Hóa & KHTN THCS</div>
              <div className="text-2xl font-black mt-0.5 text-cyan-200">{chemCount} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">Học sinh THCS</div>
              <div className="text-2xl font-black mt-0.5 text-white">{thcsStudents.length} em</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bộ lọc môn học & khối lớp ── */}
      <div className="bg-white rounded-2xl p-4 border border-teal-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
        {/* Toggle Subject */}
        <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 rounded-xl">
          <button
            onClick={() => setActiveSubject('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSubject === 'all'
                ? 'bg-white text-teal-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Tất cả phân môn
          </button>
          <button
            onClick={() => setActiveSubject('toan')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeSubject === 'toan'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Toán THCS
          </button>
          <button
            onClick={() => setActiveSubject('hoa')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeSubject === 'hoa'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Atom className="w-3.5 h-3.5" />
            Hóa & KHTN THCS
          </button>
        </div>

        {/* Filter Grade */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-gray-500 mr-1">Khối lớp:</span>
          {(['all', '6', '7', '8', '9'] as const).map(gr => (
            <button
              key={gr}
              onClick={() => setSelectedGrade(gr)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedGrade === gr
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {gr === 'all' ? 'Tất cả khối' : `Lớp ${gr}`}
            </button>
          ))}
        </div>
      </div>

      {/* ── BỘ PHÂN MỤC THEO TRƯỜNG THCS (Thạch Linh • Nguyễn Du • Nam Hà • Thạch Đài) ── */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 rounded-3xl p-5 border border-teal-800/50 shadow-lg text-white space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-teal-400" />
            <h3 className="text-base font-black text-white">
              Phân Mục Theo Trường Cấp 2 (THCS)
            </h3>
          </div>
          <span className="text-xs text-teal-200/80">
            Xem nhanh lớp học, học sinh & đề thi của từng trường
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          {/* Mục 1: THCS Thạch Linh */}
          <div
            onClick={() => setSearchQuery('Thạch Linh')}
            className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between gap-2 group cursor-pointer ${
              searchQuery === 'Thạch Linh'
                ? 'bg-emerald-600/30 border-emerald-400 shadow-md'
                : 'bg-white/5 hover:bg-white/10 border-emerald-500/30 hover:border-emerald-400'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-black shadow-xs">
                🏛️
              </div>
              <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-emerald-300 transition-colors">
                THCS Thạch Linh
              </h4>
            </div>
            <span className="text-[10px] text-emerald-300/80">Lọc nhanh theo trường</span>
          </div>

          {/* Mục 2: THCS Nguyễn Du */}
          <div
            onClick={() => setSearchQuery('Nguyễn Du')}
            className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between gap-2 group cursor-pointer ${
              searchQuery === 'Nguyễn Du'
                ? 'bg-cyan-600/30 border-cyan-400 shadow-md'
                : 'bg-white/5 hover:bg-white/10 border-cyan-500/30 hover:border-cyan-400'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-black shadow-xs">
                🏛️
              </div>
              <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors">
                THCS Nguyễn Du
              </h4>
            </div>
            <span className="text-[10px] text-cyan-300/80">Lọc nhanh theo trường</span>
          </div>

          {/* Mục 3: THCS Nam Hà */}
          <div
            onClick={() => setSearchQuery('Nam Hà')}
            className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between gap-2 group cursor-pointer ${
              searchQuery === 'Nam Hà'
                ? 'bg-amber-600/30 border-amber-400 shadow-md'
                : 'bg-white/5 hover:bg-white/10 border-amber-500/30 hover:border-amber-400'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm font-black shadow-xs">
                🏛️
              </div>
              <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-amber-300 transition-colors">
                THCS Nam Hà
              </h4>
            </div>
            <span className="text-[10px] text-amber-300/80">Lọc nhanh theo trường</span>
          </div>

          {/* Mục 4: THCS Thạch Đài */}
          <div
            onClick={() => setSearchQuery('Thạch Đài')}
            className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between gap-2 group cursor-pointer ${
              searchQuery === 'Thạch Đài'
                ? 'bg-purple-600/30 border-purple-400 shadow-md'
                : 'bg-white/5 hover:bg-white/10 border-purple-500/30 hover:border-purple-400'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-violet-600 flex items-center justify-center text-white text-sm font-black shadow-xs">
                🏛️
              </div>
              <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-purple-300 transition-colors">
                THCS Thạch Đài
              </h4>
            </div>
            <span className="text-[10px] text-purple-300/80">Lọc nhanh theo trường</span>
          </div>
        </div>
      </div>

      {/* ── Danh Sách Các Lớp THCS ── */}
      <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-black text-gray-800 tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              Danh Sách Lớp Học THCS
            </h2>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">
              Đang hiển thị {thcsClasses.length} lớp học phù hợp với bộ lọc
            </p>
          </div>
          <Link
            to="/classes"
            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Thêm lớp THCS mới
          </Link>
        </div>

        {thcsClasses.length === 0 ? (
          <div className="p-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-600">Chưa có lớp THCS nào thuộc bộ lọc này</p>
            <p className="text-xs text-gray-400 mt-1">Thầy có thể bấm "Thêm lớp THCS mới" hoặc chọn "Tất cả phân môn".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {thcsClasses.map(cls => {
              const isMath = (cls.subject || '').toLowerCase().includes('toán')
              return (
                <div
                  key={cls.id}
                  className="p-4 rounded-xl border-2 border-teal-100/70 hover:border-teal-400 bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                        isMath ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-teal-100 text-teal-800 border border-teal-200'
                      }`}>
                        {isMath ? '📐 TOÁN THCS' : '🧪 HÓA / KHTN'}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {cls.grade ? `Lớp ${cls.grade}` : 'THCS'}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-gray-800 mb-1 hover:text-teal-700 transition-colors">
                      {cls.name || cls.class_name}
                    </h3>
                    <div className="text-xs text-gray-500 space-y-1 mt-2">
                      <p>📍 Phòng: <strong className="text-gray-700">{cls.room || 'Chưa xếp'}</strong></p>
                      <p>⏰ Lịch học: <strong className="text-gray-700">{cls.schedule || 'Chưa có'}</strong></p>
                      <p>💰 Học phí: <strong className="text-teal-700">{cls.fee_per_session ? `${fmtVNDShort(cls.fee_per_session)}/buổi` : 'Chưa đặt'}</strong></p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <Link
                      to="/attendance"
                      className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      Điểm danh
                    </Link>
                    <Link
                      to="/homework"
                      className="text-[11px] font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                    >
                      <ClipboardList className="w-3.5 h-3.5" />
                      Giao bài
                    </Link>
                    <Link
                      to={`/classes`}
                      className="text-[11px] font-bold text-gray-500 hover:text-gray-800 flex items-center gap-1"
                    >
                      Chi tiết <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Tiện ích nhanh cho THCS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/create-pdf-exam"
          className="p-5 rounded-2xl bg-white border border-teal-100 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
            📄
          </div>
          <h3 className="font-bold text-sm text-gray-800 mb-1">Tạo Đề Thi Cho Cấp 2</h3>
          <p className="text-xs text-gray-500">Soạn đề kiểm tra 15p, giữa kỳ, học kỳ Toán & Hóa THCS xuất PDF chuẩn A4.</p>
        </Link>

        <Link
          to="/homework"
          className="p-5 rounded-2xl bg-white border border-teal-100 hover:border-amber-400 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
            📝
          </div>
          <h3 className="font-bold text-sm text-gray-800 mb-1">Giao Bài Tập Về Nhà THCS</h3>
          <p className="text-xs text-gray-500">Giao bài tập tự luận, trắc nghiệm cho từng lớp THCS và theo dõi nộp bài.</p>
        </Link>

        <Link
          to="/exam-rooms"
          className="p-5 rounded-2xl bg-white border border-teal-100 hover:border-cyan-400 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
            💻
          </div>
          <h3 className="font-bold text-sm text-gray-800 mb-1">Phòng Thi Trực Tuyến THCS</h3>
          <p className="text-xs text-gray-500">Tạo phòng thi trực tuyến có chấm điểm tự động theo thang 10 cho học sinh cấp 2.</p>
        </Link>
      </div>
    </div>
  )
}
