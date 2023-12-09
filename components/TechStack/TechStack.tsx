import { FC } from 'react';
import { getIconComponent } from 'components/icon/utils';
import { Tech } from 'data/types';
import styles from './styles.module.css';

type TechStackProps = {
  stack: Tech[];
};

export const TechStack: FC<TechStackProps> = ({ stack }) => {
  return (
    <>
      <h4>Tech stack</h4>
      <ul className={styles.tech_stack}>
        {stack.map((tech) => (
          <TechItem key={tech.name} tech={tech} />
        ))}
      </ul>
    </>
  );
};

type TechProps = {
  tech: Tech;
};

const TechItem: FC<TechProps> = ({ tech }) => {
  const TechIcon = getIconComponent(tech.iconName);
  return (
    <li className={styles.tech_item}>
      <TechIcon className={styles.icon} />
      {tech.name}
    </li>
  );
};
