// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  GraduationCap, BookOpen, Users, Calculator, Atom, Plus,
  CalendarCheck, ClipboardList, MonitorPlay, Search, Filter,
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Zap, Shield, KeyRound
} from 'lucide-react'
import { useDataStore } from '@/store/dataStore'
import { fmtVNDShort } from '@/lib/helpers'
import { fetchHoa12AccessConfig, getHoa12AccessConfigSync, type GranularAccessConfig } from '@/services/hoa12AccessControlService'

export default function ThptManagementHub({ defaultSubject }: { defaultSubject?: string }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const paramSubject = searchParams.get('subject')

  const { classes, students } = useDataStore()
  const [accessConfig, setAccessConfig] = useState<GranularAccessConfig>(() => getHoa12AccessConfigSync())

  useEffect(() => {
    fetchHoa12AccessConfig().then((cfg) => setAccessConfig({ ...cfg }))
  }, [])

  const [activeSubject, setActiveSubject] = useState<'all' | 'toan' | 'hoa'>(() => {
    if (defaultSubject?.toLowerCase().includes('hóa') || paramSubject === 'hoa') return 'hoa'
    if (defaultSubject?.toLowerCase().includes('toán') || paramSubject === 'toan') return 'toan'
    return 'all'
  })

  const [selectedGrade, setSelectedGrade] = useState<'all' | '10' | '11' | '12'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Lọc các lớp thuộc khối THPT (Khối 10, 11, 12)
  const thptClasses = useMemo(() => {
    return classes.filter(c => {
      const g = String(c.grade || '').trim()
      const isThpt = ['10', '11', '12', 'Lớp 10', 'Lớp 11', 'Lớp 12', 'Khối 10', 'Khối 11', 'Khối 12'].some(k => g.includes(k) || g === k)
      if (!isThpt) return false

      if (selectedGrade !== 'all') {
        if (!g.includes(selectedGrade)) return false
      }

      if (activeSubject === 'toan') {
        return (c.subject || '').toLowerCase().includes('toán')
      }
      if (activeSubject === 'hoa') {
        return (c.subject || '').toLowerCase().includes('hóa')
      }
      return true
    })
  }, [classes, selectedGrade, activeSubject])

  // Lọc học sinh thuộc khối THPT
  const thptStudents = useMemo(() => {
    return students.filter(s => {
      const g = String(s.grade || '').trim()
      const isThpt = ['10', '11', '12'].some(k => g.includes(k) || g === k)
      if (!isThpt) return false
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        return (s.name || '').toLowerCase().includes(q) || (s.phone || '').includes(q) || (s.student_code || '').toLowerCase().includes(q)
      }
      return true
    })
  }, [students, searchQuery])

  const mathCount = useMemo(() => classes.filter(c => ['10','11','12'].some(g => String(c.grade).includes(g)) && (c.subject || '').toLowerCase().includes('toán')).length, [classes])
  const chemCount = useMemo(() => classes.filter(c => ['10','11','12'].some(g => String(c.grade).includes(g)) && (c.subject || '').toLowerCase().includes('hóa')).length, [classes])

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div className="bg-gradient-to-r from-teal-700 via-indigo-800 to-purple-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-indigo-950/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-bold mb-3 border border-white/20">
            <GraduationCap className="w-4 h-4" />
            Cổng Quản Trị Khối Cấp 3 (THPT)
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            Quản Lý Toàn Diện Khối THPT – Thầy Thọ
          </h1>
          <p className="text-indigo-100/90 text-xs sm:text-sm max-w-2xl font-medium leading-relaxed">
            Trung tâm điều phối ôn luyện Khối 10, 11, 12 trọng tâm: Ôn thi Tốt nghiệp THPT & ĐH môn Hóa 12 và Lấy Gốc Toán.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-teal-200 uppercase tracking-wider">Tổng lớp THPT</div>
              <div className="text-2xl font-black mt-0.5">{thptClasses.length} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-amber-200 uppercase tracking-wider">Toán THPT</div>
              <div className="text-2xl font-black mt-0.5 text-amber-300">{mathCount} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-cyan-200 uppercase tracking-wider">Hóa 10 - 11 - 12</div>
              <div className="text-2xl font-black mt-0.5 text-cyan-300">{chemCount} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">Học sinh THPT</div>
              <div className="text-2xl font-black mt-0.5 text-white">{thptStudents.length} em</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LỐI VÀO CHUYÊN ĐỀ TRỌNG ĐIỂM THPT ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card Hóa 12 Chương 1 */}
        <Link
          to="/hoa12-chuong1"
          className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-full bg-white/20 text-xs font-black tracking-wider uppercase backdrop-blur-sm">
              Hóa 12 • Chuyên đề 1
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              accessConfig.chapters?.c1 ? 'bg-red-500/80 text-white' : 'bg-emerald-300 text-emerald-900'
            }`}>
              {accessConfig.chapters?.c1 ? '🔒 ĐANG KHÓA' : '🟢 ĐANG MỞ'}
            </span>
          </div>
          <h3 className="text-lg font-black tracking-tight mb-1 group-hover:translate-x-0.5 transition-transform">
            🧪 Chương 1: Ester – Lipid
          </h3>
          <p className="text-xs text-emerald-100/90 mb-4">
            Trọng tâm Este, Lipit, xà phòng hóa, tính chất và câu hỏi thực hành thí nghiệm.
          </p>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-200">
            <span>Vào luyện đề ngay</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card Hóa 12 Chương 5 */}
        <Link
          to="/hoa12-chuong5"
          className="p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-full bg-white/20 text-xs font-black tracking-wider uppercase backdrop-blur-sm">
              Hóa 12 • Chuyên đề 5
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              accessConfig.chapters?.c5 ? 'bg-red-500/80 text-white' : 'bg-amber-100 text-amber-900'
            }`}>
              {accessConfig.chapters?.c5 ? '🔒 ĐANG KHÓA' : '🟢 ĐANG MỞ'}
            </span>
          </div>
          <h3 className="text-lg font-black tracking-tight mb-1 group-hover:translate-x-0.5 transition-transform">
            ⚡ Chương 5: Pin & Điện Phân
          </h3>
          <p className="text-xs text-amber-100/90 mb-4">
            Thế điện cực chuẩn, ăn mòn kim loại, pin Galvani và bài toán định luật Faraday.
          </p>
          <div className="flex items-center gap-1.5 text-xs font-bold text-white">
            <span>Vào luyện đề ngay</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card Lấy Gốc Toán */}
        <Link
          to="/lay-goc-toan"
          className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-full bg-white/20 text-xs font-black tracking-wider uppercase backdrop-blur-sm">
              Toán THPT
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-cyan-300 text-cyan-900">
              ⚡ TOÁN CẤP 3
            </span>
          </div>
          <h3 className="text-lg font-black tracking-tight mb-1 group-hover:translate-x-0.5 transition-transform">
            📐 Chuyên Đề Lấy Gốc Toán
          </h3>
          <p className="text-xs text-indigo-100/90 mb-4">
            Khóa lấy gốc toàn diện: Hàm số, Tích phân, Tọa độ Oxyz, Hình học không gian và Xác suất.
          </p>
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-200">
            <span>Học lý thuyết & Luyện tập</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* ── Bộ lọc môn học & khối lớp THPT ── */}
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
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Toán THPT
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
            Hóa 10 - 11 - 12
          </button>
        </div>

        {/* Filter Grade */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-gray-500 mr-1">Khối lớp:</span>
          {(['all', '10', '11', '12'] as const).map(gr => (
            <button
              key={gr}
              onClick={() => setSelectedGrade(gr)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedGrade === gr
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {gr === 'all' ? 'Tất cả khối' : `Lớp ${gr}`}
            </button>
          ))}
        </div>
      </div>

      {/* ── Danh Sách Các Lớp THPT ── */}
      <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-black text-gray-800 tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Danh Sách Lớp Học Khối THPT
            </h2>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">
              Đang hiển thị {thptClasses.length} lớp học cấp 3
            </p>
          </div>
          <Link
            to="/classes"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Thêm lớp THPT mới
          </Link>
        </div>

        {thptClasses.length === 0 ? (
          <div className="p-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-600">Chưa có lớp THPT nào thuộc bộ lọc này</p>
            <p className="text-xs text-gray-400 mt-1">Thầy có thể bấm "Thêm lớp THPT mới" để tạo lớp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {thptClasses.map(cls => {
              const isMath = (cls.subject || '').toLowerCase().includes('toán')
              return (
                <div
                  key={cls.id}
                  className="p-4 rounded-xl border-2 border-indigo-100/70 hover:border-indigo-400 bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                        isMath ? 'bg-indigo-100 text-indigo-800 border border-indigo-200' : 'bg-teal-100 text-teal-800 border border-teal-200'
                      }`}>
                        {isMath ? '📐 TOÁN THPT' : '🧪 HÓA HỌC THPT'}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-purple-50 text-purple-700 border border-purple-200">
                        {cls.grade ? `Lớp ${cls.grade}` : 'THPT'}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-gray-800 mb-1 hover:text-indigo-700 transition-colors">
                      {cls.name || cls.class_name}
                    </h3>
                    <div className="text-xs text-gray-500 space-y-1 mt-2">
                      <p>📍 Phòng: <strong className="text-gray-700">{cls.room || 'Chưa xếp'}</strong></p>
                      <p>⏰ Lịch học: <strong className="text-gray-700">{cls.schedule || 'Chưa có'}</strong></p>
                      <p>💰 Học phí: <strong className="text-indigo-700">{cls.fee_per_session ? `${fmtVNDShort(cls.fee_per_session)}/buổi` : 'Chưa đặt'}</strong></p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <Link
                      to="/attendance"
                      className="text-[11px] font-bold text-indigo-700 hover:text-indigo-800 flex items-center gap-1"
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
    </div>
  )
}
