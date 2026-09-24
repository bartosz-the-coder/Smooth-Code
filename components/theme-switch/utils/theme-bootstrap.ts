import { STORAGE_KEY } from './theme-state';

// Serialised into the document and run before first paint, so it has to stay
// self-contained: no imports, no closure variables, no TS-only syntax.
function applyStoredTheme(storageKey: string) {
  try {
    const stored = localStorage.getItem(storageKey);
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;

    document.documentElement.dataset.theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : prefersDark
          ? 'dark'
          : 'light';
  } catch {
    // Best effort: the store applies the theme again once it mounts.
  }
}

export const themeBootstrapScript = `(${applyStoredTheme.toString()})(${JSON.stringify(
  STORAGE_KEY
)})`;
