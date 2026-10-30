// @ts-nocheck
import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import {
  Video, Atom,
  LayoutDashboard, Users, BookOpen, CalendarCheck, Banknote,
  Mail, Settings, LogOut, FileText, MonitorPlay, ScanText,
  GraduationCap, Sigma, FilePlus, PlaySquare, Zap, FileType, CreditCard,
  ClipboardList, ClipboardCheck, Tag, MessageCircle, Calculator, PenTool, Target,
  Menu, X, Sparkles, ArrowLeft, Home, ChevronDown, ChevronRight, CheckCircle2
} from 'lucide-react'
import HierarchicalGradeTree from './HierarchicalGradeTree'

export default function Layout() {
  const authStore = useAuthStore() as any
  const user      = authStore.user
  const isAdmin   = authStore.isAdmin
  const location  = useLocation()
  const navigate  = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Accordion state for 4 Main Hubs in Sidebar
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    p1: true,
    p2: true,
    p3: true,
    p4: true,
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
    badgeColor: 'bg-blue-900/60 text-blue-200 border-blue-400/30',
    items: [
      { path: '/',           icon: LayoutDashboard, label: 'Tổng quan hệ thống' },
      { path: '/classes',    icon: BookOpen,        label: 'Quản lý 21 lớp học' },
      { path: '/students',   icon: Users,           label: 'Hồ sơ 152 học sinh' },
      { path: '/attendance', icon: CalendarCheck,   label: 'Điểm danh chuyên cần' },
      { path: '/student-cards', icon: CreditCard,   label: 'In thẻ học viên QR' },
      { path: '/student-labels', icon: Tag,         label: 'Nhãn vở học sinh' },
    ],
  }

  // ── TRỤ CỘT 2: KHÓA HỌC & HỌC LIỆU BÀI GIẢNG ──
  const pillar2 = {
    id: 'p2',
    title: '2. Khóa Học & Bài Giảng',
    icon: PlaySquare,
    badge: '21 Chương',
    badgeColor: 'bg-purple-900/60 text-purple-200 border-purple-400/30',
    items: [
      { path: '/courses',        icon: PlaySquare, label: 'Kho khóa học & Bài giảng' },
      { path: '/ocr',            icon: ScanText,   label: 'Smart OCR quét đề' },
      { path: '/latex-tools',    icon: Sigma,      label: 'Công cụ soạn LaTeX' },
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
    badgeColor: 'bg-rose-900/60 text-rose-200 border-rose-400/30',
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
    badgeColor: 'bg-emerald-900/60 text-emerald-200 border-emerald-400/30',
    adminOnly: true,
    items: [
      { path: '/tuition',       icon: Banknote,      label: 'Quản lý học phí & VietQR', adminOnly: true },
      { path: '/zalo',          icon: MessageCircle, label: 'Zalo & Chăm sóc PH',      adminOnly: true },
      { path: '/debt-planner',  icon: Target,        label: '🎯 Sổ nợ & Kế hoạch tài chính', adminOnly: true },
      { path: '/email',         icon: Mail,          label: 'Email / Tin nhắn',         adminOnly: true },
      { path: '/users',         icon: Settings,      label: 'Quản lý tài khoản',        adminOnly: true },
    ],
  }

  const displayName = user?.name || user?.full_name || user?.email || 'Giáo viên'
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
          onClick={() => setMobileMenuOpen(false)}
          className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ${
            isActive
              ? 'bg-white text-red-600 font-bold shadow-md transform scale-[1.02]'
              : 'text-red-50 hover:bg-red-600 hover:text-white hover:translate-x-1'
          }`}
        >
          <Icon className={`w-4 h-4 ${isActive ? 'text-red-500' : 'opacity-80'}`} />
          <span className="text-xs font-semibold">{item.label}</span>
        </Link>
      )
    })
  }

  const renderSidebarContent = () => (
    <div className="flex-1 overflow-y-auto py-3 px-3 space-y-3.5 custom-scrollbar">
      {/* ── TRỤ CỘT 1 ── */}
      <div className="rounded-2xl bg-red-800/25 border border-red-500/20 p-1.5 transition-all">
        <button
          type="button"
          onClick={() => togglePillar('p1')}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-red-800/40 text-left transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-300" />
            <span className="text-xs font-black uppercase tracking-wide text-white">{pillar1.title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${pillar1.badgeColor}`}>
              {pillar1.badge}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-red-200 transition-transform ${expandedPillars.p1 ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {expandedPillars.p1 && (
          <div className="mt-1 space-y-0.5 pt-1 border-t border-red-600/30">
            {renderNavItems(pillar1.items)}
          </div>
        )}
      </div>

      {/* ── TRỤ CỘT 2 ── */}
      <div className="rounded-2xl bg-red-800/25 border border-red-500/20 p-1.5 transition-all">
        <button
          type="button"
          onClick={() => togglePillar('p2')}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-red-800/40 text-left transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <PlaySquare className="w-4 h-4 text-purple-300" />
            <span className="text-xs font-black uppercase tracking-wide text-white">{pillar2.title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${pillar2.badgeColor}`}>
              {pillar2.badge}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-red-200 transition-transform ${expandedPillars.p2 ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {expandedPillars.p2 && (
          <div className="mt-1 space-y-1.5 pt-1 border-t border-red-600/30">
            {/* Chuyên đề Lấy Gốc Toán Nổi Bật */}
            <Link
              to="/lay-goc-toan"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 text-slate-950 font-black shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all border border-amber-200/60"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <div className="flex-1 leading-tight">
                <div className="text-[11px] font-black uppercase">⚡ LẤY GỐC TOÁN</div>
                <div className="text-[8px] text-slate-900/80 font-bold">Chuyên đề độc lập</div>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            </Link>

            {/* Cây phân cấp Khối Lớp */}
            <div className="pt-1">
              <HierarchicalGradeTree />
            </div>

            {/* Các công cụ soạn giảng */}
            <div className="space-y-0.5 pt-1 border-t border-red-600/30">
              {renderNavItems(pillar2.items)}
            </div>
          </div>
        )}
      </div>

      {/* ── TRỤ CỘT 3 ── */}
      <div className="rounded-2xl bg-red-800/25 border border-red-500/20 p-1.5 transition-all">
        <button
          type="button"
          onClick={() => togglePillar('p3')}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-red-800/40 text-left transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-rose-300" />
            <span className="text-xs font-black uppercase tracking-wide text-white">{pillar3.title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${pillar3.badgeColor}`}>
              {pillar3.badge}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-red-200 transition-transform ${expandedPillars.p3 ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {expandedPillars.p3 && (
          <div className="mt-1 space-y-0.5 pt-1 border-t border-red-600/30">
            {renderNavItems(pillar3.items)}
          </div>
        )}
      </div>

      {/* ── TRỤ CỘT 4 ── */}
      {(!pillar4.adminOnly || isAdmin()) && (
        <div className="rounded-2xl bg-red-800/25 border border-red-500/20 p-1.5 transition-all">
          <button
            type="button"
            onClick={() => togglePillar('p4')}
            className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-red-800/40 text-left transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Banknote className="w-4 h-4 text-emerald-300" />
              <span className="text-xs font-black uppercase tracking-wide text-white">{pillar4.title}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${pillar4.badgeColor}`}>
                {pillar4.badge}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-red-200 transition-transform ${expandedPillars.p4 ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedPillars.p4 && (
            <div className="mt-1 space-y-0.5 pt-1 border-t border-red-600/30">
              {renderNavItems(pillar4.items)}
            </div>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ── SIDEBAR CHÍNH (DESKTOP) ── */}
      <aside className="w-72 bg-red-700 text-white flex flex-col shadow-xl z-20 hidden md:flex shrink-0 h-screen sticky top-0">
        {/* Header Logo */}
        <div className="h-16 flex items-center gap-3 px-5 border-b border-red-600/40 bg-red-800/30 shrink-0">
          <GraduationCap className="w-8 h-8 text-red-100" />
          <div>
            <h1 className="font-bold text-sm leading-tight uppercase tracking-wider">LỚP HỌC THẦY THỌ</h1>
            <p className="text-[9px] text-red-200 uppercase tracking-widest mt-0.5">4 Trụ Cột Điều Hành</p>
          </div>
        </div>

        {/* Nội dung Sidebar desktop */}
        {renderSidebarContent()}

        {/* User Footer */}
        <div className="p-3 border-t border-red-600/40 bg-red-800/30 shrink-0">
          <div className="flex items-center gap-2.5 px-2 mb-2.5">
            <div className="w-9 h-9 rounded-full bg-red-600 border-2 border-red-400 flex items-center justify-center font-bold text-sm">
              {displayChar}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold truncate text-white">{displayName}</p>
              <p className="text-[9px] text-red-200 uppercase tracking-widest">{user?.role || 'TEACHER'}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-red-100 bg-red-800/50 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* ── SIDEBAR MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative w-72 max-w-[85vw] bg-red-700 text-white flex flex-col h-full shadow-2xl z-10">
            <div className="h-16 flex items-center justify-between px-4 border-b border-red-600/40 bg-red-800/30 shrink-0">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-7 h-7 text-red-100" />
                <div>
                  <h1 className="font-bold text-xs uppercase tracking-wider">LỚP HỌC THẦY THỌ</h1>
                  <p className="text-[8px] text-red-200 uppercase">4 Trụ Cột Điều Hành</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-red-800/50 hover:bg-red-600 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {renderSidebarContent()}
            <div className="p-3 border-t border-red-600/40 bg-red-800/30">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-red-100 bg-red-800/50 hover:bg-red-500 text-white"
              >
                <LogOut className="w-3.5 h-3.5" />
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── NỘI DUNG CHÍNH ── */}
      <main className="flex-1 min-w-0 bg-gray-50/50 min-h-screen flex flex-col">
        {/* Mobile Header Bar cho điện thoại & App PWA */}
        <header className="md:hidden sticky top-0 z-30 bg-red-700 text-white px-3 py-2.5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer shadow-xs"
              title="Mở menu 4 Trụ Cột"
            >
              <Menu className="w-5 h-5" />
            </button>
            {location.pathname !== '/' && (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 px-2 py-1 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
                title="Quay lại"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Lùi</span>
              </button>
            )}
            <Link to="/" className="flex items-center gap-1 font-black text-xs sm:text-sm tracking-wide text-white">
              <span>LỚP THẦY THỌ</span>
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              to="/"
              className="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center gap-1 transition-all"
              title="Về Trang Chủ"
            >
              <Home className="w-3.5 h-3.5 text-amber-300" />
              <span>Trang chủ</span>
            </Link>
          </div>
        </header>

        <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
