import { useMemo } from 'react';
import { ProgressBar } from './ProgressBar';
import type { Question } from '../types/quiz';
import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../ThemeContext';
import { orderOptions } from '../lib/optionOrder';

type QuizScreenProps = { question: Question; index: number; total: number; answeredCount: number; selectedOptionId?: string; onSelect: (optionId: string) => void; onNext: () => void; error?: string; sessionSeed: string; };
export function QuizScreen({ question, index, total, answeredCount, selectedOptionId, onSelect, onNext, error, sessionSeed }: QuizScreenProps) {
  const isLast = index === total - 1;
  const hasSelection = Boolean(selectedOptionId);
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/brand/technavi-logo-dark.svg' : '/brand/technavi-logo-light.svg';
  const orderedOptions = useMemo(() => orderOptions(question.options, `${sessionSeed}:${question.id}`), [question.id, question.options, sessionSeed]);

  return (
    <section className="card quiz-screen">
      <div className="toolbar"><LanguageToggle /><ThemeToggle /></div>
      <img src={logoSrc} alt={t.logoAlt} className="brand-logo brand-logo-inline" />
      <ProgressBar current={index + 1} total={total} answered={answeredCount} />
      <h2 className="question-title">{question.prompt[lang]}</h2>
      <div className="options" role="radiogroup" aria-label={`${t.questionOf(index + 1, total)}`}>
        {orderedOptions.map((option) => <button key={option.id} type="button" className={`option ${selectedOptionId === option.id ? 'selected' : ''}`} aria-pressed={selectedOptionId === option.id} onClick={() => onSelect(option.id)}>{option.label[lang]}</button>)}
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="primary" type="button" onClick={onNext} disabled={!hasSelection}>
        {isLast ? (hasSelection ? t.seeResult : t.chooseAnswerToSeeResult) : t.nextQuestion}
      </button>
      <p className="credit">{t.credit}</p>
    </section>
  );
}
