import { FC, useSyncExternalStore } from 'react';
import { DarkModeIcon, LightModeIcon } from 'components/icon';

import styles from './styles.module.css';

const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

type Theme = 'light' | 'dark';

const listeners = new Set<() => void>();

const subscribe = (onStoreChange: () => void) => {
  const media = window.matchMedia(DARK_QUERY);
  listeners.add(onStoreChange);
  media.addEventListener('change', onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
    media.removeEventListener('change', onStoreChange);
  };
};

const getSnapshot = (): Theme => {
  const applied = document.documentElement.dataset.theme;
  if (applied === 'light' || applied === 'dark') {
    return applied;
  }

  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
};

const getServerSnapshot = (): Theme | undefined => undefined;

export const ThemeSwitch: FC = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE_KEY, next);
    listeners.forEach((onStoreChange) => {
      onStoreChange();
    });
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
