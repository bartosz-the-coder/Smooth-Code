import { FC } from 'react';

import styles from './styles.module.css';

export const Brand: FC = () => (
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
      <span className={styles.name}>Bartosz Nowak</span>
    </span>
  </a>
);
