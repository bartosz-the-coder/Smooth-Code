import { FC } from 'react';

import styles from './styles.module.css';

export const SiteFooter: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <span>Smooth Code — Bartosz Nowak</span>
      <a href="#top">Back to top</a>
    </div>
  </footer>
);
