
import React, { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { QuestionCard } from './components/QuestionCard';
import { ResultView } from './components/ResultView';
import { AdminStats } from './components/AdminStats';
import { QUESTIONS, RESULTS, PRIORITY_ORDER } from './constants';
import { AppState, WriterType } from './types';

const App: React.FC = () => {
  if (window.location.pathname.replace(/\/$/, '') === '/admin-stats') {
    return <AdminStats />;
  }

  const [view, setView] = useState<AppState>('HOME');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<WriterType, number>>({
    LIGHT_SWITCH: 0,
    SHERIFF: 0,
    TOO_MUCH_TALK: 0,
    STRAIGHT_BALL: 0,
    GLASS_DISPLAY: 0,
    MICROSCOPE: 0,
  });
  const [finalResult, setFinalResult] = useState<WriterType | null>(null);

  const handleStart = useCallback(() => {
    setView('TEST');
    setCurrentQuestionIndex(0);
    setScores({
      LIGHT_SWITCH: 0,
      SHERIFF: 0,
      TOO_MUCH_TALK: 0,
      STRAIGHT_BALL: 0,
      GLASS_DISPLAY: 0,
      MICROSCOPE: 0,
    });
  }, []);

  const handleSelect = useCallback((type: WriterType) => {
    const nextScores = { ...scores, [type]: scores[type] + 1 };
    setScores(nextScores);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // 결과 도출 로직
      const scoreValues = Object.values(nextScores) as number[];
      const maxScore = Math.max(...scoreValues);
      const winningTypes = (Object.keys(nextScores) as WriterType[]).filter(key => nextScores[key] === maxScore);

      // 동점 처리 우선순위 적용
      let finalWinner = winningTypes[0];
      if (winningTypes.length > 1) {
        for (const priorityType of PRIORITY_ORDER) {
          if (winningTypes.includes(priorityType)) {
            finalWinner = priorityType;
            break;
          }
        }
      }

      setFinalResult(finalWinner);
      setView('RESULT');
    }
  }, [currentQuestionIndex, scores]);

  const handleReset = useCallback(() => {
    setView('HOME');
    setFinalResult(null);
  }, []);

  return (
    <Layout>
      {view === 'HOME' && <Hero onStart={handleStart} />}

      {view === 'TEST' && (
        <QuestionCard
          question={QUESTIONS[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          total={QUESTIONS.length}
          onSelect={handleSelect}
        />
      )}

      {view === 'RESULT' && finalResult && (
        <ResultView
          result={RESULTS[finalResult]}
          onReset={handleReset}
        />
      )}
    </Layout>
  );
};

export default App;
