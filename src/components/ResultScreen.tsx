import type { QuizResult } from '../types/quiz';
import { ResultCard } from './ResultCard';

type ResultScreenProps = {
  result: QuizResult;
  onRestart: () => void;
};

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { primary, top3 } = result;

  return (
    <section className="card">
      <p className="chip">Primary Match</p>
      <h2>{primary.title}</h2>
      <p>{primary.description}</p>
      <h3>Why this path fits</h3>
      <p>{primary.whyFit}</p>
      <h3>Strengths</h3>
      <ul>{primary.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
      <h3>Recommended first skills</h3>
      <ul>{primary.firstSkills.map((s) => <li key={s}>{s}</li>)}</ul>
      <h3>Suggested mini project</h3>
      <p>{primary.miniProject}</p>

      <h3>Top 3 Matches</h3>
      <div className="top3">{top3.map((entry, i) => <ResultCard key={entry.track.id} rank={i + 1} title={entry.track.title} percentage={entry.percentage} />)}</div>

      <p className="disclaimer">Results are recommendations based on your answers. They are not a scientific diagnosis or psychometric assessment.</p>
      <button className="primary" onClick={onRestart}>Restart Quiz</button>
    </section>
  );
}
