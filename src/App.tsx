import { useMemo, useState } from 'react';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { StartScreen } from './components/StartScreen';
import { QUESTIONS } from './data/questions';
import { selectBalancedQuestions } from './lib/questionSelection';
import { buildQuizResult } from './lib/scoring';
import type { Question } from './types/quiz';
import './styles.css';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';
import { UI_TEXT } from './i18n';

type Stage = 'start' | 'quiz' | 'result';

function AppInner() {
  const [stage, setStage] = useState<Stage>('start');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [sessionSeed, setSessionSeed] = useState('seed-initial');
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];

  const result = useMemo(() => (stage === 'result' ? buildQuizResult(quizQuestions, answers) : null), [answers, quizQuestions, stage]);
  const startQuiz = () => { setQuizQuestions(selectBalancedQuestions(QUESTIONS)); setStage('quiz'); setCurrentIndex(0); setAnswers([]); setError(''); setSessionSeed(`${Date.now()}`); };
  const handleSelect = (optionId: string) => { const next = [...answers]; next[currentIndex] = optionId; setAnswers(next); setError(''); };
  const handleNext = () => {
    if (!answers[currentIndex]) { setError(t.chooseAnswer); return; }
    if (currentIndex === quizQuestions.length - 1) { setStage('result'); return; }
    setCurrentIndex((prev) => prev + 1);
  };

  if (stage === 'start') return <main className="shell"><StartScreen onStart={startQuiz} /></main>;
  if (stage === 'result' && result) return <main className="shell"><ResultScreen result={result} onRestart={startQuiz} /></main>;
  const answeredCount = answers.filter(Boolean).length;

  return <main className="shell"><QuizScreen question={quizQuestions[currentIndex]} index={currentIndex} total={quizQuestions.length} answeredCount={answeredCount} selectedOptionId={answers[currentIndex]} onSelect={handleSelect} onNext={handleNext} error={error} sessionSeed={sessionSeed} /></main>;
}

export default function App() { return <LanguageProvider><ThemeProvider><AppInner /></ThemeProvider></LanguageProvider>; }
