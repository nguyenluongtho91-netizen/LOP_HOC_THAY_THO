// @ts-nocheck
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown, ChevronRight, GraduationCap, Calculator, Atom,
  BookOpen, Folder, FolderOpen, Zap, Sparkles, CheckCircle2,
  Bookmark, Layers, FileText
} from 'lucide-react'

export default function HierarchicalGradeTree() {
  const location = useLocation()
  const currentPath = location.pathname

  // Mặc định mở khối THPT và lớp 12 để Thầy thao tác tiện nhất
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    'thpt': true,
    'thpt_12': true,
    'thpt_12_c1': false,
    'thpt_12_c5': false,
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
                  <Link to="/thpt?grade=10&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 1: Cấu tạo nguyên tử
                  </Link>
                  <Link to="/thpt?grade=10&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 2: Bảng tuần hoàn các NTHH
                  </Link>
                  <Link to="/thpt?grade=10&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 3: Liên kết hóa học
                  </Link>
                  <Link to="/thpt?grade=10&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 4: Phản ứng Oxi hóa – Khử
                  </Link>
                  <Link to="/thpt?grade=10&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 5: Năng lượng hóa học
                  </Link>
                  <Link to="/thpt?grade=10&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 6: Tốc độ phản ứng hóa học
                  </Link>
                  <Link to="/thpt?grade=10&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 7: Nhóm nguyên tố Halogen
                  </Link>
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
                  <Link to="/thpt?grade=11&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 1: Cân bằng hóa học
                  </Link>
                  <Link to="/thpt?grade=11&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 2: Nitrogen – Sulfur
                  </Link>
                  <Link to="/thpt?grade=11&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 3: Đại cương hóa học hữu cơ
                  </Link>
                  <Link to="/thpt?grade=11&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 4: Hydrocarbon
                  </Link>
                  <Link to="/thpt?grade=11&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 5: Dẫn xuất Halogen – Alcohol – Phenol
                  </Link>
                  <Link to="/thpt?grade=11&subject=hoa" className="block py-0.5 hover:text-cyan-300">
                    • Chương 6: Hợp chất Carbonyl – Carboxylic Acid
                  </Link>
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
                  {/* Chương 1: Ester - Lipid */}
                  <div className="rounded-lg bg-teal-950/40 p-1.5 border border-teal-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c1', e)}
                      className="flex items-center justify-between font-bold text-teal-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong1" className="hover:underline flex items-center gap-1">
                        <span>🧪 Chương 1: Ester – Lipid</span>
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
                        <Link to="/hoa12-chuong1" className="block py-0.5 text-amber-300 font-bold hover:text-white hover:underline">
                          • Phần 3: Luyện 7 Đề Chuẩn Điểm 10
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Chương 2: Carbohydrate */}
                  <Link
                    to="/hoa12"
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded text-red-100 hover:bg-red-700/60 hover:text-white transition-colors"
                  >
                    <Bookmark className="w-3 h-3 text-emerald-300" />
                    <span>Chương 2: Carbohydrate</span>
                  </Link>

                  {/* Chương 3: Hợp chất chứa Nitrogen */}
                  <Link
                    to="/hoa12"
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded text-red-100 hover:bg-red-700/60 hover:text-white transition-colors"
                  >
                    <Bookmark className="w-3 h-3 text-cyan-300" />
                    <span>Chương 3: Nitrogen (Amine, Protein)</span>
                  </Link>

                  {/* Chương 4: Polymer */}
                  <Link
                    to="/hoa12"
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded text-red-100 hover:bg-red-700/60 hover:text-white transition-colors"
                  >
                    <Bookmark className="w-3 h-3 text-purple-300" />
                    <span>Chương 4: Polymer & Vật liệu</span>
                  </Link>

                  {/* Chương 5: Pin & Điện Phân */}
                  <div className="rounded-lg bg-amber-950/40 p-1.5 border border-amber-500/30">
                    <div
                      onClick={(e) => toggle('thpt_12_c5', e)}
                      className="flex items-center justify-between font-bold text-amber-200 hover:text-white cursor-pointer"
                    >
                      <Link to="/hoa12-chuong5" className="hover:underline flex items-center gap-1">
                        <span>⚡ Chương 5: Pin & Điện Phân</span>
                      </Link>
                      {expanded['thpt_12_c5'] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                    </div>
                    {expanded['thpt_12_c5'] && (
                      <div className="pl-3 pt-1 space-y-0.5 text-[10px] text-amber-100/80">
                        <Link to="/hoa12-chuong5" className="block py-0.5 hover:text-white hover:underline">
                          • Phần 1: Thế điện cực & Pin Galvani
                        </Link>
                        <Link to="/hoa12-chuong5" className="block py-0.5 hover:text-white hover:underline">
                          • Phần 2: Điện phân nóng chảy & dung dịch
                        </Link>
                        <Link to="/hoa12-chuong5" className="block py-0.5 text-cyan-300 font-bold hover:text-white hover:underline">
                          • Phần 3: Ăn mòn kim loại & Luyện đề
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Chương 6, 7, 8 */}
                  <Link
                    to="/hoa12"
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded text-red-100 hover:bg-red-700/60 hover:text-white transition-colors"
                  >
                    <Bookmark className="w-3 h-3 text-yellow-300" />
                    <span>Chương 6: Đại cương kim loại</span>
                  </Link>
                  <Link
                    to="/hoa12"
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded text-red-100 hover:bg-red-700/60 hover:text-white transition-colors"
                  >
                    <Bookmark className="w-3 h-3 text-orange-300" />
                    <span>Chương 7: Nhóm IA, IIA & Nhôm</span>
                  </Link>
                  <Link
                    to="/hoa12"
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded text-red-100 hover:bg-red-700/60 hover:text-white transition-colors"
                  >
                    <Bookmark className="w-3 h-3 text-pink-300" />
                    <span>Chương 8: Kim loại chuyển tiếp</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
