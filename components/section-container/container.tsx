import { FC, PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type SectionContainerProps = PropsWithChildren<{
  id: SectionId;
  heading: string;
  kicker?: ReactNode;
  className?: string;
}>;

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  heading,
  kicker,
  id,
  className,
}) => (
  <section id={id} className={clsx(styles.section, className)}>
    <div className={styles.inner}>
      <header className={styles.header}>
        {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
        <h2>{heading}</h2>
      </header>
      {children}
    </div>
  </section>
);
