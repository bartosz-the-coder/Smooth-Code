import styles from './styles.module.css';

export const Header = ({ children }) => (
  <header className={styles.app_header}>
    <p>Smooth Code | Bartosz Nowak</p>
    {children}
  </header>
);
