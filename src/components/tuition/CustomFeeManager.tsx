import React, { useState, useMemo } from 'react'
import {
  Search, SlidersHorizontal, Edit3, RotateCcw,
  Users, Tag, Sparkles, Filter, ChevronRight, Check
} from 'lucide-react'
import { fmtVNDShort } from '@/lib/helpers'
import EditCustomFeeModal from './EditCustomFeeModal'
import type { Class, Student, Enrollment, TuitionNotification } from '@/types'

export interface CustomFeeRecord {
  amount: number
  note: string
  updatedAt?: string
}

interface CustomFeeManagerProps {
  classes: Class[]
  students: Student[]
  enrollments: Enrollment[]
  tuitionNotifications: TuitionNotification[]
  customFees: Record<string, CustomFeeRecord>
  onSaveCustomFee: (studentId: string, classId: string, amount: number, note: string) => Promise<void>
  onResetCustomFee: (studentId: string, classId: string) => Promise<void>
  selectedClassId: string
  onSelectClassId: (classId: string) => void
}

export default function CustomFeeManager({
  classes,
  students,
  enrollments,
  tuitionNotifications,
  customFees,
  onSaveCustomFee,
  onResetCustomFee,
  selectedClassId,
  onSelectClassId
}: CustomFeeManagerProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [onlyCustomized, setOnlyCustomized] = useState(false)
  const [editingRow, setEditingRow] = useState<{ student: Student; classObj: Class | null; currentAmount: number; currentNote: string } | null>(null)

  // Standard fee for a class
  const getStandardFeeForClass = (cls: Class | null | undefined): number => {
    if (!cls) return 600000
    const name = ((cls as any).class_name || cls.name || '').toLowerCase()
    const grade = ((cls as any).grade || '').toLowerCase()
    if (name.includes('6') || grade.includes('6')) return 1000000
    return 600000
  }

  // Active classes
  const activeClasses = useMemo(() => {
    return classes.filter(c => c.status === 'active')
  }, [classes])

  // Current selected class object
  const currentClass = useMemo(() => {
    return classes.find(c => c.id === selectedClassId) || null
  }, [classes, selectedClassId])

  // Base list of enrolled students depending on selected class or all classes
  const studentRows = useMemo(() => {
    let targetEnrollments = enrollments.filter(e => e.status === 'active')
    if (selectedClassId) {
      targetEnrollments = targetEnrollments.filter(e => e.class_id === selectedClassId)
    }

    const list = targetEnrollments.flatMap(e => {
      const student = students.find(s => s.id === e.student_id)
      if (!student || student.status !== 'active') return []
      const cls = classes.find(c => c.id === e.class_id) || null
      const standardFee = getStandardFeeForClass(cls)

      // Look up custom fee
      const customKey = student.id + '_' + e.class_id
      const custom = customFees[customKey] || customFees[student.id]

      // Also check if latest tuition notification has custom amount
      const notif = tuitionNotifications.find(n => n.student_id === student.id && n.class_id === e.class_id)

      let appliedAmount = standardFee
      let appliedNote = ''
      let isCustomized = false

      if (custom && custom.amount != null) {
        appliedAmount = Number(custom.amount)
        appliedNote = custom.note || ''
        isCustomized = appliedAmount !== standardFee
      } else if (notif && notif.amount != null && notif.amount !== standardFee) {
        appliedAmount = Number(notif.amount)
        appliedNote = (notif as any).note || ''
        isCustomized = true
      }

      return [{
        student,
        classObj: cls,
        standardFee,
        appliedAmount,
        appliedNote,
        isCustomized,
        diff: appliedAmount - standardFee
      }]
    })

    // Sắp xếp: Học sinh có học phí riêng lên đầu, rồi theo tên
    return list.sort((a, b) => {
      if (a.isCustomized && !b.isCustomized) return -1
      if (!a.isCustomized && b.isCustomized) return 1
      return (a.student.full_name || '').localeCompare(b.student.full_name || '', 'vi')
    })
  }, [enrollments, selectedClassId, students, classes, customFees, tuitionNotifications])

  // Filtered rows by search and toggle
  const filteredRows = useMemo(() => {
    return studentRows.filter(r => {
      if (onlyCustomized && !r.isCustomized) return false
      if (!searchTerm.trim()) return true
      const q = searchTerm.toLowerCase().trim()
      const name = (r.student.full_name || '').toLowerCase()
      const code = (r.student.student_code || '').toLowerCase()
      const phone = ((r.student as any).zalo || (r.student as any).parent_phone || '').replace(/\D/g, '')
      return name.includes(q) || code.includes(q) || phone.includes(q)
    })
  }, [studentRows, onlyCustomized, searchTerm])

  // Statistics
  const stats = useMemo(() => {
    const totalStudents = studentRows.length
    const customizedCount = studentRows.filter(r => r.isCustomized).length
    const totalDiscount = studentRows.reduce((sum, r) => sum + (r.diff < 0 ? Math.abs(r.diff) : 0), 0)
    const totalIncrease = studentRows.reduce((sum, r) => sum + (r.diff > 0 ? r.diff : 0), 0)
    return { totalStudents, customizedCount, totalDiscount, totalIncrease }
  }, [studentRows])

  return (
    <div className='space-y-6'>
      {/* Top Banner & Info */}
      <div className='bg-gradient-to-r from-indigo-900 via-teal-900 to-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/10'>
        <div className='space-y-2'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-black uppercase tracking-wider'>
            <SlidersHorizontal className='w-3.5 h-3.5' /> Quản Lý Học Phí Riêng Biệt Từng Học Sinh
          </div>
          <h2 className='text-2xl font-black tracking-tight'>Học Phí Linh Hoạt & Ưu Đãi Riêng</h2>
          <p className='text-sm text-slate-300 font-medium max-w-xl'>
            Tùy chỉnh số tiền học phí cho từng em học sinh (giảm học phí, học bổng, con giáo viên, học bù, học nửa tháng...). Khi gửi Zalo và tạo mã VietQR, hệ thống sẽ tự động dùng đúng mức tiền riêng này!
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className='grid grid-cols-2 gap-3 shrink-0'>
          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[140px]'>
            <p className='text-[11px] font-bold text-slate-300 uppercase'>Học phí riêng</p>
            <p className='text-2xl font-black text-amber-300 mt-0.5'>{stats.customizedCount} <span className='text-xs font-bold text-white/80'>HS</span></p>
          </div>
          <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[140px]'>
            <p className='text-[11px] font-bold text-slate-300 uppercase'>Tổng ưu đãi</p>
            <p className='text-2xl font-black text-emerald-300 mt-0.5'>{fmtVNDShort(stats.totalDiscount)}</p>
          </div>
        </div>
      </div>

      {/* Filter and Class Selector Bar */}
      <div className='card p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4 bg-white'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          {/* Class pills */}
          <div className='flex items-center gap-2 flex-wrap'>
            <button
              onClick={() => onSelectClassId('')}
              className={'px-4 py-2 rounded-xl text-xs font-black transition-all border cursor-pointer ' + (
                !selectedClassId
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20'
                  : 'bg-slate-50 hover:bg-teal-50 text-slate-700 border-slate-200'
              )}
            >
              🏫 TOÀN TRƯỜNG ({students.filter(s => s.status === 'active').length} HS)
            </button>
            {activeClasses.map(c => {
              const active = selectedClassId === c.id
              const name = (c as any).class_name || c.name
              return (
                <button
                  key={c.id}
                  onClick={() => onSelectClassId(c.id)}
                  className={'px-3.5 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ' + (
                    active
                      ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  )}
                >
                  {name}
                </button>
              )
            })}
          </div>

          {/* Quick Toggle for Only Customized */}
          <label className='flex items-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 select-none text-xs font-bold text-slate-700 transition-colors'>
            <input
              type='checkbox'
              checked={onlyCustomized}
              onChange={e => setOnlyCustomized(e.target.checked)}
              className='w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer'
            />
            <span>Chỉ xem học sinh có học phí riêng ({stats.customizedCount})</span>
          </label>
        </div>

        {/* Search Input */}
        <div className='relative'>
          <Search className='w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400' />
          <input
            type='text'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder='Tìm theo tên học sinh, mã số học sinh hoặc số điện thoại Zalo...'
            className='w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none text-sm text-slate-800'
          />
        </div>
      </div>

      {/* Main Table */}
      <div className='card rounded-3xl border border-slate-200 shadow-xs overflow-hidden bg-white'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='bg-slate-50/80 border-b border-slate-100'>
                <th className='px-5 py-3.5 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Học sinh</th>
                <th className='px-5 py-3.5 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Lớp học</th>
                <th className='px-5 py-3.5 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Chuẩn của lớp</th>
                <th className='px-5 py-3.5 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Học phí áp dụng riêng</th>
                <th className='px-5 py-3.5 text-left text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Lý do / Ghi chú</th>
                <th className='px-5 py-3.5 text-right text-slate-700 font-extrabold text-xs uppercase tracking-wider'>Thao tác</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={6} className='text-center py-12 text-slate-400 font-medium italic'>
                    Không tìm thấy học sinh nào phù hợp.
                  </td>
                </tr>
              ) : (
                filteredRows.map(row => {
                  const phone = ((row.student as any).zalo || (row.student as any).parent_phone || '').replace(/\D/g, '')
                  return (
                    <tr
                      key={row.student.id + '_' + (row.classObj?.id || '')}
                      className={'hover:bg-slate-50/80 transition-colors ' + (row.isCustomized ? 'bg-amber-50/20' : '')}
                    >
                      {/* Học sinh */}
                      <td className='px-5 py-3.5'>
                        <div className='flex items-center gap-3'>
                          <div className={'w-9 h-9 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 ' + (
                            row.isCustomized ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'
                          )}>
                            {row.student.full_name?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className='flex items-center gap-1.5'>
                              <p className='font-extrabold text-slate-900'>{row.student.full_name}</p>
                              {row.isCustomized && (
                                <span className='px-1.5 py-0.2 rounded text-[10px] font-black bg-amber-100 text-amber-800 border border-amber-200'>
                                  RIÊNG
                                </span>
                              )}
                            </div>
                            <div className='flex items-center gap-2 mt-0.5'>
                              <span className='text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-1 rounded'>
                                {row.student.student_code}
                              </span>
                              {phone && (
                                <span className='text-[11px] font-mono text-slate-400'>
                                  📞 {phone}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Lớp học */}
                      <td className='px-5 py-3.5'>
                        <span className='font-bold text-slate-800'>
                          {row.classObj ? ((row.classObj as any).class_name || row.classObj.name) : '—'}
                        </span>
                      </td>

                      {/* Chuẩn lớp */}
                      <td className='px-5 py-3.5 font-mono text-slate-500 font-semibold'>
                        {fmtVNDShort(row.standardFee)}
                      </td>

                      {/* Mức học phí áp dụng riêng */}
                      <td className='px-5 py-3.5'>
                        <div className='flex items-center gap-2'>
                          <span className={'font-mono text-base font-black ' + (
                            row.isCustomized ? 'text-indigo-900 font-extrabold' : 'text-slate-800'
                          )}>
                            {fmtVNDShort(row.appliedAmount)}
                          </span>
                          {row.diff !== 0 && (
                            <span className={'text-[11px] font-bold px-1.5 py-0.5 rounded ' + (
                              row.diff < 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                            )}>
                              {row.diff < 0 ? '-' + fmtVNDShort(Math.abs(row.diff)) : '+' + fmtVNDShort(row.diff)}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Lý do / Ghi chú */}
                      <td className='px-5 py-3.5'>
                        {row.appliedNote ? (
                          <span className='inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200'>
                            🏷️ {row.appliedNote}
                          </span>
                        ) : (
                          <span className='text-xs text-slate-300 italic font-medium'>Theo chuẩn lớp</span>
                        )}
                      </td>

                      {/* Thao tác */}
                      <td className='px-5 py-3.5 text-right'>
                        <div className='flex items-center justify-end gap-1.5'>
                          <button
                            onClick={() => setEditingRow({
                              student: row.student,
                              classObj: row.classObj,
                              currentAmount: row.appliedAmount,
                              currentNote: row.appliedNote
                            })}
                            className='px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-all flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95'
                            title='Chỉnh sửa mức học phí riêng cho học sinh này'
                          >
                            <Edit3 className='w-3.5 h-3.5' />
                            Đổi học phí
                          </button>

                          {row.isCustomized && (
                            <button
                              onClick={() => {
                                if (row.classObj && window.confirm('Đặt lại học phí em ' + row.student.full_name + ' về chuẩn lớp (' + fmtVNDShort(row.standardFee) + ')?')) {
                                  void onResetCustomFee(row.student.id, row.classObj.id)
                                }
                              }}
                              className='p-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all cursor-pointer'
                              title='Khôi phục về mức học phí chuẩn của lớp'
                            >
                              <RotateCcw className='w-3.5 h-3.5' />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingRow && (
        <EditCustomFeeModal
          isOpen={true}
          onClose={() => setEditingRow(null)}
          student={editingRow.student}
          className={editingRow.classObj ? ((editingRow.classObj as any).class_name || editingRow.classObj.name) : ''}
          standardClassFee={getStandardFeeForClass(editingRow.classObj)}
          currentAmount={editingRow.currentAmount}
          currentNote={editingRow.currentNote}
          onSave={async (amt, note) => {
            if (editingRow.classObj) {
              await onSaveCustomFee(editingRow.student.id, editingRow.classObj.id, amt, note)
            }
          }}
          onResetToStandard={async () => {
            if (editingRow.classObj) {
              await onResetCustomFee(editingRow.student.id, editingRow.classObj.id)
            }
          }}
        />
      )}
    </div>
  )
}
