import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { DarkModeIcon, LightModeIcon } from 'components/icon';

const KEY = "prefers-color-scheme";
const LIGHT = "light";
const DARK = "dark";
const detectPreferedTheme = () =>
  window.localStorage.getItem(KEY) ||
  (window.matchMedia(`(${KEY}: ${LIGHT})`).matches ? LIGHT : DARK);

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState("");
  const onThemeChange = () =>
    setTheme((t) => {
      const value = t === LIGHT ? DARK : LIGHT;
      window.localStorage.setItem(KEY, value);
      return value;
    });

  useEffect(() => setTheme(detectPreferedTheme), []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const isDarkTheme = theme === DARK;
  const ThemeIcon = isDarkTheme ? LightModeIcon : DarkModeIcon;

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onClick={onThemeChange}
          checked={isDarkTheme}
        />
        <ThemeIcon className={styles.icon} />
      </label>
    </div>
  );
};
