import React from 'react'
import { Phone, MessageCircle, MapPin, Award, BookOpen, Heart, Quote, X, ExternalLink } from 'lucide-react'

interface TeacherProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TEACHER_INFO = {
  name: 'Thầy Nguyễn Lương Thọ',
  title: 'Giáo viên phụ trách • Lớp Học Thầy Thọ',
  phone: '0345.833.133',
  phoneRaw: '0345833133',
  zaloUrl: 'https://zalo.me/0345833133',
  address: 'Số nhà 10, Ngõ 32 Hồ Phi Chấn, Phường Thành Sen, TP. Hà Tĩnh',
  quote: 'Cố gắng không bỏ cuộc. Quả ngọt luôn cần thời gian.',
  highlights: [
    {
      icon: Award,
      color: 'text-amber-500 bg-amber-50 border-amber-200',
      title: '10 năm kinh nghiệm đào tạo',
      desc: 'Chuyên luyện thi chuyển cấp, thi tốt nghiệp THPT, đại học và kỳ thi đánh giá năng lực tại các trung tâm uy tín.'
    },
    {
      icon: BookOpen,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      title: 'Chuyên môn & Phương pháp',
      desc: 'Luôn trau dồi kiến thức, cập nhật chương trình mới và đồng hành sát sao cùng chất lượng học tập của học sinh.'
    },
    {
      icon: Heart,
      color: 'text-rose-500 bg-rose-50 border-rose-200',
      title: 'Tận tâm & Thấu hiểu',
      desc: 'Sẵn sàng lắng nghe, trò chuyện, tạo động lực và đồng hành cùng học trò vượt qua những phần kiến thức khó.'
    }
  ]
}

export const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-teal-100 overflow-hidden relative flex flex-col max-h-[90vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all backdrop-blur-sm"
          title="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header với ảnh Thầy Thọ & gradient sang trọng */}
        <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-800 p-6 pt-7 text-white text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative inline-block mb-3">
            <img
              src="/thay_tho_avatar.png"
              alt={TEACHER_INFO.name}
              className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white/90 shadow-xl"
            />
            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white shadow-sm flex items-center justify-center text-[10px]" title="Đang trực tuyến">
              ✓
            </span>
          </div>

          <h2 className="text-xl font-black tracking-tight">{TEACHER_INFO.name}</h2>
          <p className="text-teal-100 text-xs font-medium mt-1">{TEACHER_INFO.title}</p>

          {/* Châm ngôn trích dẫn */}
          <div className="mt-3.5 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/15 inline-flex items-center gap-2 max-w-md">
            <Quote className="w-4 h-4 text-amber-300 shrink-0 rotate-180" />
            <span className="text-xs text-amber-200 font-medium italic">
              {TEACHER_INFO.quote}
            </span>
          </div>
        </div>

        {/* Nội dung chi tiết */}
        <div className="p-5 overflow-y-auto space-y-4 text-left">
          {/* Các điểm nổi bật */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Giới thiệu & Triết lý giảng dạy
            </h3>
            {TEACHER_INFO.highlights.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${item.color}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Địa chỉ & liên hệ */}
          <div className="pt-2 border-t border-slate-100 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Thông tin liên hệ & Cơ sở
            </h3>

            {/* Địa chỉ lớp */}
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-teal-50/60 border border-teal-100 text-slate-700 text-xs">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-teal-900 font-bold block mb-0.5">Địa chỉ lớp học:</strong>
                <span>{TEACHER_INFO.address}</span>
              </div>
            </div>

            {/* Nút gọi và nút Zalo */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={`tel:${TEACHER_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi: {TEACHER_INFO.phone}</span>
              </a>

              <a
                href={TEACHER_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nhắn tin Zalo</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer modal */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Lớp Học Thầy Thọ • Toán & KHTN</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium transition-all"
          >
            Đóng lại
          </button>
        </div>
      </div>
    </div>
  )
}
