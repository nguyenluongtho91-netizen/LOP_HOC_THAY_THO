// src/pages/PublicPaymentPage.tsx
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  ShieldCheck, Copy, Check, Download, Phone, ArrowRight,
  ExternalLink, Sparkles, Building2, Smartphone, CreditCard,
  QrCode, RefreshCw, AlertCircle
} from 'lucide-react'
import toast from 'react-hot-toast'
import { fmtVNDShort, formatShortTransferContent, generateVietQRUrl, removeVietnameseTones } from '@/lib/helpers'

interface BankAppItem {
  id: string
  name: string
  shortName: string
  color: string
  iconBg: string
  deeplink: string
  fallbackUrl?: string
}

export default function PublicPaymentPage() {
  const [searchParams] = useSearchParams()
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isOpeningApp, setIsOpeningApp] = useState<string | null>(null)

  // Đọc thông tin từ URL Query
  const rawAmount = parseInt(searchParams.get('amount') || searchParams.get('so_tien') || '0', 10)
  const amount = isNaN(rawAmount) ? 0 : rawAmount
  const studentName = searchParams.get('name') || searchParams.get('ten') || 'Học sinh'
  const className = searchParams.get('class') || searchParams.get('lop') || ''
  const month = searchParams.get('month') || searchParams.get('thang') || 'Tháng 10'
  const note = searchParams.get('note') || searchParams.get('chi_tiet') || ''
  
  // Nội dung chuyển khoản rút gọn (VD: LINH DAN L7, SY MANH L8)
  const cleanClass = className.replace(/^[Ll][ớỚoO][pP]\s*/, '').trim() || className
  const defaultDes = formatShortTransferContent(studentName, cleanClass)
  const des = (searchParams.get('des') || searchParams.get('noi_dung') || defaultDes).trim()

  const bankAccount = '1070493932'
  const bankName = 'Vietcombank (VCB)'
  const accountHolder = 'HO KINH DOANH NGUYEN LUONG THO'

  // Link ảnh QR VietQR chuẩn Vietcombank
  const addInfo = des
  const qrUrl = generateVietQRUrl(amount, addInfo)

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      toast.success(`Đã sao chép: ${fieldName}`)
      setTimeout(() => setCopiedField(null), 2500)
    } catch {
      toast.error('Không thể sao chép')
    }
  }

  // Danh sách các ứng dụng ngân hàng phổ biến hàng đầu Việt Nam
  const bankApps: BankAppItem[] = [
    {
      id: 'vcb',
      name: 'VCB Digibank',
      shortName: 'Vietcombank',
      color: 'from-emerald-600 to-green-700',
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      deeplink: `vietcombank://`,
      fallbackUrl: `https://vcbdigibank.vietcombank.com.vn/`
    },
    {
      id: 'mb',
      name: 'MB Bank',
      shortName: 'MBBank',
      color: 'from-blue-600 to-indigo-700',
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
      deeplink: `mbmobile://`,
      fallbackUrl: `https://mbbank.com.vn/`
    },
    {
      id: 'tcb',
      name: 'Techcombank Mobile',
      shortName: 'Techcombank',
      color: 'from-red-600 to-rose-700',
      iconBg: 'bg-red-50 text-red-700 border-red-200',
      deeplink: `tcb://`,
      fallbackUrl: `https://techcombank.com/`
    },
    {
      id: 'bidv',
      name: 'BIDV SmartBanking',
      shortName: 'BIDV',
      color: 'from-teal-600 to-emerald-700',
      iconBg: 'bg-teal-50 text-teal-700 border-teal-200',
      deeplink: `bidvsmartbanking://`,
      fallbackUrl: `https://smartbanking.bidv.com.vn/`
    },
    {
      id: 'icb',
      name: 'VietinBank iPay',
      shortName: 'VietinBank',
      color: 'from-sky-600 to-blue-700',
      iconBg: 'bg-sky-50 text-sky-700 border-sky-200',
      deeplink: `vietinbankipay://`,
      fallbackUrl: `https://vietinbank.vn/`
    },
    {
      id: 'acb',
      name: 'ACB ONE',
      shortName: 'ACB',
      color: 'from-blue-700 to-indigo-800',
      iconBg: 'bg-blue-50 text-blue-800 border-blue-200',
      deeplink: `acbapp://`,
      fallbackUrl: `https://acb.com.vn/`
    },
    {
      id: 'vpb',
      name: 'VPBank NEO',
      shortName: 'VPBank',
      color: 'from-emerald-500 to-green-600',
      iconBg: 'bg-green-50 text-green-700 border-green-200',
      deeplink: `vpbankneo://`,
      fallbackUrl: `https://neo.vpbank.com.vn/`
    },
    {
      id: 'tpb',
      name: 'TPBank Mobile',
      shortName: 'TPBank',
      color: 'from-purple-600 to-pink-700',
      iconBg: 'bg-purple-50 text-purple-700 border-purple-200',
      deeplink: `tpbank://`,
      fallbackUrl: `https://tpb.vn/`
    },
    {
      id: 'vba',
      name: 'Agribank Plus',
      shortName: 'Agribank',
      color: 'from-amber-600 to-orange-700',
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
      deeplink: `agribank://`,
      fallbackUrl: `https://agribank.com.vn/`
    },
    {
      id: 'momo',
      name: 'Ví MoMo',
      shortName: 'MoMo',
      color: 'from-pink-600 to-rose-600',
      iconBg: 'bg-pink-50 text-pink-700 border-pink-200',
      deeplink: `momo://`,
      fallbackUrl: `https://momo.vn/`
    }
  ]

  const handleOpenBankApp = async (app: BankAppItem) => {
    setIsOpeningApp(app.id)
    
    // Tự động sao chép STK và nội dung vào Clipboard để phụ huynh dán nếu cần
    try {
      await navigator.clipboard.writeText(bankAccount)
      toast.success(`Đã copy STK: ${bankAccount}. Đang mở app ${app.shortName}...`)
    } catch {}

    // Kích hoạt Deeplink mở App trên thiết bị
    const start = Date.now()
    window.location.href = app.deeplink

    // Nếu sau 1.5s không mở được app (chưa cài app), chuyển sang trang web của ngân hàng hoặc thông báo
    setTimeout(() => {
      setIsOpeningApp(null)
      if (Date.now() - start < 2000 && app.fallbackUrl) {
        // App chưa cài hoặc không hỗ trợ scheme trực tiếp từ trình duyệt
      }
    }, 1500)
  }

  const handleDownloadQr = () => {
    try {
      const a = document.createElement('a')
      a.href = qrUrl
      a.download = `QR_${removeVietnameseTones(studentName)}_${amount}.png`
      a.click()
      toast.success('Đã tải ảnh mã QR về máy!')
    } catch {
      toast.error('Không thể tải ảnh. Quý phụ huynh vui lòng chụp màn hình ạ!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans pb-16">
      
      {/* Header thương hiệu Lớp Học Thầy Thọ */}
      <div className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-white/10 px-4 py-3.5 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-md shadow-emerald-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-emerald-400 font-black text-lg">
                T
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm tracking-wide text-white uppercase">Lớp Học Thầy Thọ</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-1.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  XÁC THỰC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Cổng chuyển khoản học phí 1-chạm</p>
            </div>
          </div>

          <a
            href="tel:0345833133"
            className="flex items-center gap-1 text-xs text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 px-2.5 py-1.5 rounded-xl transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0345.833.133</span>
          </a>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pt-5 space-y-4">
        
        {/* Card Tóm tắt học phí */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center space-y-1 pb-3 border-b border-white/10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Học phí em</p>
            <h1 className="text-xl font-black text-white tracking-tight">
              {studentName} {className ? `(${className.toLowerCase().startsWith('lớp') ? className : `Lớp ${className}`})` : ''}
            </h1>
            <p className="text-xs text-emerald-300 font-semibold">{month}</p>
            {note && (
              <p className="text-xs text-amber-300/90 font-medium bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-xl mt-2 inline-block">
                {note}
              </p>
            )}
          </div>

          {/* Số tiền cần thanh toán */}
          <div className="pt-4 text-center">
            <span className="text-xs font-semibold text-slate-400 block mb-1">Số tiền thanh toán</span>
            <div className="inline-flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                {amount > 0 ? amount.toLocaleString('vi-VN') : '0'}
              </span>
              <span className="text-lg font-bold text-emerald-400">đ</span>
            </div>
          </div>
        </div>

        {/* Khung Mã QR VietQR chuẩn Vietcombank */}
        <div className="bg-white rounded-3xl p-5 shadow-2xl text-slate-900 space-y-4 text-center">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-left">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center text-xs shadow-md shadow-emerald-600/30">
                VCB
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 leading-tight">VIETCOMBANK</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Napas 24/7 Miễn phí</p>
              </div>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
              QUÉT MÃ TỰ ĐỘNG
            </span>
          </div>

          {/* Ảnh mã QR */}
          <div className="relative inline-block mx-auto bg-slate-50 p-2.5 rounded-2xl border-2 border-slate-200/80 shadow-inner group">
            <img
              src={qrUrl}
              alt="Mã VietQR chuyển khoản học phí Thầy Thọ"
              className="w-56 h-auto mx-auto rounded-xl object-contain shadow-sm"
              loading="eager"
            />
            <div className="mt-2 text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Tự động điền đúng 100% Số tiền & Nội dung</span>
            </div>
          </div>

          {/* Nút Tải ảnh QR & Chạm quét */}
          <div className="flex gap-2">
            <button
              onClick={handleDownloadQr}
              type="button"
              className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-200"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Lưu ảnh QR vào máy</span>
            </button>
            <button
              onClick={() => copyToClipboard(des, 'Nội dung chuyển khoản')}
              type="button"
              className="flex-1 py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-emerald-200"
            >
              {copiedField === 'Nội dung chuyển khoản' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Đã copy nội dung</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copy nội dung ({des})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Cụm chọn nhanh App Ngân Hàng mở trực tiếp */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-emerald-400" />
            <h2 className="text-sm font-black text-white uppercase tracking-wide">
              Mở Ứng Dụng Ngân Hàng Để Chuyển Khoản
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Quý phụ huynh bấm chọn ngân hàng mình đang sử dụng bên dưới để điện thoại tự động mở app:
          </p>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {bankApps.map(app => (
              <button
                key={app.id}
                type="button"
                onClick={() => handleOpenBankApp(app)}
                className="p-3 bg-slate-800/90 hover:bg-slate-700/90 active:scale-95 rounded-2xl border border-white/10 flex items-center gap-2.5 transition-all text-left cursor-pointer group shadow-md"
              >
                <div className={`w-8 h-8 rounded-xl font-black text-[11px] flex items-center justify-center border shadow-sm ${app.iconBg}`}>
                  {app.shortName.slice(0, 3).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                    {app.name}
                  </p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-0.5">
                    <span>Mở app ngay</span>
                    <ArrowRight className="w-2.5 h-2.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Thông tin chuyển khoản sao chép thủ công */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-teal-400" />
            <h3 className="text-xs font-black text-slate-200 uppercase tracking-wide">
              Thông Tin Chuyển Khoản Thủ Công
            </h3>
          </div>

          <div className="space-y-2 text-xs">
            {/* Ngân hàng */}
            <div className="flex items-center justify-between p-2.5 bg-slate-800/60 rounded-xl border border-white/5">
              <span className="text-slate-400 font-medium">Ngân hàng:</span>
              <span className="font-bold text-white">{bankName}</span>
            </div>

            {/* Số tài khoản */}
            <div className="flex items-center justify-between p-2.5 bg-slate-800/60 rounded-xl border border-white/5">
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">Số tài khoản:</span>
                <span className="font-mono font-black text-sm text-emerald-400 tracking-wider">{bankAccount}</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(bankAccount, 'Số tài khoản')}
                className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-lg font-bold text-[11px] flex items-center gap-1 transition-all cursor-pointer border border-white/10"
              >
                {copiedField === 'Số tài khoản' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'Số tài khoản' ? 'Đã chép' : 'Sao chép'}</span>
              </button>
            </div>

            {/* Chủ tài khoản */}
            <div className="flex items-center justify-between p-2.5 bg-slate-800/60 rounded-xl border border-white/5">
              <span className="text-slate-400 font-medium">Chủ tài khoản:</span>
              <span className="font-bold text-white text-right text-[11px] max-w-[200px]">{accountHolder}</span>
            </div>

            {/* Số tiền */}
            <div className="flex items-center justify-between p-2.5 bg-slate-800/60 rounded-xl border border-white/5">
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">Số tiền:</span>
                <span className="font-bold text-emerald-300 text-sm">{amount.toLocaleString('vi-VN')} đ</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(String(amount), 'Số tiền')}
                className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-lg font-bold text-[11px] flex items-center gap-1 transition-all cursor-pointer border border-white/10"
              >
                {copiedField === 'Số tiền' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'Số tiền' ? 'Đã chép' : 'Sao chép'}</span>
              </button>
            </div>

            {/* Nội dung CK */}
            <div className="flex items-center justify-between p-2.5 bg-slate-800/60 rounded-xl border border-white/5">
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">Nội dung CK:</span>
                <span className="font-mono font-black text-amber-300 text-sm">{des}</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(des, 'Nội dung chuyển khoản')}
                className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-lg font-bold text-[11px] flex items-center gap-1 transition-all cursor-pointer border border-white/10"
              >
                {copiedField === 'Nội dung chuyển khoản' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'Nội dung chuyển khoản' ? 'Đã chép' : 'Sao chép'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Lời cảm ơn và cam kết tự động */}
        <div className="text-center pt-3 pb-6 space-y-2 text-xs text-slate-400">
          <p className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Hệ thống tự động xác nhận sau khi nhận được chuyển khoản</span>
          </p>
          <p>
            Mọi thắc mắc Quý phụ huynh vui lòng liên hệ Thầy Thọ qua SĐT/Zalo:{' '}
            <a href="https://zalo.me/0345833133" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline">
              0345.833.133
            </a>
          </p>
          <p className="text-[11px] text-slate-500 pt-2 font-medium">
            Thầy cảm ơn Quý Phụ huynh nhiều ạ!
          </p>
        </div>

      </div>
    </div>
  )
}
