import { FC } from 'react';
import { techIcons } from 'components/icon';

import styles from './styles.module.css';
import type { Tech } from 'data/types';

type TechStackProps = {
  stack: Tech[];
};

export const TechStack: FC<TechStackProps> = ({ stack }) => (
  <ul className={styles.stack} aria-label="Tech stack">
    {stack.map(({ name, iconName }) => {
      const Icon = techIcons[iconName];
      return (
        <li key={name} className={styles.item}>
          <Icon className={styles.icon} aria-hidden />
          {name}
        </li>
      );
    })}
  </ul>
);
