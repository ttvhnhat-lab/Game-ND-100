import React, { useEffect } from 'react';
import { Question } from '../types';
import {
  Car,
  Bike,
  Shield,
  Clock,
  Flame,
  Heart,
  Zap,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  timeRemaining: number;
  maxTime: number;
  score: number;
  streak: number;
  livesRemaining?: number;
  isSurvivalMode?: boolean;
  selectedOptionIndex: number | null;
  onSelectOption: (index: number) => void;
  isAnswered: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  timeRemaining,
  maxTime,
  score,
  streak,
  livesRemaining = 3,
  isSurvivalMode = false,
  selectedOptionIndex,
  onSelectOption,
  isAnswered
}) => {
  // Keyboard shortcut listener
  useEffect(() => {
    if (isAnswered) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === 'A' || key === '1') onSelectOption(0);
      else if (key === 'B' || key === '2') onSelectOption(1);
      else if (key === 'C' || key === '3') onSelectOption(2);
      else if (key === 'D' || key === '4') onSelectOption(3);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, onSelectOption]);

  const progressPercent = Math.max(0, (timeRemaining / maxTime) * 100);
  const isTimeLow = timeRemaining <= 5;

  const getVehicleBadge = (vehicle: string) => {
    switch (vehicle) {
      case 'Xe máy':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[10px] font-bold uppercase">
            <Bike className="w-3.5 h-3.5" /> Xe máy
          </span>
        );
      case 'Ô tô':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[10px] font-bold uppercase">
            <Car className="w-3.5 h-3.5" /> Ô tô
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[10px] font-bold uppercase">
            <Shield className="w-3.5 h-3.5" /> Chung / Đường bộ
          </span>
        );
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-5">
      {/* Quiz Status Bar */}
      <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-5 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        {/* Progress Counter */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500">Tiến độ</span>
            <span className="text-2xl font-mono text-zinc-100">
              {String(questionIndex + 1).padStart(2, '0')}<span className="text-zinc-600">/{totalQuestions}</span>
            </span>
          </div>
          <div className="h-8 w-[1px] bg-zinc-800 hidden sm:block" />
          <div className="hidden sm:block">
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              {question.categoryName}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              {getVehicleBadge(question.vehicle)}
              <span className="text-xs text-zinc-400">
                Độ khó: <strong className="text-zinc-200">{question.difficulty}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Score & Streak & Survival Lives */}
        <div className="flex items-center gap-6 text-right">
          {/* Streak Indicator */}
          {streak >= 2 && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-xs font-bold animate-pulse">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Chuỗi x{streak}</span>
            </div>
          )}

          {/* Survival Lives */}
          {isSurvivalMode && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-4 h-4 ${
                    i < livesRemaining
                      ? 'text-rose-500 fill-rose-500'
                      : 'text-zinc-700'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Score Badge */}
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500">Điểm số</span>
            <span className="text-2xl font-mono text-amber-500 flex items-center gap-1 justify-end">
              <Zap className="w-4 h-4 fill-amber-500" />
              {score}
            </span>
          </div>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="bg-[#141417] border border-zinc-800 rounded-xl p-3 shadow-md">
        <div className="flex items-center justify-between text-xs font-medium text-zinc-400 mb-2 px-1">
          <span className="flex items-center gap-1.5 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <Clock className={`w-3.5 h-3.5 ${isTimeLow ? 'text-rose-400 animate-spin' : 'text-amber-500'}`} />
            Thời gian còn lại
          </span>
          <span className={isTimeLow ? 'text-rose-400 font-mono font-bold animate-pulse' : 'text-amber-500 font-mono font-bold'}>
            {timeRemaining}s
          </span>
        </div>
        <div className="w-full h-2 bg-[#0c0c0e] rounded-full overflow-hidden border border-zinc-800">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isTimeLow
                ? 'bg-rose-500'
                : 'bg-amber-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Situation Header / Badges */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-bold rounded-full uppercase">
            Tình huống thực tế
          </span>
          <span className="text-zinc-500 text-sm">Câu hỏi #{questionIndex + 1}</span>
        </div>

        {/* Question Text */}
        <h2 className="text-xl sm:text-2xl leading-relaxed font-light text-white italic">
          "{question.situation} {question.questionText}"
        </h2>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {question.options.map((option, idx) => {
            const letter = optionLetters[idx];
            const isSelected = selectedOptionIndex === idx;

            let cardStyle =
              'bg-[#1a1a1e] border-zinc-800 hover:border-amber-500/50 text-zinc-400';
            let circleStyle =
              'border-zinc-700 text-zinc-400 group-hover:border-amber-500';
            let textStyle = 'text-zinc-400';

            if (isAnswered) {
              if (idx === question.correctIndex) {
                cardStyle = 'border-amber-500/50 bg-amber-500/10';
                circleStyle = 'border-amber-500 text-amber-500 bg-amber-500/20';
                textStyle = 'text-white font-medium';
              } else if (isSelected) {
                cardStyle = 'border-rose-500/50 bg-rose-500/10';
                circleStyle = 'border-rose-500 text-rose-400';
                textStyle = 'text-rose-300 line-through';
              } else {
                cardStyle = 'border-zinc-800/40 bg-[#1a1a1e]/40 opacity-40';
              }
            } else if (isSelected) {
              cardStyle = 'border-amber-500 bg-amber-500/10';
              circleStyle = 'border-amber-500 text-amber-500';
              textStyle = 'text-white font-medium';
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => onSelectOption(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-start gap-4 group relative focus:outline-none ${cardStyle}`}
              >
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs shrink-0 transition ${circleStyle}`}>
                  {letter}
                </span>
                <span className={`text-sm leading-relaxed pt-1.5 flex-1 ${textStyle}`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Keyboard Helper Footer */}
        <div className="text-center text-[10px] text-zinc-500 tracking-widest uppercase pt-2">
          Gợi ý: Nhấn phím <kbd className="px-1.5 py-0.5 bg-[#1a1a1e] border border-zinc-700 rounded text-amber-500 font-mono">A</kbd>,{' '}
          <kbd className="px-1.5 py-0.5 bg-[#1a1a1e] border border-zinc-700 rounded text-amber-500 font-mono">B</kbd>,{' '}
          <kbd className="px-1.5 py-0.5 bg-[#1a1a1e] border border-zinc-700 rounded text-amber-500 font-mono">C</kbd>,{' '}
          <kbd className="px-1.5 py-0.5 bg-[#1a1a1e] border border-zinc-700 rounded text-amber-500 font-mono">D</kbd> trên bàn phím
        </div>
      </div>
    </div>
  );
};
