import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';
import { LanguageToggle } from './LanguageToggle';

type StartScreenProps = { onStart: () => void };

export function StartScreen({ onStart }: StartScreenProps) {
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  return (
    <section className="card center start-screen">
      <LanguageToggle />
      <img src="/brand/taqnavi-logo.svg" alt={t.logoAlt} className="brand-logo" />
      <p className="eyebrow">{t.booth}</p>
      <h1 className="hero-title">{t.heroTitle}</h1>
      <p className="subtitle">{t.subtitle}</p>
      <div className="info-strip" role="note" aria-label={t.quizDetails}>
        <p><strong>{t.duration}</strong> {t.durationValue}</p>
        <p><strong>{t.purpose}</strong> {t.purposeValue}</p>
      </div>
      <button className="primary hero-cta" onClick={onStart}>{t.start}</button>
      <p className="disclaimer">{t.disclaimer}</p>
    </section>
  );
}
