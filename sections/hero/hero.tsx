import { FC } from 'react';
import { ArrowIcon } from 'components/icon';

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
          <span className={styles.dot} aria-hidden />
          {role.title} at {role.employer}
        </p>
        <h1>Bartosz Nowak</h1>
        <p className={styles.tagline}>
          <span className={styles.line}>
            <span className={styles.text}>Software Engineer by day,</span>
          </span>
          <span className={styles.line}>
            <span className={styles.text}>
              Software Engineer <em>by night</em>.
            </span>
          </span>
        </p>
        <p className={styles.summary}>
          {yearsOfExperience} years of building products for the web and the
          desktop — from cryptocurrency trading platforms to enterprise tax
          software.
        </p>
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
