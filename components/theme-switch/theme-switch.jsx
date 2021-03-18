import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={styles.container}>
      <span className={styles.label}>Theme</span>
      <label class={styles.switch}>
        <input type="checkbox" onClick={() => setTheme(nextTheme)} />
        <span class={clsx(styles.slider, styles.round)}></span>
      </label>
    </div>
  );
};
