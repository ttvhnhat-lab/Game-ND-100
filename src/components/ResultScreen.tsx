import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { QuizSessionState, UserProfile } from '../types';
import { calculateGrade } from '../utils/storage';
import { soundFx } from '../utils/sound';
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  Flame,
  RotateCcw,
  BookOpen,
  Search,
  Share2,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ResultScreenProps {
  session: QuizSessionState;
  profile: UserProfile;
  onRetry: () => void;
  onOpenReviewMissed: () => void;
  onGoToLeaderboard: () => void;
  onGoToHandbook: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  session,
  profile,
  onRetry,
  onOpenReviewMissed,
  onGoToLeaderboard,
  onGoToHandbook
}) => {
  const totalQuestions = session.questions.length;
  const correctCount = session.answers.filter((a) => a.isCorrect).length;
  const missedCount = totalQuestions - correctCount;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);

  const durationSeconds = Math.round((Date.now() - session.startTime) / 1000);
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;

  const grade = calculateGrade(session.score, accuracy);

  useEffect(() => {
    soundFx.playComplete();
    if (accuracy >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [accuracy]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Hệ Thống Sát Hạch Nghị Định 100 - Kết Quả',
        text: `Tôi vừa đạt ${session.score} điểm (${correctCount}/${totalQuestions} câu đúng) trong Hệ Thống Sát Hạch Mức Phạt Giao Thông!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `Tôi đạt ${session.score} điểm (${accuracy}%) trong Hệ Thống Sát Hạch Nghị Định 100/123!`
      );
      alert('Đã sao chép kết quả vào bộ nhớ tạm!');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in py-4">
      {/* Official Certificate Card */}
      <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
        {/* Top Stamp Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span>Bằng Chứng Nhận Am Hiểu Luật Giao Thông</span>
        </div>

        {/* Player Title & Grade Badge */}
        <div className="max-w-xl mx-auto space-y-3">
          <h1 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            {profile.name}
          </h1>
          <div className="inline-block px-5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 font-bold text-amber-500 text-sm sm:text-base">
            🏆 {grade.title}
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            {grade.description}
          </p>
        </div>

        {/* Core Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-zinc-800">
          {/* Total Score */}
          <div className="p-4 rounded-xl bg-[#0c0c0e] border border-zinc-800 text-center">
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 flex items-center justify-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Tổng Điểm
            </div>
            <div className="text-2xl sm:text-3xl font-mono text-amber-500 mt-1">
              {session.score}
            </div>
          </div>

          {/* Accuracy % */}
          <div className="p-4 rounded-xl bg-[#0c0c0e] border border-zinc-800 text-center">
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Tỉ Lệ Đúng
            </div>
            <div className="text-2xl sm:text-3xl font-mono text-amber-500 mt-1">
              {accuracy}%
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">
              ({correctCount}/{totalQuestions} câu)
            </div>
          </div>

          {/* Duration */}
          <div className="p-4 rounded-xl bg-[#0c0c0e] border border-zinc-800 text-center">
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-zinc-400" /> Thời Gian
            </div>
            <div className="text-2xl sm:text-3xl font-mono text-zinc-200 mt-1">
              {minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`}
            </div>
          </div>

          {/* Max Streak */}
          <div className="p-4 rounded-xl bg-[#0c0c0e] border border-zinc-800 text-center">
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Chuỗi Tối Đa
            </div>
            <div className="text-2xl sm:text-3xl font-mono text-amber-500 mt-1">
              x{session.maxStreak}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <button
          onClick={onRetry}
          className="p-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-widest transition flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4 stroke-[2.5]" />
          <span>Thử Thách Lại</span>
        </button>

        {missedCount > 0 && (
          <button
            onClick={onOpenReviewMissed}
            className="p-4 rounded-xl bg-[#1a1a1e] hover:border-amber-500/50 border border-zinc-800 text-rose-400 text-xs font-bold uppercase tracking-widest transition flex items-center justify-center gap-2"
          >
            <XCircle className="w-4 h-4 text-rose-400" />
            <span>Ôn {missedCount} Câu Sai</span>
          </button>
        )}

        <button
          onClick={onGoToLeaderboard}
          className="p-4 rounded-xl bg-[#1a1a1e] hover:border-amber-500/50 border border-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-widest transition flex items-center justify-center gap-2"
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>Bảng Xếp Hạng</span>
        </button>

        <button
          onClick={handleShare}
          className="p-4 rounded-xl bg-[#1a1a1e] hover:border-amber-500/50 border border-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-widest transition flex items-center justify-center gap-2"
        >
          <Share2 className="w-4 h-4 text-zinc-400" />
          <span>Chia Sẻ Kết Quả</span>
        </button>
      </div>

      {/* Bonus Search Prompt */}
      <div className="p-5 bg-[#141417] border border-zinc-800 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-xl">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-light text-white">Tra Cứu Nhanh Mức Phạt Giao Thông</h4>
            <p className="text-xs text-zinc-400">
              Tra cứu nhanh mức phạt tiền & tước GPLX của tất cả 20+ hành vi vi phạm.
            </p>
          </div>
        </div>
        <button
          onClick={onGoToHandbook}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-colors flex items-center gap-1.5"
        >
          <BookOpen className="w-4 h-4" /> Tra Cứu Mức Phạt
        </button>
      </div>
    </div>
  );
};
