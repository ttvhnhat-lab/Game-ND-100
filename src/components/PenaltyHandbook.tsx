import React, { useState, useMemo } from 'react';
import { QUESTIONS } from '../data/questions';
import { CATEGORIES } from '../data/categories';
import {
  Search,
  Bike,
  Car,
  Shield,
  FileText,
  ShieldAlert,
  X,
  ChevronDown,
  ChevronUp,
  Filter
} from 'lucide-react';

export const PenaltyHandbook: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<string>('Tất cả');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredQuestions = useMemo(() => {
    return QUESTIONS.filter((q) => {
      const matchSearch =
        searchTerm === '' ||
        q.situation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.decreeReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.penaltyRange.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (q.extraPenalty && q.extraPenalty.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchVehicle =
        selectedVehicle === 'Tất cả' || q.vehicle === selectedVehicle;

      const matchCategory =
        selectedCategory === 'Tất cả' || q.category === selectedCategory;

      return matchSearch && matchVehicle && matchCategory;
    });
  }, [searchTerm, selectedVehicle, selectedCategory]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-fade-in py-2">
      {/* Header Banner */}
      <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold block mb-1">
              Chuyên Gia Giao Thông
            </span>
            <h2 className="text-xl sm:text-3xl font-light text-white">
              Sát Hạch & Tra Cứu <span className="text-amber-500 font-medium italic">Khung Mức Phạt</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light">
              Quy định hiện hành theo Nghị định 100/2019/NĐ-CP & Nghị định 123/2021/NĐ-CP
            </p>
          </div>
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-500 font-mono text-xs shrink-0">
            Tổng số: <strong className="text-white text-sm">{QUESTIONS.length}</strong> quy định
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Nhập từ khóa tìm kiếm (nồng độ cồn, đèn đỏ, chạy quá tốc độ, bằng lái...)"
            className="w-full pl-11 pr-10 py-3 bg-[#0c0c0e] border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-500 hover:text-white rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters Grid */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mr-1">
            <Filter className="w-3.5 h-3.5" /> Bộ lọc:
          </div>

          {/* Vehicle Filters */}
          <div className="flex items-center gap-1 bg-[#0c0c0e] p-1 rounded-xl border border-zinc-800 overflow-x-auto">
            {['Tất cả', 'Xe máy', 'Ô tô', 'Người đi bộ'].map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVehicle(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                  selectedVehicle === v
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 bg-[#0c0c0e] border border-zinc-800 rounded-xl text-xs font-medium text-zinc-300 focus:outline-none focus:border-amber-500"
          >
            <option value="Tất cả">Tất cả nhóm lỗi</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* List of Penalties */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center p-12 bg-[#141417] border border-zinc-800 rounded-2xl text-zinc-500 space-y-2">
            <Search className="w-8 h-8 text-zinc-600 mx-auto" />
            <p className="font-medium text-white">Không tìm thấy quy định vi phạm phù hợp</p>
            <p className="text-xs">Hãy thử thay đổi từ khóa hoặc xóa bộ lọc để tìm lại.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;
            return (
              <div
                key={q.id}
                className="bg-[#141417] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 shadow-lg transition space-y-3"
              >
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-mono font-bold uppercase">
                      # Quy định {q.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[10px] font-bold uppercase">
                      {q.vehicle}
                    </span>
                    <span className="text-xs text-zinc-500 font-light hidden sm:inline">
                      {q.categoryName}
                    </span>
                  </div>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : q.id)}
                    className="flex items-center gap-1 text-xs font-medium text-amber-500 hover:text-amber-400 transition"
                  >
                    <span>{isExpanded ? 'Thu gọn lời khuyên' : 'Giải thích của chuyên gia'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Scenario text */}
                <h3 className="text-sm sm:text-base font-light text-white leading-relaxed italic">
                  "{q.situation}"
                </h3>

                {/* Fine Highlight Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-[#1a1a1e] border border-zinc-800 rounded-xl">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block">
                      Mức phạt tiền
                    </span>
                    <span className="text-base font-mono font-medium text-amber-500">
                      {q.penaltyRange}
                    </span>
                  </div>

                  {q.extraPenalty ? (
                    <div className="p-3 bg-[#1a1a1e] border border-zinc-800 rounded-xl">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block">
                        Hình phạt bổ sung
                      </span>
                      <span className="text-xs font-medium text-rose-300">
                        {q.extraPenalty}
                      </span>
                    </div>
                  ) : (
                    <div className="p-3 bg-[#1a1a1e] border border-zinc-800 rounded-xl">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block">
                        Hình phạt bổ sung
                      </span>
                      <span className="text-xs font-medium text-zinc-600">
                        Không tước GPLX (trừ TNGT)
                      </span>
                    </div>
                  )}
                </div>

                {/* Citation */}
                <div className="text-[11px] text-zinc-500 flex items-center gap-1.5 pt-1">
                  <FileText className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Căn cứ pháp lý: <strong>{q.decreeReference}</strong></span>
                </div>

                {/* Expandable Expert Commentary */}
                {isExpanded && (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-xl flex gap-4 items-start text-xs sm:text-sm text-zinc-300 leading-relaxed animate-fade-in mt-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold italic">
                      !
                    </div>
                    <div>
                      <h4 className="text-amber-500 text-xs uppercase font-bold tracking-widest mb-1">
                        Lời khuyên từ Chuyên gia Giao thông
                      </h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">{q.expertExplanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

function BookOpenIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}
