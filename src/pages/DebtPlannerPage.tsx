// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react'
import {
  Target, ShieldCheck, DollarSign, Calendar, TrendingDown,
  Award, Sparkles, AlertCircle, CheckCircle2, ChevronRight,
  Calculator, PieChart, ArrowUpRight, Heart, Dumbbell, Utensils,
  Fuel, Laptop, Landmark, Clock, RefreshCw, Printer, Download,
  Check, Lock, ChevronDown, ChevronUp, Zap
} from 'lucide-react'

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
  // --- 1. DỮ LIỆU CỐ ĐỊNH & THIẾT LẬP BAN ĐẦU ---
  // Dư nợ ngân hàng
  const [bankDebt, setBankDebt] = useState<number>(1_200_000_000)
  const [initialMonthlyInterest, setInitialMonthlyInterest] = useState<number>(10_000_000) // ~10tr/tháng lãi hiện tại
  const [bankYears, setBankYears] = useState<number>(3) // Mặc định 3 năm (có thể đổi 5 năm)
  const [customMonths, setCustomMonths] = useState<number>(36) // 36 tháng

  // Nợ máy tính
  const [laptopDebt, setLaptopDebt] = useState<number>(30_000_000)
  const [laptopMonths, setLaptopMonths] = useState<number>(9)

  // Chi phí sinh hoạt cá nhân (Ăn 7tr, Xăng 1tr, Cha 2tr, Gym 3tr = 13tr)
  const [foodCost, setFoodCost] = useState<number>(7_000_000)
  const [fuelCost, setFuelCost] = useState<number>(1_000_000)
  const [fatherSupportCost, setFatherSupportCost] = useState<number>(2_000_000)
  const [gymCost, setGymCost] = useState<number>(3_000_000)
  const [otherCost, setOtherCost] = useState<number>(0)

  // Quy đổi Lớp học & Doanh thu
  const [tuitionPerStudent, setTuitionPerStudent] = useState<number>(600_000) // 600k/tháng/học sinh
  const [extraMonthlyIncome, setExtraMonthlyIncome] = useState<number>(0) // Bán khóa học, tài liệu

  // Quản lý trạng thái mở rộng chi tiết
  const [showConfig, setShowConfig] = useState<boolean>(false)
  const [selectedYearFilter, setSelectedYearFilter] = useState<number>(1)

  // Lưu trạng thái tháng đã hoàn thành vào LocalStorage
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

  // Đồng bộ số tháng khi đổi năm
  const handleSelectYears = (years: number) => {
    setBankYears(years)
    setCustomMonths(years * 12)
  }

  const handleCustomMonthsChange = (months: number) => {
    setCustomMonths(months)
    setBankYears(Number((months / 12).toFixed(1)))
  }

  // Lãi suất tháng ước tính từ lãi 10tr trên 1.2 tỷ (~0.8333%/tháng = 10%/năm)
  const monthlyInterestRate = useMemo(() => {
    if (bankDebt <= 0) return 0
    return initialMonthlyInterest / bankDebt
  }, [bankDebt, initialMonthlyInterest])

  // Tổng chi phí sinh hoạt hàng tháng
  const totalLivingCost = useMemo(() => {
    return foodCost + fuelCost + fatherSupportCost + gymCost + otherCost
  }, [foodCost, fuelCost, fatherSupportCost, gymCost, otherCost])

  // Tiền trả góp máy tính mỗi tháng trong 9 tháng
  const monthlyLaptopPayment = useMemo(() => {
    if (laptopMonths <= 0 || laptopDebt <= 0) return 0
    return Math.round(laptopDebt / laptopMonths)
  }, [laptopDebt, laptopMonths])

  // --- 2. BẢNG MÔ PHỎNG DÒNG TIỀN TỪNG THÁNG (AMORTIZATION SCHEDULE) ---
  const schedule = useMemo(() => {
    const rows = []
    let currentBankDebt = bankDebt
    const monthlyBankPrincipal = customMonths > 0 ? bankDebt / customMonths : 0

    const startDate = new Date()

    for (let m = 1; m <= customMonths; m++) {
      const monthDate = new Date(startDate.getFullYear(), startDate.getMonth() + m, 1)
      const monthLabel = `T${monthDate.getMonth() + 1}/${monthDate.getFullYear()}`

      // Tiền lãi ngân hàng tính trên dư nợ còn lại của đầu tháng
      const interestPayment = Math.max(0, currentBankDebt * monthlyInterestRate)
      
      // Tiền máy tính (chỉ trả trong laptopMonths tháng đầu)
      const laptopPay = m <= laptopMonths ? monthlyLaptopPayment : 0

      // Tiền gốc ngân hàng
      const principalPay = Math.min(monthlyBankPrincipal, currentBankDebt)

      // Dư nợ còn lại cuối tháng
      const remainingDebtAfter = Math.max(0, currentBankDebt - principalPay)

      // Tổng tiền cần trong tháng = Gốc NH + Lãi NH + Máy tính + Sinh hoạt
      const totalCashNeeded = principalPay + interestPayment + laptopPay + totalLivingCost

      // Trừ doanh thu ngoài nếu có
      const netNeededFromTuition = Math.max(0, totalCashNeeded - extraMonthlyIncome)
      
      // Số học sinh quy đổi
      const studentsNeeded = tuitionPerStudent > 0 ? Math.ceil(netNeededFromTuition / tuitionPerStudent) : 0

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
        remainingTotalDebt: remainingDebtAfter + (m < laptopMonths ? (laptopDebt - m * monthlyLaptopPayment) : 0),
        studentsNeeded,
      })

      currentBankDebt = remainingDebtAfter
    }

    return rows
  }, [bankDebt, customMonths, monthlyInterestRate, laptopMonths, monthlyLaptopPayment, totalLivingCost, extraMonthlyIncome, tuitionPerStudent, laptopDebt])

  // Tổng hợp chỉ số quan trọng
  const totalInterestPaid = useMemo(() => {
    return schedule.reduce((sum, r) => sum + r.interestPayment, 0)
  }, [schedule])

  // Giai đoạn 1 (9 tháng đầu): Chi phí trung bình
  const peakMonthlyCost = useMemo(() => {
    if (schedule.length === 0) return 0
    const firstNine = schedule.slice(0, Math.min(9, schedule.length))
    return Math.round(firstNine.reduce((sum, r) => sum + r.totalCashNeeded, 0) / firstNine.length)
  }, [schedule])

  // Giai đoạn 2 (Sau tháng thứ 9): Chi phí trung bình
  const postPeakMonthlyCost = useMemo(() => {
    if (schedule.length <= 9) return 0
    const afterNine = schedule.slice(9)
    return Math.round(afterNine.reduce((sum, r) => sum + r.totalCashNeeded, 0) / afterNine.length)
  }, [schedule])

  // Tiến độ thực tế đã đánh dấu hoàn thành
  const completedCount = Object.values(completedMonths).filter(Boolean).length
  const progressPercent = Math.min(100, Math.round((completedCount / (customMonths || 1)) * 100))

  const toggleMonth = (idx: number) => {
    setCompletedMonths(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }))
  }

  // Ngày dự kiến sạch nợ
  const debtFreeDate = useMemo(() => {
    const d = new Date()
    d.setMonth(d.getMonth() + customMonths)
    return `Tháng ${d.getMonth() + 1} năm ${d.getFullYear()}`
  }, [customMonths])

  // Danh sách các năm trong lộ trình
  const totalYearsCount = Math.ceil(customMonths / 12)
  const yearsList = Array.from({ length: totalYearsCount }, (_, i) => i + 1)

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16 font-sans">
      {/* 1. HEADER: BANNER ĐỘNG LỰC & BẢO MẬT */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 via-rose-700 to-red-800 text-white p-6 md:p-8 shadow-2xl border border-red-500/30">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/60 border border-red-400/30 text-red-100 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Lock className="w-3.5 h-3.5 text-amber-300" />
              <span>Chế độ Admin Bí mật • Chỉ Thầy Thọ mới thấy</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              🎯 Kế Hoạch Tài Chính & Lộ Trình Sạch Nợ
            </h1>
            <p className="text-red-100/90 text-sm max-w-2xl leading-relaxed">
              Chiến lược chuyển hóa gánh nặng tài chính thành <strong className="text-white">chỉ tiêu lớp học cụ thể</strong> mỗi ngày. 
              Mỗi học sinh đăng ký là một bước đưa Thầy đến gần ngày <strong className="text-amber-300">Tự Do Tài Chính</strong> hoàn toàn!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center text-center shrink-0 min-w-[220px]">
            <span className="text-xs uppercase font-bold tracking-widest text-red-200">Mục tiêu sạch nợ vào</span>
            <span className="text-xl md:text-2xl font-black text-amber-300 mt-1">{debtFreeDate}</span>
            <div className="mt-2 text-[11px] text-white/80 bg-white/10 px-3 py-1 rounded-full font-medium">
              Lộ trình: {customMonths} tháng ({bankYears} năm)
            </div>
          </div>
        </div>
      </div>

      {/* 2. 4 THẺ TỔNG QUAN TÀI CHÍNH */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Nợ Ngân Hàng */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nợ ngân hàng</span>
            <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Landmark className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">{fmtShortVND(bankDebt)}</div>
            <div className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
              <span>Lãi ban đầu: ~{fmtShortVND(initialMonthlyInterest)}/tháng</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex justify-between">
            <span>Gốc mỗi tháng:</span>
            <span className="font-bold text-gray-800">{fmtShortVND(bankDebt / customMonths)}/th</span>
          </div>
        </div>

        {/* Nợ Máy Tính */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Trả góp máy tính</span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">{fmtShortVND(laptopDebt)}</div>
            <div className="text-xs text-blue-600 font-semibold mt-1">
              Kỳ hạn: 9 tháng ({fmtShortVND(monthlyLaptopPayment)}/tháng)
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sạch nợ sau 9 tháng!</span>
          </div>
        </div>

        {/* Chi Phí Sinh Hoạt */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sinh hoạt & Hiếu nghĩa</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-gray-900">{fmtShortVND(totalLivingCost)}/th</div>
            <div className="text-xs text-emerald-700 font-medium mt-1">
              Ăn 7tr • Xăng 1tr • Cha 2tr • Gym 3tr
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex justify-between">
            <span>Duy trì sức khỏe & hiếu đạo</span>
            <span className="font-semibold text-emerald-700">Tối thiểu cần</span>
          </div>
        </div>

        {/* Mức Sàn Duy Trì Tháng Đầu */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Mức sàn duy trì (9th đầu)</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-amber-900">{fmtShortVND(peakMonthlyCost)}/th</div>
            <div className="text-xs text-amber-700 font-medium mt-1">
              (Gốc NH + Lãi + Góp máy tính + Sinh hoạt)
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-amber-200/60 text-[11px] text-amber-800 flex justify-between font-semibold">
            <span>Từ tháng 10 giảm còn:</span>
            <span className="text-emerald-700 font-bold">{fmtShortVND(postPeakMonthlyCost)}/th</span>
          </div>
        </div>
      </div>

      {/* 3. BỘ ĐIỀU KHIỂN THỜI HẠN (3 NĂM vs 5 NĂM HOẶC KÉO SLIDER) */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-red-600" />
              <span>Điều Chỉnh Thời Gian Trả Nợ Ngân Hàng (1,2 Tỷ)</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Kéo thanh trượt hoặc chọn nhanh các phương án để hệ thống tự động tính toán lại áp lực tài chính
            </p>
          </div>

          {/* Nút bấm chuyển nhanh năm */}
          <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-2xl self-start md:self-auto">
            {[2, 3, 4, 5].map((y) => (
              <button
                key={y}
                onClick={() => handleSelectYears(y)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  bankYears === y
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                {y} Năm ({y * 12} tháng)
              </button>
            ))}
          </div>
        </div>

        {/* Thanh trượt tháng */}
        <div className="space-y-3 bg-red-50/50 p-5 rounded-2xl border border-red-100">
          <div className="flex justify-between items-center text-sm font-bold text-gray-700">
            <span>Kéo chỉnh số tháng chính xác:</span>
            <span className="text-lg font-black text-red-600 bg-white px-3 py-1 rounded-xl shadow-sm border border-red-200">
              {customMonths} tháng ({bankYears} năm)
            </span>
          </div>
          <input
            type="range"
            min={12}
            max={72}
            step={3}
            value={customMonths}
            onChange={(e) => handleCustomMonthsChange(Number(e.target.value))}
            className="w-full h-3 bg-red-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <div className="flex justify-between text-[11px] text-gray-500 font-semibold px-1">
            <span>12 tháng (1 năm - Siêu tốc)</span>
            <span>36 tháng (3 năm - Bứt phá)</span>
            <span>60 tháng (5 năm - Bền bỉ)</span>
            <span>72 tháng (6 năm)</span>
          </div>
        </div>

        {/* SO SÁNH 2 KỊCH BẢN CHỦ LỰC: 3 NĂM vs 5 NĂM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Card 3 năm */}
          <div
            onClick={() => handleSelectYears(3)}
            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
              bankYears === 3
                ? 'border-red-600 bg-red-50/40 shadow-md ring-2 ring-red-500/20'
                : 'border-gray-200 hover:border-red-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">Phương án 3 Năm (36 tháng)</span>
              {bankYears === 3 && (
                <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded-full">Đang chọn</span>
              )}
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="text-xl font-black text-gray-900">
                ~59,6 triệu/tháng <span className="text-xs text-gray-500 font-normal">(9 tháng đầu)</span>
              </div>
              <p className="text-xs text-gray-600">
                • Gốc ngân hàng: <strong>33,3 triệu/tháng</strong>
              </p>
              <p className="text-xs text-gray-600">
                • Sau tháng 9: Còn <strong>~55 triệu/tháng</strong> (giảm rất nhanh).
              </p>
              <p className="text-xs text-emerald-700 font-bold flex items-center gap-1 mt-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tiết kiệm hơn 100 triệu tiền lãi so với gói 5 năm!</span>
              </p>
            </div>
          </div>

          {/* Card 5 năm */}
          <div
            onClick={() => handleSelectYears(5)}
            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
              bankYears === 5
                ? 'border-red-600 bg-red-50/40 shadow-md ring-2 ring-red-500/20'
                : 'border-gray-200 hover:border-red-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-gray-700">Phương án 5 Năm (60 tháng)</span>
              {bankYears === 5 && (
                <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded-full">Đang chọn</span>
              )}
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="text-xl font-black text-gray-900">
                ~46,3 triệu/tháng <span className="text-xs text-gray-500 font-normal">(9 tháng đầu)</span>
              </div>
              <p className="text-xs text-gray-600">
                • Gốc ngân hàng: <strong>20 triệu/tháng</strong> (nhẹ thở hơn)
              </p>
              <p className="text-xs text-gray-600">
                • Sau tháng 9: Còn <strong>~42 triệu/tháng</strong>
              </p>
              <p className="text-xs text-blue-700 font-bold flex items-center gap-1 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Áp lực dòng tiền hàng tháng nhẹ hơn, dễ kiểm soát!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Nút bấm mở rộng tinh chỉnh chi tiết chi tiêu */}
        <div>
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <span>{showConfig ? 'Thu gọn cài đặt nâng cao' : '⚙️ Tinh chỉnh chi tiết chi phí sinh hoạt & nợ'}</span>
            {showConfig ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showConfig && (
            <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Tiền ăn uống (tháng)</label>
                <input
                  type="number"
                  value={foodCost}
                  onChange={(e) => setFoodCost(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Tiền xăng xe (tháng)</label>
                <input
                  type="number"
                  value={fuelCost}
                  onChange={(e) => setFuelCost(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Phụng dưỡng Cha (tháng)</label>
                <input
                  type="number"
                  value={fatherSupportCost}
                  onChange={(e) => setFatherSupportCost(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Tập Gym rèn sức khỏe</label>
                <input
                  type="number"
                  value={gymCost}
                  onChange={(e) => setGymCost(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Nợ máy tính (tổng)</label>
                <input
                  type="number"
                  value={laptopDebt}
                  onChange={(e) => setLaptopDebt(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Số tháng trả góp máy tính</label>
                <input
                  type="number"
                  value={laptopMonths}
                  onChange={(e) => setLaptopMonths(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Tiền lãi ngân hàng ban đầu</label>
                <input
                  type="number"
                  value={initialMonthlyInterest}
                  onChange={(e) => setInitialMonthlyInterest(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-600 uppercase">Học phí trung bình / học sinh</label>
                <input
                  type="number"
                  value={tuitionPerStudent}
                  onChange={(e) => setTuitionPerStudent(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 text-sm font-bold bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. CHUYỂN HÓA SANG KPI LỚP HỌC THẦY THỌ */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Zap className="w-64 h-64 text-amber-400" />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Target className="w-3.5 h-3.5" />
                <span>Chỉ Số Hành Động Dạy Học</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black">
                Quy Đổi Sang Mục Tiêu Học Sinh & Lớp Học
              </h2>
              <p className="text-gray-300 text-xs mt-1">
                Giả định mức học phí bình quân: <strong className="text-amber-300">{fmtVND(tuitionPerStudent)}/học sinh/tháng</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-300">Đổi mức học phí:</span>
              <div className="flex gap-1.5">
                {[500_000, 600_000, 800_000, 1_000_000].map((fee) => (
                  <button
                    key={fee}
                    onClick={() => setTuitionPerStudent(fee)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      tuitionPerStudent === fee
                        ? 'bg-amber-400 text-gray-900 font-extrabold shadow'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {fee / 1000}k
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* KPI 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Điểm hòa vốn duy trì</span>
              <div className="text-3xl font-black text-white mt-2">
                {Math.ceil(26_333_333 / tuitionPerStudent)} <span className="text-sm font-normal text-gray-300">học sinh</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                ~1 lớp 40 bạn hoặc 2 lớp 20 bạn để đủ tiền ăn uống, nuôi cha, tập gym, trả góp máy tính và trả lãi ngân hàng!
              </p>
            </div>

            {/* KPI 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 ring-1 ring-amber-400/40">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Mục tiêu trả nợ ({bankYears} năm)</span>
                <span className="text-[10px] bg-amber-400 text-gray-900 font-bold px-2 py-0.5 rounded-full">Trọng tâm</span>
              </div>
              <div className="text-3xl font-black text-amber-300 mt-2">
                {Math.ceil(peakMonthlyCost / tuitionPerStudent)} <span className="text-sm font-normal text-white">học sinh</span>
              </div>
              <p className="text-xs text-gray-300 mt-2">
                Cần duy trì đều đặn để vừa đủ sống thoải mái, vừa dứt điểm toàn bộ nợ ngân hàng và máy tính đúng hạn!
              </p>
            </div>

            {/* KPI 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Sau khi xong máy tính (T10+)</span>
              <div className="text-3xl font-black text-emerald-300 mt-2">
                {Math.ceil(postPeakMonthlyCost / tuitionPerStudent)} <span className="text-sm font-normal text-gray-300">học sinh</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Chỉ tiêu giảm xuống nhẹ nhàng hơn. Mỗi học sinh đăng ký thêm là tiền tiết kiệm và đầu tư tương lai cho Thầy!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CÁC CỘT MỐC ĂN MỪNG (MILESTONES) & TIẾN ĐỘ THỰC TẾ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Tiến Độ Thực Tế Của Thầy Thọ</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Đã hoàn thành <strong className="text-red-600">{completedCount}</strong> trên tổng số {customMonths} tháng ({progressPercent}%)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-40 bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-600 to-emerald-500 h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-extrabold text-gray-800">{progressPercent}%</span>
          </div>
        </div>

        {/* 4 Cột mốc vinh quang */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
            <div className="text-xs font-bold text-blue-700 uppercase">Mốc 1: Tháng thứ 9</div>
            <div className="text-base font-black text-gray-900 mt-1">Xóa Nợ Máy Tính</div>
            <p className="text-[11px] text-gray-600 mt-1">Dứt điểm 30 triệu máy tính, giải phóng 3,33 triệu/tháng.</p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200">
            <div className="text-xs font-bold text-indigo-700 uppercase">Mốc 2: Nợ về dưới 1 tỷ</div>
            <div className="text-base font-black text-gray-900 mt-1">Dư nợ 3 chữ số</div>
            <p className="text-[11px] text-gray-600 mt-1">Tâm lý nhẹ nhõm hơn hẳn, tiền lãi hàng tháng tụt xuống dưới 8 triệu.</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
            <div className="text-xs font-bold text-amber-800 uppercase">Mốc 3: Hoàn thành 50%</div>
            <div className="text-base font-black text-gray-900 mt-1">Nửa chặng đường</div>
            <p className="text-[11px] text-gray-600 mt-1">Chỉ còn 600 triệu, đích đến tự do đã ở ngay trước mắt.</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <div className="text-xs font-bold text-emerald-700 uppercase">Mốc 4: Tự Do Hoàn Toàn</div>
            <div className="text-base font-black text-gray-900 mt-1">0 Đồng Nợ Nần 🎉</div>
            <p className="text-[11px] text-gray-600 mt-1">Toàn bộ doanh thu dạy học sẽ trở thành tài sản tích lũy cho Thầy!</p>
          </div>
        </div>
      </div>

      {/* 6. BẢNG CHI TIẾT TỪNG THÁNG (AMORTIZATION SCHEDULE) CÓ TICK CHỌN */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-600" />
              <span>Bảng Lịch Trình Chi Tiết Từng Tháng (Lãi Giảm Dần)</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Thầy có thể tick vào ô tròn ở cột đầu tiên khi đã hoàn thành nghĩa vụ tài chính của tháng đó
            </p>
          </div>

          {/* Tab lọc theo Năm */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            {yearsList.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYearFilter(y)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedYearFilter === y
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Năm {y} (Tháng {(y - 1) * 12 + 1} - {Math.min(y * 12, customMonths)})
              </button>
            ))}
            <button
              onClick={() => setSelectedYearFilter(0)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedYearFilter === 0
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Xem tất cả ({customMonths} tháng)
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
                .filter(row => selectedYearFilter === 0 || row.yearIndex === selectedYearFilter)
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
                        {row.laptopPay > 0 ? fmtVND(row.laptopPay) : <span className="text-gray-300">0 đ</span>}
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
                        <span className="px-2 py-1 rounded-md bg-gray-100 font-bold text-gray-800">
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

      {/* 7. PLAYBOOK HÀNH ĐỘNG THẦY THỌ (CHIẾN LƯỢC TỐI ƯU HỆ SINH THÁI) */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80 space-y-4">
        <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Gợi Ý Chiến Lược Tối Ưu Doanh Thu Từ Nền Tảng "Lớp Học Thầy Thọ"</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/70 space-y-2">
            <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
              <span>1. Tận Dụng Mùa Cao Điểm</span>
            </div>
            <p className="leading-relaxed">
              Vào đợt ôn thi nước rút (Tháng 3 - Tháng 6) hoặc khai giảng (Tháng 8 - Tháng 10), phụ huynh và học sinh đóng học phí theo kỳ/khóa.
              Thầy hãy <strong>trích ngay 50% số tiền thặng dư để trả trước hạn nợ gốc ngân hàng</strong>. Mỗi 100 triệu gốc trả trước sẽ giúp Thầy bớt ngay ~850.000 đ tiền lãi mỗi tháng mãi mãi!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/70 space-y-2">
            <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
              <span>2. Khai Thác Phòng Thi & Đề Thi Online</span>
            </div>
            <p className="leading-relaxed">
              Hệ thống của Thầy đã tích hợp đầy đủ công cụ làm đề Word, LaTeX, PDF và phòng thi điện tử. 
              Thầy có thể mở các <strong>Phòng thi thử trực tuyến thu phí nhẹ (ví dụ 100k - 200k/kỳ thi thử hoặc bán gói đề)</strong>. 
              Doanh thu này hoàn toàn tự động và không tốn thêm thời gian đứng lớp.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/70 space-y-2">
            <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
              <span>3. Giữ Vững Sức Khỏe & Tinh Thần</span>
            </div>
            <p className="leading-relaxed">
              Khoản đầu tư <strong>3 triệu tập Gym</strong> và <strong>2 triệu nuôi dưỡng Cha</strong> là hoàn toàn xứng đáng và thiêng liêng. 
              Sức khỏe dẻo dai và tâm an sẽ giúp Thầy giảng dạy cuốn hút hơn, truyền năng lượng tích cực cho học sinh, từ đó học sinh tự động giới thiệu bạn bè đến học đông hơn!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
