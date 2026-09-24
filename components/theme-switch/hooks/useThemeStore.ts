import { useSyncExternalStore } from 'react';
import { Theme } from '../types';
import { isTheme } from '../utils/isTheme';
import {
  STORAGE_KEY,
  setTheme,
  toggle,
  getCurrentTheme,
  getThemeElement,
  getThemeMediaQuery,
} from '../utils/theme-state';

export const useThemeStore = () => {
  const theme = useSyncExternalStore(
    subscribe,
    getCurrentTheme,
    getServerSnapshot
  );

  return { theme, toggle };
};

const subscribe = (onStoreChange: VoidFunction) => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (isTheme(stored)) {
    setTheme(stored);
  } else {
    setTheme(getThemeMediaQuery().matches ? 'dark' : 'light');
  }

  const media = getThemeMediaQuery();
  const observer = new MutationObserver(onStoreChange);

  media.addEventListener('change', onStoreChange);
  observer.observe(getThemeElement(), {
    attributeFilter: ['data-theme'],
  });

  return () => {
    observer.disconnect();
    media.removeEventListener('change', onStoreChange);
  };
};

function getServerSnapshot(): Theme {
  return 'light';
}
