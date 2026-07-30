/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  CategoryId,
  GameMode,
  LeaderboardEntry,
  Question,
  QuizSessionState,
  UserProfile
} from './types';
import { QUESTIONS } from './data/questions';
import {
  getUserProfile,
  saveUserProfile,
  getLeaderboard,
  saveScoreToLeaderboard,
  calculateGrade
} from './utils/storage';
import { soundFx } from './utils/sound';

import { Header } from './components/Header';
import { ProfileModal } from './components/ProfileModal';
import { QuizCard } from './components/QuizCard';
import { ExplanationModal } from './components/ExplanationModal';
import { ResultScreen } from './components/ResultScreen';
import { PenaltyHandbook } from './components/PenaltyHandbook';
import { LeaderboardView } from './components/LeaderboardView';
import { CategoryPractice } from './components/CategoryPractice';
import { ReviewMissedModal } from './components/ReviewMissedModal';

import { ShieldAlert, Play, Zap, BookOpen, Award, CheckCircle2, RotateCcw } from 'lucide-react';

const QUESTION_TIMEOUT_SECONDS = 30;

export default function App() {
  // Navigation & User Profile
  const [currentMode, setCurrentMode] = useState<GameMode>('full20');
  const [profile, setProfile] = useState<UserProfile>(getUserProfile());
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundFx.soundEnabled);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(getLeaderboard());

  // Quiz Session State
  const [quizSession, setQuizSession] = useState<QuizSessionState | null>(null);
  const [showExplanationModal, setShowExplanationModal] = useState(false);
  const [showReviewMissedModal, setShowReviewMissedModal] = useState(false);

  // Toggle Sound
  const handleToggleSound = () => {
    const newState = soundFx.toggleSound();
    setSoundEnabled(newState);
  };

  // Start new quiz session
  const startNewQuiz = useCallback(
    (mode: GameMode, categoryFilter?: CategoryId) => {
      let qList = [...QUESTIONS];

      if (categoryFilter) {
        qList = qList.filter((q) => q.category === categoryFilter);
      }

      // Shuffle order
      qList = qList.sort(() => Math.random() - 0.5);

      if (mode === 'full20') {
        qList = qList.slice(0, 20);
      } else if (mode === 'survival') {
        qList = qList.slice(0, 20);
      }

      setQuizSession({
        currentQuestionIndex: 0,
        questions: qList,
        answers: [],
        score: 0,
        streak: 0,
        maxStreak: 0,
        livesRemaining: 3,
        timeRemaining: QUESTION_TIMEOUT_SECONDS,
        isAnswered: false,
        selectedOptionIndex: null,
        isCompleted: false,
        startTime: Date.now()
      });

      setShowExplanationModal(false);
      setShowReviewMissedModal(false);
      setCurrentMode(mode);
    },
    []
  );

  // Per-question Timer effect
  useEffect(() => {
    if (
      !quizSession ||
      quizSession.isAnswered ||
      quizSession.isCompleted ||
      showExplanationModal ||
      showReviewMissedModal
    ) {
      return;
    }

    const timer = setInterval(() => {
      setQuizSession((prev) => {
        if (!prev) return null;
        if (prev.timeRemaining <= 1) {
          // Time expired -> auto select wrong answer
          handleSelectOption(-1); // -1 means timeout
          return prev;
        }
        if (prev.timeRemaining <= 6) {
          soundFx.playTick();
        }
        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizSession, showExplanationModal, showReviewMissedModal]);

  // Handle Option Selection
  const handleSelectOption = (index: number) => {
    if (!quizSession || quizSession.isAnswered || quizSession.isCompleted) return;

    const currentQ = quizSession.questions[quizSession.currentQuestionIndex];
    const isCorrect = index === currentQ.correctIndex;

    let pointsEarned = 0;
    let newStreak = isCorrect ? quizSession.streak + 1 : 0;
    let newMaxStreak = Math.max(quizSession.maxStreak, newStreak);
    let newLives = quizSession.livesRemaining;

    if (isCorrect) {
      soundFx.playCorrect();
      // Base score 100
      pointsEarned = 100;
      // Speed Bonus (up to +50 points)
      const speedBonus = Math.round((quizSession.timeRemaining / QUESTION_TIMEOUT_SECONDS) * 50);
      // Streak Bonus
      const streakBonus = Math.min(newStreak * 15, 60);

      pointsEarned += speedBonus + streakBonus;
    } else {
      soundFx.playWrong();
      if (currentMode === 'survival') {
        newLives -= 1;
      }
    }

    const newScore = quizSession.score + pointsEarned;
    const timeSpent = QUESTION_TIMEOUT_SECONDS - quizSession.timeRemaining;

    const answerRecord = {
      questionId: currentQ.id,
      selectedIndex: index,
      isCorrect,
      timeSpentSeconds: timeSpent,
      pointsEarned
    };

    const updatedAnswers = [...quizSession.answers, answerRecord];

    setQuizSession({
      ...quizSession,
      isAnswered: true,
      selectedOptionIndex: index,
      score: newScore,
      streak: newStreak,
      maxStreak: newMaxStreak,
      livesRemaining: newLives,
      answers: updatedAnswers
    });

    // Show Explanation Modal
    setShowExplanationModal(true);
  };

  // Move to Next Question or Complete Test
  const handleNextQuestion = () => {
    if (!quizSession) return;

    setShowExplanationModal(false);

    const isLast =
      quizSession.currentQuestionIndex >= quizSession.questions.length - 1 ||
      (currentMode === 'survival' && quizSession.livesRemaining <= 0);

    if (isLast) {
      // Complete Session
      const totalCount = quizSession.questions.length;
      const correctCount = quizSession.answers.filter((a) => a.isCorrect).length;
      const accuracy = Math.round((correctCount / totalCount) * 100);
      const durationSeconds = Math.round((Date.now() - quizSession.startTime) / 1000);

      const gradeObj = calculateGrade(quizSession.score, accuracy);

      // Save to Leaderboard
      const updatedLb = saveScoreToLeaderboard({
        name: profile.name,
        avatar: profile.avatar,
        score: quizSession.score,
        accuracy,
        timeSeconds: durationSeconds,
        date: new Date().toLocaleDateString('vi-VN'),
        badge: gradeObj.badge,
        isCurrentUser: true
      });
      setLeaderboard(updatedLb);

      // Update User Profile Stats
      const updatedProfile: UserProfile = {
        ...profile,
        totalGamesPlayed: profile.totalGamesPlayed + 1,
        highestScore: Math.max(profile.highestScore, quizSession.score),
        totalCorrect: profile.totalCorrect + correctCount,
        totalAnswered: profile.totalAnswered + totalCount
      };
      setProfile(updatedProfile);
      saveUserProfile(updatedProfile);

      setQuizSession({
        ...quizSession,
        isCompleted: true
      });
    } else {
      // Advance Index
      setQuizSession({
        ...quizSession,
        currentQuestionIndex: quizSession.currentQuestionIndex + 1,
        timeRemaining: QUESTION_TIMEOUT_SECONDS,
        isAnswered: false,
        selectedOptionIndex: null
      });
    }
  };

  const missedRecords = quizSession?.answers.filter((a) => !a.isCorrect) || [];

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Header Bar */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          if (mode === 'full20' || mode === 'survival') {
            startNewQuiz(mode);
          } else {
            setCurrentMode(mode);
          }
        }}
        profile={profile}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* VIEW 1: Active Quiz Session */}
        {quizSession && !quizSession.isCompleted && (currentMode === 'full20' || currentMode === 'survival' || currentMode === 'practice') && (
          <QuizCard
            question={quizSession.questions[quizSession.currentQuestionIndex]}
            questionIndex={quizSession.currentQuestionIndex}
            totalQuestions={quizSession.questions.length}
            timeRemaining={quizSession.timeRemaining}
            maxTime={QUESTION_TIMEOUT_SECONDS}
            score={quizSession.score}
            streak={quizSession.streak}
            livesRemaining={quizSession.livesRemaining}
            isSurvivalMode={currentMode === 'survival'}
            selectedOptionIndex={quizSession.selectedOptionIndex}
            onSelectOption={handleSelectOption}
            isAnswered={quizSession.isAnswered}
          />
        )}

        {/* VIEW 2: Result Screen */}
        {quizSession && quizSession.isCompleted && (
          <ResultScreen
            session={quizSession}
            profile={profile}
            onRetry={() => startNewQuiz(currentMode)}
            onOpenReviewMissed={() => setShowReviewMissedModal(true)}
            onGoToLeaderboard={() => setCurrentMode('leaderboard')}
            onGoToHandbook={() => setCurrentMode('handbook')}
          />
        )}

        {/* VIEW 3: Start / Mode Selector (If no active session or choosing mode) */}
        {!quizSession && (currentMode === 'full20' || currentMode === 'survival') && (
          <div className="max-w-4xl mx-auto space-y-8 py-4 animate-fade-in text-center">
            <div className="bg-[#141417] border border-zinc-800 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold block mb-2">
                Chuyên Gia Giao Thông
              </span>

              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Hệ Thống Sát Hạch <span className="text-amber-500 font-medium italic">Nghị Định 100/123</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
                Thử thách 20 tình huống giao thông thực tế về nồng độ cồn, vượt đèn đỏ, chạy quá tốc độ, đi ngược chiều và mức xử phạt chi tiết kèm lời khuyên chuyên gia.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => startNewQuiz('full20')}
                  className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>Bắt Đầu Đề Thi 20 Câu</span>
                </button>

                <button
                  onClick={() => startNewQuiz('survival')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#1a1a1e] border border-zinc-800 hover:border-amber-500/50 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Chế Độ Sinh Tồn (3 Mạng)</span>
                </button>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-6 bg-[#141417] border border-zinc-800 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-light text-white text-base">Tình Huống Thực Tế</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  20 câu hỏi bao quát đầy đủ lỗi giao thông phổ biến của Xe máy & Ô tô theo Nghị định mới nhất.
                </p>
              </div>

              <div className="p-6 bg-[#141417] border border-zinc-800 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-light text-white text-base">Giải Thích Chuyên Gia</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Phân tích kỹ lưỡng điều khoản pháp luật, mức phạt tiền, tước GPLX và lời khuyên lái xe an toàn.
                </p>
              </div>

              <div className="p-6 bg-[#141417] border border-zinc-800 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-light text-white text-base">Bảng Xếp Hạng Top</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Cạnh tranh điểm số, tốc độ và chuỗi đúng để giành vị trí Quán Quân Chuyên Gia Luật Giao Thông!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: Practice by Category */}
        {currentMode === 'practice' && !quizSession && (
          <CategoryPractice
            onStartCategory={(catId) => startNewQuiz('practice', catId)}
          />
        )}

        {/* VIEW 5: Searchable Penalty Handbook */}
        {currentMode === 'handbook' && <PenaltyHandbook />}

        {/* VIEW 6: Leaderboard */}
        {currentMode === 'leaderboard' && (
          <LeaderboardView entries={leaderboard} currentUserScore={profile.highestScore} />
        )}
      </main>

      {/* Explanation Modal */}
      {showExplanationModal && quizSession && (
        <ExplanationModal
          question={quizSession.questions[quizSession.currentQuestionIndex]}
          selectedIndex={quizSession.selectedOptionIndex ?? 0}
          isCorrect={
            quizSession.answers[quizSession.answers.length - 1]?.isCorrect ?? false
          }
          pointsEarned={
            quizSession.answers[quizSession.answers.length - 1]?.pointsEarned ?? 0
          }
          onNext={handleNextQuestion}
          isLastQuestion={
            quizSession.currentQuestionIndex >= quizSession.questions.length - 1 ||
            (currentMode === 'survival' && quizSession.livesRemaining <= 0)
          }
        />
      )}

      {/* Review Missed Questions Modal */}
      {showReviewMissedModal && (
        <ReviewMissedModal
          missedRecords={missedRecords}
          allQuestions={QUESTIONS}
          onClose={() => setShowReviewMissedModal(false)}
          onRetryQuiz={() => startNewQuiz(currentMode)}
        />
      )}

      {/* User Profile Customization Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSave={(updated) => {
          setProfile(updated);
          saveUserProfile(updated);
        }}
      />

      {/* App Footer */}
      <footer className="bg-[#0c0c0e] border-t border-zinc-800 py-6 text-center text-zinc-600 text-[10px] tracking-widest uppercase">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>Dữ liệu pháp luật: Nghị định 100/2019/NĐ-CP & 123/2021/NĐ-CP</div>
          <div>Hệ Thống Sát Hạch Chuyên Gia Giao Thông</div>
        </div>
      </footer>
    </div>
  );
}
