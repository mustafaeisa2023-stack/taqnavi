import { useLanguage } from '../LanguageContext';
import { UI_TEXT } from '../i18n';

type ProgressBarProps = { current: number; total: number; };

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];
  return (
    <div className="progress-wrap">
      <div className="progress-header">
        <span className="progress-step">{t.questionOf(current, total)}</span>
        <span className="progress-percent">{t.complete(percentage)}</span>
      </div>
      <div className="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentage}>
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
