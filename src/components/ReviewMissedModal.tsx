import React, { useState } from 'react';
import { AnswerRecord, Question } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  RotateCcw
} from 'lucide-react';

interface ReviewMissedModalProps {
  missedRecords: AnswerRecord[];
  allQuestions: Question[];
  onClose: () => void;
  onRetryQuiz: () => void;
}

export const ReviewMissedModal: React.FC<ReviewMissedModalProps> = ({
  missedRecords,
  allQuestions,
  onClose,
  onRetryQuiz
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (missedRecords.length === 0) return null;

  const currentRecord = missedRecords[currentIndex];
  const question = allQuestions.find((q) => q.id === currentRecord.questionId);

  if (!question) return null;

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0c0e]/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="w-full max-w-2xl bg-[#141417] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-zinc-100 space-y-0">
        {/* Modal Header */}
        <div className="p-5 bg-[#0c0c0e] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-rose-500/10 text-rose-400 rounded-xl">
              <XCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-light text-white text-base">
                Ôn Tập Câu Sai ({currentIndex + 1}/{missedRecords.length})
              </h3>
              <p className="text-xs text-zinc-400 font-light">Xem chi tiết giải thích để rút kinh nghiệm</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-white rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto custom-scrollbar">
          {/* Situation Narrative */}
          <div className="p-4 bg-[#0c0c0e] border border-zinc-800 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 block mb-1">
              # Quy định câu {question.id} ({question.vehicle})
            </span>
            <p className="text-sm text-zinc-300 font-light italic">"{question.situation}"</p>
          </div>

          {/* Question Text */}
          <h4 className="font-light text-white text-base leading-relaxed">{question.questionText}</h4>

          {/* Options Display */}
          <div className="space-y-2">
            {question.options.map((opt, idx) => {
              const isSelected = currentRecord.selectedIndex === idx;
              const isCorrectOpt = idx === question.correctIndex;

              let style = 'bg-[#0c0c0e] border-zinc-800 text-zinc-500 opacity-60';
              if (isCorrectOpt) {
                style = 'bg-amber-500/10 border-amber-500/50 text-white font-medium';
              } else if (isSelected) {
                style = 'bg-rose-500/10 border-rose-500/50 text-rose-300 line-through';
              }

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${style}`}
                >
                  <span className="font-bold shrink-0">{optionLetters[idx]}.</span>
                  <span className="flex-1">{opt}</span>
                  {isCorrectOpt && (
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-4 h-4" /> Đúng chuẩn
                    </span>
                  )}
                  {isSelected && !isCorrectOpt && (
                    <span className="text-xs font-bold text-rose-400 flex items-center gap-1 shrink-0">
                      <XCircle className="w-4 h-4" /> Đã chọn
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Citation & Penalty */}
          <div className="p-4 bg-[#1a1a1e] border border-zinc-800 rounded-xl text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-500 font-bold">
              <FileText className="w-4 h-4" />
              <span>Khung hình phạt: {question.penaltyRange}</span>
            </div>
            {question.extraPenalty && (
              <div className="text-rose-300 font-medium">
                Hình phạt bổ sung: {question.extraPenalty}
              </div>
            )}
            <div className="text-zinc-500 text-[11px] pt-1 italic">
              Căn cứ pháp lý: {question.decreeReference}
            </div>
          </div>

          {/* Expert Commentary */}
          <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-xl flex gap-4 items-start text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold italic">
              !
            </div>
            <div>
              <h4 className="text-amber-500 text-xs uppercase font-bold tracking-widest mb-1">
                Lời khuyên chuyên gia
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{question.expertExplanation}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-[#0c0c0e] border-t border-zinc-800 flex items-center justify-between gap-3">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className="px-4 py-2 bg-[#1a1a1e] border border-zinc-800 hover:border-zinc-700 disabled:opacity-40 text-zinc-300 font-bold rounded-xl text-xs uppercase tracking-widest flex items-center gap-1 transition"
          >
            <ChevronLeft className="w-4 h-4" /> Câu trước
          </button>

          <button
            onClick={() => {
              onClose();
              onRetryQuiz();
            }}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" /> Thi lại ngay
          </button>

          <button
            disabled={currentIndex === missedRecords.length - 1}
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            className="px-4 py-2 bg-[#1a1a1e] border border-zinc-800 hover:border-zinc-700 disabled:opacity-40 text-zinc-300 font-bold rounded-xl text-xs uppercase tracking-widest flex items-center gap-1 transition"
          >
            Câu tiếp <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
