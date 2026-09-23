import { FC } from 'react';
import { ArrowIcon } from 'components/icon';
import { StatusDot } from './components/status-dot';
import { Summary } from './components/summary';
import { Tagline } from './components/tagline';

import styles from './styles.module.css';
import type { Experience } from 'data/types';

type HeroProps = {
  role: Experience;
  yearsOfExperience: number;
};

export const HeroSection: FC<HeroProps> = ({ role, yearsOfExperience }) => (
  <section id="top" className={styles.hero}>
    <div className={styles.inner}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.logo}
        src="/assets/logo.png"
        alt="Smooth Code"
        width={280}
        height={280}
      />
      <div className={styles.copy}>
        <p className={styles.status}>
          <StatusDot />
          {role.title} at {role.employer}
        </p>
        <h1>Bartosz Nowak</h1>
        <Tagline />
        <Summary yearsOfExperience={yearsOfExperience} />
        <div className={styles.actions}>
          <a className={styles.primary} href="#contact">
            Get in touch
            <ArrowIcon aria-hidden />
          </a>
          <a className={styles.secondary} href="#portfolio">
            See my work
          </a>
        </div>
      </div>
    </div>
  </section>
);
