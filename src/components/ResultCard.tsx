type ResultCardProps = {
  rank: number;
  title: string;
  percentage: number;
};

export function ResultCard({ rank, title, percentage }: ResultCardProps) {
  return (
    <article className="result-card">
      <strong>#{rank} {title}</strong>
      <span>{percentage}% match</span>
    </article>
  );
}
