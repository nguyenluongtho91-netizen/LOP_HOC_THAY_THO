import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import toast from 'react-hot-toast'

export default function Login() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading]   = useState(false)
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || !password) { toast.error('Vui lòng nhập đủ thông tin'); return }
    setLoading(true)
    const cleanEmail = email.includes('@') ? email.trim() : `${email.trim()}@gmail.com`
    try {
      await login(cleanEmail, password)
      // Đặt cờ quyền giáo viên và xóa cờ học sinh nếu có
      localStorage.setItem('is_teacher_mode', 'true')
      localStorage.setItem('role', 'teacher')
      localStorage.removeItem('current_student')
      toast.success('Đăng nhập thành công! 🎉')
      void navigate('/')
    } catch {
      toast.error('Sai email hoặc mật khẩu')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(135deg, #ccfbf1 0%, #5eead4 50%, #0d9488 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md animate-fade-in">
        {/* BANNER DÀNH CHO HỌC SINH VÀO ÔN THI TRỰC TIẾP KHÔNG CẦN TÀI KHOẢN GIÁO VIÊN */}
        <div className="mb-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border-2 border-teal-400/50 shadow-xl text-white text-center space-y-2">
          <div className="text-[11px] font-black uppercase text-amber-400 tracking-wider">🌟 DÀNH CHO HỌC SINH ÔN THI HÓA 10, 11, 12</div>
          <p className="text-xs text-slate-300">Không cần tài khoản quản trị! Bạn có thể vào học ngay:</p>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => navigate('/hoa12-chuong1')}
              className="px-2 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 rounded-xl font-black text-xs text-white shadow-md active:scale-95 transition-all"
            >
              👑 Hóa 12
            </button>
            <button
              type="button"
              onClick={() => navigate('/hoa11-chuong1')}
              className="px-2 py-2 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-500 rounded-xl font-black text-xs text-white shadow-md active:scale-95 transition-all"
            >
              ⚖️ Hóa 11
            </button>
            <button
              type="button"
              onClick={() => navigate('/hoa10-chuong1')}
              className="px-2 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 rounded-xl font-black text-xs text-white shadow-md active:scale-95 transition-all"
            >
              ⚛️ Hóa 10
            </button>
          </div>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full mt-2 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-teal-300 border border-slate-700 transition-all flex items-center justify-center gap-1.5"
          >
            <span>🏠 Về Cổng Học Tập & Thi Trực Tuyến</span>
          </button>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-teal-200 overflow-hidden">
          {/* Top banner */}
          <div
            className="px-8 pt-10 pb-8 text-center"
            style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6, #5eead4)' }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg backdrop-blur-sm">
              <GraduationCap className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-white font-extrabold text-2xl tracking-wide">LỚP HỌC THẦY THỌ</h1>
            <p className="text-white/75 text-sm mt-1 uppercase tracking-widest text-xs font-semibold">Hệ thống quản lý trung tâm</p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => { void handleSubmit(e) }} className="p-8">
            <h2 className="text-gray-800 font-extrabold text-xl mb-6 text-center">Đăng nhập</h2>

            <div className="space-y-5">
              {/* Email */}
              <div>
                <label className="label">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-teal-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="giaoviên@example.com"
                    className="input pl-10"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="label">Mật khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-teal-500" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="input pl-10 pr-10"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(p => !p)}
                    className="absolute right-3.5 top-3 text-teal-400 hover:text-teal-600 transition-colors"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading} className="btn-teal w-full flex items-center justify-center gap-2 text-base py-3">
                {loading
                  ? <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  : <><span>Đăng nhập</span><ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-gray-400">
              Liên hệ quản trị viên để được cấp tài khoản
            </p>
          </form>
        </div>

        <p className="text-center text-white/60 text-xs mt-4">
          © 2025 EduCenter – Powered by React + Supabase
        </p>
      </div>
    </div>
  )
}
