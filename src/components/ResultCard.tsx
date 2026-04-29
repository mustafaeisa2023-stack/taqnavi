import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';

type ResultCardProps = { rank: number; title: string; percentage: number; reason: string; };

export function ResultCard({ rank, title, percentage, reason }: ResultCardProps) {
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  return <article className="result-card"><div className="result-rank">#{rank}</div><div className="result-main"><strong>{title}</strong><p className="result-reason">{reason}</p></div><span className="result-match">{percentage}% {t.match}</span></article>;
}
