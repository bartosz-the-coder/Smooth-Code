import { FC } from 'react';
import { DarkModeIcon, LightModeIcon } from 'components/icon';

import { useThemeStore } from './hooks/useThemeStore';
import styles from './styles.module.css';

export const ThemeSwitch: FC = () => {
  const { theme, toggle } = useThemeStore();

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
      <Icon aria-hidden />
    </button>
  );
};
