export type VehicleType = 'Xe máy' | 'Ô tô' | 'Chung' | 'Người đi bộ';

export type CategoryId = 'alcohol' | 'speed_signal' | 'lane_prohibited' | 'documents' | 'safety_priority';

export interface Question {
  id: number;
  category: CategoryId;
  categoryName: string;
  vehicle: VehicleType;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  situation: string; // Brief scenario
  questionText: string;
  options: [string, string, string, string];
  correctIndex: number;
  decreeReference: string; // e.g., "Điểm e Khoản 4 Điều 6 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)"
  penaltyRange: string; // e.g., "600.000đ - 1.000.000đ"
  extraPenalty?: string; // e.g., "Tước GPLX từ 1 - 3 tháng"
  expertExplanation: string; // Deep traffic expert commentary & safety advice
}

export type GameMode = 'full20' | 'survival' | 'practice' | 'handbook' | 'leaderboard';

export interface UserProfile {
  name: string;
  avatar: string; // Icon or avatar ID
  totalGamesPlayed: number;
  highestScore: number;
  totalCorrect: number;
  totalAnswered: number;
  badges: string[];
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  score: number;
  accuracy: number; // Percentage 0-100
  timeSeconds: number;
  date: string;
  badge: string;
  isCurrentUser?: boolean;
}

export interface AnswerRecord {
  questionId: number;
  selectedIndex: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
  pointsEarned: number;
}

export interface QuizSessionState {
  currentQuestionIndex: number;
  questions: Question[];
  answers: AnswerRecord[];
  score: number;
  streak: number;
  maxStreak: number;
  livesRemaining: number; // For survival mode
  timeRemaining: number; // Per question timer
  isAnswered: boolean;
  selectedOptionIndex: number | null;
  isCompleted: boolean;
  startTime: number;
}
