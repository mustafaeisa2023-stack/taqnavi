type StartScreenProps = { onStart: () => void };

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <section className="card center">
      <h1>Taqnavi</h1>
      <p className="subtitle">Find a tech path that fits how you think, build, and learn.</p>
      <p className="muted">12 scenario-based questions • ~3 minutes</p>
      <button className="primary" onClick={onStart}>Start Quiz</button>
      <p className="disclaimer">This is a guided recommendation based on your answers, not a scientific diagnosis.</p>
    </section>
  );
}
