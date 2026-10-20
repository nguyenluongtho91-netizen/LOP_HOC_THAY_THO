// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react'
import {
  Target, ShieldCheck, DollarSign, Calendar, TrendingDown,
  Award, Sparkles, AlertCircle, CheckCircle2, ChevronRight,
  Calculator, PieChart, ArrowUpRight, Heart, Dumbbell, Utensils,
  Fuel, Laptop, Landmark, Clock, RefreshCw, Printer, Download,
  Check, Lock, ChevronDown, ChevronUp, Zap, Banknote, Users, AlertTriangle
} from 'lucide-react'
import { useDataStore } from '@/store/dataStore'

// Helper format tiền tệ VNĐ
const fmtVND = (val: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(val))
}

const fmtShortVND = (val: number) => {
  if (val >= 1_000_000_000) {
    return `${(val / 1_000_000_000).toFixed(2).replace(/\.00$/, '')} tỷ`
  }
  if (val >= 1_000_000) {
    return `${(val / 1_000_000).toFixed(1).replace(/\.0$/, '')} triệu`
  }
  return `${val.toLocaleString('vi-VN')} đ`
}

export default function DebtPlannerPage() {
  const { payments, loadPayments } = useDataStore()

  // Tải dữ liệu học phí thực tế khi vào trang
  useEffect(() => {
    void loadPayments()
  }, [loadPayments])

  // --- 1. DỮ LIỆU CỐ ĐỊNH CHIẾN DỊCH 3 NĂM (36 THÁNG) ---
  const bankDebt = 1_200_000_000 // 1,2 tỷ ngân hàng
  const initialMonthlyInterest = 10_000_000 // 10 triệu tiền lãi/tháng ban đầu
  const totalMonths = 36 // Cố định duy nhất mục tiêu 3 năm (36 tháng)
  const monthlyBankPrincipal = Math.round(bankDebt / totalMonths) // 33.333.333 đ/tháng

  // Nợ máy tính: 30 triệu chia 9 tháng
  const laptopDebt = 30_000_000
  const laptopMonths = 9
  const monthlyLaptopPayment = Math.round(laptopDebt / laptopMonths) // 3.333.333 đ/tháng

  // Chi phí sinh hoạt: Ăn 7tr, Xăng 1tr, Cha 2tr, Gym 3tr = 13tr
  const foodCost = 7_000_000
  const fuelCost = 1_000_000
  const fatherSupportCost = 2_000_000
  const gymCost = 3_000_000
  const totalLivingCost = foodCost + fuelCost + fatherSupportCost + gymCost // 13.000.000 đ

  // Học phí trung bình & Thu nhập ngoài
  const [tuitionPerStudent, setTuitionPerStudent] = useState<number>(600_000) // 600k/học sinh
  const [extraIncomeThisMonth, setExtraIncomeThisMonth] = useState<number>(0) // Dạy kèm, thưởng, v.v.
  const [selectedYearTab, setSelectedYearTab] = useState<number>(1) // Xem Năm 1, Năm 2, Năm 3

  // Lưu trạng thái các tháng đã hoàn thành vào LocalStorage
  const [completedMonths, setCompletedMonths] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('thaytho_debt_completed_months')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('thaytho_debt_completed_months', JSON.stringify(completedMonths))
    } catch (e) {
      console.error(e)
    }
  }, [completedMonths])

  // Lãi suất tháng (~0.833%/tháng)
  const monthlyInterestRate = initialMonthlyInterest / bankDebt

  // --- 2. TÍNH TOÁN HỌC PHÍ THỰC THU THÁNG HIỆN TẠI TỪ HỆ THỐNG ---
  const currentMonthTuition = useMemo(() => {
    if (!payments || payments.length === 0) return 0
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() // 0-indexed

    return payments.reduce((sum, p) => {
      const d = p.paid_at ? new Date(p.paid_at) : (p.created_at ? new Date(p.created_at) : null)
      if (d && d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
        return sum + (Number(p.amount) || 0)
      }
      return sum
    }, 0)
  }, [payments])

  // --- 3. BẢNG MÔ PHỎNG DÒNG TIỀN CHI TIẾT 36 THÁNG ---
  const schedule = useMemo(() => {
    const rows = []
    let currentBankDebt = bankDebt
    const startDate = new Date()

    for (let m = 1; m <= totalMonths; m++) {
      const monthDate = new Date(startDate.getFullYear(), startDate.getMonth() + m, 1)
      const monthLabel = `T${monthDate.getMonth() + 1}/${monthDate.getFullYear()}`

      // Tiền lãi ngân hàng tính trên nợ gốc còn lại của đầu tháng (Lãi giảm dần!)
      const interestPayment = Math.max(0, currentBankDebt * monthlyInterestRate)

      // Máy tính chỉ trả trong 9 tháng đầu
      const laptopPay = m <= laptopMonths ? monthlyLaptopPayment : 0

      // Gốc ngân hàng
      const principalPay = Math.min(monthlyBankPrincipal, currentBankDebt)

      // Dư nợ còn lại cuối tháng
      const remainingDebtAfter = Math.max(0, currentBankDebt - principalPay)

      // Tổng tiền cần trong tháng
      const totalCashNeeded = principalPay + interestPayment + laptopPay + totalLivingCost

      // Học sinh cần quy đổi
      const studentsNeeded = tuitionPerStudent > 0 ? Math.ceil(totalCashNeeded / tuitionPerStudent) : 0

      rows.push({
        monthIndex: m,
        yearIndex: Math.ceil(m / 12),
        monthLabel,
        startBankDebt: currentBankDebt,
        principalPay,
        interestPayment,
        laptopPay,
        livingCost: totalLivingCost,
        totalCashNeeded,
        remainingBankDebt: remainingDebtAfter,
        studentsNeeded,
      })

      currentBankDebt = remainingDebtAfter
    }
    return rows
  }, [bankDebt, totalMonths, monthlyBankPrincipal, monthlyInterestRate, laptopMonths, monthlyLaptopPayment, totalLivingCost, tuitionPerStudent])

  // Mục tiêu tháng hiện tại (Mặc định lấy tháng 1 trong lịch trình: 9 tháng đầu)
  const currentMonthTarget = useMemo(() => {
    if (schedule.length === 0) return 59_666_666
    return schedule[0].totalCashNeeded
  }, [schedule])

  // Tổng tiền thực tế đã có trong tháng này (Học phí hệ thống + Thu nhập ngoài)
  const totalActualIncomeThisMonth = currentMonthTuition + extraIncomeThisMonth
  const monthPercentAchieved = Math.min(100, Math.round((totalActualIncomeThisMonth / (currentMonthTarget || 1)) * 100))
  const remainingNeededThisMonth = Math.max(0, currentMonthTarget - totalActualIncomeThisMonth)
  const studentsRemainingNeeded = tuitionPerStudent > 0 ? Math.ceil(remainingNeededThisMonth / tuitionPerStudent) : 0

  // Tiến độ số tháng đã hoàn thành
  const completedCount = Object.values(completedMonths).filter(Boolean).length
  const progressPercent = Math.min(100, Math.round((completedCount / totalMonths) * 100))

  const toggleMonth = (idx: number) => {
    setCompletedMonths(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }))
  }

  // Ngày dự kiến hoàn toàn sạch nợ (36 tháng)
  const debtFreeDate = useMemo(() => {
    const d = new Date()
    d.setMonth(d.getMonth() + 36)
    return `Tháng ${d.getMonth() + 1} / ${d.getFullYear()}`
  }, [])

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16 font-sans">
      {/* 1. HEADER: BANNER 1 MỤC TIÊU DUY NHẤT 3 NĂM */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 via-rose-700 to-red-800 text-white p-6 md:p-8 shadow-2xl border border-red-500/30">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/60 border border-red-400/30 text-red-100 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Lock className="w-3.5 h-3.5 text-amber-300" />
              <span>Bảo Mật Nội Bộ • Chỉ Thầy Thọ Quản Lý</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              🎯 Chiến Dịch 3 Năm (36 Tháng) Sạch Nợ — Thầy Thọ
            </h1>
            <p className="text-red-100/90 text-sm max-w-2xl leading-relaxed">
              Tập trung <strong className="text-white">1 mục tiêu duy nhất</strong>: Dứt điểm 1,2 tỷ ngân hàng & 30 triệu máy tính trong 36 tháng. 
              Không chần chừ, không đổi hướng. Mỗi đồng học phí thu về là một bước giải phóng tự do tài chính!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center shrink-0 min-w-[240px]">
            <span className="text-xs uppercase font-bold tracking-widest text-red-200">Ngày sạch nợ hoàn toàn</span>
            <span className="text-2xl font-black text-amber-300 mt-1">{debtFreeDate}</span>
            <div className="mt-2 text-xs text-white/90 bg-emerald-500/30 border border-emerald-400/30 px-3 py-1 rounded-full font-bold">
              36 Tháng • 0 Đồng Nợ Nần 🎉
            </div>
          </div>
        </div>
      </div>

      {/* 2. NHIỆT KẾ DÒNG TIỀN THÁNG NÀY: LIÊN KẾT TRỰC TIẾP HỌC PHÍ HỆ THỐNG */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-red-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1 border border-emerald-200">
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Đồng Bộ Trực Tiếp Từ Quản Lý Học Phí</span>
            </div>
            <h2 className="text-lg md:text-xl font-black text-gray-900 flex items-center gap-2">
              <Banknote className="w-6 h-6 text-emerald-600" />
              <span>Tiến Độ Thu Học Phí & Mục Tiêu Tháng Này</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Hệ thống tự động cộng dồn tất cả các khoản học phí thực thu trong tháng của học sinh
            </p>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-200">
            <span className="text-xs font-semibold text-gray-600">Thu nhập ngoài tháng này:</span>
            <input
              type="number"
              placeholder="+ Thêm tiền (đ)"
              value={extraIncomeThisMonth || ''}
              onChange={(e) => setExtraIncomeThisMonth(Number(e.target.value) || 0)}
              className="w-32 px-2.5 py-1 text-xs font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none text-right"
            />
          </div>
        </div>

        {/* Thanh nhiệt kế % */}
        <div className="space-y-3">
          <div className="flex justify-between items-end text-sm">
            <div>
              <span className="text-xs text-gray-500 font-bold uppercase">Thực thu tháng này:</span>
              <div className="text-2xl font-black text-emerald-600 mt-0.5">
                {fmtVND(totalActualIncomeThisMonth)}
                {extraIncomeThisMonth > 0 && (
                  <span className="text-xs text-gray-500 font-normal ml-2">
                    (Gồm {fmtShortVND(currentMonthTuition)} học phí + {fmtShortVND(extraIncomeThisMonth)} ngoài)
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-gray-500 font-bold uppercase">Chỉ tiêu tháng này:</span>
              <div className="text-xl font-black text-gray-900 mt-0.5">
                {fmtVND(currentMonthTarget)}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden p-0.5 border border-gray-200">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                monthPercentAchieved >= 100
                  ? 'bg-emerald-500'
                  : monthPercentAchieved >= 60
                  ? 'bg-gradient-to-r from-amber-500 to-emerald-500'
                  : 'bg-gradient-to-r from-red-600 to-amber-500'
              }`}
              style={{ width: `${Math.min(100, monthPercentAchieved)}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="font-extrabold text-gray-700">
              Đạt <span className="text-red-600 text-sm font-black">{monthPercentAchieved}%</span> chỉ tiêu tháng
            </span>

            {remainingNeededThisMonth > 0 ? (
              <span className="text-rose-600 font-bold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Còn thiếu {fmtVND(remainingNeededThisMonth)} (~{studentsRemainingNeeded} bạn học sinh chưa đóng học phí)</span>
              </span>
            ) : (
              <span className="text-emerald-600 font-black flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã vượt chỉ tiêu tháng này! Toàn bộ tiền dư hãy đập vào nợ gốc ngân hàng 🎉</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3. BẢNG CƠ CẤU CHI PHÍ CHIẾN DỊCH 3 NĂM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Nợ Ngân Hàng */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nợ ngân hàng (1,2 Tỷ)</span>
            <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Landmark className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">33,3 triệu/th</div>
            <div className="text-xs text-rose-600 font-semibold mt-1">
              Gốc cố định: 1,2 tỷ ÷ 36 tháng
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex justify-between">
            <span>Tiền lãi:</span>
            <span className="font-bold text-rose-600">~10tr (giảm dần từng tháng!)</span>
          </div>
        </div>

        {/* Nợ Máy Tính */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Góp máy tính (30 Triệu)</span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">3,33 triệu/th</div>
            <div className="text-xs text-blue-600 font-semibold mt-1">
              Trả đều trong 9 tháng đầu
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Xong sau 9 tháng (Dôi ra 3,33tr!)</span>
          </div>
        </div>

        {/* Sinh Hoạt Cá Nhân */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sinh hoạt & Hiếu nghĩa</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">13,0 triệu/th</div>
            <div className="text-xs text-emerald-700 font-medium mt-1">
              Ăn 7tr • Xăng 1tr • Cha 2tr • Gym 3tr
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex justify-between">
            <span>Dưỡng thân & Báo hiếu</span>
            <span className="font-bold text-emerald-700">Giữ vững thể lực</span>
          </div>
        </div>

        {/* Tổng Cần Kiếm Mỗi Tháng */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Tổng cần kiếm (9th đầu)</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-amber-900">~59,6 triệu/th</div>
            <div className="text-xs text-amber-700 font-medium mt-1">
              (Gốc 33,3tr + Lãi 10tr + Máy tính 3,33tr + S.hoạt 13tr)
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-amber-200/60 text-[11px] text-amber-800 flex justify-between font-semibold">
            <span>Từ tháng 10 giảm còn:</span>
            <span className="text-emerald-700 font-bold">~55 triệu (và tụt dần)</span>
          </div>
        </div>
      </div>

      {/* 4. CHỈ TIÊU HỌC SINH CẦN DUY TRÌ */}
      <div className="bg-gray-900 text-white rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Quy Đổi Số Lượng Học Sinh Cần Duy Trì</span>
            </div>
            <h3 className="text-xl font-bold">Mỗi Học Sinh Là Một Bước Đến Tự Do Tài Chính</h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Mức học phí:</span>
            {[500_000, 600_000, 800_000, 1_000_000].map((fee) => (
              <button
                key={fee}
                onClick={() => setTuitionPerStudent(fee)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  tuitionPerStudent === fee
                    ? 'bg-amber-400 text-gray-900 font-black shadow'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {fee / 1000}k
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
            <span className="text-xs font-bold text-gray-400 uppercase">Giai đoạn 1 (9 Tháng đầu)</span>
            <div className="text-3xl font-black text-amber-300 mt-2">
              {Math.ceil(59_666_666 / tuitionPerStudent)} <span className="text-sm font-normal text-white">học sinh</span>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              Cần duy trì khoảng 2 - 3 lớp học để vừa sinh hoạt thoải mái vừa gánh cả máy tính và gốc ngân hàng.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
            <span className="text-xs font-bold text-gray-400 uppercase">Giai đoạn 2 (Tháng 10 - Tháng 24)</span>
            <div className="text-3xl font-black text-emerald-300 mt-2">
              {Math.ceil(53_000_000 / tuitionPerStudent)} <span className="text-sm font-normal text-white">học sinh</span>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              Đã xong máy tính, nợ gốc ngân hàng giảm còn một nửa, tiền lãi tụt xuống $\rightarrow$ Áp lực nhẹ đi rất nhiều.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
            <span className="text-xs font-bold text-gray-400 uppercase">Giai đoạn 3 (Năm cuối - Tháng 25-36)</span>
            <div className="text-3xl font-black text-blue-300 mt-2">
              {Math.ceil(48_000_000 / tuitionPerStudent)} <span className="text-sm font-normal text-white">học sinh</span>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              Nước rút về đích! Nợ gốc sắp hết, tiền lãi chỉ còn dưới 2-3 triệu $\rightarrow$ Chuẩn bị chạm tay vào tự do tài chính.
            </p>
          </div>
        </div>
      </div>

      {/* 5. 4 CỘT MỐC CỦA CHIẾN DỊCH 3 NĂM */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>4 Cột Mốc Vinh Quang Của Thầy Thọ</span>
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Đã vượt qua <strong className="text-red-600">{completedCount}</strong> / 36 tháng ({progressPercent}%)
            </p>
          </div>

          <span className="text-sm font-black text-gray-800 bg-gray-100 px-3 py-1 rounded-xl">
            Tiến độ: {progressPercent}%
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
            <div className="text-xs font-bold text-blue-700 uppercase">Cột Mốc 1: Tháng 9</div>
            <div className="text-base font-black text-gray-900 mt-1">Xóa Sạch Nợ Máy Tính</div>
            <p className="text-[11px] text-gray-600 mt-1">Hoàn thành 30 triệu máy tính, giải phóng ngay 3,33 triệu/tháng.</p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200">
            <div className="text-xs font-bold text-indigo-700 uppercase">Cột Mốc 2: Tháng 12</div>
            <div className="text-base font-black text-gray-900 mt-1">Nợ Gốc Còn 800 Triệu</div>
            <p className="text-[11px] text-gray-600 mt-1">Đã trả được 400 triệu gốc, tiền lãi hàng tháng tụt xuống còn ~6,6 triệu.</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
            <div className="text-xs font-bold text-amber-800 uppercase">Cột Mốc 3: Tháng 24</div>
            <div className="text-base font-black text-gray-900 mt-1">Nợ Gốc Còn 400 Triệu</div>
            <p className="text-[11px] text-gray-600 mt-1">Hoàn thành 2/3 chặng đường, tiền lãi chỉ còn ~3,3 triệu/tháng.</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <div className="text-xs font-bold text-emerald-700 uppercase">Cột Mốc 4: Tháng 36</div>
            <div className="text-base font-black text-gray-900 mt-1">0 Đồng Nợ Nần 🎉</div>
            <p className="text-[11px] text-gray-600 mt-1">Chính thức Tự Do Tài Chính! Toàn bộ thu nhập sẽ là tài sản tích lũy.</p>
          </div>
        </div>
      </div>

      {/* 6. BẢNG CHI TIẾT 36 THÁNG (PHÂN CHIA NĂM 1, NĂM 2, NĂM 3) */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-600" />
              <span>Bảng Lịch Trình Chi Tiết 36 Tháng (Lãi Giảm Dần)</span>
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Thầy hãy tick chọn vào ô tròn ở mỗi tháng khi đã hoàn tất nghĩa vụ tài chính tháng đó
            </p>
          </div>

          {/* Tab Năm 1, Năm 2, Năm 3 */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYearTab(y)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedYearTab === y
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Năm {y} (Tháng {(y - 1) * 12 + 1} - {y * 12})
              </button>
            ))}
            <button
              onClick={() => setSelectedYearTab(0)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedYearTab === 0
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Toàn bộ 36 tháng
            </button>
          </div>
        </div>

        {/* Bảng dữ liệu */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50/80 text-gray-600 font-bold uppercase tracking-wider border-b border-gray-200">
              <tr>
                <th className="py-3 px-4 text-center">Xong</th>
                <th className="py-3 px-4">Thời gian</th>
                <th className="py-3 px-4 text-right">Gốc NH trả</th>
                <th className="py-3 px-4 text-right">Lãi NH (giảm dần)</th>
                <th className="py-3 px-4 text-right">Góp máy tính</th>
                <th className="py-3 px-4 text-right">Sinh hoạt</th>
                <th className="py-3 px-4 text-right font-extrabold text-red-700">Tổng cần kiếm</th>
                <th className="py-3 px-4 text-right">Dư nợ NH còn lại</th>
                <th className="py-3 px-4 text-center">Học sinh cần</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schedule
                .filter(row => selectedYearTab === 0 || row.yearIndex === selectedYearTab)
                .map((row) => {
                  const isDone = !!completedMonths[row.monthIndex]
                  return (
                    <tr
                      key={row.monthIndex}
                      className={`hover:bg-red-50/30 transition-colors ${
                        isDone ? 'bg-emerald-50/40 text-gray-500' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => toggleMonth(row.monthIndex)}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                            isDone
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'border-2 border-gray-300 hover:border-red-500 text-transparent'
                          }`}
                        >
                          <Check className="w-4 h-4 stroke-[3]" />
                        </button>
                      </td>
                      <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">
                        Tháng {row.monthIndex} <span className="text-[11px] text-gray-500 font-normal">({row.monthLabel})</span>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-gray-800">
                        {fmtVND(row.principalPay)}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-rose-600">
                        {fmtVND(row.interestPayment)}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-blue-600">
                        {row.laptopPay > 0 ? fmtVND(row.laptopPay) : <span className="text-gray-300">0 đ (Xong)</span>}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-600">
                        {fmtVND(row.livingCost)}
                      </td>
                      <td className="py-3 px-4 text-right font-black text-red-700 text-sm whitespace-nowrap">
                        {fmtVND(row.totalCashNeeded)}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-gray-900">
                        {fmtVND(row.remainingBankDebt)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2.5 py-1 rounded-md bg-gray-100 font-bold text-gray-800">
                          {row.studentsNeeded} bạn
                        </span>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
