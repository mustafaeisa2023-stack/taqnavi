import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light';
export const THEME_STORAGE_KEY = 'taqnavi_theme';

const ThemeContext = createContext<{theme:ThemeMode; toggleTheme:()=>void}>({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(() => (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || 'dark');

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
