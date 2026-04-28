import { useMemo, useState } from 'react';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { StartScreen } from './components/StartScreen';
import { QUESTIONS } from './data/questions';
import { selectBalancedQuestions } from './lib/questionSelection';
import { buildQuizResult } from './lib/scoring';
import type { Question } from './types/quiz';
import './styles.css';

type Stage = 'start' | 'quiz' | 'result';

function App() {
  const [stage, setStage] = useState<Stage>('start');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState('');

  const result = useMemo(() => (stage === 'result' ? buildQuizResult(quizQuestions, answers) : null), [answers, quizQuestions, stage]);

  const startQuiz = () => {
    setQuizQuestions(selectBalancedQuestions(QUESTIONS));
    setStage('quiz');
    setCurrentIndex(0);
    setAnswers([]);
    setError('');
  };

  const handleSelect = (optionId: string) => {
    const next = [...answers];
    next[currentIndex] = optionId;
    setAnswers(next);
    setError('');
  };

  const handleNext = () => {
    if (!answers[currentIndex]) {
      setError('Please choose one answer before continuing.');
      return;
    }

    if (currentIndex === quizQuestions.length - 1) {
      setStage('result');
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  if (stage === 'start') return <main className="shell"><StartScreen onStart={startQuiz} /></main>;
  if (stage === 'result' && result) return <main className="shell"><ResultScreen result={result} onRestart={startQuiz} /></main>;

  return (
    <main className="shell">
      <QuizScreen
        question={quizQuestions[currentIndex]}
        index={currentIndex}
        total={quizQuestions.length}
        selectedOptionId={answers[currentIndex]}
        onSelect={handleSelect}
        onNext={handleNext}
        error={error}
      />
    </main>
  );
}

export default App;
