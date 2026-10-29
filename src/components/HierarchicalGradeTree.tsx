// @ts-nocheck
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown, ChevronRight, GraduationCap, Calculator, Atom,
  BookOpen, Folder, FolderOpen, Zap, Sparkles, CheckCircle2,
  Bookmark, Layers, FileText, Award, Trophy
} from 'lucide-react'

export default function HierarchicalGradeTree() {
  const location = useLocation()
  const currentPath = location.pathname

  // Mặc định mở khối THPT và lớp 12 để Thầy thao tác tiện nhất
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    'thpt': true,
    'thpt_10': true,
    'thpt_10_c1': true,
    'thpt_10_c2': true,
    'thpt_10_c3': true,
    'thpt_10_c4': true,
    'thpt_10_c5': true,
    'thpt_10_c6': true,
    'thpt_10_c7': true,
    'thpt_11': true,
    'thpt_11_c1': true,
    'thpt_11_c2': true,
    'thpt_11_c3': true,
    'thpt_11_c4': true,
    'thpt_11_c5': true,
    'thpt_11_c6': true,
    'thpt_12': true,
    'thpt_12_c1': true,
    'thpt_12_c2': true,
    'thpt_12_c3': true,
    'thpt_12_c4': true,
    'thpt_12_c5': true,
    'thpt_12_c6': true,
    'thpt_12_c7': true,
    'thpt_12_c8': true,
    'thcs': false,
  })

  const toggle = (key: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-4">
      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* 1. KHỐI THCS (CẤP 2) - GỒM CẢ TOÁN VÀ HÓA                         */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <div className="border border-red-600/40 rounded-2xl bg-red-800/30 overflow-hidden">
        {/* Header Cấp Học THCS */}
        <div
          onClick={(e) => toggle('thcs', e)}
          className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-red-600/40 transition-colors select-none"
        >
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-300" />
            <span className="text-xs font-black tracking-wider text-emerald-200 uppercase">
              Khối THCS (Toán & Hóa)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              to="/thcs"
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/40 transition-colors"
            >
              Hub THCS
            </Link>
            {expanded['thcs'] ? <ChevronDown className="w-3.5 h-3.5 text-red-200" /> : <ChevronRight className="w-3.5 h-3.5 text-red-200" />}
          </div>
        </div>

        {expanded['thcs'] && (
          <div className="px-2 py-2 space-y-1.5 border-t border-red-600/30 bg-red-900/20">
            {/* Lớp 6 */}
            <div className="border-l-2 border-emerald-500/40 ml-2 pl-2 space-y-1">
              <div
                onClick={(e) => toggle('thcs_6', e)}
                className="flex items-center justify-between py-1 text-xs font-bold text-red-100 hover:text-white cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-emerald-400" />
                  <span>📁 Lớp 6</span>
                </div>
                {expanded['thcs_6'] ? <ChevronDown className="w-3 h-3 text-red-300" /> : <ChevronRight className="w-3 h-3 text-red-300" />}
              </div>
              {expanded['thcs_6'] && (
                <div className="pl-3 py-1 space-y-1 text-[11px] text-red-100">
                  <Link to="/thcs?grade=6&subject=toan" className="flex items-center gap-1.5 py-1 hover:text-amber-300">
                    <Calculator className="w-3 h-3 text-amber-300" />
                    <span>Toán 6: Số học & Hình học trực quan</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Lớp 7 */}
            <div className="border-l-2 border-emerald-500/40 ml-2 pl-2 space-y-1">
              <div
                onClick={(e) => toggle('thcs_7', e)}
                className="flex items-center justify-between py-1 text-xs font-bold text-red-100 hover:text-white cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-emerald-400" />
                  <span>📁 Lớp 7</span>
                </div>
                {expanded['thcs_7'] ? <ChevronDown className="w-3 h-3 text-red-300" /> : <ChevronRight className="w-3 h-3 text-red-300" />}
              </div>
              {expanded['thcs_7'] && (
                <div className="pl-3 py-1 space-y-1 text-[11px] text-red-100">
                  <Link to="/thcs?grade=7&subject=toan" className="flex items-center gap-1.5 py-1 hover:text-amber-300">
                    <Calculator className="w-3 h-3 text-amber-300" />
                    <span>Toán 7: Đại số & Hình học phẳng</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Lớp 8 */}
            <div className="border-l-2 border-emerald-500/40 ml-2 pl-2 space-y-1">
              <div
                onClick={(e) => toggle('thcs_8', e)}
                className="flex items-center justify-between py-1 text-xs font-bold text-red-100 hover:text-white cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-emerald-400" />
                  <span>📁 Lớp 8</span>
                </div>
                {expanded['thcs_8'] ? <ChevronDown className="w-3 h-3 text-red-300" /> : <ChevronRight className="w-3 h-3 text-red-300" />}
              </div>
              {expanded['thcs_8'] && (
                <div className="pl-3 py-1 space-y-1.5 text-[11px] text-red-100">
                  <Link to="/thcs?grade=8&subject=toan" className="flex items-center gap-1.5 py-0.5 hover:text-amber-300">
                    <Calculator className="w-3 h-3 text-amber-300" />
                    <span>Toán 8: Đa thức, Phân thức & Tứ giác</span>
                  </Link>
                  <Link to="/thcs?grade=8&subject=hoa" className="flex items-center gap-1.5 py-0.5 hover:text-cyan-300">
                    <Atom className="w-3 h-3 text-cyan-300" />
                    <span>Hóa 8 (KHTN): Phản ứng hóa học & Mol</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Lớp 9 */}
            <div className="border-l-2 border-emerald-500/40 ml-2 pl-2 space-y-1">
              <div
                onClick={(e) => toggle('thcs_9', e)}
                className="flex items-center justify-between py-1 text-xs font-bold text-red-100 hover:text-white cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-emerald-400" />
                  <span>📁 Lớp 9 (Luyện thi vào 10)</span>
                </div>
                {expanded['thcs_9'] ? <ChevronDown className="w-3 h-3 text-red-300" /> : <ChevronRight className="w-3 h-3 text-red-300" />}
              </div>
              {expanded['thcs_9'] && (
                <div className="pl-3 py-1 space-y-1.5 text-[11px] text-red-100">
                  <Link to="/thcs?grade=9&subject=toan" className="flex items-center gap-1.5 py-0.5 hover:text-amber-300">
                    <Calculator className="w-3 h-3 text-amber-300" />
                    <span>Toán 9: Hệ phương trình & Đường tròn</span>
                  </Link>
                  <Link to="/thcs?grade=9&subject=hoa" className="flex items-center gap-1.5 py-0.5 hover:text-cyan-300">
                    <Atom className="w-3 h-3 text-cyan-300" />
                    <span>Hóa 9: Hợp chất vô cơ & Hữu cơ</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* 2. KHỐI THPT (CẤP 3) - CHUYÊN BIỆT CHỈ CÓ MÔN HÓA                  */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <div className="border border-red-600/40 rounded-2xl bg-red-800/30 overflow-hidden">
        {/* Header Cấp Học THPT */}
        <div
          onClick={(e) => toggle('thpt', e)}
          className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-red-600/40 transition-colors select-none"
        >
          <div className="flex items-center gap-2">
            <Atom className="w-4 h-4 text-cyan-300" />
            <span className="text-xs font-black tracking-wider text-cyan-200 uppercase">
              Khối THPT (Chuyên Hóa)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              to="/thpt"
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-200 hover:bg-cyan-400/40 transition-colors"
            >
              Hub THPT
            </Link>
            {expanded['thpt'] ? <ChevronDown className="w-3.5 h-3.5 text-red-200" /> : <ChevronRight className="w-3.5 h-3.5 text-red-200" />}
          </div>
        </div>

        {expanded['thpt'] && (
          <div className="px-2 py-2 space-y-2 border-t border-red-600/30 bg-red-900/20">
            {/* Lớp 10 (CHỈ CÓ HÓA) */}
            <div className="border-l-2 border-cyan-500/40 ml-2 pl-2 space-y-1">
              <div
                onClick={(e) => toggle('thpt_10', e)}
                className="flex items-center justify-between py-1 text-xs font-bold text-red-100 hover:text-white cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-cyan-400" />
                  <span>🧪 Hóa Học Lớp 10</span>
                </div>
                {expanded['thpt_10'] ? <ChevronDown className="w-3 h-3 text-red-300" /> : <ChevronRight className="w-3 h-3 text-red-300" />}
              </div>
              {expanded['thpt_10'] && (
                <div className="pl-3 py-1 space-y-1 text-[11px] text-red-100/90">
                  <Link to="/hoa10-giuaki1" className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-gradient-to-r from-amber-500/25 via-rose-500/20 to-orange-500/25 hover:from-amber-500/40 hover:to-orange-500/40 text-amber-300 font-extrabold border border-amber-400/50 shadow-xs mb-1.5 transition-all">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>🎯 Bộ 10 Đề Thi Giữa Kì 1</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black animate-pulse">MỞ</span>
                  </Link>
                  <Link to="/hoa10-cuoiki1" className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-cyan-500/25 hover:from-emerald-500/40 hover:to-cyan-500/40 text-emerald-300 font-extrabold border border-emerald-400/50 shadow-xs mb-1.5 transition-all">
                    <span className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>🏆 Bộ 10 Đề Thi Cuối Kì 1</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950 font-black animate-pulse">MỚI</span>
                  </Link>
                                    {/* Chương 1: Cấu tạo nguyên tử */}
                  <div className="rounded-lg bg-indigo-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_10_c1', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa10-chuong1" className="hover:underline flex items-center gap-1">
                        <span>🔬 Chương 1: Cấu tạo nguyên tử</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_10_c1'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_10_c1'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa10-chuong1?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa10-chuong1?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa10-chuong1?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Chương 2: Bảng tuần hoàn NTHH */}
                  <div className="rounded-lg bg-indigo-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_10_c2', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa10-chuong2" className="hover:underline flex items-center gap-1">
                        <span>📊 Chương 2: Bảng tuần hoàn NTHH</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_10_c2'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_10_c2'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa10-chuong2?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa10-chuong2?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa10-chuong2?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 3: Liên kết hóa học */}
                  <div className="rounded-lg bg-indigo-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_10_c3', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa10-chuong3" className="hover:underline flex items-center gap-1">
                        <span>🔗 Chương 3: Liên kết hóa học</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_10_c3'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_10_c3'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa10-chuong3?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa10-chuong3?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa10-chuong3?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 4: Phản ứng Oxi hóa – Khử */}
                  <div className="rounded-lg bg-indigo-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_10_c4', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa10-chuong4" className="hover:underline flex items-center gap-1">
                        <span>⚡ Chương 4: Phản ứng Oxi hóa – Khử</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_10_c4'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_10_c4'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa10-chuong4?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa10-chuong4?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa10-chuong4?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 5: Năng lượng hóa học */}
                  <div className="rounded-lg bg-indigo-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_10_c5', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa10-chuong5" className="hover:underline flex items-center gap-1">
                        <span>🔥 Chương 5: Năng lượng hóa học</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_10_c5'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_10_c5'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa10-chuong5?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa10-chuong5?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa10-chuong5?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 6: Tốc độ phản ứng hóa học */}
                  <div className="rounded-lg bg-indigo-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_10_c6', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa10-chuong6" className="hover:underline flex items-center gap-1">
                        <span>⏱️ Chương 6: Tốc độ phản ứng hóa học</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_10_c6'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_10_c6'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa10-chuong6?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa10-chuong6?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa10-chuong6?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 7: Nhóm nguyên tố Halogen */}
                  <div className="rounded-lg bg-indigo-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_10_c7', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa10-chuong7" className="hover:underline flex items-center gap-1">
                        <span>🧂 Chương 7: Nhóm nguyên tố Halogen</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_10_c7'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_10_c7'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa10-chuong7?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa10-chuong7?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa10-chuong7?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Lớp 11 (CHỈ CÓ HÓA) */}
            <div className="border-l-2 border-cyan-500/40 ml-2 pl-2 space-y-1">
              <div
                onClick={(e) => toggle('thpt_11', e)}
                className="flex items-center justify-between py-1 text-xs font-bold text-red-100 hover:text-white cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-cyan-400" />
                  <span>🧪 Hóa Học Lớp 11</span>
                </div>
                {expanded['thpt_11'] ? <ChevronDown className="w-3 h-3 text-red-300" /> : <ChevronRight className="w-3 h-3 text-red-300" />}
              </div>
              {expanded['thpt_11'] && (
                <div className="pl-3 py-1 space-y-1 text-[11px] text-red-100/90">
                  <Link to="/hoa11-giuaki1" className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-gradient-to-r from-amber-500/25 via-rose-500/20 to-orange-500/25 hover:from-amber-500/40 hover:to-orange-500/40 text-amber-300 font-extrabold border border-amber-400/50 shadow-xs mb-1.5 transition-all">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>🎯 Bộ 10 Đề Thi Giữa Kì 1</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black animate-pulse">MỞ</span>
                  </Link>
                  <Link to="/hoa11-cuoiki1" className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-cyan-500/25 hover:from-emerald-500/40 hover:to-cyan-500/40 text-emerald-300 font-extrabold border border-emerald-400/50 shadow-xs mb-1.5 transition-all">
                    <span className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>🏆 Bộ 10 Đề Thi Cuối Kì 1</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950 font-black animate-pulse">MỚI</span>
                  </Link>
                                    {/* Chương 1: Cân bằng hóa học */}
                  <div className="rounded-lg bg-sky-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_11_c1', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa11-chuong1" className="hover:underline flex items-center gap-1">
                        <span>⚖️ Chương 1: Cân bằng hóa học</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">3 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_11_c1'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_11_c1'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa11-chuong1?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 3 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa11-chuong1?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa11-chuong1?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Chương 2: Nitrogen – Sulfur */}
                  <div className="rounded-lg bg-sky-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_11_c2', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa11-chuong2" className="hover:underline flex items-center gap-1">
                        <span>🌱 Chương 2: Nitrogen – Sulfur</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_11_c2'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_11_c2'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa11-chuong2?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa11-chuong2?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa11-chuong2?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 3: Đại cương hóa học hữu cơ */}
                  <div className="rounded-lg bg-sky-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_11_c3', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa11-chuong3" className="hover:underline flex items-center gap-1">
                        <span>🧪 Chương 3: Đại cương hóa học hữu cơ</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_11_c3'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_11_c3'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa11-chuong3?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa11-chuong3?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa11-chuong3?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 4: Hydrocarbon */}
                  <div className="rounded-lg bg-sky-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_11_c4', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa11-chuong4" className="hover:underline flex items-center gap-1">
                        <span>⛽ Chương 4: Hydrocarbon</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_11_c4'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_11_c4'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa11-chuong4?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa11-chuong4?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa11-chuong4?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 5: Dẫn xuất Halogen – Alcohol – Phenol */}
                  <div className="rounded-lg bg-sky-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_11_c5', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa11-chuong5" className="hover:underline flex items-center gap-1">
                        <span>🍶 Chương 5: Dẫn xuất Halogen – Alcohol – Phenol</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_11_c5'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_11_c5'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa11-chuong5?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa11-chuong5?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa11-chuong5?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 6: Hợp chất Carbonyl – Carboxylic Acid */}
                  <div className="rounded-lg bg-sky-950/40 p-1.5 border border-cyan-500/30">
                    <div
                      onClick={(e) => toggle('thpt_11_c6', e)}
                      className="flex items-center justify-between font-bold text-cyan-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa11-chuong6" className="hover:underline flex items-center gap-1">
                        <span>⚡ Chương 6: Hợp chất Carbonyl – Carboxylic Acid</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_11_c6'] ? <ChevronDown className="w-3 h-3 text-cyan-300" /> : <ChevronRight className="w-3 h-3 text-cyan-300" />}
                    </div>
                    {expanded['thpt_11_c6'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa11-chuong6?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa11-chuong6?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa11-chuong6?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Lớp 12 (TRỌNG TÂM HÓA 12 - CHƯƠNG NÀO RA CHƯƠNG ĐÓ, PHẦN NÀO RA PHẦN ĐÓ) */}
            <div className="border-l-2 border-amber-400 ml-2 pl-2 space-y-1 bg-red-800/40 rounded-r-xl p-1.5">
              <div
                onClick={(e) => toggle('thpt_12', e)}
                className="flex items-center justify-between py-1 text-xs font-black text-amber-300 hover:text-white cursor-pointer select-none"
              >
                <div className="flex items-center gap-1.5">
                  <FolderOpen className="w-4 h-4 text-amber-400" />
                  <span>🧪 Hóa Học Lớp 12 (Tốt Nghiệp & ĐH)</span>
                </div>
                {expanded['thpt_12'] ? <ChevronDown className="w-3.5 h-3.5 text-amber-200" /> : <ChevronRight className="w-3.5 h-3.5 text-amber-200" />}
              </div>

              {expanded['thpt_12'] && (
                <div className="pl-2 space-y-1 pt-1 text-[11px]">
                  <Link to="/hoa12-giuaki1" className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-gradient-to-r from-amber-500/25 via-rose-500/20 to-orange-500/25 hover:from-amber-500/40 hover:to-orange-500/40 text-amber-300 font-extrabold border border-amber-400/50 shadow-xs mb-1.5 transition-all">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>🎯 Bộ 10 Đề Thi Giữa Kì 1</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black animate-pulse">MỞ</span>
                  </Link>
                  <Link to="/hoa12-cuoiki1" className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-cyan-500/25 hover:from-emerald-500/40 hover:to-cyan-500/40 text-emerald-300 font-extrabold border border-emerald-400/50 shadow-xs mb-1.5 transition-all">
                    <span className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>🏆 Bộ 10 Đề Thi Cuối Kì 1</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950 font-black animate-pulse">MỚI</span>
                  </Link>
                  {/* Chương 1: Ester - Lipid */}
                  <div className="rounded-lg bg-teal-950/40 p-1.5 border border-teal-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c1', e)}
                      className="flex items-center justify-between font-bold text-teal-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong1" className="hover:underline flex items-center gap-1">
                        <span>🧪 Chương 1: Ester – Lipid</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">7 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c1'] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                    </div>
                    {expanded['thpt_12_c1'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-teal-100/80">
                        <Link to="/hoa12-chuong1" className="block py-0.5 hover:text-white hover:underline">
                          • Phần 1: Lý thuyết & Bài tập Este
                        </Link>
                        <Link to="/hoa12-chuong1" className="block py-0.5 hover:text-white hover:underline">
                          • Phần 2: Lipid, Chất béo & Phản ứng xà phòng hóa
                        </Link>
                        <Link to="/hoa12-chuong1?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 7 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                      </div>
                    )}
                  </div>

                                    {/* Chương 2: Carbohydrate */}
                  <div className="rounded-lg bg-emerald-950/40 p-1.5 border border-emerald-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c2', e)}
                      className="flex items-center justify-between font-bold text-emerald-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong2" className="hover:underline flex items-center gap-1">
                        <span>🍇 Chương 2: Carbohydrate</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c2'] ? <ChevronDown className="w-3 h-3 text-emerald-300" /> : <ChevronRight className="w-3 h-3 text-emerald-300" />}
                    </div>
                    {expanded['thpt_12_c2'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-emerald-100/80">
                        <Link to="/hoa12-chuong2?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa12-chuong2?tab=practice" className="block py-0.5 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa12-chuong2?tab=handbook" className="block py-0.5 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>

                                    {/* Chương 3: Hợp chất chứa Nitrogen */}
                  <div className="rounded-lg bg-slate-900/60 p-1.5 border border-amber-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c3', e)}
                      className="flex items-center justify-between font-bold text-amber-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong3" className="hover:underline flex items-center gap-1">
                        <span>🧬 Chương 3: Hợp chất chứa Nitrogen</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c3'] ? <ChevronDown className="w-3 h-3 text-amber-300" /> : <ChevronRight className="w-3 h-3 text-amber-300" />}
                    </div>
                    {expanded['thpt_12_c3'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa12-chuong3?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa12-chuong3?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa12-chuong3?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 4: Polymer & Vật liệu */}
                  <div className="rounded-lg bg-slate-900/60 p-1.5 border border-amber-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c4', e)}
                      className="flex items-center justify-between font-bold text-amber-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong4" className="hover:underline flex items-center gap-1">
                        <span>🧶 Chương 4: Polymer & Vật liệu</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c4'] ? <ChevronDown className="w-3 h-3 text-amber-300" /> : <ChevronRight className="w-3 h-3 text-amber-300" />}
                    </div>
                    {expanded['thpt_12_c4'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa12-chuong4?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa12-chuong4?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa12-chuong4?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 5: Pin & Điện Phân */}
                  <div className="rounded-lg bg-slate-900/60 p-1.5 border border-amber-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c5', e)}
                      className="flex items-center justify-between font-bold text-amber-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong5" className="hover:underline flex items-center gap-1">
                        <span>⚡ Chương 5: Pin & Điện Phân</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c5'] ? <ChevronDown className="w-3 h-3 text-amber-300" /> : <ChevronRight className="w-3 h-3 text-amber-300" />}
                    </div>
                    {expanded['thpt_12_c5'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa12-chuong5?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa12-chuong5?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa12-chuong5?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 6: Đại Cương Kim Loại */}
                  <div className="rounded-lg bg-slate-900/60 p-1.5 border border-amber-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c6', e)}
                      className="flex items-center justify-between font-bold text-amber-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong6" className="hover:underline flex items-center gap-1">
                        <span>⚙️ Chương 6: Đại Cương Kim Loại</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c6'] ? <ChevronDown className="w-3 h-3 text-amber-300" /> : <ChevronRight className="w-3 h-3 text-amber-300" />}
                    </div>
                    {expanded['thpt_12_c6'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa12-chuong6?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa12-chuong6?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa12-chuong6?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 7: Nhóm IA & IIA */}
                  <div className="rounded-lg bg-slate-900/60 p-1.5 border border-amber-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c7', e)}
                      className="flex items-center justify-between font-bold text-amber-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong7" className="hover:underline flex items-center gap-1">
                        <span>🔥 Chương 7: Nhóm IA & IIA</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c7'] ? <ChevronDown className="w-3 h-3 text-amber-300" /> : <ChevronRight className="w-3 h-3 text-amber-300" />}
                    </div>
                    {expanded['thpt_12_c7'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa12-chuong7?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa12-chuong7?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa12-chuong7?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Chương 8: Chuyển Tiếp & Phức Chất */}
                  <div className="rounded-lg bg-slate-900/60 p-1.5 border border-amber-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c8', e)}
                      className="flex items-center justify-between font-bold text-amber-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong8" className="hover:underline flex items-center gap-1">
                        <span>🔮 Chương 8: Chuyển Tiếp & Phức Chất</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">4 ĐỀ THI</span>
                      </Link>
                      {expanded['thpt_12_c8'] ? <ChevronDown className="w-3 h-3 text-amber-300" /> : <ChevronRight className="w-3 h-3 text-amber-300" />}
                    </div>
                    {expanded['thpt_12_c8'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-cyan-100/90">
                        <Link to="/hoa12-chuong8?tab=exam" className="block py-0.5 text-amber-300 font-black hover:text-white hover:underline flex items-center gap-1">
                          <span>🏆 Bộ 4 Đề Thi Chuẩn Bộ (50 phút)</span>
                        </Link>
                        <Link to="/hoa12-chuong8?tab=practice" className="block py-0.5 text-slate-200 hover:text-white hover:underline">
                          • Luyện đề nhanh (15 câu vừa sức)
                        </Link>
                        <Link to="/hoa12-chuong8?tab=handbook" className="block py-0.5 text-slate-300 hover:text-white hover:underline">
                          • Cẩm nang lý thuyết & dạng toán
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
