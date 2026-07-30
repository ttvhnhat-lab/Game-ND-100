import React from 'react';
import { Question } from '../types';
import {
  CheckCircle2,
  XCircle,
  FileText,
  ShieldAlert,
  ArrowRight,
  AlertTriangle,
  Award,
  BookOpen
} from 'lucide-react';

interface ExplanationModalProps {
  question: Question;
  selectedIndex: number;
  isCorrect: boolean;
  pointsEarned: number;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({
  question,
  selectedIndex,
  isCorrect,
  pointsEarned,
  onNext,
  isLastQuestion
}) => {
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0c0e]/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="w-full max-w-2xl bg-[#141417] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-zinc-100">
        {/* Banner Header */}
        <div
          className={`p-6 sm:p-8 border-b ${
            isCorrect
              ? 'bg-amber-500/10 border-amber-500/30'
              : 'bg-rose-500/10 border-rose-500/30'
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`p-3.5 rounded-full shrink-0 ${
                isCorrect
                  ? 'bg-amber-500 text-black'
                  : 'bg-rose-500 text-white'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
              ) : (
                <XCircle className="w-7 h-7 stroke-[2.5]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    isCorrect
                      ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {isCorrect ? 'Đáp án Chính Xác' : 'Chưa Chính Xác'}
                </span>
                {isCorrect && (
                  <span className="text-xs font-mono font-bold text-amber-500 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> +{pointsEarned} pt
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                {isCorrect
                  ? 'Bạn đã chọn chính xác theo quy định!'
                  : `Đáp án đúng chuẩn luật là: ${optionLetters[question.correctIndex]}`}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {/* User Choice vs Correct Answer comparison if wrong */}
          {!isCorrect && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#0c0c0e] rounded-xl border border-zinc-800 text-xs">
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                <span className="text-rose-400 font-bold block mb-1">
                  ❌ Bạn đã chọn ({optionLetters[selectedIndex]}):
                </span>
                <span className="text-zinc-400">
                  {question.options[selectedIndex]}
                </span>
              </div>
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <span className="text-amber-500 font-bold block mb-1">
                  ✅ Đáp án đúng chuẩn ({optionLetters[question.correctIndex]}):
                </span>
                <span className="text-white">
                  {question.options[question.correctIndex]}
                </span>
              </div>
            </div>
          )}

          {/* Legal Fine Breakdown Box */}
          <div className="p-5 bg-[#1a1a1e] border border-zinc-800 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-amber-500 text-[10px] uppercase font-bold tracking-widest">
              <FileText className="w-4 h-4" />
              Khung Hình Phạt Theo Quy Định
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-[#0c0c0e] border border-zinc-800">
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">Mức phạt tiền</div>
                <div className="text-base font-mono font-medium text-amber-500 mt-0.5">
                  {question.penaltyRange}
                </div>
              </div>

              {question.extraPenalty && (
                <div className="p-3 rounded-lg bg-[#0c0c0e] border border-zinc-800">
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                    Hình phạt bổ sung
                  </div>
                  <div className="text-xs font-medium text-rose-300 mt-0.5">
                    {question.extraPenalty}
                  </div>
                </div>
              )}
            </div>

            <div className="text-[11px] text-zinc-500 flex items-center gap-1.5 pt-1 italic">
              <BookOpen className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
              <span>Căn cứ pháp lý: {question.decreeReference}</span>
            </div>
          </div>

          {/* Expert Advice Box - Matching Design Spec */}
          <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl flex gap-6 items-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold italic text-xl">
              !
            </div>
            <div>
              <h4 className="text-amber-500 text-xs uppercase font-bold tracking-widest mb-1">
                Giải thích của chuyên gia
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {question.expertExplanation}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action Button */}
        <div className="p-4 sm:p-6 bg-[#0c0c0e] border-t border-zinc-800 flex justify-end">
          <button
            onClick={onNext}
            className="w-full sm:w-auto py-3 px-8 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <span>{isLastQuestion ? 'Xem Kết Quả' : 'Tiếp Theo'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
