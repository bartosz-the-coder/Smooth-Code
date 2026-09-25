import { FC } from 'react';
import { ArrowIcon } from 'components/icon';

import styles from './styles.module.css';

export const Actions: FC = () => (
  <div className={styles.actions}>
    <a className={styles.primary} href="#contact">
      Get in touch
      <ArrowIcon aria-hidden />
    </a>
    <a className={styles.secondary} href="#portfolio">
      See my work
    </a>
  </div>
);
