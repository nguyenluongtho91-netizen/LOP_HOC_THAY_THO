// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  GraduationCap, BookOpen, Users, Atom, Plus,
  CalendarCheck, ClipboardList, MonitorPlay, Search, Filter,
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Zap, Shield, KeyRound,
  FlaskConical, Layers, Scale, Dna, TestTube2
} from 'lucide-react'
import { useDataStore } from '@/store/dataStore'
import { fmtVNDShort } from '@/lib/helpers'
import { fetchHoa12AccessConfig, getHoa12AccessConfigSync, type GranularAccessConfig } from '@/services/hoa12AccessControlService'

interface ThptModuleCard {
  id: string
  grade: '10' | '11' | '12'
  badge: string
  title: string
  desc: string
  link: string
  gradient: string
  borderClass: string
  accentColor: string
  badgeBg: string
  isLocked: boolean
}

export default function ThptManagementHub() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { classes, students } = useDataStore()
  const [accessConfig, setAccessConfig] = useState<GranularAccessConfig>(() => getHoa12AccessConfigSync())

  useEffect(() => {
    fetchHoa12AccessConfig().then((cfg) => setAccessConfig({ ...cfg }))
  }, [])

  const gradeParam = searchParams.get('grade')
  const [selectedGrade, setSelectedGrade] = useState<'all' | '10' | '11' | '12'>(() => {
    if (gradeParam === '10' || gradeParam === '11' || gradeParam === '12') return gradeParam
    return 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const g = searchParams.get('grade')
    if (g === '10' || g === '11' || g === '12') {
      setSelectedGrade(g)
    } else if (!g) {
      setSelectedGrade('all')
    }
  }, [searchParams])

  const handleSelectGrade = (gr: 'all' | '10' | '11' | '12') => {
    setSelectedGrade(gr)
    if (gr === 'all') {
      navigate('/thpt?subject=hoa')
    } else {
      navigate(`/thpt?grade=${gr}&subject=hoa`)
    }
  }

  // Khối THPT chỉ có Môn Hóa
  const thptClasses = useMemo(() => {
    return classes.filter(c => {
      const g = String(c.grade || '').trim()
      const isThpt = ['10', '11', '12', 'Lớp 10', 'Lớp 11', 'Lớp 12', 'Khối 10', 'Khối 11', 'Khối 12'].some(k => g.includes(k) || g === k)
      if (!isThpt) return false

      if (selectedGrade !== 'all') {
        if (!g.includes(selectedGrade)) return false
      }

      // Khối cấp 3 chỉ có Hóa
      const sub = (c.subject || '').toLowerCase()
      return sub.includes('hóa') || !sub.includes('toán')
    })
  }, [classes, selectedGrade])

  const c10Count = useMemo(() => classes.filter(c => String(c.grade).includes('10')).length, [classes])
  const c11Count = useMemo(() => classes.filter(c => String(c.grade).includes('11')).length, [classes])
  const c12Count = useMemo(() => classes.filter(c => String(c.grade).includes('12')).length, [classes])

  // Danh mục tất cả các chuyên đề Hóa THPT đang mở
  const allModules: ThptModuleCard[] = [
    // ── HÓA 12 ──
    {
      id: 'h12-c1',
      grade: '12',
      badge: 'Hóa 12 • Chuyên đề 1',
      title: '🧪 Chương 1: Ester – Lipid',
      desc: 'Este, Lipit, chất béo, xà phòng hóa, tính chất và câu hỏi thực hành thí nghiệm. Kèm 7 đề luyện thi chuẩn thang 10.',
      link: '/hoa12-chuong1',
      gradient: 'from-amber-950/95 via-slate-900/90 to-purple-950/50',
      borderClass: 'border-amber-500/40 hover:border-amber-400',
      accentColor: 'text-amber-300',
      badgeBg: 'bg-amber-500/20 text-amber-200 border border-amber-400/30',
      isLocked: Boolean(accessConfig.chapters?.c1)
    },
    {
      id: 'h12-c2',
      grade: '12',
      badge: 'Hóa 12 • Chuyên đề 2',
      title: '🍇 Chương 2: Carbohydrate',
      desc: 'Glucose, Fructose, Saccharose, Maltose, Tinh bột & Cellulose. Kèm hệ thống 4 đề luyện thi chuẩn GDPT 2018 (28 câu, thang 10).',
      link: '/hoa12-chuong2',
      gradient: 'from-emerald-950/95 via-teal-950/90 to-slate-900/90',
      borderClass: 'border-emerald-500/40 hover:border-emerald-400',
      accentColor: 'text-emerald-300',
      badgeBg: 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30',
      isLocked: false
    },
    {
      id: 'h12-c5',
      grade: '12',
      badge: 'Hóa 12 • Chuyên đề 5',
      title: '⚡ Chương 5: Pin Điện & Điện Phân',
      desc: 'Thế điện cực chuẩn, ăn mòn kim loại, pin Galvani và bài toán định luật Faraday điện phân nóng chảy/dung dịch kèm 4 đề.',
      link: '/hoa12-chuong5',
      gradient: 'from-slate-950/95 via-indigo-950/90 to-cyan-950/60',
      borderClass: 'border-cyan-500/40 hover:border-cyan-400',
      accentColor: 'text-cyan-300',
      badgeBg: 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/30',
      isLocked: Boolean(accessConfig.chapters?.c5)
    },

    // ── HÓA 11 ──
    {
      id: 'h11-c1',
      grade: '11',
      badge: 'Hóa 11 • Chuyên đề 1',
      title: '⚖️ Chương 1: Cân Bằng Hóa Học',
      desc: 'Khái niệm phản ứng thuận nghịch, hằng số Kc, chuyển dịch cân bằng Le Chatelier, pH và cân bằng acid-base trong dung dịch nước (Bài 1, 2).',
      link: '/hoa11-chuong1',
      gradient: 'from-sky-950/95 via-slate-900/90 to-blue-950/60',
      borderClass: 'border-sky-500/40 hover:border-sky-400',
      accentColor: 'text-sky-300',
      badgeBg: 'bg-sky-500/20 text-sky-200 border border-sky-400/30',
      isLocked: false
    },
    {
      id: 'h11-c2',
      grade: '11',
      badge: 'Hóa 11 • Chuyên đề 2',
      title: '🌱 Chương 2: Nitrogen – Sulfur',
      desc: 'Đơn chất Nitrogen, ammonia, muối ammonium, sulfur, SO2, sulfuric acid & muối sulfate. Kèm 2 đề kiểm tra chuẩn 28 câu (Bài 4, 5, 6, 7, 8).',
      link: '/hoa11-chuong2',
      gradient: 'from-teal-950/95 via-slate-900/90 to-emerald-950/60',
      borderClass: 'border-teal-500/40 hover:border-teal-400',
      accentColor: 'text-teal-300',
      badgeBg: 'bg-teal-500/20 text-teal-200 border border-teal-400/30',
      isLocked: false
    },

    // ── HÓA 10 ──
    {
      id: 'h10-c1',
      grade: '10',
      badge: 'Hóa 10 • Chuyên đề 1',
      title: '🔬 Chương 1: Cấu Tạo Nguyên Tử',
      desc: 'Thành phần nguyên tử, hạt nhân, khối lượng nguyên tử, đồng vị và cấu trúc lớp vỏ electron nguyên tử (Bài 1, 2, 3 chuẩn SGK GDPT).',
      link: '/hoa10-chuong1',
      gradient: 'from-indigo-950/95 via-slate-900/90 to-purple-950/60',
      borderClass: 'border-indigo-500/40 hover:border-indigo-400',
      accentColor: 'text-indigo-300',
      badgeBg: 'bg-indigo-500/20 text-indigo-200 border border-indigo-400/30',
      isLocked: false
    },
    {
      id: 'h10-c2',
      grade: '10',
      badge: 'Hóa 10 • Chuyên đề 2',
      title: '📊 Chương 2: Bảng Tuần Hoàn NTHH',
      desc: 'Cấu tạo bảng tuần hoàn, quy luật biến đổi tuần hoàn bán kính, độ âm điện, tính acid-base và định luật tuần hoàn kèm 2 đề thi (Bài 5, 6, 7, 8).',
      link: '/hoa10-chuong2',
      gradient: 'from-violet-950/95 via-slate-900/90 to-rose-950/60',
      borderClass: 'border-violet-500/40 hover:border-violet-400',
      accentColor: 'text-violet-300',
      badgeBg: 'bg-violet-500/20 text-violet-200 border border-violet-400/30',
      isLocked: false
    }
  ]

  const filteredModules = useMemo(() => {
    if (selectedGrade === 'all') return allModules
    return allModules.filter(m => m.grade === selectedGrade)
  }, [selectedGrade, accessConfig])

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div className="bg-gradient-to-r from-teal-800 via-cyan-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-teal-950/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-cyan-200 text-xs font-bold mb-3 border border-white/20">
            <Atom className="w-4 h-4 text-cyan-300" />
            Cổng Quản Trị Khối Cấp 3 (THPT) – Chuyên Hóa Học Thầy Thọ
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            Quản Lý Chuyên Hóa Cấp 3 (Lớp 10 – 11 – 12)
          </h1>
          <p className="text-cyan-100/90 text-xs sm:text-sm max-w-2xl font-medium leading-relaxed">
            Hệ thống bài giảng, luyện tập theo bài và phòng thi thử trực tuyến chuẩn cấu trúc GDPT 2018 (3 phần: Trắc nghiệm 4 chọn, Đúng/Sai, Trả lời ngắn).
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-cyan-200 uppercase tracking-wider">Tổng lớp Hóa THPT</div>
              <div className="text-2xl font-black mt-0.5">{thptClasses.length} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-teal-200 uppercase tracking-wider">Hóa Lớp 10</div>
              <div className="text-2xl font-black mt-0.5 text-teal-300">{c10Count} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-sky-200 uppercase tracking-wider">Hóa Lớp 11</div>
              <div className="text-2xl font-black mt-0.5 text-sky-300">{c11Count} lớp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
              <div className="text-[11px] font-bold text-amber-200 uppercase tracking-wider">Hóa 12 Ôn Thi ĐH</div>
              <div className="text-2xl font-black mt-0.5 text-amber-300">{c12Count} lớp</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bộ lọc khối lớp Hóa THPT ── */}
      <div className="bg-white rounded-2xl p-4 border border-teal-100 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Atom className="w-5 h-5 text-teal-600" />
          <span className="text-sm font-black text-gray-800">Bộ lọc khối lớp Hóa:</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {(['all', '10', '11', '12'] as const).map(gr => (
            <button
              key={gr}
              onClick={() => handleSelectGrade(gr)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedGrade === gr
                  ? 'bg-gradient-to-r from-teal-700 to-cyan-800 text-white shadow-md shadow-teal-900/20 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {gr === 'all' ? '✨ Tất cả khối lớp (10 - 11 - 12)' : `🧪 Hóa Lớp ${gr}`}
            </button>
          ))}
        </div>
      </div>

      {/* ── LỐI VÀO CHUYÊN ĐỀ TRỌNG ĐIỂM HÓA THPT ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-teal-700" />
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              {selectedGrade === 'all'
                ? 'Các Chuyên Đề & Đề Thi Chuẩn Hóa Học Cấp 3'
                : `Chuyên Đề Trọng Điểm & Đề Thi Hóa Lớp ${selectedGrade}`}
            </h2>
          </div>
          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
            {filteredModules.length} chuyên đề sẵn sàng
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((m) => (
            <Link
              key={m.id}
              to={m.link}
              className={`p-5 rounded-2xl text-white shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden border ${m.borderClass} flex flex-col justify-between`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} z-0`} />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5 gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-sm ${m.badgeBg}`}>
                      {m.badge}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                      m.isLocked ? 'bg-red-500/80 text-white' : 'bg-emerald-400 text-emerald-950 font-extrabold'
                    }`}>
                      {m.isLocked ? '🔒 ĐANG KHÓA' : '🟢 ĐANG MỞ'}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black tracking-tight mb-1.5 text-white group-hover:translate-x-0.5 transition-transform leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-200/90 mb-4 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className={`flex items-center gap-1.5 text-xs font-black ${m.accentColor} pt-2 border-t border-white/10`}>
                  <span>Vào học & luyện đề ngay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Danh Sách Các Lớp Hóa THPT ── */}
      <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-black text-gray-800 tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              Danh Sách Lớp Học Hóa Cấp 3
            </h2>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">
              Đang hiển thị {thptClasses.length} lớp học Hóa THPT
            </p>
          </div>
          <Link
            to="/classes"
            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Thêm lớp Hóa mới
          </Link>
        </div>

        {thptClasses.length === 0 ? (
          <div className="p-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <Atom className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-600">Chưa có lớp Hóa THPT nào thuộc bộ lọc này</p>
            <p className="text-xs text-gray-400 mt-1">Thầy có thể bấm "Thêm lớp Hóa mới" để tạo lớp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {thptClasses.map(cls => (
              <div
                key={cls.id}
                className="p-4 rounded-xl border-2 border-teal-100/70 hover:border-teal-400 bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
                      🧪 HÓA HỌC THPT
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {cls.grade ? `Lớp ${cls.grade}` : 'THPT'}
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
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
