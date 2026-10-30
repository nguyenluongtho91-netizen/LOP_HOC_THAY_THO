// @ts-nocheck
import { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import {
  Video,
  LayoutDashboard, Users, BookOpen, CalendarCheck, Banknote,
  Mail, Settings, LogOut, FileText, MonitorPlay,
  GraduationCap, Sigma, FilePlus, Zap, FileType,
  ClipboardList, ClipboardCheck, MessageCircle, Calculator, PenTool, Target,
  Menu, X, Sparkles, ArrowLeft, Home, ChevronDown, Bell, Search, ExternalLink, ShieldCheck
} from 'lucide-react'
import HierarchicalGradeTree from './HierarchicalGradeTree'

export default function Layout() {
  const authStore = useAuthStore() as any
  const user      = authStore.user
  const isAdmin   = authStore.isAdmin
  const location  = useLocation()
  const navigate  = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Desktop sidebar: Mặc định thu gọn để giao diện toàn màn hình cực rộng
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(false)

  // Accordion state for 4 Main Hubs in Sidebar
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    p1: true,
    p2: false,
    p3: false,
    p4: false,
  })

  const togglePillar = (id: string) => {
    setExpandedPillars(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSignOut = async () => {
    if (authStore.logout) await authStore.logout()
    else if (authStore.signOut) await authStore.signOut()
    navigate('/login')
  }

  // ── TRỤ CỘT 1: QUẢN LÝ HỌC SINH & 21 LỚP HỌC ──
  const pillar1 = {
    id: 'p1',
    title: '1. Học Sinh & 21 Lớp Học',
    icon: Users,
    badge: '152 HS',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
    items: [
      { path: '/dashboard',     icon: LayoutDashboard, label: 'Bảng điều khiển 4 Trụ Cột' },
      { path: '/students',      icon: Users,           label: 'Danh sách 152 học sinh' },
      { path: '/classes',       icon: BookOpen,        label: 'Quản lý 21 Lớp (K6-K12)' },
      { path: '/attendance',    icon: CalendarCheck,   label: 'Điểm danh chuyên cần' },
      { path: '/student-cards', icon: GraduationCap,   label: 'In thẻ QR & Nhãn vở' },
    ],
  }

  // ── TRỤ CỘT 2: KHÓA HỌC & HỌC LIỆU ──
  const pillar2 = {
    id: 'p2',
    title: '2. Khóa Học & Bài Giảng',
    icon: BookOpen,
    badge: 'K6-K12',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
    items: [
      { path: '/courses',        icon: BookOpen,   label: 'Kho bài giảng & Khóa học' },
      { path: '/word-tools',     icon: FileType,   label: 'Chuẩn hóa đề Word' },
      { path: '/whiteboard',     icon: PenTool,    label: 'Bảng vẽ Whiteboard' },
      { path: '/casio',          icon: Calculator, label: 'Máy tính Casio ảo' },
    ],
  }

  // ── TRỤ CỘT 3: THI CỬ & TẠO PHÒNG THI ──
  const pillar3 = {
    id: 'p3',
    title: '3. Thi Cử & Phòng Thi',
    icon: Target,
    badge: 'Online',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/30',
    items: [
      { path: '/exams',             icon: FileText,       label: 'Ngân hàng đề thi' },
      { path: '/create-pdf-exam',   icon: FilePlus,       label: 'Tạo đề PDF chuẩn BGD' },
      { path: '/create-tex-exam',   icon: Sigma,          label: 'Tạo đề thi LaTeX' },
      { path: '/create-worksheet',  icon: ClipboardList,  label: 'Phiếu bài tập về nhà' },
      { path: '/exam-rooms',        icon: MonitorPlay,    label: 'Phòng thi trực tuyến' },
      { path: '/homework',          icon: ClipboardCheck, label: 'Giao bài tập về nhà' },
      { path: '/phieu-grader',      icon: GraduationCap,  label: 'Chấm bài PhieuGrader' },
      { path: '/0345833133',        icon: Video,          label: '🔴 Live 0345.833.133' },
    ],
  }

  // ── TRỤ CỘT 4: TÀI CHÍNH, HỌC PHÍ & ZALO ──
  const pillar4 = {
    id: 'p4',
    title: '4. Học Phí, VietQR & Zalo',
    icon: Banknote,
    badge: 'VietQR',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    adminOnly: true,
    items: [
      { path: '/tuition',       icon: Banknote,      label: 'Quản lý học phí & VietQR', adminOnly: true },
      { path: '/zalo',          icon: MessageCircle, label: 'Zalo & Chăm sóc PH',      adminOnly: true },
      { path: '/debt-planner',  icon: Target,        label: '🎯 Sổ nợ & Tài chính',    adminOnly: true },
      { path: '/email',         icon: Mail,          label: 'Email / Tin nhắn',         adminOnly: true },
      { path: '/users',         icon: Settings,      label: 'Quản lý tài khoản',        adminOnly: true },
    ],
  }

  const displayName = user?.name || user?.full_name || user?.email || 'Thầy Thọ'
  const displayChar = displayName.charAt(0).toUpperCase()

  const renderNavItems = (items: any[]) => {
    return items.map((item) => {
      if (item.adminOnly && !isAdmin()) return null
      const isActive = location.pathname === item.path ||
        (item.path !== '/' && location.pathname.startsWith(item.path))
      const Icon = item.icon
      return (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => {
            setMobileMenuOpen(false)
            setDesktopSidebarOpen(false)
          }}
          className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ${
            isActive
              ? 'bg-white text-slate-900 font-bold shadow-md transform scale-[1.02]'
              : 'text-slate-200 hover:bg-white/10 hover:text-white hover:translate-x-1'
          }`}
        >
          <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'opacity-80'}`} />
          <span className="text-xs font-semibold">{item.label}</span>
        </Link>
      )
    })
  }

  const renderSidebarContent = () => (
    <div className="flex-1 overflow-y-auto py-3 px-3 space-y-3 custom-scrollbar">
      {/* ── TRỤ CỘT 1 ── */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-2 transition-all">
        <button
          type="button"
          onClick={() => togglePillar('p1')}
          className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl hover:bg-white/10 text-left transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Users className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-black uppercase tracking-wide text-white">{pillar1.title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${pillar1.badgeColor}`}>
              {pillar1.badge}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${expandedPillars.p1 ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {expandedPillars.p1 && (
          <div className="mt-1 space-y-0.5 pt-1.5 border-t border-white/10">
            {renderNavItems(pillar1.items)}
          </div>
        )}
      </div>

      {/* ── TRỤ CỘT 2 ── */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-2 transition-all">
        <button
          type="button"
          onClick={() => togglePillar('p2')}
          className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl hover:bg-white/10 text-left transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-black uppercase tracking-wide text-white">{pillar2.title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${pillar2.badgeColor}`}>
              {pillar2.badge}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${expandedPillars.p2 ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {expandedPillars.p2 && (
          <div className="mt-1 space-y-1.5 pt-1.5 border-t border-white/10">
            {/* Chuyên đề Lấy Gốc Toán Nổi Bật */}
            <Link
              to="/lay-goc-toan"
              onClick={() => {
                setMobileMenuOpen(false)
                setDesktopSidebarOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-950 font-black shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all border border-amber-300"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <div className="flex-1 leading-tight">
                <div className="text-[11px] font-black uppercase">⚡ LẤY GỐC TOÁN</div>
                <div className="text-[8px] text-slate-900/80 font-bold">Chuyên đề trọng tâm</div>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            </Link>

            {/* Cây phân cấp Khối Lớp */}
            <div className="pt-1">
              <HierarchicalGradeTree />
            </div>

            {/* Các công cụ soạn giảng */}
            <div className="space-y-0.5 pt-1 border-t border-white/10">
              {renderNavItems(pillar2.items)}
            </div>
          </div>
        )}
      </div>

      {/* ── TRỤ CỘT 3 ── */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-2 transition-all">
        <button
          type="button"
          onClick={() => togglePillar('p3')}
          className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl hover:bg-white/10 text-left transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Target className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-black uppercase tracking-wide text-white">{pillar3.title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${pillar3.badgeColor}`}>
              {pillar3.badge}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${expandedPillars.p3 ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {expandedPillars.p3 && (
          <div className="mt-1 space-y-0.5 pt-1.5 border-t border-white/10">
            {renderNavItems(pillar3.items)}
          </div>
        )}
      </div>

      {/* ── TRỤ CỘT 4 ── */}
      {(!pillar4.adminOnly || isAdmin()) && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-2 transition-all">
          <button
            type="button"
            onClick={() => togglePillar('p4')}
            className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl hover:bg-white/10 text-left transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Banknote className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-black uppercase tracking-wide text-white">{pillar4.title}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${pillar4.badgeColor}`}>
                {pillar4.badge}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${expandedPillars.p4 ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedPillars.p4 && (
            <div className="mt-1 space-y-0.5 pt-1.5 border-t border-white/10">
              {renderNavItems(pillar4.items)}
            </div>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* ══════════════════════════════════════════════════════════════
          ── TOP NAVIGATION BAR CHUẨN SANG TRỌNG & HIỆN ĐẠI (STICKY) ──
          ══════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Cụm Trái: Nút Menu + Brand Thầy Thọ */}
          <div className="flex items-center gap-3">
            {/* Nút bấm mở Menu 4 Trụ Cột dạng Pill Sang Trọng */}
            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setMobileMenuOpen(true)
                } else {
                  setDesktopSidebarOpen(prev => !prev)
                }
              }}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-950 text-white font-bold text-xs shadow-sm hover:shadow transition-all duration-200 cursor-pointer group active:scale-95 border border-slate-800"
              title="Nhấn để đóng/mở Menu 4 Trụ Cột"
            >
              <Menu className="w-4 h-4 text-indigo-400 group-hover:rotate-90 transition-transform duration-300" />
              <span className="tracking-wide">Menu 4 Trụ Cột</span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/15 text-indigo-200 border border-white/10">
                Mở rộng
              </span>
            </button>

            {/* Logo Thương Hiệu Lớp Thầy Thọ */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 pl-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-red-600 to-amber-500 text-white flex items-center justify-center font-black shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-sm tracking-tight text-slate-900 group-hover:text-red-700 transition-colors uppercase">
                    LỚP HỌC THẦY THỌ
                  </span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 bg-gradient-to-r from-red-500 to-amber-500 text-white rounded">
                    PRO
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium">Hệ thống điều hành giáo dục chuyên nghiệp</p>
              </div>
            </Link>
          </div>

          {/* Cụm Giữa: Quick Links Nổi Bật (Desktop) */}
          <div className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <Link
              to="/dashboard"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                location.pathname === '/dashboard' || location.pathname === '/'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              Bảng Điều Khiển
            </Link>
            <Link
              to="/students"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                location.pathname.startsWith('/students')
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              152 Học Sinh
            </Link>
            <Link
              to="/classes"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                location.pathname.startsWith('/classes')
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              21 Lớp K6-K12
            </Link>
            <Link
              to="/courses"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                location.pathname.startsWith('/courses')
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              Kho Bài Giảng
            </Link>
            <Link
              to="/exams"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                location.pathname.startsWith('/exams')
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              Thi Trực Tuyến
            </Link>
            <Link
              to="/tuition"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                location.pathname.startsWith('/tuition')
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              Học Phí & VietQR
            </Link>
          </div>

          {/* Cụm Phải: Portal Học Sinh + Profile Thầy Thọ */}
          <div className="flex items-center gap-2.5">
            {/* Nút xem Portal Học sinh */}
            <a
              href="/thi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 transition-all shadow-xs"
              title="Mở giao diện phòng thi của học sinh"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Cổng Thi Học Sinh</span>
            </a>

            {/* Profile Avatar & Dropdown */}
            <div className="flex items-center gap-2 pl-1 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold text-xs shadow-xs ring-2 ring-indigo-100">
                {displayChar}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-bold text-slate-900 leading-none truncate max-w-[120px]">{displayName}</p>
                <span className="text-[9px] font-semibold text-emerald-600 inline-flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Giáo viên
                </span>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors ml-1 cursor-pointer"
                title="Đăng xuất"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          ── DRAWER SIDEBAR DẠNG SLIDE-OVER SANG TRỌNG (DESKTOP & MOBILE) ──
          ══════════════════════════════════════════════════════════════ */}
      {/* Backdrop overlay mờ hiện đại khi mở Drawer Menu */}
      {(desktopSidebarOpen || mobileMenuOpen) && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => {
            setDesktopSidebarOpen(false)
            setMobileMenuOpen(false)
          }}
        />
      )}

      {/* Drawer Panel Trượt Ra */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col shadow-2xl z-50 transition-transform duration-300 ease-out border-r border-slate-800 ${
          desktopSidebarOpen || mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 bg-white/5 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-black">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-black text-xs uppercase tracking-wider text-white">LỚP HỌC THẦY THỌ</h2>
              <p className="text-[9px] text-indigo-300 font-medium">Hệ Thống 4 TrỤ Cột Toàn Diện</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setDesktopSidebarOpen(false)
              setMobileMenuOpen(false)
            }}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Đóng menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nội dung danh sách 4 Trụ Cột */}
        {renderSidebarContent()}

        {/* User Footer */}
        <div className="p-3.5 border-t border-white/10 bg-white/5 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
              {displayChar}
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-white truncate">{displayName}</p>
              <p className="text-[9px] text-slate-400 font-semibold">{user?.role || 'TEACHER'}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="px-2.5 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-600 text-rose-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Thoát</span>
          </button>
        </div>
      </aside>

      {/* ── NỘI DUNG CHÍNH (TOÀN MÀN HÌNH CỰC RỘNG) ── */}
      <main className="flex-1 w-full max-w-[1720px] mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  )
}
