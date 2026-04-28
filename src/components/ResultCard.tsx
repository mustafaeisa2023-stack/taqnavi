type ResultCardProps = {
  rank: number;
  title: string;
  percentage: number;
  reason: string;
};

export function ResultCard({ rank, title, percentage, reason }: ResultCardProps) {
  return (
    <article className="result-card">
      <div>
        <strong>#{rank} {title}</strong>
        <p className="result-reason">{reason}</p>
      </div>
      <span>{percentage}% match</span>
    </article>
  );
}
