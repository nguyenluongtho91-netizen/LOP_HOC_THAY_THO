// src/components/tuition/ElectronicInvoiceModal.tsx
import React, { useState } from 'react'
import {
  X, Printer, Share2, Copy, Check, ShieldCheck,
  Download, Send, Sparkles, QrCode, Phone, Building2
} from 'lucide-react'
import toast from 'react-hot-toast'
import { ElectronicInvoiceData, saveElectronicInvoice } from '@/lib/invoiceService'
import { fmtVNDShort } from '@/lib/helpers'

interface ElectronicInvoiceModalProps {
  invoice: ElectronicInvoiceData
  onClose: () => void
}

export default function ElectronicInvoiceModal({
  invoice,
  onClose,
}: ElectronicInvoiceModalProps) {
  const [copied, setCopied] = useState(false)
  const [sendingZalo, setSendingZalo] = useState(false)

  // Link tra cá»©u cĂ´ng khai trá»±c tuyáº¿n
  const publicUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/hoa-don/${invoice.lookupCode}`
    : `https://lop-hoc-thay-tho.vercel.app/hoa-don/${invoice.lookupCode}`

  // MĂ£ QR tra cá»©u
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(publicUrl)}`

  // LÆ°u hĂ³a Ä‘Æ¡n tá»± Ä‘á»™ng khi má»Ÿ
  React.useEffect(() => {
    void saveElectronicInvoice(invoice)
  }, [invoice])

  // In hĂ³a Ä‘Æ¡n
  const handlePrint = () => {
    window.print()
  }

  // Sao chĂ©p liĂªn káº¿t tra cá»©u
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl)
      setCopied(true)
      toast.success('ÄĂ£ sao chĂ©p link tra cá»©u hĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­!')
      setTimeout(() => setCopied(false), 2500)
    } catch {
      toast.error('KhĂ´ng thá»ƒ sao chĂ©p liĂªn káº¿t')
    }
  }

  // Gá»­i hĂ³a Ä‘Æ¡n qua Zalo cho phá»¥ huynh
  const handleSendZalo = async () => {
    const rawPhone = (invoice.phone || '').replace(/\D/g, '')
    if (!rawPhone) {
      toast.error('Há»c sinh chÆ°a cĂ³ sá»‘ Ä‘iá»‡n thoáº¡i Zalo cá»§a phá»¥ huynh!')
      return
    }

    setSendingZalo(true)
    const msg = `Lá»P Há»ŒC TOĂN THáº¦Y THá»Œ - HĂ“A ÄÆ N ÄIá»†N Tá»¬\n` +
      `KĂ­nh gá»­i QuĂ½ phá»¥ huynh há»c sinh ${invoice.studentName},\n` +
      `Tháº§y Thá» xin gá»­i HĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­ xĂ¡c nháº­n Ä‘Ă£ hoĂ n táº¥t thu há»c phĂ­:\n` +
      `â€¢ Sá»‘ hĂ³a Ä‘Æ¡n: ${invoice.invoiceNumber}\n` +
      `â€¢ MĂ´n há»c: ${invoice.items[0]?.name || 'Há»c phĂ­ mĂ´n ToĂ¡n'}\n` +
      `â€¢ Sá»‘ tiá»n: ${fmtVNDShort(invoice.totalAmount)} (${invoice.totalAmountWords})\n` +
      `â€¢ HĂ¬nh thá»©c: ${invoice.paymentMethod}\n` +
      `â€¢ ÄÆ¡n vá»‹ phĂ¡t hĂ nh: Há»˜ KINH DOANH NGUYá»„N LÆ¯Æ NG THá»Œ\n` +
      `QuĂ½ phá»¥ huynh cĂ³ thá»ƒ tra cá»©u vĂ  lÆ°u trá»¯ hĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­ chĂ­nh thá»©c táº¡i:\n${publicUrl}\n\n` +
      `TrĂ¢n trá»ng cáº£m Æ¡n QuĂ½ phá»¥ huynh Ä‘Ă£ Ä‘á»“ng hĂ nh cĂ¹ng Lá»›p há»c ToĂ¡n Tháº§y Thá»!`

    try {
      // 1. Thá»­ gá»­i qua Zalo robot daemon (port 3001)
      const res = await fetch('http://localhost:3001/send-direct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: rawPhone, message: msg }),
      })
      const data = await res.json()
      if (data.ok) {
        toast.success(`ÄĂ£ tá»± Ä‘á»™ng gá»­i hĂ³a Ä‘Æ¡n Zalo cho phá»¥ huynh ${invoice.studentName}!`)
      } else {
        // Fallback má»Ÿ Zalo Web
        window.open(`https://zalo.me/${rawPhone}`, '_blank')
        toast.success('ÄĂ£ má»Ÿ Zalo Ä‘á»ƒ gá»­i hĂ³a Ä‘Æ¡n cho phá»¥ huynh!')
      }
    } catch {
      window.open(`https://zalo.me/${rawPhone}`, '_blank')
      toast.success('ÄĂ£ má»Ÿ Zalo Ä‘á»ƒ gá»­i hĂ³a Ä‘Æ¡n cho phá»¥ huynh!')
    } finally {
      setSendingZalo(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full border border-slate-200 overflow-hidden my-auto print:border-none print:shadow-none print:max-w-none print:w-full print:m-0 print:rounded-none">
        
        {/* Thanh cĂ´ng cá»¥ (áº¨n khi In) */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 print:hidden border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm tracking-wide text-white">HĂ“A ÄÆ N ÄIá»†N Tá»¬ CHĂNH THá»¨C</span>
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  ÄĂƒ CHá»¨NG THá»°C
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">MĂ£ sá»‘: {invoice.invoiceNumber} â€¢ KĂ½ hiá»‡u: {invoice.symbol}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-white/15"
              title="In hĂ³a Ä‘Æ¡n ra giáº¥y A4 hoáº·c lÆ°u file PDF"
            >
              <Printer className="w-4 h-4 text-sky-300" />
              <span>In A4 / LÆ°u PDF</span>
            </button>

            <button
              onClick={handleSendZalo}
              disabled={sendingZalo}
              className="px-3.5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/25 cursor-pointer disabled:opacity-50"
              title="Gá»­i link hĂ³a Ä‘Æ¡n qua Zalo cho phá»¥ huynh"
            >
              <Send className="w-4 h-4 text-amber-300" />
              <span>{sendingZalo ? 'Äang gá»­i...' : 'Gá»­i Zalo'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-white/15"
              title="Sao chĂ©p link tra cá»©u hĂ³a Ä‘Æ¡n"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
              <span>{copied ? 'ÄĂ£ copy' : 'Copy link'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-colors ml-1 cursor-pointer"
              title="ÄĂ³ng modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Ná»™i dung HĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­ (Chuáº©n In áº¥n & Hiá»ƒn thá»‹) */}
        <div id="printable-invoice" className="p-8 sm:p-12 text-slate-800 bg-white font-sans selection:bg-teal-100 print:p-6 print:m-0">
          
          {/* Header 2 cá»™t */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b-2 border-slate-900/90 print:pb-4">
            
            {/* Cá»™t trĂ¡i: ThĂ´ng tin ÄÆ¡n vá»‹ phĂ¡t hĂ nh */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                <h1 className="font-black text-slate-900 text-base sm:text-lg tracking-tight uppercase">
                  {invoice.sellerName}
                </h1>
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

            {/* Cá»™t pháº£i: Quá»‘c hiá»‡u + Máº«u sá»‘ hĂ³a Ä‘Æ¡n */}
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

          {/* Khung ThĂ´ng tin NgÆ°á»i Ná»™p Tiá»n (KhĂ¡ch HĂ ng) */}
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

          {/* Báº£ng KĂª Chi Tiáº¿t Thu Há»c PhĂ­ */}
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

          {/* Pháº§n KĂ½ TĂªn & Con Dáº¥u KĂ½ Sá»‘ Äiá»‡n Tá»­ */}
          <div className="grid grid-cols-2 gap-8 mb-8 text-center print:mb-4">
            
            {/* NgÆ°á»i ná»™p tiá»n */}
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

            {/* ÄÆ¡n vá»‹ thu phĂ­ + Chá»¯ kĂ½ sá»‘ Ä‘iá»‡n tá»­ */}
            <div className="space-y-1 relative">
              <p className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                ÄÆ N Vá» THU PHĂ / NGÆ¯á»œI BĂN HĂ€NG
              </p>
              <p className="text-[11px] text-slate-500 italic">
                (KĂ½ Ä‘iá»‡n tá»­, Ä‘Ă³ng dáº¥u chá»©ng thá»±c)
              </p>
              
              {/* Con dáº¥u Ä‘iá»‡n tá»­ Äá» tiĂªu chuáº©n */}
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

          {/* Footer: MĂ£ QR tra cá»©u trá»±c tuyáº¿n & ThĂ´ng tin báº£o máº­t */}
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
                QuĂ½ phá»¥ huynh dĂ¹ng camera Ä‘iá»‡n thoáº¡i quĂ©t mĂ£ QR hoáº·c truy cáº­p Ä‘Æ°á»ng dáº«n sau Ä‘á»ƒ tra cá»©u vĂ  lÆ°u trá»¯ hĂ³a Ä‘Æ¡n gá»‘c:
              </p>
              <p className="font-mono text-blue-600 font-bold underline break-all mt-0.5">
                {publicUrl}
              </p>
              <p className="text-[10px] text-slate-400 italic mt-0.5">
                HĂ³a Ä‘Æ¡n Ä‘iá»‡n tá»­ Ä‘Æ°á»£c khá»Ÿi táº¡o vĂ  lÆ°u trá»¯ vÄ©nh viá»…n trĂªn há»‡ thá»‘ng quáº£n lĂ½ Lá»›p Há»c ToĂ¡n Tháº§y Thá».
              </p>
            </div>
          </div>

        </div>

        {/* ChĂ¢n modal (NĂºt Ä‘Ă³ng) */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end gap-2 print:hidden">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" /> In hĂ³a Ä‘Æ¡n
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
          >
            ÄĂ³ng
          </button>
        </div>

      </div>
    </div>
  )
}