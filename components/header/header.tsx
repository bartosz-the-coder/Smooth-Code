import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className={styles.app_header}>
    <p>Smooth Code | Bartosz Nowak</p>
    {children}
  </header>
);
