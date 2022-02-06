import styles from "./styles.module.css";

export const AboutSection = ({ title, children }) => (
  <section className={styles.about}>
    <h3>{title}</h3>
    <ul className={styles.list}>{children}</ul>
  </section>
);
