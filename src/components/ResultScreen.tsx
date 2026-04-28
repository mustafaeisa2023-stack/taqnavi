import type { QuizResult } from '../types/quiz';
import { ResultCard } from './ResultCard';
import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';
import { LanguageToggle } from './LanguageToggle';

type ResultScreenProps = { result: QuizResult; onRestart: () => void; };

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { primary, top3 } = result;
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  return (
    <section className="card result-layout">
      <LanguageToggle />
      <article className="primary-match"><p className="chip">{t.primaryMatch}</p><h2>{primary.title[lang]}</h2><p className="lead">{primary.shortDescription[lang]}</p></article>
      <section className="content-card"><h3>{t.whyFits}</h3><p>{primary.whyItFits[lang]}</p></section>
      <section className="content-card"><h3>{t.strengths}</h3><ul>{primary.strengths[lang].map((s) => <li key={s}>{s}</li>)}</ul></section>
      <section className="content-card"><h3>{t.watchOut}</h3><ul>{primary.watchOut[lang].map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="content-card"><h3>{t.firstSkills}</h3><ul>{primary.firstSkills[lang].map((s) => <li key={s}>{s}</li>)}</ul></section>
      <section className="content-card"><h3>{t.learningPath}</h3><ol className="path-list">{primary.learningPath[lang].map((step) => <li key={step}>{step}</li>)}</ol></section>
      <section className="content-card"><h3>{t.miniProject}</h3><p>{primary.miniProject[lang]}</p></section>
      <section className="content-card"><h3>{t.starterTopics}</h3><ul>{primary.starterTopics[lang].map((topic) => <li key={topic}>{topic}</li>)}</ul></section>
      <section className="content-card top3-section"><h3>{t.top3}</h3><div className="top3">{top3.map((entry, i) => <ResultCard key={entry.track.id} rank={i + 1} title={entry.track.title[lang]} percentage={entry.percentage} reason={entry.track.whyItFits[lang]} />)}</div></section>
      <p className="disclaimer">{t.disclaimer}</p>
      <button className="primary restart" type="button" onClick={onRestart}>{t.restart}</button>
    </section>
  );
}
