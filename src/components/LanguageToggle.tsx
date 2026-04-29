import { useLanguage } from '../LanguageContext';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="lang-toggle" role="group" aria-label="Language switcher">
      <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      <button type="button" className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>العربية</button>
    </div>
  );
}
