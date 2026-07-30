import { LeaderboardEntry, UserProfile } from '../types';

const PROFILE_KEY = 'traffic_quiz_user_profile';
const LEADERBOARD_KEY = 'traffic_quiz_leaderboard';

export const AVATARS = [
  { id: 'officer', name: 'Cảnh sát giao thông', emoji: '👮‍♂️', bg: 'bg-blue-600' },
  { id: 'driver', name: 'Tài xế công nghệ', emoji: '🚗', bg: 'bg-emerald-600' },
  { id: 'biker', name: 'Tay lái Phượt thủ', emoji: '🏍️', bg: 'bg-amber-600' },
  { id: 'trucker', name: 'Bác tài Container', emoji: '🚚', bg: 'bg-purple-600' },
  { id: 'student', name: 'Sinh viên chuẩn luật', emoji: '🎓', bg: 'bg-indigo-600' },
  { id: 'expert', name: 'Chuyên gia an toàn', emoji: '🛡️', bg: 'bg-rose-600' }
];

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Tài Xế Mới',
  avatar: 'driver',
  totalGamesPlayed: 0,
  highestScore: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  badges: ['Tài xế khởi đầu']
};

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'lb-1',
    name: 'Đặng Văn Minh (CSGT Đội 1)',
    avatar: 'officer',
    score: 2920,
    accuracy: 100,
    timeSeconds: 88,
    date: '28/07/2026',
    badge: 'Chuyên Gia Luật'
  },
  {
    id: 'lb-2',
    name: 'Trần Thanh Hùng (Xanh SM)',
    avatar: 'driver',
    score: 2840,
    accuracy: 100,
    timeSeconds: 102,
    date: '29/07/2026',
    badge: 'Tài Xế Vàng'
  },
  {
    id: 'lb-3',
    name: 'Lê Thu Hà (Thầy Dạy Lái)',
    avatar: 'expert',
    score: 2750,
    accuracy: 95,
    timeSeconds: 95,
    date: '27/07/2026',
    badge: 'Giảng Viên Luật'
  },
  {
    id: 'lb-4',
    name: 'Nguyễn Bách (Biker PKL)',
    avatar: 'biker',
    score: 2610,
    accuracy: 95,
    timeSeconds: 118,
    date: '29/07/2026',
    badge: 'Phượt Thủ An Toàn'
  },
  {
    id: 'lb-5',
    name: 'Phạm Phương Anh (SV Luật)',
    avatar: 'student',
    score: 2480,
    accuracy: 90,
    timeSeconds: 125,
    date: '30/07/2026',
    badge: 'Giao Thông Thông Thái'
  }
];

export function getUserProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    // Ignore storage errors
  }
}

export function getLeaderboard(): LeaderboardEntry[] {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    if (!raw) return INITIAL_LEADERBOARD;
    const parsed: LeaderboardEntry[] = JSON.parse(raw);
    return parsed.sort((a, b) => b.score - a.score);
  } catch {
    return INITIAL_LEADERBOARD;
  }
}

export function saveScoreToLeaderboard(entry: Omit<LeaderboardEntry, 'id'>): LeaderboardEntry[] {
  const currentLb = getLeaderboard();
  const newEntry: LeaderboardEntry = {
    ...entry,
    id: 'lb-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4)
  };

  const updated = [...currentLb, newEntry]
    .sort((a, b) => b.score - a.score)
    .slice(0, 20); // Keep top 20

  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updated));
  } catch {
    // Ignore
  }

  return updated;
}

export function calculateGrade(score: number, accuracy: number): {
  title: string;
  badge: string;
  description: string;
  color: string;
} {
  if (accuracy === 100) {
    return {
      title: 'Chuyên Gia Luật Giao Thông',
      badge: 'Chuyên Gia 100%',
      description: 'Tuyệt vời! Bạn nắm vững 100% Nghị định 100/123/168 và các mức xử phạt. Bạn xứng đáng làm Đại Sứ An Toàn Giao Thông!',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    };
  } else if (accuracy >= 85) {
    return {
      title: 'Tài Xế Chuẩn Mực',
      badge: 'Tài Xế Chuẩn Mực',
      description: 'Xuất sắc! Kiến thức giao thông của bạn rất vững vàng. Bạn chắc chắn lái xe an toàn và không bao giờ lo phạt nguội.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    };
  } else if (accuracy >= 70) {
    return {
      title: 'Tài Xế Khá - Cần Cẩn Trọng',
      badge: 'Tay Lái Vững',
      description: 'Khá tốt! Bạn biết đa số các lỗi phổ biến. Tuy nhiên cần xem kỹ lại các mức phạt kịch khung (nồng độ cồn, cao tốc).',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    };
  } else if (accuracy >= 50) {
    return {
      title: 'Tài Xế Trung Bình',
      badge: 'Nắm Luật Cơ Bản',
      description: 'Bạn đã đạt mức trung bình, nhưng vẫn còn nhầm lẫn ở nhiều tình huống có tước giấy phép lái xe hoặc tạm giữ xe.',
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/30'
    };
  } else {
    return {
      title: 'Cần Ôn Luyện Gấp',
      badge: 'Tài Xế Học Việc',
      description: 'Nguy hiểm! Nhiều kiến thức phạt giao thông quan trọng bạn chưa nắm vững. Hãy dành thời gian xem lại các lời khuyên từ chuyên gia!',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30'
    };
  }
}
