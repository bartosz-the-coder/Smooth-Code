import { useEffect, useSyncExternalStore } from 'react';
import { DarkModeIcon, LightModeIcon } from 'components/icon';
import styles from './styles.module.css';

const KEY = 'prefers-color-scheme';
const LIGHT = 'light';
const DARK = 'dark';

type Theme = typeof LIGHT | typeof DARK;

const listeners = new Set<() => void>();

const subscribe = (onStoreChange: () => void) => {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
};

const detectPreferedTheme = (): Theme => {
  const stored = window.localStorage.getItem(KEY);
  if (stored === LIGHT || stored === DARK) {
    return stored;
  }
  return window.matchMedia(`(${KEY}: ${LIGHT})`).matches ? LIGHT : DARK;
};

// The server has no way to know the visitor's preference, so it always renders
// the light theme and `useSyncExternalStore` swaps in the real one after
// hydration.
const getServerTheme = (): Theme => LIGHT;

const storeTheme = (theme: Theme) => {
  window.localStorage.setItem(KEY, theme);
  listeners.forEach((onStoreChange) => {
    onStoreChange();
  });
};

export const ThemeSwitch = () => {
  const theme = useSyncExternalStore(
    subscribe,
    detectPreferedTheme,
    getServerTheme
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const isDarkTheme = theme === DARK;
  const ThemeIcon = isDarkTheme ? LightModeIcon : DarkModeIcon;
  const onThemeChange = () => {
    storeTheme(isDarkTheme ? LIGHT : DARK);
  };

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={onThemeChange} checked={isDarkTheme} />
        <ThemeIcon className={styles.icon} />
      </label>
    </div>
  );
};
