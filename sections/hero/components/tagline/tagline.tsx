import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.css';

const Line: FC<PropsWithChildren> = ({ children }) => (
  <span className={styles.line}>
    <span className={styles.text}>{children}</span>
  </span>
);

export const Tagline: FC = () => (
  <p className={styles.tagline}>
    <Line>Software Engineer by day,</Line>
    <Line>
      Software Engineer <em>by night</em>.
    </Line>
  </p>
);
