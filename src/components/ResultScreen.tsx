import type { QuizResult } from '../types/quiz';
import { ResultCard } from './ResultCard';
import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';
import { LanguageToggle } from './LanguageToggle';

type ResultScreenProps = { result: QuizResult; onRestart: () => void; };
const L = (s:string,lang:'en'|'ar') => (lang === 'ar' ? `◀ ${s}` : s);

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { primary, top3 } = result;
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  return (
    <section className="card result-layout">
      <LanguageToggle />
      <article className="primary-match"><p className="chip">{t.primaryMatch}</p><h2>{L(primary.title, lang)}</h2><p className="lead">{L(primary.shortDescription, lang)}</p></article>
      <section className="content-card"><h3>{t.whyFits}</h3><p>{L(primary.whyItFits, lang)}</p></section>
      <section className="content-card"><h3>{t.strengths}</h3><ul>{primary.strengths.map((s) => <li key={s}>{L(s, lang)}</li>)}</ul></section>
      <section className="content-card"><h3>{t.watchOut}</h3><ul>{primary.watchOut.map((item) => <li key={item}>{L(item, lang)}</li>)}</ul></section>
      <section className="content-card"><h3>{t.firstSkills}</h3><ul>{primary.firstSkills.map((s) => <li key={s}>{L(s, lang)}</li>)}</ul></section>
      <section className="content-card"><h3>{t.learningPath}</h3><ol className="path-list">{primary.learningPath.map((step) => <li key={step}>{L(step, lang)}</li>)}</ol></section>
      <section className="content-card"><h3>{t.miniProject}</h3><p>{L(primary.miniProject, lang)}</p></section>
      <section className="content-card"><h3>{t.starterTopics}</h3><ul>{primary.starterTopics.map((topic) => <li key={topic}>{L(topic, lang)}</li>)}</ul></section>
      <section className="content-card top3-section"><h3>{t.top3}</h3><div className="top3">{top3.map((entry, i) => <ResultCard key={entry.track.id} rank={i + 1} title={entry.track.title} percentage={entry.percentage} reason={entry.track.whyItFits} />)}</div></section>
      <p className="disclaimer">{t.disclaimer}</p>
      <button className="primary restart" type="button" onClick={onRestart}>{t.restart}</button>
    </section>
  );
}
