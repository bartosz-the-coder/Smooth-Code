import { FC } from 'react';

import styles from './styles.module.css';

type SummaryProps = {
  yearsOfExperience: number;
};

export const Summary: FC<SummaryProps> = ({ yearsOfExperience }) => (
  <div className={styles.summary}>
    <p className={styles.lead}>
      A professional UI engineer with {yearsOfExperience} years of shipping
      production interfaces for the web and the desktop — across cryptocurrency
      trading desks, investment banking risk tools, esports data platforms and
      enterprise tax software.
    </p>
    <p>
      That range is the point: I am comfortable learning a new domain quickly
      and building interfaces that hold up in it. I also use AI models as a
      first-class part of my toolchain — confidently, and with a clear sense of
      where they accelerate the work and where they need a firm hand.
    </p>
  </div>
);
