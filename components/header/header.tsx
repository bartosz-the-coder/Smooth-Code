import { FC } from 'react';
import { Navigation } from 'components/navigation';
import { ThemeSwitch } from 'components/theme-switch';

import styles from './styles.module.css';

export const SiteHeader: FC = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <a className={styles.brand} href="#top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.mark}
          src="/assets/logo.png"
          alt=""
          width={36}
          height={36}
        />
        <span className={styles.wordmark}>
          Smooth Code
          <span className={styles.brandName}>Bartosz Nowak</span>
        </span>
      </a>
      <Navigation />
      <ThemeSwitch />
    </div>
  </header>
);
