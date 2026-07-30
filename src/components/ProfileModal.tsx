import React, { useState } from 'react';
import { UserProfile } from '../types';
import { AVATARS } from '../utils/storage';
import { User, Check, X } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onSave: (updated: UserProfile) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave
}) => {
  const [name, setName] = useState(profile.name);
  const [selectedAvatar, setSelectedAvatar] = useState(profile.avatar);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave({
      ...profile,
      name: name.trim(),
      avatar: selectedAvatar
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0c0e]/90 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md bg-[#141417] border border-zinc-800 rounded-2xl shadow-2xl p-6 text-zinc-100">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-light text-white">Hồ Sơ Người Chơi</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">
              Tên hiển thị / Biệt danh
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên của bạn..."
              maxLength={25}
              className="w-full px-4 py-2.5 bg-[#0c0c0e] border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">
              Chọn Ảnh Đại Diện (Avatar)
            </label>
            <div className="grid grid-cols-3 gap-3">
              {AVATARS.map((av) => {
                const isSelected = selectedAvatar === av.id;
                return (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => setSelectedAvatar(av.id)}
                    className={`flex flex-col items-center p-3 rounded-xl border text-center transition relative ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-zinc-800 bg-[#0c0c0e] hover:border-zinc-700'
                    }`}
                  >
                    <span className="text-2xl mb-1">{av.emoji}</span>
                    <span className="text-xs font-light text-zinc-300 line-clamp-1">
                      {av.name}
                    </span>
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-black text-[10px] font-bold">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 bg-[#1a1a1e] border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-bold rounded-xl text-xs uppercase tracking-widest transition"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-xs uppercase tracking-widest transition"
            >
              Lưu Thay Đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
