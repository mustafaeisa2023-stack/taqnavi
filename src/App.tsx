import { useMemo, useState } from 'react';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { StartScreen } from './components/StartScreen';
import { QUESTIONS } from './data/questions';
import { buildQuizResult } from './lib/scoring';
import './styles.css';

type Stage = 'start' | 'quiz' | 'result';

function App() {
  const [stage, setStage] = useState<Stage>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState('');

  const result = useMemo(() => (stage === 'result' ? buildQuizResult(QUESTIONS, answers) : null), [answers, stage]);

  const startQuiz = () => {
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

    if (currentIndex === QUESTIONS.length - 1) {
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
        question={QUESTIONS[currentIndex]}
        index={currentIndex}
        total={QUESTIONS.length}
        selectedOptionId={answers[currentIndex]}
        onSelect={handleSelect}
        onNext={handleNext}
        error={error}
      />
    </main>
  );
}

export default App;
