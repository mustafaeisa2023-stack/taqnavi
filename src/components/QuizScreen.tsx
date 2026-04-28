import { ProgressBar } from './ProgressBar';
import type { Question } from '../types/quiz';

type QuizScreenProps = {
  question: Question;
  index: number;
  total: number;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
  onNext: () => void;
  error?: string;
};

export function QuizScreen({ question, index, total, selectedOptionId, onSelect, onNext, error }: QuizScreenProps) {
  const isLast = index === total - 1;
  const hasSelection = Boolean(selectedOptionId);

  return (
    <section className="card quiz-screen">
      <ProgressBar current={index + 1} total={total} />
      <h2 className="question-title">{question.prompt}</h2>
      <div className="options" role="radiogroup" aria-label={`Question ${index + 1}`}>
        {question.options.map((option) => {
          const selected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              className={`option ${selected ? 'selected' : ''}`}
              aria-pressed={selected}
              onClick={() => onSelect(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="primary" type="button" onClick={onNext} disabled={!hasSelection}>{isLast ? 'See Result' : 'Next Question'}</button>
    </section>
  );
}
