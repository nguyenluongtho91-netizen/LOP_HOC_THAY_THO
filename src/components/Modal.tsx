import React, { useEffect } from 'react'
import { X, ArrowLeft } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

const sizeClass: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
  '2xl': 'max-w-4xl',
  '3xl': 'max-w-6xl',
}

export default function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-3 pt-6 pb-6 sm:px-6 sm:pt-10 sm:pb-10">
      
      {/* Lớp nền đen mờ */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* KHUNG MODAL */}
      <div 
        className={`relative flex flex-col bg-white rounded-2xl shadow-2xl w-full ${sizeClass[size]} overflow-hidden z-10`}
        style={{ maxHeight: 'calc(100vh - 3rem)' }}
      >
        {/* HEADER: Có nút Quay lại rõ ràng */}
        <div className="shrink-0 flex items-center justify-between px-3 sm:px-6 py-3 bg-gradient-to-r from-teal-700 to-teal-600 text-white border-b border-teal-500/30">
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-all cursor-pointer shrink-0 shadow-xs"
              title="Bấm để quay lại"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <h2 className="text-white font-black text-sm sm:text-base truncate">{title}</h2>
          </div>
          
          <button 
            type="button"
            onClick={onClose} 
            className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-1.5 transition-all shrink-0 ml-2 cursor-pointer"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </div>
      
    </div>
  )
}
