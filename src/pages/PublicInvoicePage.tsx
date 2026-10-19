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
      toast.success('ÄĂ£ sao chĂ©p liĂªn káº¿t tra cá»©u hĂ³a Ä‘Æ¡n!')
      setTimeout(() => setCopied(false), 2500)
    } catch {}
  }

  const qrCodeUrl = invoice
    ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(window.location.href)}`
    : ''

  return (
    <div className="min-h-screen bg-slate-100/80 py-6 sm:py-10 px-2 sm:px-4 text-slate-800 font-sans print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Banner xĂ¡c thá»±c chĂ­nh thá»©c (áº¨n khi In) */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white p-4 sm:p-5 rounded-3xl shadow-xl flex flex-wrap items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-sm sm:text-base tracking-wide uppercase">
                  Cá»”NG TRA Cá»¨U HĂ“A ÄÆ N ÄIá»†N Tá»¬
                </h1>
                <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  CHĂNH THá»¨C
                </span>
              </div>
              <p className="text-xs text-teal-200 mt-0.5 font-medium">
                Há»™ Kinh Doanh Nguyá»…n LÆ°Æ¡ng Thá» â€¢ Lá»›p Há»c ToĂ¡n Tháº§y Thá»
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
              <span>{copied ? 'ÄĂ£ copy' : 'Sao chĂ©p link'}</span>
            </button>
          </div>
        </div>

        {/* Khung tĂ¬m kiáº¿m náº¿u chÆ°a cĂ³ hĂ³a Ä‘Æ¡n hoáº·c muá»‘n tĂ¬m mĂ£ khĂ¡c */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs print:hidden">
          <form onSubmit={handleManualSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Nháº­p mĂ£ tra cá»©u hĂ³a Ä‘Æ¡n (VĂ­ dá»¥: HD26-XXXXXX)..."
                value={searchCode}
                onChange={e => setSearchCode(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-teal-500 uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold rounded-xl text-xs transition-colors shadow-xs cursor-pointer"
            >
              Tra Cá»©u
            </button>
          </form>
        </div>

        {/* Ná»™i dung HĂ³a Ä‘Æ¡n */}
        {loading ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-xl border border-slate-200">
            <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600 font-bold text-sm">Äang táº£i dá»¯ liá»‡u hĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­...</p>
          </div>
        ) : !invoice ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-slate-200 space-y-4">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-black text-slate-900">KhĂ´ng tĂ¬m tháº¥y thĂ´ng tin hĂ³a Ä‘Æ¡n</h2>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                MĂ£ tra cá»©u <span className="font-mono font-bold text-rose-600">{searchCode}</span> chÆ°a tá»“n táº¡i trĂªn há»‡ thá»‘ng hoáº·c quĂ½ phá»¥ huynh vui lĂ²ng kiá»ƒm tra láº¡i chĂ­nh xĂ¡c mĂ£ ghi trĂªn biĂªn lai.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="tel:0345833133"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Hotline Tháº§y Thá»: 0345.833.133
              </a>
            </div>
          </div>
        ) : (
          <div id="printable-invoice" className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 text-slate-800 print:border-none print:shadow-none print:p-6 print:rounded-none">
            
            {/* Header 2 cá»™t */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b-2 border-slate-900/90 print:pb-4">
              
              {/* Cá»™t trĂ¡i: ÄÆ¡n vá»‹ phĂ¡t hĂ nh */}
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
                  <p><span className="font-bold text-slate-700">MĂ£ sá»‘ thuáº¿:</span> <span className="font-mono font-bold text-slate-800">{invoice.sellerTaxCode}</span></p>
                  <p><span className="font-bold text-slate-700">Äá»‹a chá»‰:</span> {invoice.sellerAddress}</p>
                  <p><span className="font-bold text-slate-700">Hotline / Zalo:</span> <span className="font-bold text-slate-900">{invoice.sellerHotline}</span></p>
                  <p><span className="font-bold text-slate-700">Sá»‘ tĂ i khoáº£n:</span> <span className="font-bold text-blue-700 font-mono">1070493932</span> - Vietcombank</p>
                </div>
              </div>

              {/* Cá»™t pháº£i: Quá»‘c hiá»‡u + Máº«u sá»‘ */}
              <div className="text-center md:text-right flex flex-col justify-between">
                <div>
                  <p className="font-black text-slate-900 text-xs sm:text-sm tracking-wider uppercase">
                    Cá»˜NG HĂ’A XĂƒ Há»˜I CHá»¦ NGHÄ¨A VIá»†T NAM
                  </p>
                  <p className="text-xs font-bold text-slate-700 italic">
                    Äá»™c láº­p - Tá»± do - Háº¡nh phĂºc
                  </p>
                  <div className="w-24 h-[1.5px] bg-slate-400 mx-auto md:ml-auto md:mr-0 mt-1 mb-3"></div>
                </div>

                <div className="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-200 inline-block md:ml-auto text-left min-w-[210px] print:bg-transparent print:border-slate-300">
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">Máº«u sá»‘:</span>
                    <span className="font-mono font-extrabold text-slate-800">{invoice.templateCode}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">KĂ½ hiá»‡u:</span>
                    <span className="font-mono font-extrabold text-slate-800">{invoice.symbol}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">Sá»‘ hĂ³a Ä‘Æ¡n:</span>
                    <span className="font-mono font-black text-rose-600 text-xs">{invoice.invoiceNumber}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-bold text-slate-600">NgĂ y láº­p:</span>
                    <span className="font-semibold text-slate-700">{invoice.issueDateFormatted}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* TiĂªu Ä‘á» HĂ³a ÄÆ¡n */}
            <div className="text-center my-6 space-y-1 print:my-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                HĂ“A ÄÆ N ÄIá»†N Tá»¬
              </h2>
              <p className="text-xs sm:text-sm font-extrabold text-slate-600 uppercase tracking-widest">
                (PHIáº¾U THU TIá»€N Há»ŒC PHĂ)
              </p>
              <p className="text-[11px] text-slate-500 italic">
                Báº£n thá»ƒ hiá»‡n Ä‘iá»‡n tá»­ theo Nghá»‹ Ä‘á»‹nh 123/2020/NÄ-CP & ThĂ´ng tÆ° 78/2021/TT-BTC
              </p>
            </div>

            {/* Khung ThĂ´ng tin NgÆ°á»i Ná»™p Tiá»n */}
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200 mb-6 text-xs sm:text-sm space-y-2 print:bg-transparent print:border-slate-300 print:p-2.5 print:mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <div>
                  <span className="font-bold text-slate-600">Há» vĂ  tĂªn há»c sinh:</span>{' '}
                  <span className="font-black text-slate-900 text-sm">{invoice.studentName}</span>
                  {invoice.studentCode && (
                    <span className="ml-2 font-mono text-xs font-bold bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
                      {invoice.studentCode}
                    </span>
                  )}
                </div>

                <div>
                  <span className="font-bold text-slate-600">Lá»›p há»c:</span>{' '}
                  <span className="font-extrabold text-indigo-700">{invoice.className || 'ToĂ¡n Tháº§y Thá»'}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">Phá»¥ huynh Ä‘áº¡i diá»‡n:</span>{' '}
                  <span className="font-semibold text-slate-800">{invoice.parentName || 'QuĂ½ phá»¥ huynh'}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">Sá»‘ Ä‘iá»‡n thoáº¡i:</span>{' '}
                  <span className="font-bold font-mono text-slate-800">{invoice.phone || '0345.833.133'}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">HĂ¬nh thá»©c thanh toĂ¡n:</span>{' '}
                  <span className="font-extrabold text-emerald-700">{invoice.paymentMethod}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-600">Äá»“ng tiá»n thanh toĂ¡n:</span>{' '}
                  <span className="font-semibold text-slate-800">Viá»‡t Nam Äá»“ng (VNÄ)</span>
                </div>
              </div>
            </div>

            {/* Báº£ng KĂª Chi Tiáº¿t */}
            <div className="overflow-x-auto mb-6 print:mb-4">
              <table className="w-full text-left border-collapse border border-slate-300 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 text-center font-extrabold">
                    <th className="border border-slate-300 px-3 py-2.5 w-12">STT</th>
                    <th className="border border-slate-300 px-4 py-2.5 text-left">Ná»™i dung thu há»c phĂ­ / Dá»‹ch vá»¥ Ä‘Ă o táº¡o</th>
                    <th className="border border-slate-300 px-3 py-2.5 w-24">ÄVT</th>
                    <th className="border border-slate-300 px-3 py-2.5 w-16">SL</th>
                    <th className="border border-slate-300 px-4 py-2.5 text-right w-28">ÄÆ¡n giĂ¡</th>
                    <th className="border border-slate-300 px-4 py-2.5 text-right w-32">ThĂ nh tiá»n</th>
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
                      Cá»™ng tiá»n dá»‹ch vá»¥ Ä‘Ă o táº¡o:
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-right font-mono font-bold text-slate-900">
                      {fmtVNDShort(invoice.totalAmount)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="border border-slate-300 px-4 py-1.5 text-right font-bold text-slate-600 text-xs">
                      Thuáº¿ suáº¥t GTGT (Theo Luáº­t thuáº¿ Ä‘á»‘i vá»›i GiĂ¡o dá»¥c & ÄĂ o táº¡o):
                    </td>
                    <td className="border border-slate-300 px-4 py-1.5 text-right font-bold text-emerald-700 text-xs">
                      KhĂ´ng chá»‹u thuáº¿
                    </td>
                  </tr>
                  <tr className="bg-slate-50 font-black">
                    <td colSpan={5} className="border border-slate-300 px-4 py-3 text-right text-slate-900 uppercase">
                      Tá»”NG Cá»˜NG TIá»€N THANH TOĂN:
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-right font-mono text-rose-600 text-base">
                      {fmtVNDShort(invoice.totalAmount)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Sá»‘ tiá»n viáº¿t báº±ng chá»¯ */}
            <div className="mb-8 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm print:bg-transparent print:border-slate-300 print:mb-4">
              <span className="font-bold text-slate-700">Sá»‘ tiá»n viáº¿t báº±ng chá»¯:</span>{' '}
              <span className="font-extrabold italic text-slate-900">{invoice.totalAmountWords}</span>
            </div>

            {/* Chá»¯ KĂ½ & Con Dáº¥u */}
            <div className="grid grid-cols-2 gap-8 mb-8 text-center print:mb-4">
              
              <div className="space-y-1">
                <p className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                  NGÆ¯á»œI Ná»˜P TIá»€N
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  (KĂ½, ghi rĂµ há» tĂªn)
                </p>
                <div className="h-16 flex items-center justify-center text-xs text-emerald-600 font-bold italic">
                  âœ“ ÄĂ£ hoĂ n táº¥t thanh toĂ¡n
                </div>
                <p className="font-bold text-xs text-slate-800">{invoice.parentName || invoice.studentName}</p>
              </div>

              <div className="space-y-1 relative">
                <p className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                  ÄÆ N Vá» THU PHĂ / NGÆ¯á»œI BĂN HĂ€NG
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  (KĂ½ Ä‘iá»‡n tá»­, Ä‘Ă³ng dáº¥u chá»©ng thá»±c)
                </p>
                
                <div className="my-2 p-3 border-2 border-dashed border-rose-600 bg-rose-50/80 rounded-2xl text-rose-700 shadow-xs inline-block text-left w-full max-w-[280px] print:bg-transparent">
                  <div className="flex items-center gap-1.5 font-black text-xs uppercase tracking-tight text-rose-700 border-b border-rose-300 pb-1 mb-1">
                    <Check className="w-4 h-4 stroke-[3px]" />
                    <span>ÄĂƒ KĂ ÄIá»†N Tá»¬ CHá»¨NG THá»°C</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-800 leading-tight">
                    KĂ½ bá»Ÿi: {invoice.signedBy}
                  </p>
                  <p className="text-[9px] text-slate-600 font-medium mt-0.5">
                    NgĂ y kĂ½: {invoice.signedAt}
                  </p>
                  <p className="text-[9px] text-emerald-700 font-bold mt-0.5">
                    âœ“ Chá»©ng thÆ° sá»‘ há»£p lá»‡ & xĂ¡c thá»±c trá»±c tuyáº¿n
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
                  alt="QR tra cá»©u hĂ³a Ä‘Æ¡n"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left text-[11px] leading-relaxed">
                <p className="font-extrabold text-slate-800 flex items-center justify-center sm:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  MĂƒ TRA Cá»¨U HĂ“A ÄÆ N TRá»°C TUYáº¾N: <span className="font-mono font-black text-rose-600 text-xs ml-1">{invoice.lookupCode}</span>
                </p>
                <p className="text-slate-500 mt-0.5">
                  HĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­ nĂ y lĂ  chá»©ng tá»« há»£p lá»‡, Ä‘Æ°á»£c táº¡o vĂ  lÆ°u trá»¯ vÄ©nh viá»…n trĂªn mĂ¡y chá»§ báº£o máº­t cá»§a Lá»›p Há»c ToĂ¡n Tháº§y Thá».
                </p>
                <p className="text-[10px] text-slate-400 italic mt-0.5">
                  Má»i tháº¯c máº¯c vá» biĂªn lai vĂ  há»c phĂ­, QuĂ½ phá»¥ huynh vui lĂ²ng liĂªn há»‡ Tháº§y Thá»: 0345.833.133.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}