import { Theme } from '../types';
import { isTheme } from './isTheme';

export const STORAGE_KEY = 'smooth-code:theme';

export function getThemeElement() {
  return document.documentElement;
}

export function setTheme(theme: Theme) {
  const rootDataset = getThemeElement().dataset;
  rootDataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export const toggle = () => {
  const next: Theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
};

export function getCurrentTheme(): Theme {
  const applied = getThemeElement().dataset.theme;
  if (isTheme(applied)) {
    return applied;
  }

  return getThemeMediaQuery().matches ? 'dark' : 'light';
}

export function getThemeMediaQuery() {
  return window.matchMedia('(prefers-color-scheme: dark)');
}
