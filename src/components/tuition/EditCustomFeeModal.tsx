import React, { useState, useEffect } from 'react'
import Modal from '@/components/Modal'
import { Check, RotateCcw, Banknote, Tag } from 'lucide-react'
import { fmtVNDShort } from '@/lib/helpers'
import type { Student } from '@/types'

interface EditCustomFeeModalProps {
  isOpen: boolean
  onClose: () => void
  student: Student | null
  className?: string
  standardClassFee: number
  currentAmount?: number
  currentNote?: string
  onSave: (amount: number, note: string) => Promise<void>
  onResetToStandard?: () => Promise<void>
}

const PRESET_AMOUNTS = [
  { label: '0đ (Miễn phí)', value: 0 },
  { label: '300.000đ', value: 300000 },
  { label: '400.000đ', value: 400000 },
  { label: '500.000đ', value: 500000 },
  { label: '600.000đ', value: 600000 },
  { label: '800.000đ', value: 800000 },
  { label: '1.000.000đ', value: 1000000 },
  { label: '1.200.000đ', value: 1200000 },
  { label: '1.500.000đ', value: 1500000 },
]

const PRESET_REASONS = [
  'Giảm 20% học sinh giỏi',
  'Anh em ruột cùng học (-20%)',
  'Học nửa tháng (nhập học muộn)',
  'Miễn giảm hoàn cảnh khó khăn',
  'Học phí kèm riêng 1-1',
  'Đã đóng trừ vào tháng trước'
]

export default function EditCustomFeeModal({
  isOpen,
  onClose,
  student,
  className = '',
  standardClassFee,
  currentAmount,
  currentNote = '',
  onSave,
  onResetToStandard
}: EditCustomFeeModalProps) {
  const [amountStr, setAmountStr] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [saving, setSaving] = useState(false)
  const [resetting, setResetting] = useState(false)

  useEffect(() => {
    if (student) {
      const initialAmt = currentAmount != null ? currentAmount : standardClassFee
      setAmountStr(String(initialAmt))
      setNote(currentNote || '')
    }
  }, [student, currentAmount, standardClassFee, currentNote, isOpen])

  if (!isOpen || !student) return null

  const numAmount = parseFloat(amountStr) || 0
  const isCustomized = currentAmount != null && currentAmount !== standardClassFee
  const diff = numAmount - standardClassFee

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (numAmount < 0) return
    setSaving(true)
    try {
      await onSave(numAmount, note.trim())
      onClose()
    } finally {
      setSaving(false)
    }
  }

  const handleReset = async () => {
    if (!onResetToStandard) return
    if (!window.confirm('Khôi phục mức học phí của em ' + student.full_name + ' về mức chuẩn của lớp (' + fmtVNDShort(standardClassFee) + ')?')) return
    setResetting(true)
    try {
      await onResetToStandard()
      onClose()
    } finally {
      setResetting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='⚙️ Thiết Lập Học Phí Riêng Cho Học Sinh'
      maxWidth='max-w-lg'
    >
      <form onSubmit={handleSubmit} className='space-y-5 pt-1'>
        {/* Student Info Card */}
        <div className='bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200/80 rounded-2xl p-4 flex items-center justify-between gap-3'>
          <div>
            <div className='flex items-center gap-2'>
              <h3 className='text-base font-extrabold text-teal-950'>{student.full_name}</h3>
              <span className='px-2 py-0.5 rounded-md font-mono text-xs font-bold bg-white text-teal-700 border border-teal-200'>
                {student.student_code}
              </span>
            </div>
            <p className='text-xs text-teal-700/80 mt-1 font-semibold'>
              Lớp: <span className='font-bold text-teal-900'>{className || 'Chưa phân lớp'}</span>
            </p>
          </div>
          <div className='text-right'>
            <p className='text-[11px] uppercase tracking-wider text-teal-600 font-extrabold'>Chuẩn lớp</p>
            <p className='text-sm font-extrabold font-mono text-teal-900'>{fmtVNDShort(standardClassFee)}</p>
          </div>
        </div>

        {/* Input Fee */}
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <label className='text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5'>
              <Banknote className='w-4 h-4 text-teal-600' />
              Mức học phí áp dụng riêng (VNĐ)
            </label>
            {diff !== 0 && (
              <span className={'text-xs font-black px-2 py-0.5 rounded-full ' + (diff < 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800')}>
                {diff < 0 ? 'Giảm ' + fmtVNDShort(Math.abs(diff)) : 'Tăng ' + fmtVNDShort(diff)}
              </span>
            )}
          </div>
          <div className='relative'>
            <input
              type='number'
              step='10000'
              min='0'
              required
              value={amountStr}
              onChange={e => setAmountStr(e.target.value)}
              placeholder='Nhập số tiền học phí...'
              className='w-full px-4 py-3 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none font-mono text-xl font-black text-slate-800 transition-all'
            />
            <span className='absolute right-4 top-1/2 -translate-y-1/2 text-sm font-extrabold text-slate-400'>
              VNĐ
            </span>
          </div>
          <p className='text-xs font-semibold text-slate-500'>
            Số tiền hiển thị: <span className='font-bold text-teal-700 font-mono'>{numAmount.toLocaleString('vi-VN')} VNĐ</span>
          </p>
        </div>

        {/* Preset Amounts */}
        <div className='space-y-1.5'>
          <p className='text-[11px] font-extrabold uppercase tracking-wider text-slate-400'>Chọn nhanh số tiền:</p>
          <div className='flex flex-wrap gap-1.5'>
            {PRESET_AMOUNTS.map(p => {
              const active = numAmount === p.value
              return (
                <button
                  type='button'
                  key={p.value}
                  onClick={() => setAmountStr(String(p.value))}
                  className={'px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ' + (
                    active
                      ? 'bg-teal-600 text-white border-teal-600 shadow-sm shadow-teal-600/20 scale-105'
                      : 'bg-slate-50 hover:bg-teal-50 text-slate-700 border-slate-200 hover:border-teal-300'
                  )}
                >
                  {p.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Note / Reason */}
        <div className='space-y-2'>
          <label className='text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5'>
            <Tag className='w-4 h-4 text-teal-600' />
            Lý do / Ghi chú điều chỉnh
          </label>
          <input
            type='text'
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder='Ví dụ: Giảm 20% học sinh giỏi, Học nửa tháng...'
            className='w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none text-sm text-slate-800'
          />

          {/* Preset Reasons */}
          <div className='flex flex-wrap gap-1.5 pt-1'>
            {PRESET_REASONS.map(r => (
              <button
                type='button'
                key={r}
                onClick={() => setNote(r)}
                className='text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-800 transition-colors cursor-pointer border border-slate-200/60'
              >
                + {r}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='pt-3 border-t border-slate-100 flex items-center justify-between gap-3'>
          <div>
            {isCustomized && onResetToStandard && (
              <button
                type='button'
                onClick={handleReset}
                disabled={resetting}
                className='px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-all flex items-center gap-1.5 cursor-pointer'
              >
                <RotateCcw className='w-3.5 h-3.5' />
                {resetting ? 'Đang đặt lại...' : 'Về chuẩn lớp'}
              </button>
            )}
          </div>

          <div className='flex items-center gap-2'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer'
            >
              Hủy
            </button>
            <button
              type='submit'
              disabled={saving}
              className='px-5 py-2.5 rounded-xl text-xs font-extrabold bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
            >
              <Check className='w-4 h-4' />
              {saving ? 'Đang lưu...' : 'Lưu mức học phí'}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
