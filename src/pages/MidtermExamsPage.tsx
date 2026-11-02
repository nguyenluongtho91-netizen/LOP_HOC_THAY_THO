// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  Award, BookOpen, Clock, CheckCircle2, Eye, Play, Sparkles, 
  Search, Filter, ChevronRight, ArrowLeft, ShieldCheck, Flame, 
  HelpCircle, Trophy, Atom, Layers
} from 'lucide-react';
import { HOA10_MIDTERM_EXAMS } from '@/services/hoa10MidtermExamService';
import { HOA11_MIDTERM_EXAMS } from '@/services/hoa11MidtermExamService';
import { HOA12_MIDTERM_EXAMS } from '@/services/hoa12MidtermExamService';
import AdminExamViewerModal from '@/components/AdminExamViewerModal';
import { ensureStandardExamInDatabase } from '@/services/standardExamRoomBridge';
import toast from 'react-hot-toast';
import { getHoa12AccessConfigSync, GranularAccessConfig } from '@/services/hoa12AccessControlService';

interface MidtermExamsPageProps {
  initialGrade?: '10' | '11' | '12';
}

// Danh mục các trường THPT (Cấp 3) & THCS (Cấp 2) theo yêu cầu Thầy Thọ
export const HIGH_SCHOOLS = [
  { id: 'all', name: 'Tất cả trường Cấp 3', shortName: 'Tất cả Cấp 3', icon: '🏫' },
  { id: 'pdp', name: 'THPT Phan Đình Phùng', shortName: 'Phan Đình Phùng', codeKey: 'PDP', icon: '🏛️' },
  { id: 'ltt', name: 'THPT Lý Tự Trọng', shortName: 'Lý Tự Trọng', codeKey: 'LTT', icon: '🏛️' },
  { id: 'lqd', name: 'THPT Lê Quý Đôn', shortName: 'Lê Quý Đôn', codeKey: 'LQD', icon: '🏛️' },
];

export const SECONDARY_SCHOOLS = [
  { id: 'all', name: 'Tất cả trường Cấp 2', shortName: 'Tất cả Cấp 2', icon: '🏫' },
  { id: 'thach_linh', name: 'THCS Thạch Linh', shortName: 'Thạch Linh', codeKey: 'TL', icon: '🏛️' },
  { id: 'nguyen_du', name: 'THCS Nguyễn Du', shortName: 'Nguyễn Du', codeKey: 'ND', icon: '🏛️' },
  { id: 'nam_ha', name: 'THCS Nam Hà', shortName: 'Nam Hà', codeKey: 'NH', icon: '🏛️' },
  { id: 'thach_dai', name: 'THCS Thạch Đài', shortName: 'Thạch Đài', codeKey: 'TD', icon: '🏛️' },
];

