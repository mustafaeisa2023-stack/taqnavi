import { ProgressBar } from './ProgressBar';
import type { Question } from '../types/quiz';
import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';
import { LanguageToggle } from './LanguageToggle';

type QuizScreenProps = { question: Question; index: number; total: number; selectedOptionId?: string; onSelect: (optionId: string) => void; onNext: () => void; error?: string; };
const L = (s:string,lang:'en'|'ar') => (lang === 'ar' ? `◀ ${s}` : s);

export function QuizScreen({ question, index, total, selectedOptionId, onSelect, onNext, error }: QuizScreenProps) {
  const isLast = index === total - 1;
  const hasSelection = Boolean(selectedOptionId);
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  return (
    <section className="card quiz-screen">
      <LanguageToggle />
      <ProgressBar current={index + 1} total={total} />
      <h2 className="question-title">{L(question.prompt, lang)}</h2>
      <div className="options" role="radiogroup" aria-label={`${t.questionOf(index + 1, total)}`}>
        {question.options.map((option) => <button key={option.id} type="button" className={`option ${selectedOptionId === option.id ? 'selected' : ''}`} aria-pressed={selectedOptionId === option.id} onClick={() => onSelect(option.id)}>{L(option.label, lang)}</button>)}
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="primary" type="button" onClick={onNext} disabled={!hasSelection}>{isLast ? t.seeResult : t.nextQuestion}</button>
    </section>
  );
}
