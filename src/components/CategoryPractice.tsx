import React from 'react';
import { CATEGORIES } from '../data/categories';
import { QUESTIONS } from '../data/questions';
import { CategoryId } from '../types';
import { BookOpen, Wine, Gauge, Milestone, FileCheck, ShieldAlert, Play, CheckCircle } from 'lucide-react';

interface CategoryPracticeProps {
  onStartCategory: (catId: CategoryId) => void;
}

export const CategoryPractice: React.FC<CategoryPracticeProps> = ({ onStartCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wine':
        return <Wine className="w-5 h-5" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5" />;
      case 'Milestone':
        return <Milestone className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      default:
        return <ShieldAlert className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in py-2">
      {/* Banner */}
      <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
          <BookOpen className="w-4 h-4 text-amber-500" /> Luyện Tập Chuyên Sâu
        </div>
        <h2 className="text-2xl sm:text-3xl font-light text-white">
          Ôn Tập Theo <span className="text-amber-500 font-medium italic">Chủ Đề Mức Phạt</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2 font-light leading-relaxed">
          Lựa chọn chủ đề bạn muốn rèn luyện để tập trung nâng cao kiến thức và ghi nhớ chính xác các khung phạt.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CATEGORIES.map((cat) => {
          const count = QUESTIONS.filter((q) => q.category === cat.id).length;
          return (
            <div
              key={cat.id}
              className="bg-[#141417] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 group transition duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center">
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="px-3 py-1 bg-[#0c0c0e] border border-zinc-800 rounded-full text-[10px] font-mono text-amber-500">
                    {count} câu hỏi
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white group-hover:text-amber-500 transition">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onStartCategory(cat.id)}
                className="w-full py-3 px-4 bg-[#1a1a1e] hover:bg-amber-500 hover:text-black text-white border border-zinc-800 font-bold rounded-xl text-xs uppercase tracking-widest transition flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Bắt Đầu Ôn Tập</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
