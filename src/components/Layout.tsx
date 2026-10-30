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
  Menu, X, Sparkles, ArrowLeft, Home
} from 'lucide-react'
import HierarchicalGradeTree from './HierarchicalGradeTree'

export default function Layout() {
  const authStore = useAuthStore() as any
  const user      = authStore.user
  const isAdmin   = authStore.isAdmin
  const location  = useLocation()
  const navigate  = useNavigate()

  const handleSignOut = async () => {
    if (authStore.logout) await authStore.logout()
    else if (authStore.signOut) await authStore.signOut()
    navigate('/login')
  }

  // 1. Nhóm Quản lý Đào tạo
  const trainingGroup = {
    title: 'Quản lý Đào tạo',
    items: [
      { path: '/',           icon: LayoutDashboard, label: 'Tổng quan hệ thống' },
      { path: '/classes',    icon: BookOpen,        label: 'Quản lý lớp học' },
      { path: '/students',   icon: Users,           label: 'Hồ sơ học sinh' },
      { path: '/attendance', icon: CalendarCheck,   label: 'Điểm danh học sinh' },
    ],
  }

  // 2. Nhóm Học liệu & Thi cử chung
  const generalExamGroup = {
    title: 'Học liệu & Phòng thi',
    items: [
      { path: '/homework',          icon: ClipboardCheck, label: 'Giao bài tập' },
      { path: '/courses',           icon: PlaySquare,     label: 'Khóa học & Bài giảng' },
      { path: '/exams',             icon: FileText,       label: 'Ngân hàng đề thi' },
      { path: '/create-pdf-exam',   icon: FilePlus,       label: 'Tạo đề PDF' },
      { path: '/create-tex-exam',   icon: Sigma,          label: 'Tạo đề LaTeX' },
      { path: '/create-worksheet',  icon: ClipboardList,  label: 'Phiếu bài tập' },
      { path: '/0345833133',        icon: Video,          label: '🔴 Phòng Live 0345.833.133' },
      { path: '/exam-rooms',        icon: MonitorPlay,    label: 'Phòng thi trực tuyến' },
      { path: '/phieu-grader',      icon: GraduationCap,  label: 'Chấm bài học sinh' },
    ],
  }

  // 3. Nhóm Công cụ bổ trợ
  const toolsGroup = {
    title: 'Công cụ bổ trợ',
    items: [
      { path: '/ocr',            icon: ScanText,   label: 'Smart OCR' },
      { path: '/latex-tools',    icon: Sigma,      label: 'Công cụ LaTeX' },
      { path: '/word-tools',     icon: FileType,   label: 'Công cụ Word' },
      { path: '/student-labels', icon: Tag,        label: 'Nhãn vở học sinh' },
    ],
  }

  // 4. Nhóm Tài chính & Hệ thống (Admin)
  const financeGroup = {
    title: 'Tài chính & Hệ thống',
    adminOnly: true,
    items: [
      { path: '/debt-planner',  icon: Target,        label: '🎯 Kế hoạch Trả nợ', adminOnly: true },
      { path: '/tuition',       icon: Banknote,      label: 'Quản lý học phí',   adminOnly: true },
      { path: '/zalo',          icon: MessageCircle, label: 'Zalo & Thông báo', adminOnly: true },
      { path: '/student-cards', icon: CreditCard,    label: 'In thẻ học viên',   adminOnly: true },
      { path: '/email',         icon: Mail,          label: 'Email / Tin nhắn',  adminOnly: true },
      { path: '/users',         icon: Settings,      label: 'Quản lý tài khoản', adminOnly: true },
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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ── SIDEBAR CHÍNH ── */}
      <aside className="w-72 bg-red-700 text-white flex flex-col shadow-xl z-20 hidden md:flex shrink-0 h-screen sticky top-0">
        {/* Header Logo */}
        <div className="h-16 flex items-center gap-3 px-5 border-b border-red-600/40 bg-red-800/30 shrink-0">
          <GraduationCap className="w-8 h-8 text-red-100" />
          <div>
            <h1 className="font-bold text-sm leading-tight uppercase tracking-wider">LỚP HỌC THẦY THỌ</h1>
            <p className="text-[9px] text-red-200 uppercase tracking-widest mt-0.5">Hệ thống Quản lý Đào tạo</p>
          </div>
        </div>

        {/* Danh sách Menu cuộn */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-4 custom-scrollbar">

          {/* 1. Quản lý Đào tạo */}
          <div>
            <h3 className="px-3 text-[10px] font-extrabold text-red-300/80 uppercase tracking-widest mb-1.5">
              {trainingGroup.title}
            </h3>
            <div className="space-y-1">
              {renderNavItems(trainingGroup.items)}
            </div>
          </div>

          {/* 2. CHUYÊN ĐỀ LẤY GỐC TOÁN (ĐƯỢC ĐẶT RIÊNG BIỆT Ở NGOÀI) */}
          <div className="pt-1 pb-1">
            <Link
              to="/lay-goc-toan"
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 text-slate-950 font-black shadow-lg shadow-orange-950/30 hover:scale-[1.02] active:scale-[0.99] transition-all border border-amber-200/60 group"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-950/20 flex items-center justify-center text-slate-950 group-hover:rotate-12 transition-transform">
                <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
              </div>
              <div className="flex-1 leading-tight">
                <div className="text-xs font-black uppercase tracking-tight">⚡ LẤY GỐC TOÁN</div>
                <div className="text-[9px] text-slate-900/80 font-bold">Chuyên đề đặc biệt độc lập</div>
              </div>
              <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
            </Link>
          </div>

          {/* 3. CÂY PHÂN CẤP ĐA TẦNG: LỚP NÀO RA LỚP ĐÓ, CHƯƠNG NÀO RA CHƯƠNG ĐÓ, PHẦN NÀO RA PHẦN ĐÓ */}
          <div>
            <h3 className="px-3 text-[10px] font-extrabold text-red-300/80 uppercase tracking-widest mb-2">
              Phân Cấp Khối Lớp & Chuyên Đề
            </h3>
            <HierarchicalGradeTree />
          </div>

          {/* 4. Học liệu & Thi cử */}
          <div>
            <h3 className="px-3 text-[10px] font-extrabold text-red-300/80 uppercase tracking-widest mb-1.5 mt-2">
              {generalExamGroup.title}
            </h3>
            <div className="space-y-1">
              {renderNavItems(generalExamGroup.items)}
            </div>
          </div>

          {/* 5. Công cụ bổ trợ */}
          <div>
            <h3 className="px-3 text-[10px] font-extrabold text-red-300/80 uppercase tracking-widest mb-1.5 mt-2">
              {toolsGroup.title}
            </h3>
            <div className="space-y-1">
              {renderNavItems(toolsGroup.items)}
            </div>
          </div>

          {/* 6. Tài chính & Hệ thống */}
          {(!financeGroup.adminOnly || isAdmin()) && (
            <div>
              <h3 className="px-3 text-[10px] font-extrabold text-red-300/80 uppercase tracking-widest mb-1.5 mt-2">
                {financeGroup.title}
              </h3>
              <div className="space-y-1">
                {renderNavItems(financeGroup.items)}
              </div>
            </div>
          )}
        </div>

        {/* User Footer */}
        <div className="p-3 border-t border-red-600/40 bg-red-800/30 shrink-0">
          <div className="flex items-center gap-2.5 px-2 mb-3">
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

      {/* ── NỘI DUNG CHÍNH ── */}
      <main className="flex-1 min-w-0 bg-gray-50/50 min-h-screen flex flex-col">
        {/* Mobile Header Bar cho điện thoại & App PWA */}
        <header className="md:hidden sticky top-0 z-30 bg-red-700 text-white px-3 py-2.5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            {location.pathname !== '/' && (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
                title="Quay lại trang trước"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </button>
            )}
            <Link to="/" className="flex items-center gap-1.5 font-black text-xs sm:text-sm tracking-wide text-white">
              <GraduationCap className="w-5 h-5 text-red-200" />
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
