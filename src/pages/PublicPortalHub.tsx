// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap, BookOpen, Trophy, Sparkles, Clock, CheckCircle2,
  Atom, Zap, ArrowRight, ShieldCheck, Calculator, Play, Star,
  Compass, Users, Check, Flame, ChevronRight, LogIn, ExternalLink
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import {
  fetchHoa12AccessConfig,
  getHoa12AccessConfigSync,
  isChapterLocked,
  isGradeLocked,
  type GranularAccessConfig
} from '@/services/hoa12AccessControlService';


export default function PublicPortalHub() {
  const navigate = useNavigate();
  const { user, isAdmin } = useAuthStore();
  const [selectedGrade, setSelectedGrade] = useState<'12' | '11' | '10'>('12');
  const [accessConfig, setAccessConfig] = React.useState<GranularAccessConfig>(() => getHoa12AccessConfigSync());

  React.useEffect(() => {
    fetchHoa12AccessConfig().then((cfg) => setAccessConfig({ ...cfg }));
  }, []);

  const isEffectiveTeacher = Boolean(
    (user && (user.role === 'teacher' || user.role === 'admin')) ||
    (typeof window !== 'undefined' && (
      window.location.search.includes('teacher=1') ||
      window.location.search.includes('admin=1') ||
      localStorage.getItem('is_teacher_mode') === 'true' ||
      localStorage.getItem('role') === 'teacher' ||
      localStorage.getItem('role') === 'admin'
    ))
  );

  // Trạng thái khóa từng chuyên đề đối với học sinh
  const isH12C1Locked = !isEffectiveTeacher && (isChapterLocked('h12_c1', false, accessConfig) || isChapterLocked('c1', false, accessConfig));
  const isH12C2Locked = !isEffectiveTeacher && (isChapterLocked('h12_c2', false, accessConfig) || isChapterLocked('c2', false, accessConfig));
  const isH12C5Locked = !isEffectiveTeacher && (isChapterLocked('h12_c5', false, accessConfig) || isChapterLocked('c5', false, accessConfig));
  const isH11C1Locked = !isEffectiveTeacher && isChapterLocked('h11_c1', false, accessConfig);
  const isH11C2Locked = !isEffectiveTeacher && isChapterLocked('h11_c2', false, accessConfig);
  const isH10C1Locked = !isEffectiveTeacher && isChapterLocked('h10_c1', false, accessConfig);
  const isH10C2Locked = !isEffectiveTeacher && isChapterLocked('h10_c2', false, accessConfig);


  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-indigo-950 to-purple-950 text-teal-200 text-xs py-2 px-4 text-center border-b border-teal-800/40 font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
        <span>Hệ thống ôn luyện chuẩn Ma trận Bộ GD&ĐT 2025 • Đã cập nhật đầy đủ Khối 10, 11, 12!</span>
      </div>

      {/* Main Navigation Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 border border-teal-400/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-black text-base sm:text-lg text-white tracking-wide">
                LỚP HỌC THẦY THỌ
              </h1>
              <p className="text-[11px] text-teal-400 font-bold tracking-wider uppercase">
                Hệ Thống Học Tập & Thi Trực Tuyến
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => navigate('/thpt')}
              className="px-3.5 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500 text-amber-300 hover:text-slate-950 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Trang Quản Trị: Mở / Khóa Đề thi & Xem đáp án"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Quản Trị Đề THPT</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/thi')}
              className="px-3.5 py-2 rounded-xl bg-teal-600/20 border border-teal-500/40 hover:bg-teal-600 text-teal-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Cổng Thi Học Sinh</span>
            </button>

            {user ? (
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg shadow-teal-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Bảng Quản Trị</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Đăng Nhập Thầy Cô</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.25),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Nền tảng EdTech Pro tinh gọn – Khoa học – Không rối mắt</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Kho Học Liệu & Phòng Thi Chuẩn <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-300 to-purple-400">
              Bộ Giáo Dục & Đào Tạo 2025
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Học sinh được trải nghiệm trọn bộ lý thuyết cô đọng, bài tập trắc nghiệm 3 phần (4 lựa chọn, Đúng/Sai, Trả lời ngắn) và phòng thi bấm giờ mô phỏng đề thi THPT Quốc Gia với đáp án và lời giải chi tiết.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {(!isH12C1Locked || isEffectiveTeacher) && (
              <button
                type="button"
                onClick={() => navigate('/hoa12-chuong1')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 hover:from-teal-500 text-white font-black text-sm shadow-xl shadow-indigo-600/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Vào Học Hóa 12 Ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => navigate('/thi')}
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-extrabold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Phòng Thi Học Sinh (Theo Mã)</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/thpt')}
              className="px-6 py-3.5 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 font-extrabold text-sm transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Trang Quản Trị & Đóng/Mở Đề</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grade Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto shadow-2xl">
          <button
            type="button"
            onClick={() => setSelectedGrade('12')}
            className={`flex-1 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              selectedGrade === '12'
                ? 'bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>👑</span>
            <span>Khối 12 (2k7)</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedGrade('11')}
            className={`flex-1 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              selectedGrade === '11'
                ? 'bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>⚖️</span>
            <span>Khối 11 (2k8)</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedGrade('10')}
            className={`flex-1 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              selectedGrade === '10'
                ? 'bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>⚛️</span>
            <span>Khối 10 (2k9)</span>
          </button>
        </div>
      </section>

      {/* Chapters & Content Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-16">
        {/* KHỐI 12 */}
        {selectedGrade === '12' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center sm:text-left">
              <div className="text-xs font-black uppercase text-teal-400 tracking-wider">🌟 HÓA HỌC 12 – KỲ THI THPT QUỐC GIA 2025</div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Trọn Bộ Chương 1, Chương 2 & Chương 5 Đã Hoàn Thiện Xuất Sắc</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* C1 Card */}
              {!isH12C1Locked && (
                <div className="bg-slate-900 border border-slate-800 hover:border-indigo-500/60 transition-all rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 font-black text-xs rounded-xl font-mono">
                      CHƯƠNG 1
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 7 Đề Chuẩn Bộ 2025
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors">
                    Chương 1: Ester – Lipid
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Đầy đủ 3 bài chuyên đề: Ester (Đồng phân, danh pháp, tính chất), Lipid & Chất béo (Xà phòng hóa, chỉ số xà phòng), Xà phòng và chất giặt rửa tổng hợp.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300 font-medium">
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📚 Lý thuyết & Dạng toán</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">⚡ 7 Đề thi bấm giờ 50p</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">💡 Sổ tay ghi nhớ nhanh</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/hoa12-chuong1')}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Mở Học Liệu & Thi Thử Chương 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              )}

              {/* C2 Card */}
              {!isH12C2Locked && (
                <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/60 transition-all rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 font-black text-xs rounded-xl font-mono">
                      CHƯƠNG 2
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 4 Đề Chuẩn Bộ 2025
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    Chương 2: Carbohydrate
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Trọng tâm: Glucose, Fructose, Saccharose, Maltose, Tinh bột & Cellulose. Tính chất tráng bạc, thủy phân, phản ứng lên men và bài toán thực tế.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300 font-medium">
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">🍇 Bài 4, 5, 6 Lý thuyết</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">⚡ 4 Đề thi bấm giờ 50p</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">🧪 Sổ tay Carbohydrate</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/hoa12-chuong2')}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Mở Học Liệu & Thi Thử Chương 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              )}

              {/* C5 Card */}
              {!isH12C5Locked && (
                <div className="bg-slate-900 border border-slate-800 hover:border-teal-500/60 transition-all rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-teal-500/20 border border-teal-400/30 text-teal-400 font-black text-xs rounded-xl font-mono">
                      CHƯƠNG 5
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 4 Đề Chuẩn Bộ 2025
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white group-hover:text-teal-400 transition-colors">
                    Chương 5: Pin Điện Hóa & Điện Phân
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Chuyên sâu: Thế điện cực chuẩn, cặp oxi hóa - khử, pin Galvani, nguyên tắc điện phân dung dịch & nóng chảy, định luật Faraday và bài toán điện phân đồ thị.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300 font-medium">
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">🔋 Pin Galvani & Ăn mòn</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">⚡ 4 Đề thi bấm giờ 50p</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📐 Công thức Faraday</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/hoa12-chuong5')}
                  className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Mở Học Liệu & Thi Thử Chương 5</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              )}
</div>
          </div>
        )}

        {/* KHỐI 11 */}
        {selectedGrade === '11' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center sm:text-left">
              <div className="text-xs font-black uppercase text-teal-400 tracking-wider">🌟 HÓA HỌC 11 – 2k8 NĂM HỌC 2024 - 2025</div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Chương 1: Cân Bằng Hóa Học & Chương 2: Nitrogen – Sulfur</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* K11 C1 */}
              {!isH11C1Locked && (
                <div className="bg-slate-900 border border-slate-800 hover:border-indigo-500/60 transition-all rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 font-black text-xs rounded-xl font-mono">
                      CHƯƠNG 1
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 2 Đề Kiểm Tra + 3 Bài Học
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors">
                    Chương 1: Cân Bằng Hóa Học
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Khái niệm phản ứng thuận nghịch, hằng số cân bằng Kc, nguyên lí Le Chatelier, thuyết acid - base Brønsted, pH và phản ứng chuẩn độ dung dịch.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300 font-medium">
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">⚖️ Hằng số Kc & Le Chatelier</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">🧪 Thuyết Brønsted & pH</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📝 2 Đề kiểm tra chuẩn</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/hoa11-chuong1')}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Mở Học Liệu & Thi Thử Hóa 11 (Chương 1)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              )}

              {/* K11 C2 */}
              {!isH11C2Locked && (
                <div className="bg-slate-900 border border-slate-800 hover:border-teal-500/60 transition-all rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-teal-500/20 border border-teal-400/30 text-teal-400 font-black text-xs rounded-xl font-mono">
                      CHƯƠNG 2
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 2 Đề Kiểm Tra + 6 Bài Học
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white group-hover:text-teal-400 transition-colors">
                    Chương 2: Nitrogen & Sulfur
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Trọn vẹn đơn chất Nitrogen, hợp chất Ammonia, muối ammonium, một số hợp chất N-O & mưa acid, Sulfur, Sulfur dioxide, Sulfuric acid và muối sulfate.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300 font-medium">
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">💨 Ammonia & Muối ammonium</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">💥 Axit HNO3 & H2SO4 đặc</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📝 2 Đề kiểm tra chuẩn</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/hoa11-chuong2')}
                  className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Mở Học Liệu & Thi Thử Hóa 11 (Chương 2)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              )}
</div>
          </div>
        )}

        {/* KHỐI 10 */}
        {selectedGrade === '10' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center sm:text-left">
              <div className="text-xs font-black uppercase text-teal-400 tracking-wider">🌟 HÓA HỌC 10 – 2k9 NĂM HỌC 2024 - 2025</div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Chương 1: Cấu Tạo Nguyên Tử & Chương 2: Bảng Tuần Hoàn</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* K10 C1 */}
              {!isH10C1Locked && (
                <div className="bg-slate-900 border border-slate-800 hover:border-indigo-500/60 transition-all rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 font-black text-xs rounded-xl font-mono">
                      CHƯƠNG 1
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 2 Đề Kiểm Tra + 4 Bài Học
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors">
                    Chương 1: Cấu Tạo Nguyên Tử
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Khối lượng và kích thước nguyên tử, hạt proton, neutron, electron, số hiệu nguyên tử, đồng vị, nguyên tử khối trung bình, cấu trúc lớp vỏ electron và orbital nguyên tử.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300 font-medium">
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">⚛️ Hạt p-n-e & Đồng vị</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">⚡ Cấu hình electron & AO</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📝 2 Đề kiểm tra chuẩn</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/hoa10-chuong1')}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Mở Học Liệu & Thi Thử Hóa 10 (Chương 1)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              )}

              {/* K10 C2 */}
              {!isH10C2Locked && (
                <div className="bg-slate-900 border border-slate-800 hover:border-teal-500/60 transition-all rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-teal-500/20 border border-teal-400/30 text-teal-400 font-black text-xs rounded-xl font-mono">
                      CHƯƠNG 2
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 2 Đề Kiểm Tra + 5 Bài Học
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white group-hover:text-teal-400 transition-colors">
                    Chương 2: Bảng Tuần Hoàn Các Nguyên Tố Hóa Học
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Cấu tạo bảng tuần hoàn (ô nguyên tố, chu kì, nhóm A & B), xu hướng biến đổi bán kính nguyên tử, độ âm điện, tính kim loại/phi kim và ý nghĩa của bảng tuần hoàn.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300 font-medium">
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📊 Cấu tạo ô, chu kì & nhóm</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📈 Quy luật biến đổi tuần hoàn</span>
                    <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">📝 2 Đề kiểm tra chuẩn</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/hoa10-chuong2')}
                  className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Mở Học Liệu & Thi Thử Hóa 10 (Chương 2)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              )}
</div>
          </div>
        )}
      </section>

      {/* Utility Grid: Quick access to all student features */}
      <section className="bg-slate-900/60 border-t border-slate-800/80 px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-white">Công Cụ Học Tập & Tiện Ích Trực Tuyến</h3>
            <p className="text-xs sm:text-sm text-slate-400">Trang bị toàn diện cho học sinh từ lấy lại nền tảng đến luyện đề đạt 9+</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              onClick={() => navigate('/thi')}
              className="bg-slate-900 border border-slate-800 hover:border-teal-500/50 p-5 rounded-2xl cursor-pointer transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm group-hover:text-teal-400 transition-colors">Cổng Thi Học Sinh</h4>
              <p className="text-xs text-slate-400 mt-1">Đăng nhập bằng mã học sinh để làm bài kiểm tra và theo dõi học phí, điểm số.</p>
            </div>

            <div
              onClick={() => navigate('/lay-goc')}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-5 rounded-2xl cursor-pointer transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">Lấy Gốc Toán Cấp Tốc</h4>
              <p className="text-xs text-slate-400 mt-1">Phản xạ số âm, quy tắc chuyển vế đổi dấu và phương pháp tư duy tiền nợ - tiền có.</p>
            </div>

            <div
              onClick={() => navigate('/casio')}
              className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 p-5 rounded-2xl cursor-pointer transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                <Calculator className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm group-hover:text-indigo-400 transition-colors">Máy Tính Casio Online</h4>
              <p className="text-xs text-slate-400 mt-1">Mô phỏng máy tính khoa học Casio fx-580VN X hỗ trợ giải nhanh bài toán hóa học & toán học.</p>
            </div>

            <div
              onClick={() => navigate('/whiteboard')}
              className="bg-slate-900 border border-slate-800 hover:border-purple-500/50 p-5 rounded-2xl cursor-pointer transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm group-hover:text-purple-400 transition-colors">Bảng Vẽ Trực Tuyến</h4>
              <p className="text-xs text-slate-400 mt-1">Bảng tương tác phục vụ việc chữa bài, minh họa cấu tạo phân tử và sơ đồ phản ứng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 text-center text-xs text-slate-500 space-y-2">
        <p className="font-bold text-slate-400">© 2025 LỚP HỌC THẦY THỌ – TRUNG TÂM LUYỆN THI CHẤT LƯỢNG CAO</p>
        <p>Thầy Nguyễn Lương Thọ • Hotline & Zalo: 0345.833.133 • Hệ thống vận hành trên nền tảng EdTech Pro</p>
      </footer>
    </div>
  );
}