export default function MidtermExamsPage({ initialGrade }: MidtermExamsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const resolveGrade = (): '10' | '11' | '12' => {
    if (initialGrade) return initialGrade;
    const g = searchParams.get('grade');
    if (g === '10' || g === '11' || g === '12') return g;
    return '12';
  };

  const [selectedLevel, setSelectedLevel] = useState<'cap3' | 'cap2'>('cap3');
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<'10' | '11' | '12'>(resolveGrade);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExam, setSelectedExam] = useState<any | null>(null);
  const [accessConfig, setAccessConfig] = useState<GranularAccessConfig>(() => getHoa12AccessConfigSync());

  useEffect(() => {
    if (initialGrade) {
      setSelectedGrade(initialGrade);
    } else {
      const g = searchParams.get('grade');
      if (g === '10' || g === '11' || g === '12') {
        setSelectedGrade(g);
      }
    }
  }, [initialGrade, searchParams]);

  const handleSelectGrade = (grade: '10' | '11' | '12') => {
    setSelectedGrade(grade);
    setSearchParams({ grade });
  };

  const currentSchools = selectedLevel === 'cap3' ? HIGH_SCHOOLS : SECONDARY_SCHOOLS;

  const examsList = useMemo(() => {
    if (selectedLevel === 'cap2') {
      return []; // Các đề thi Cấp 2
    }
    if (selectedGrade === '10') return HOA10_MIDTERM_EXAMS;
    if (selectedGrade === '11') return HOA11_MIDTERM_EXAMS;
    return HOA12_MIDTERM_EXAMS;
  }, [selectedLevel, selectedGrade]);

  const filteredExams = useMemo(() => {
    let list = examsList;

    // Lọc theo trường
    if (selectedSchool !== 'all') {
      const sObj = currentSchools.find(s => s.id === selectedSchool);
      if (sObj) {
        const sName = sObj.shortName.toLowerCase();
        const sKey = (sObj.codeKey || '').toLowerCase();
        list = list.filter(e => 
          (e.badge && e.badge.toLowerCase().includes(sName)) ||
          (e.title && e.title.toLowerCase().includes(sName)) ||
          (e.topic && e.topic.toLowerCase().includes(sName)) ||
          (e.code && sKey && e.code.toLowerCase().includes(sKey))
        );
      }
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(e => 
        e.title.toLowerCase().includes(q) || 
        e.code.toLowerCase().includes(q) ||
        (e.topic && e.topic.toLowerCase().includes(q))
      );
    }
    return list;
  }, [examsList, selectedSchool, currentSchools, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 border-b border-indigo-900/60 pt-6 pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <Link
              to="/thpt"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Cổng THPT</span>
            </Link>

            <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>HỆ THỐNG 30 ĐỀ THI GIỮA HỌC KÌ 1 CHUẨN BỘ 2025</span>
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5 flex-wrap">
              <span className="p-2 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-slate-950 shadow-lg">
                <Award className="w-6 h-6" />
              </span>
              <span>Bộ Đề Thi Giữa Học Kì 1 — Hóa Học {selectedGrade}</span>
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-2 leading-relaxed">
              Trọn bộ 10 đề thi chuẩn cấu trúc định dạng mới 2025 của Bộ GD&ĐT (Trắc nghiệm nhiều lựa chọn, Trắc nghiệm Đúng/Sai, Trả lời ngắn). Đầy đủ đề bài, đáp án và hướng dẫn giải chi tiết từng câu. Hỗ trợ chế độ thi thử trực tuyến 50 phút chấm điểm tự động.
            </p>
          </div>

          {/* Level Selector: Cấp 3 (THPT) vs Cấp 2 (THCS) */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider mr-1">Cấp học:</span>
            <button
              type="button"
              onClick={() => { setSelectedLevel('cap3'); setSelectedSchool('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedLevel === 'cap3'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 shadow-md font-extrabold scale-105'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>🎓 Cấp 3 (THPT)</span>
            </button>
            <button
              type="button"
              onClick={() => { setSelectedLevel('cap2'); setSelectedSchool('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedLevel === 'cap2'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md font-extrabold scale-105'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>📘 Cấp 2 (THCS)</span>
            </button>
          </div>

          {/* School Selector Tabs (Mỗi trường 1 mục riêng biệt) */}
          <div className="bg-slate-900/80 border border-indigo-900/50 rounded-2xl p-3 space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
              <span className="font-black text-amber-300 flex items-center gap-1.5">
                🏛️ Phân mục theo từng Trường {selectedLevel === 'cap3' ? 'THPT' : 'THCS'}:
              </span>
              <span className="text-slate-400 text-[11px]">
                {selectedLevel === 'cap3'
                  ? 'Phan Đình Phùng • Lý Tự Trọng • Lê Quý Đôn'
                  : 'Thạch Linh • Nguyễn Du • Nam Hà • Thạch Đài'}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {currentSchools.map(sch => {
                const isActive = selectedSchool === sch.id;
                return (
                  <button
                    key={sch.id}
                    type="button"
                    onClick={() => setSelectedSchool(sch.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105 border border-indigo-400'
                        : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{sch.icon}</span>
                    <span>{sch.name}</span>
                    {sch.id === 'pdp' && (
                      <span className="ml-1 px-1.5 py-0.2 rounded-md bg-rose-500 text-[10px] text-white font-black">
                        1 đề
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grade Selector Tabs (Chỉ hiển thị khi chọn Cấp 3) */}
          {selectedLevel === 'cap3' && (
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider mr-1">Khối lớp:</span>
              <button
                type="button"
                onClick={() => handleSelectGrade('10')}
                className={`px-4 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  selectedGrade === '10'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Atom className="w-4 h-4" />
                <span>Hóa Học Lớp 10 (11 Đề • THPT Phan Đình Phùng)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectGrade('11')}
                className={`px-4 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  selectedGrade === '11'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Hóa Học Lớp 11 (10 Đề)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectGrade('12')}
                className={`px-4 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  selectedGrade === '12'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>Hóa Học Lớp 12 (10 Đề)</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* Search & Stats Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4 flex-wrap shadow-md">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <div className="text-xs">
              <strong className="text-white text-sm">
                {currentSchools.find(s => s.id === selectedSchool)?.name}: {filteredExams.length} Đề Thi
              </strong>
              <span className="text-slate-400 ml-1.5 hidden sm:inline">
                • Cập nhật cấu trúc chuẩn Bộ GD&ĐT & các trường {selectedLevel === 'cap3' ? 'THPT' : 'THCS'}
              </span>
            </div>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo số đề hoặc mã đề..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredExams.length === 0 ? (
            <div className="col-span-full bg-slate-900/60 border border-dashed border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 text-indigo-400 mx-auto flex items-center justify-center text-3xl">
                🏛️
              </div>
              <h4 className="text-lg font-black text-white">
                Mục Đề Thi: {currentSchools.find(s => s.id === selectedSchool)?.name}
              </h4>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Hệ thống đang sẵn sàng nạp thêm đề thi chuyên biệt cho <strong>{currentSchools.find(s => s.id === selectedSchool)?.name}</strong>. Thầy và các em có thể làm ngay đề thi chính thức của trường THPT Phan Đình Phùng hoặc trọn bộ đề thi chuẩn Bộ GD&ĐT!
              </p>
              <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => { setSelectedLevel('cap3'); setSelectedGrade('10'); setSelectedSchool('pdp'); }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-black text-xs shadow-md transition-all cursor-pointer"
                >
                  ⭐ Xem Đề THPT Phan Đình Phùng (Mã 605)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSchool('all')}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all cursor-pointer"
                >
                  🏫 Xem Tất Cả Đề Thi Chuẩn Bộ
                </button>
              </div>
            </div>
          ) : (
            filteredExams.map((exam, index) => {
            const isLocked = Boolean(accessConfig?.exams?.[exam.id]);
            const qCount = exam.questions?.length || exam.totalQuestions || 28;

            return (
              <div
                key={exam.id}
                className="bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/60 rounded-3xl p-5 shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                        MÃ: {exam.code}
                      </span>
                      {exam.badge && (
                        <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black bg-rose-500/25 text-rose-300 border border-rose-400/40 flex items-center gap-1 shadow-xs">
                          ⭐ {exam.badge}
                        </span>
                      )}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-white/10 text-slate-300">
                      {exam.duration || 45} phút • {qCount} câu hỏi • Thang 10đ
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {exam.topic || `Kiểm tra toàn diện kiến thức giữa học kì 1 Hóa học ${selectedGrade}`}
                  </p>

                  {/* Highlights tag */}
                  <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/60">
                      Phần I: Trắc nghiệm 4 lựa chọn
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/60">
                      Phần II: Đúng/Sai
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/60">
                      Phần III: Trả lời ngắn
                    </span>
                    {exam.questions?.some((q: any) => q.part === 4 || q.type === 'essay') && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/30 font-bold">
                        Phần IV: Tự luận
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedExam(exam)}
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Xem Đề & Lời Giải</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedExam(exam)}
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Vào Thi Thử (50p)</span>
                  </button>
                </div>
              </div>
            );
          }))}
        </div>
      </div>

      {/* Modal Xem & Thi Thử */}
      {selectedExam && (
        <AdminExamViewerModal
          exam={selectedExam}
          accessConfig={accessConfig}
          onClose={() => setSelectedExam(null)}
          onConfigChange={(newCfg) => setAccessConfig({ ...newCfg })}
        />
      )}
    </div>
  );
}
