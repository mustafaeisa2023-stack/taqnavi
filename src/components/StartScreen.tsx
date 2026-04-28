type StartScreenProps = { onStart: () => void };

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <section className="card center start-screen">
      <p className="eyebrow">Booth Demo • Career Exploration</p>
      <h1 className="hero-title">Taqnavi</h1>
      <p className="subtitle">Discover a tech direction that fits how you solve problems, build projects, and prefer to learn.</p>

      <div className="info-strip" role="note" aria-label="Quiz details">
        <p><strong>Duration:</strong> 12 scenario-based questions in about 3 minutes</p>
        <p><strong>Purpose:</strong> Get a guided starting recommendation and next-step learning plan</p>
      </div>

      <button className="primary hero-cta" onClick={onStart}>Start Quiz</button>
      <p className="disclaimer">This is a guided recommendation based on your answers, not a scientific diagnosis.</p>
    </section>
  );
}
