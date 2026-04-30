import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';

type ResultCardProps = { rank: number; title: string; percentage: number; reason: string; };

export function ResultCard({ rank, title, percentage, reason }: ResultCardProps) {
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  const rankClass = rank === 1 ? 'is-top' : rank === 2 ? 'is-second' : rank === 3 ? 'is-third' : '';
  return <article className={`result-card ${rankClass}`.trim()}><div className="result-rank">#{rank}</div><div className="result-main"><strong>{title}</strong><span className="result-match">{percentage}% {t.match}</span><p className="result-reason">{reason}</p></div></article>;
}
