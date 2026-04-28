import type { QuizResult } from '../types/quiz';
import { ResultCard } from './ResultCard';

type ResultScreenProps = {
  result: QuizResult;
  onRestart: () => void;
};

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { primary, top3 } = result;

  return (
    <section className="card result-layout">
      <article className="primary-match">
        <p className="chip">Primary Match</p>
        <h2>{primary.title}</h2>
        <p className="lead">{primary.shortDescription}</p>
      </article>

      <section>
        <h3>Why this fits</h3>
        <p>{primary.whyItFits}</p>
      </section>

      <section>
        <h3>Your likely strengths</h3>
        <ul>{primary.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
      </section>

      <section>
        <h3>Watch out</h3>
        <ul>{primary.watchOut.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section>
        <h3>First skills to learn</h3>
        <ul>{primary.firstSkills.map((s) => <li key={s}>{s}</li>)}</ul>
      </section>

      <section>
        <h3>Beginner learning path</h3>
        <ol className="path-list">{primary.learningPath.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>

      <section>
        <h3>Mini project to try</h3>
        <p>{primary.miniProject}</p>
      </section>

      <section>
        <h3>Starter topics</h3>
        <ul>{primary.starterTopics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
      </section>

      <section>
        <h3>Your top 3 matches</h3>
        <div className="top3">
          {top3.map((entry, i) => (
            <ResultCard
              key={entry.track.id}
              rank={i + 1}
              title={entry.track.title}
              percentage={entry.percentage}
              reason={entry.track.whyItFits}
            />
          ))}
        </div>
      </section>

      <p className="disclaimer">This result is a guided recommendation based on your answers. It is not a scientific diagnosis or a psychometric assessment.</p>
      <button className="primary" onClick={onRestart}>Restart Quiz</button>
    </section>
  );
}
