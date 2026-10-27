import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'

class GlobalErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: any }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error }
  }

  componentDidCatch(error: any, info: any) {
    console.error('App ErrorBoundary caught:', error, info)
  }

  handleHardRefresh = (targetPath?: string) => {
    try {
      sessionStorage.clear()
      localStorage.removeItem('__app_reload_guard__')
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => caches.delete(name))
        })
      }
    } catch (e) {}
    const destination = targetPath || window.location.pathname
    window.location.href = destination + '?t=' + Date.now()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-3xl mb-4 border border-amber-400/30">
            ⚠️
          </div>
          <h2 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">Hệ Thống Đang Nâng Cấp Bản Mới</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-4 leading-relaxed">
            Hệ thống vừa cập nhật giao diện mới nhất. Em vui lòng bấm nút bên dưới để tải lại nhé!
          </p>

          {this.state.error && (
            <div className="mb-6 p-3 bg-red-950/70 border border-red-500/40 rounded-xl text-left text-xs font-mono text-red-200 max-w-md w-full max-h-36 overflow-auto break-all whitespace-pre-wrap select-all">
              <div className="font-bold text-red-400 mb-1">Chi tiết:</div>
              {this.state.error?.message || String(this.state.error)}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => this.handleHardRefresh()}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
            >
              🔄 Tải lại trang ngay
            </button>
            <button
              onClick={() => this.handleHardRefresh('/hoa12')}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
            >
              🧪 Vào trực tiếp Hóa 12
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            style: { borderRadius: '12px', fontFamily: 'inherit', fontSize: '14px' },
            success: { iconTheme: { primary: '#0d9488', secondary: '#fff' } },
          }}
        />
      </BrowserRouter>
    </GlobalErrorBoundary>
  </StrictMode>,
)
