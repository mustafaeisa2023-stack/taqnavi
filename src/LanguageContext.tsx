import { createContext, useContext, useEffect, useState } from 'react';
import { LANG_STORAGE_KEY, type Lang } from './i18n';

const LanguageContext = createContext<{lang:Lang; setLang:(lang:Lang)=>void}>({lang:'en', setLang:()=>{}});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem(LANG_STORAGE_KEY) as Lang) || 'en');

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
