type ResultCardProps = {
  rank: number;
  title: string;
  percentage: number;
  reason: string;
};

export function ResultCard({ rank, title, percentage, reason }: ResultCardProps) {
  return (
    <article className="result-card">
      <div className="result-rank">#{rank}</div>
      <div className="result-main">
        <strong>{title}</strong>
        <p className="result-reason">{reason}</p>
      </div>
      <span className="result-match">{percentage}% match</span>
    </article>
  );
}
