import clsx from 'clsx'
import styles from './styles.module.css';

export const AboutSection = ({ title, children, shape }) => (
  <section className={styles.about}>
    <h3>{title}</h3>
    <ul className={clsx(styles.layout, styles[shape])}>{children}</ul>
  </section>
);