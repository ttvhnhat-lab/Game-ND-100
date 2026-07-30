import React from 'react';
import { LeaderboardEntry } from '../types';
import { AVATARS } from '../utils/storage';
import { Award, Trophy, Flame, Clock, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

interface LeaderboardViewProps {
  entries: LeaderboardEntry[];
  currentUserScore?: number;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  entries,
  currentUserScore
}) => {
  const top3 = entries.slice(0, 3);
  const remaining = entries.slice(3);

  const getAvatarEmoji = (avatarId: string) => {
    const found = AVATARS.find((a) => a.id === avatarId);
    return found ? found.emoji : '🚗';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in py-2">
      {/* Header Banner */}
      <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
          <Award className="w-4 h-4 text-amber-500" /> Bảng Vàng Vinh Danh
        </div>
        <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
          Bảng Xếp Hạng <span className="text-amber-500 font-medium italic">Chuyên Gia Giao Thông</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2 leading-relaxed font-light">
          Top những tay lái và người am hiểu Nghị định 100/123 nhất với điểm số cao nhất và thời gian hoàn thành nhanh nhất!
        </p>
      </div>

      {/* Top 3 Podium */}
      {top3.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Rank 2 (Silver) */}
          <div className="order-2 md:order-1 bg-[#141417] border border-zinc-800 rounded-2xl p-5 text-center relative flex flex-col justify-between shadow-xl">
            <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#0c0c0e] text-zinc-300 font-mono font-bold text-xs flex items-center justify-center border border-zinc-700">
              #2
            </div>
            <div className="pt-2">
              <div className="w-16 h-16 rounded-full bg-[#0c0c0e] border border-zinc-700 mx-auto flex items-center justify-center text-3xl shadow-lg mb-2">
                {getAvatarEmoji(top3[1].avatar)}
              </div>
              <h3 className="font-light text-white text-base line-clamp-1">{top3[1].name}</h3>
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-amber-500/10 text-amber-500 rounded-full mt-1 border border-amber-500/30 uppercase">
                {top3[1].badge}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <div className="text-2xl font-mono text-zinc-200 flex items-center justify-center gap-1">
                <Zap className="w-4 h-4 text-zinc-400 fill-zinc-400" /> {top3[1].score}
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                Đúng {top3[1].accuracy}% • {top3[1].timeSeconds}s
              </div>
            </div>
          </div>

          {/* Rank 1 (Gold) */}
          <div className="order-1 md:order-2 bg-[#141417] border-2 border-amber-500/50 rounded-2xl p-6 text-center relative flex flex-col justify-between shadow-2xl scale-105 z-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-bold px-4 py-0.5 rounded-full text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 fill-black" /> QUÁN QUÂN #1
            </div>
            <div className="pt-4">
              <div className="w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/50 mx-auto flex items-center justify-center text-4xl shadow-xl mb-2">
                {getAvatarEmoji(top3[0].avatar)}
              </div>
              <h3 className="font-medium text-amber-500 text-lg line-clamp-1">{top3[0].name}</h3>
              <span className="inline-block px-3 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-500 rounded-full mt-1 border border-amber-500/30 uppercase tracking-widest">
                {top3[0].badge}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <div className="text-3xl font-mono text-amber-500 flex items-center justify-center gap-1">
                <Zap className="w-5 h-5 text-amber-500 fill-amber-500" /> {top3[0].score}
              </div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                Đúng {top3[0].accuracy}% • {top3[0].timeSeconds}s
              </div>
            </div>
          </div>

          {/* Rank 3 (Bronze) */}
          <div className="order-3 bg-[#141417] border border-zinc-800 rounded-2xl p-5 text-center relative flex flex-col justify-between shadow-xl">
            <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#0c0c0e] text-zinc-400 font-mono font-bold text-xs flex items-center justify-center border border-zinc-800">
              #3
            </div>
            <div className="pt-2">
              <div className="w-16 h-16 rounded-full bg-[#0c0c0e] border border-zinc-800 mx-auto flex items-center justify-center text-3xl shadow-lg mb-2">
                {getAvatarEmoji(top3[2].avatar)}
              </div>
              <h3 className="font-light text-white text-base line-clamp-1">{top3[2].name}</h3>
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-amber-500/10 text-amber-500 rounded-full mt-1 border border-amber-500/30 uppercase">
                {top3[2].badge}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <div className="text-2xl font-mono text-amber-500 flex items-center justify-center gap-1">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" /> {top3[2].score}
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                Đúng {top3[2].accuracy}% • {top3[2].timeSeconds}s
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ranks Table (Rank 4 to 20) */}
      <div className="bg-[#141417] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-4 bg-[#0c0c0e] border-b border-zinc-800 font-bold text-[10px] uppercase tracking-widest text-zinc-500 grid grid-cols-12 gap-2">
          <div className="col-span-2 sm:col-span-1 text-center">Hạng</div>
          <div className="col-span-6 sm:col-span-6">Người chơi</div>
          <div className="col-span-2 sm:col-span-3 text-right">Điểm số</div>
          <div className="hidden sm:block col-span-2 text-right">Thời gian</div>
        </div>

        <div className="divide-y divide-zinc-800/60">
          {entries.map((entry, index) => {
            const isUser = entry.isCurrentUser;
            return (
              <div
                key={entry.id || index}
                className={`p-4 grid grid-cols-12 gap-2 items-center text-sm transition ${
                  isUser
                    ? 'bg-amber-500/10 font-medium border-l-4 border-l-amber-500'
                    : 'hover:bg-[#1a1a1e]'
                }`}
              >
                <div className="col-span-2 sm:col-span-1 font-mono font-bold text-center text-zinc-500">
                  {index === 0
                    ? '🥇'
                    : index === 1
                    ? '🥈'
                    : index === 2
                    ? '🥉'
                    : `#${index + 1}`}
                </div>

                <div className="col-span-6 sm:col-span-6 flex items-center gap-3 min-w-0">
                  <span className="text-xl shrink-0">{getAvatarEmoji(entry.avatar)}</span>
                  <div className="truncate">
                    <div className="font-light text-white truncate flex items-center gap-1.5">
                      <span>{entry.name}</span>
                      {isUser && (
                        <span className="px-1.5 py-0.2 bg-amber-500/20 text-amber-500 text-[10px] rounded border border-amber-500/30 uppercase font-bold">
                          Bạn
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-zinc-500 truncate uppercase">{entry.badge}</div>
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-3 text-right font-mono font-medium text-amber-500 text-base">
                  {entry.score} <span className="text-[10px] text-zinc-500">pt</span>
                  <div className="text-[10px] font-normal text-zinc-500">
                    Đúng {entry.accuracy}%
                  </div>
                </div>

                <div className="hidden sm:block col-span-2 text-right text-xs text-zinc-400 font-mono">
                  {entry.timeSeconds}s
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rules Info */}
      <div className="p-5 bg-[#141417] border border-zinc-800 rounded-2xl text-xs text-zinc-400 space-y-1.5 font-light">
        <div className="font-bold text-white flex items-center gap-1.5 mb-2">
          <ShieldCheck className="w-4 h-4 text-amber-500" /> Quy Tắc Tính Điểm Xếp Hạng:
        </div>
        <p>• <strong className="text-zinc-200">Trả lời đúng:</strong> +100 điểm cơ bản / câu.</p>
        <p>• <strong className="text-zinc-200">Thưởng tốc độ:</strong> Trả lời dưới 10 giây được cộng thêm đến +50 điểm thưởng.</p>
        <p>• <strong className="text-zinc-200">Thưởng chuỗi (Streak):</strong> Trả lời đúng liên tiếp nhân thêm hệ số chuỗi (x2, x3, x4).</p>
        <p>• <strong className="text-zinc-200">Hoàn thành 100%:</strong> Đạt 20/20 câu đúng được cộng thêm +500 điểm thưởng Quán Quân.</p>
      </div>
    </div>
  );
};
