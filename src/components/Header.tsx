import React from 'react';
import { GameMode, UserProfile } from '../types';
import { AVATARS } from '../utils/storage';
import { soundFx } from '../utils/sound';
import {
  ShieldAlert,
  Award,
  BookOpen,
  Volume2,
  VolumeX,
  User,
  Zap,
  CheckCircle2,
  Flame,
  Search
} from 'lucide-react';

interface HeaderProps {
  currentMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
  profile: UserProfile;
  onOpenProfile: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  profile,
  onOpenProfile,
  soundEnabled,
  onToggleSound
}) => {
  const avatarObj = AVATARS.find((a) => a.id === profile.avatar) || AVATARS[1];

  return (
    <header className="sticky top-0 z-40 bg-[#0c0c0e]/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Brand Logo */}
          <button
            onClick={() => onSelectMode('full20')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold group-hover:border-amber-500 transition">
              <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold block mb-0.5">
                Chuyên Gia Giao Thông
              </span>
              <h1 className="text-base sm:text-xl font-light tracking-tight text-white group-hover:text-amber-400 transition">
                Hệ Thống Sát Hạch <span className="text-amber-500 font-medium italic">Nghị Định 100/123</span>
              </h1>
            </div>
          </button>

          {/* Right Actions: Sound + User Profile Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={onToggleSound}
              title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
              className="p-2 sm:p-2.5 bg-[#141417] hover:bg-[#1a1a1e] border border-zinc-800 rounded-xl text-zinc-300 hover:text-amber-500 transition"
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-amber-500" />
              ) : (
                <VolumeX className="w-5 h-5 text-zinc-600" />
              )}
            </button>

            {/* Profile Button */}
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2.5 p-1.5 sm:p-2 pl-3 bg-[#141417] hover:bg-[#1a1a1e] border border-zinc-800 hover:border-amber-500/40 rounded-xl transition group"
            >
              <span className="text-xl sm:text-2xl">{avatarObj.emoji}</span>
              <div className="text-left hidden md:block pr-1">
                <div className="text-xs font-medium text-zinc-200 group-hover:text-white line-clamp-1">
                  {profile.name}
                </div>
                <div className="text-[10px] text-amber-500 font-mono flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-amber-500 text-amber-500" /> {profile.highestScore} điểm
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation Bar Modes */}
        <nav className="flex items-center gap-1.5 sm:gap-2 pb-3 pt-1 overflow-x-auto no-scrollbar scroll-smooth">
          <button
            onClick={() => {
              soundFx.playTick();
              onSelectMode('full20');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap transition ${
              currentMode === 'full20'
                ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/10'
                : 'bg-[#141417] text-zinc-400 hover:text-white hover:bg-[#1a1a1e] border border-zinc-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Thử Thách 20 Câu</span>
          </button>

          <button
            onClick={() => {
              soundFx.playTick();
              onSelectMode('survival');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap transition ${
              currentMode === 'survival'
                ? 'bg-rose-500 text-white font-bold shadow-lg shadow-rose-500/10'
                : 'bg-[#141417] text-zinc-400 hover:text-white hover:bg-[#1a1a1e] border border-zinc-800'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>Sinh Tồn (3 Mạng)</span>
          </button>

          <button
            onClick={() => {
              soundFx.playTick();
              onSelectMode('practice');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap transition ${
              currentMode === 'practice'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50 font-bold'
                : 'bg-[#141417] text-zinc-400 hover:text-white hover:bg-[#1a1a1e] border border-zinc-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Ôn Theo Chủ Đề</span>
          </button>

          <button
            onClick={() => {
              soundFx.playTick();
              onSelectMode('handbook');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap transition ${
              currentMode === 'handbook'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50 font-bold'
                : 'bg-[#141417] text-zinc-400 hover:text-white hover:bg-[#1a1a1e] border border-zinc-800'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Tra Cứu Mức Phạt</span>
          </button>

          <button
            onClick={() => {
              soundFx.playTick();
              onSelectMode('leaderboard');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap transition ${
              currentMode === 'leaderboard'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50 font-bold'
                : 'bg-[#141417] text-zinc-400 hover:text-white hover:bg-[#1a1a1e] border border-zinc-800'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Bảng Xếp Hạng</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
