import { FC } from 'react';
import { Navigation } from 'components/navigation';
import { ThemeSwitch } from 'components/theme-switch';
import { Brand } from './components/brand';

import styles from './styles.module.css';

export const SiteHeader: FC = () => (
  <header className={styles.header}>
    <div className={styles.pill}>
      <Brand />
      <Navigation />
      <ThemeSwitch />
    </div>
  </header>
);
