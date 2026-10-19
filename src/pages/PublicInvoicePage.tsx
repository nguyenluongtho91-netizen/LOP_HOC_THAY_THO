// src/pages/PublicInvoicePage.tsx
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ShieldCheck, Printer, Copy, Check, Search,
  Phone, ArrowLeft, Download, AlertCircle, Sparkles, Building2
} from 'lucide-react'
import toast from 'react-hot-toast'
import { ElectronicInvoiceData, getElectronicInvoice } from '@/lib/invoiceService'
import { fmtVNDShort } from '@/lib/helpers'

export default function PublicInvoicePage() {
  const { invoiceId } = useParams<{ invoiceId: string }>()
  const [invoice, setInvoice] = useState<ElectronicInvoiceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchCode, setSearchCode] = useState(invoiceId || '')
  const [copied, setCopied] = useState(false)

  const loadData = async (code: string) => {
    if (!code) {
      setLoading(false)
      return
    }
    setLoading(true)
    const data = await getElectronicInvoice(code)
    setInvoice(data)
    setLoading(false)
  }

  useEffect(() => {
    if (invoiceId) {
      void loadData(invoiceId)
    } else {
      setLoading(false)
    }
  }, [invoiceId])

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchCode.trim()) {
      void loadData(searchCode.trim())
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      toast.success('Đã sao chép liên kết tra cứu hóa đơn!')
      setTimeout(() => setCopied(false), 2500)
    } catch {}
  }

  const qrCodeUrl = invoice
    ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(window.location.href)}`
    : ''

  return (
    <div className="min-h-screen bg-slate-100/80 py-6 sm:py-10 px-2 sm:px-4 text-slate-800 font-sans print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Banner xác thực chính thức (Ẩn khi In) */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white p-4 sm:p-5 rounded-3xl shadow-xl flex flex-wrap items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-sm sm:text-base tracking-wide uppercase">
                  CỔNG TRA CỨU HÓA ĐƠN ĐIỆN TỬ
                </h1>
                <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  CHÍNH THỨC
                </span>
              </div>
              <p className="text-xs text-teal-200 mt-0.5 font-medium">
                Hộ Kinh Doanh Nguyễn Lương Thọ • Lớp Học Toán Thầy Thọ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              disabled={!invoice}
              className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-white/15 disabled:opacity-50"
            >
              <Printer className="w-4 h-4 text-sky-300" />
              <span>In A4 / PDF</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-white/15"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
              <span>{copied ? 'Đã copy' : 'Sao chép link'}</span>
            </button>
          </div>
        </div>

        {/* Khung tìm kiếm nếu chưa có hóa đơn hoặc muốn tìm mã khác */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs print:hidden">
          <form onSubmit={handleManualSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Nhập mã tra cứu hóa đơn (Ví dụ: HD26-XXXXXX)..."
                value={searchCode}
                onChange={e => setSearchCode(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-teal-500 uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold rounded-xl text-xs transition-colors shadow-xs cursor-pointer"
            >
              Tra Cứu
            </button>
          </form>
        </div>

        {/* Nội dung Hóa đơn */}
        {loading ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-xl border border-slate-200">
            <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600 font-bold text-sm">Đang tải dữ liệu hóa đơn điện tử...</p>
          </div>
        ) : !invoice ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-slate-200 space-y-4">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-black text-slate-900">Không tìm thấy thông tin hóa đơn</h2>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Mã tra cứu <span className="font-mono font-bold text-rose-600">{searchCode}</span> chưa tồn tại trên hệ thống hoặc quý phụ huynh vui lòng kiểm tra lại chính xác mã ghi trên biên lai.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="tel:0345833133"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Hotline Thầy Thọ: 0345.833.133
              </a>
            </div>
          </div>
        ) : (
          <div id="printable-invoice" className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 text-slate-800 print:border-none print:shadow-none print:p-6 print:rounded-none overflow-hidden">
            <style>{`
              @media print {
                @page {
                  size: A4 portrait;
                  margin: 12mm 15mm;
                }
                body {
                  background: white !important;
                  color: black !important;
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              }
            `}</style>
            
            {/* Watermark bảo mật */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035] rotate-[-28deg]">
              <span className="text-6xl sm:text-7xl font-black uppercase text-slate-900 tracking-widest text-center leading-tight">
                HÓA ĐƠN ĐIỆN TỬ<br />TOÁN THẦY THỌ
              </span>
            </div>
            
            {/* Header 2 cột */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b-2 border-slate-900/90 print:pb-4">
              
              {/* Cột trái: Đơn vị phát hành */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                  <h2 className="font-black text-slate-900 text-base sm:text-lg tracking-tight uppercase">
                    {invoice.sellerName}
                  </h2>
                </div>
                <p className="text-xs font-extrabold text-teal-700 tracking-wide uppercase">
                  {invoice.sellerBrand}
                </p>
                <div className="text-[12px] text-slate-600 space-y-0.5 pt-1 leading-relaxed">
                  <p><span className="font-bold text-slate-700">Mã số thuế:</span> <span className="font-mono font-bold text-slate-800">{invoice.sellerTaxCode}</span></p>
                  <p><span className="font-bold text-slate-700">Địa chỉ:</span> {invoice.sellerAddress && !invoice.sellerAddress.includes('Lê Trọng Tấn') ? invoice.sellerAddress : 'Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh'}</p>
                  <p><span className="font-bold text-slate-700">Hotline / Zalo:</span> <span className="font-bold text-slate-900">{invoice.sellerHotline}</span></p>
                  <p><span className="font-bold text-slate-700">Số tài khoản:</span> <span className="font-bold text-blue-700 font-mono">1070493932</span> - Vietcombank</p>
                </div>
              </div>

              {/* Cột phải: Quốc hiệu + Mẫu số */}
              <div className="text-center md:text-right flex flex-col justify-between">
                <div>
                  <p className="font-black text-slate-900 text-xs sm:text-sm tracking-wider uppercase">
                    CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                  </p>
                  <p className="text-xs font-bold text-slate-700 italic">
                    Độc lập - Tự do - Hạnh phúc
                  </p>
                  <div className="w-24 h-[1.5px] bg-slate-400 mx-auto md:ml-auto md:mr-0 mt-1 mb-3"></div>
                </div>

                <div className="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-200 inline-block md:ml-auto text-left min-w-[210px] print:bg-transparent print:border-slate-300">
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">Mẫu số:</span>
                    <span className="font-mono font-extrabold text-slate-800">{invoice.templateCode}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">Ký hiệu:</span>
                    <span className="font-mono font-extrabold text-slate-800">{invoice.symbol}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">Số hóa đơn:</span>
                    <span className="font-mono font-black text-rose-600 text-xs">{invoice.invoiceNumber}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">Ngày lập:</span>
                    <span className="font-semibold text-slate-700">{invoice.issueDateFormatted}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Tiêu đề Hóa Đơn */}
            <div className="text-center my-6 space-y-1 print:my-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                HÓA ĐƠN ĐIỆN TỬ
              </h2>
              <p className="text-xs sm:text-sm font-extrabold text-slate-600 uppercase tracking-widest">
                (PHIẾU THU TIỀN HỌC PHÍ)
              </p>
              <p className="text-[11px] text-slate-500 italic">
                Bản thể hiện điện tử theo Nghị định 123/2020/NĐ-CP & Thông tư 78/2021/TT-BTC
              </p>
            </div>

            {/* Khung Thông tin Người Nộp Tiền */}
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200 mb-6 text-xs sm:text-sm space-y-2 print:bg-transparent print:border-slate-300 print:p-2.5 print:mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <div>
                  <span className="font-bold text-slate-600">Họ và tên học sinh:</span>{' '}
                  <span className="font-black text-slate-900 text-sm">{invoice.studentName}</span>
                  {invoice.studentCode && (
                    <span className="ml-2 font-mono text-xs font-bold bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
                      {invoice.studentCode}
                    </span>
                  )}
                </div>

                <div>
                  <span className="font-bold text-slate-600">Lớp học:</span>{' '}
                  <span className="font-extrabold text-indigo-700">{invoice.className || 'Toán Thầy Thọ'}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">Phụ huynh đại diện:</span>{' '}
                  <span className="font-semibold text-slate-800">{invoice.parentName || 'Quý phụ huynh'}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">Số điện thoại:</span>{' '}
                  <span className="font-bold font-mono text-slate-800">{invoice.phone || '0345.833.133'}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">Hình thức thanh toán:</span>{' '}
                  <span className="font-extrabold text-emerald-700">{invoice.paymentMethod}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">Đồng tiền thanh toán:</span>{' '}
                  <span className="font-semibold text-slate-800">Việt Nam Đồng (VNĐ)</span>
                </div>
              </div>
            </div>

            {/* Bảng Kê Chi Tiết */}
            <div className="overflow-x-auto mb-6 print:mb-4">
              <table className="w-full text-left border-collapse border border-slate-300 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 text-center font-extrabold">
                    <th className="border border-slate-300 px-3 py-2.5 w-12">STT</th>
                    <th className="border border-slate-300 px-4 py-2.5 text-left">Nội dung thu học phí / Dịch vụ đào tạo</th>
                    <th className="border border-slate-300 px-3 py-2.5 w-24">ĐVT</th>
                    <th className="border border-slate-300 px-3 py-2.5 w-16">SL</th>
                    <th className="border border-slate-300 px-4 py-2.5 text-right w-28">Đơn giá</th>
                    <th className="border border-slate-300 px-4 py-2.5 text-right w-32">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((it, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="border border-slate-300 px-3 py-3 text-center font-bold text-slate-600">{it.stt}</td>
                      <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">
                        {it.name}
                        {invoice.note && (
                          <p className="text-[11px] font-normal text-slate-500 mt-0.5 italic">{invoice.note}</p>
                        )}
                      </td>
                      <td className="border border-slate-300 px-3 py-3 text-center text-slate-600">{it.unit}</td>
                      <td className="border border-slate-300 px-3 py-3 text-center font-bold text-slate-700">{it.quantity}</td>
                      <td className="border border-slate-300 px-4 py-3 text-right font-mono text-slate-700">{fmtVNDShort(it.unitPrice)}</td>
                      <td className="border border-slate-300 px-4 py-3 text-right font-mono font-bold text-slate-900">{fmtVNDShort(it.amount)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="border border-slate-300 px-4 py-2 text-right font-bold text-slate-700">
                      Cộng tiền dịch vụ đào tạo:
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-right font-mono font-bold text-slate-900">
                      {fmtVNDShort(invoice.totalAmount)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="border border-slate-300 px-4 py-1.5 text-right font-bold text-slate-600 text-xs">
                      Thuế suất GTGT (Theo Luật thuế đối với Giáo dục & Đào tạo):
                    </td>
                    <td className="border border-slate-300 px-4 py-1.5 text-right font-bold text-emerald-700 text-xs">
                      Không chịu thuế
                    </td>
                  </tr>
                  <tr className="bg-slate-50 font-black">
                    <td colSpan={5} className="border border-slate-300 px-4 py-3 text-right text-slate-900 uppercase">
                      TỔNG CỘNG TIỀN THANH TOÁN:
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-right font-mono text-rose-600 text-base">
                      {fmtVNDShort(invoice.totalAmount)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Số tiền viết bằng chữ */}
            <div className="mb-8 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm print:bg-transparent print:border-slate-300 print:mb-4">
              <span className="font-bold text-slate-700">Số tiền viết bằng chữ:</span>{' '}
              <span className="font-extrabold italic text-slate-900">{invoice.totalAmountWords}</span>
            </div>

            {/* Chữ Ký & Con Dấu */}
            <div className="grid grid-cols-2 gap-8 mb-8 text-center print:mb-4">
              
              <div className="space-y-1">
                <p className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                  NGƯỜI NỘP TIỀN
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  (Ký, ghi rõ họ tên)
                </p>
                <div className="h-16 flex items-center justify-center text-xs text-emerald-600 font-bold italic">
                  ✓ Đã hoàn tất thanh toán
                </div>
                <p className="font-bold text-xs text-slate-800">{invoice.parentName || invoice.studentName}</p>
              </div>

              <div className="space-y-1 relative">
                <p className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                  ĐƠN VỊ THU PHÍ / NGƯỜI BÁN HÀNG
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  (Ký điện tử, đóng dấu chứng thực)
                </p>
                
                <div className="my-2 p-3 border-2 border-dashed border-rose-600 bg-rose-50/80 rounded-2xl text-rose-700 shadow-xs inline-block text-left w-full max-w-[280px] print:bg-transparent">
                  <div className="flex items-center gap-1.5 font-black text-xs uppercase tracking-tight text-rose-700 border-b border-rose-300 pb-1 mb-1">
                    <Check className="w-4 h-4 stroke-[3px]" />
                    <span>ĐÃ KÝ ĐIỆN TỬ CHỨNG THỰC</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-800 leading-tight">
                    Ký bởi: {invoice.signedBy}
                  </p>
                  <p className="text-[9px] text-slate-600 font-medium mt-0.5">
                    Ngày ký: {invoice.signedAt}
                  </p>
                  <p className="text-[9px] text-emerald-700 font-bold mt-0.5">
                    ✓ Chứng thư số hợp lệ & xác thực trực tuyến
                  </p>
                </div>

                <p className="font-black text-xs text-slate-900 uppercase">
                  {invoice.sellerName}
                </p>
              </div>

            </div>

            {/* Footer QR */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-4 text-slate-600 print:pt-2">
              <div className="w-20 h-20 bg-white p-1 rounded-xl border border-slate-300 shadow-xs shrink-0 flex items-center justify-center">
                <img
                  src={qrCodeUrl}
                  alt="QR tra cứu hóa đơn"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left text-[11px] leading-relaxed">
                <p className="font-extrabold text-slate-800 flex items-center justify-center sm:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  MÃ TRA CỨU HÓA ĐƠN TRỰC TUYẾN: <span className="font-mono font-black text-rose-600 text-xs ml-1">{invoice.lookupCode}</span>
                </p>
                <p className="text-slate-500 mt-0.5">
                  Hóa đơn điện tử này là chứng từ hợp lệ, được tạo và lưu trữ vĩnh viễn trên máy chủ bảo mật của Lớp Học Toán Thầy Thọ.
                </p>
                <p className="text-[10px] text-slate-400 italic mt-0.5">
                  Mọi thắc mắc về biên lai và học phí, Quý phụ huynh vui lòng liên hệ Thầy Thọ: 0345.833.133.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
