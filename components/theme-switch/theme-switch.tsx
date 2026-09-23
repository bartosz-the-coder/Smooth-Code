import { FC, useEffect, useState } from 'react';
import { DarkModeIcon, LightModeIcon } from 'components/icon';

import styles from './styles.module.css';

const STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

const readTheme = (): Theme => {
  const override = document.documentElement.style.colorScheme;
  if (override === 'light' || override === 'dark') {
    return override;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const ThemeSwitch: FC = () => {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => setTheme(readTheme()), []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.style.colorScheme = next;
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  };

  const isDark = theme === 'dark';
  const Icon = isDark ? LightModeIcon : DarkModeIcon;

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
    >
      {theme ? <Icon aria-hidden /> : null}
    </button>
  );
};
