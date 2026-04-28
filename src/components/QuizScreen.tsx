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

  return (
    <section className="card">
      <ProgressBar current={index + 1} total={total} />
      <h2>{question.prompt}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`option ${selectedOptionId === option.id ? 'selected' : ''}`}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      <button className="primary" onClick={onNext}>{isLast ? 'See Result' : 'Next Question'}</button>
    </section>
  );
}
