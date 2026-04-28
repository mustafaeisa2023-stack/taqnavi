import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';

type ResultCardProps = { rank: number; title: string; percentage: number; reason: string; };
const L = (s:string,lang:'en'|'ar') => (lang === 'ar' ? `◀ ${s}` : s);

export function ResultCard({ rank, title, percentage, reason }: ResultCardProps) {
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  return <article className="result-card"><div className="result-rank">#{rank}</div><div className="result-main"><strong>{L(title, lang)}</strong><p className="result-reason">{L(reason, lang)}</p></div><span className="result-match">{percentage}% {t.match}</span></article>;
}
