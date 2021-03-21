import clsx from "clsx";
import styles from "./styles.module.css";

export const AboutSection = ({ title, inline, children }) => {
  const listClasses = clsx(styles.list, { [styles.inline_list]: inline });
  return (
    <section className={styles.about}>
      <h3>{title}</h3>
      <ul className={listClasses}>{children}</ul>
    </section>
  );
};
