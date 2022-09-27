import styles from './styles.module.css';

export const AboutSection = ({ title, children, type }) => (
  <section className={styles.about}>
    <h3>{title}</h3>
    <ul className={styles[type] }>{children}</ul>
  </section>
);