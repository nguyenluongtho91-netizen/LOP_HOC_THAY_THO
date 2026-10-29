// @ts-nocheck
import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { 
  Award, BookOpen, Clock, CheckCircle2, Eye, Play, Sparkles, 
  Search, Filter, ChevronRight, ArrowLeft, ShieldCheck, Flame, 
  HelpCircle, Trophy, Atom, Layers
} from "lucide-react";
import { HOA10_FINAL2_EXAMS } from "@/services/hoa10Final2ExamService";
import { HOA11_FINAL2_EXAMS } from "@/services/hoa11Final2ExamService";
import { HOA12_FINAL2_EXAMS } from "@/services/hoa12Final2ExamService";
import AdminExamViewerModal from "@/components/AdminExamViewerModal";
import { getHoa12AccessConfigSync, GranularAccessConfig } from "@/services/hoa12AccessControlService";

interface Final2ExamsPageProps {
  initialGrade?: 10 | 11 | 12;
}

export default function Final2ExamsPage({ initialGrade }: Final2ExamsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const resolveGrade = (): 10 | 11 | 12 => {
    if (initialGrade) return initialGrade;
    const g = searchParams.get(grade);
    if (g === 10 || g === 11 || g === 12) return g;
    return 12;
  };

  const [selectedGrade, setSelectedGrade] = useState<10 | 11 | 12>(resolveGrade);
  const [searchQuery, setSearchQuery] = useState();
  const [selectedExam, setSelectedExam] = useState<any | null>(null);
  const [accessConfig, setAccessConfig] = useState<GranularAccessConfig>(() => getHoa12AccessConfigSync());

  useEffect(() => {
    if (initialGrade) {
      setSelectedGrade(initialGrade);
    } else {
      const g = searchParams.get(grade);
      if (g === 10 || g === 11 || g === 12) {
        setSelectedGrade(g);
      }
    }
  }, [initialGrade, searchParams]);

  const handleSelectGrade = (grade: 10 | 11 | 12) => {
    setSelectedGrade(grade);
    setSearchParams({ grade });
  };

  const examsList = useMemo(() => {
    if (selectedGrade === 10) return HOA10_FINAL2_EXAMS;
    if (selectedGrade === 11) return HOA11_FINAL2_EXAMS;
    return HOA12_FINAL2_EXAMS;
  }, [selectedGrade]);

  const filteredExams = useMemo(() => {
    let list = examsList;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(e => 
        e.title.toLowerCase().includes(q) || 
        e.code.toLowerCase().includes(q) ||
        (e.topic && e.topic.toLowerCase().includes(q))
      );
    }
    return list;
  }, [examsList, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-rose-950 to-slate-900 border-b border-rose-900/60 pt-6 pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <Link
              to="/thpt"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Cổng THPT</span>
            </Link>

            <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-300 border border-rose-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>HỆ THỐNG 30 ĐỀ THI CUỐI HỌC KÌ 2 CHUẨN BỘ 2025</span>
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5 flex-wrap">
              <span className="p-2 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-slate-950 shadow-lg">
                <Trophy className="w-6 h-6" />
              </span>
              <span>Bộ Đề Thi Cuối Học Kì 2 — Hóa Học {selectedGrade}</span>
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-2 leading-relaxed">
              Trọn bộ 10 đề thi cuối học kì 2 tổng hợp toàn diện kiến thức cả năm chuẩn cấu trúc định dạng mới 2025 của Bộ GD&ĐT (Trắc nghiệm nhiều lựa chọn, Trắc nghiệm Đúng/Sai, Trả lời ngắn & Tự luận). Đầy đủ đề bài, đáp án và hướng dẫn giải chi tiết từng câu. Hỗ trợ thi thử trực tuyến 50 phút chấm điểm tự động.
            </p>
          </div>

          {/* Grade Selector Tabs */}
          <div className="flex items-center gap-2 pt-2 flex-wrap">
            <button
              type="button"
              onClick={() => handleSelectGrade("10")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGrade === "10"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.02]"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <Atom className="w-4 h-4" />
              <span>Hóa Học Lớp 10 (10 Đề CK2)</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectGrade("11")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGrade === "11"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Hóa Học Lớp 11 (10 Đề CK2)</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectGrade("12")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGrade === "12"
                  ? "bg-gradient-to-r from-rose-500 to-orange-500 text-slate-950 shadow-lg shadow-rose-500/20 scale-[1.02]"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Hóa Học Lớp 12 (10 Đề CK2)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* Search & Stats Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4 flex-wrap shadow-md">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rose-400 animate-pulse"></span>
            <div className="text-xs">
              <strong className="text-white text-sm">10 Đề Thi Cuối Kì 2</strong>
              <span className="text-slate-400 ml-1.5 hidden sm:inline">
                • Cập nhật 100% chuẩn cấu trúc Bộ GD&ĐT 2025
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
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
            />
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredExams.map((exam) => {
            const isLocked = Boolean(accessConfig?.exams?.[exam.id]);
            const qCount = exam.questions?.length || exam.totalQuestions || 28;

            return (
              <div
                key={exam.id}
                className="bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-rose-500/60 rounded-3xl p-5 shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black bg-rose-500/20 text-rose-300 border border-rose-400/30">
                      MÃ: {exam.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-white/10 text-slate-300">
                      50 phút • {qCount} câu hỏi • Thang 10đ
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {exam.topic || `Kiểm tra toàn diện kiến thức cuối học kì 2 Hóa học ${selectedGrade}`}
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
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/20 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Vào Thi Thử (50p)</span>
                  </button>
                </div>
              </div>
            );
          })}
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
