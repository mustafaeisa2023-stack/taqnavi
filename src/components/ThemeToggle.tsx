import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLanguage();
  const label = lang === 'ar'
    ? (theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن')
    : (theme === 'dark' ? 'Light mode' : 'Dark mode');

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'} {label}
    </button>
  );
}
