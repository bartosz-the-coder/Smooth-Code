import { FC, useRef } from 'react';
import { Tech } from 'data/types';
import { useClickOutside } from 'hooks/useClickOutside';
import { TechStack } from '../../../../../../components/TechStack';

import styles from './styles.module.css';

type Props = {
  description: string;
  techStack: Tech[];
};

export const JobDescription: FC<Props> = ({ description, techStack }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useClickOutside(onOutsideClick, detailsRef);

  return (
    <details ref={detailsRef} className={styles.job_description}>
      <summary>Job details</summary>
      <article>
        <h4>Responsibilities</h4>
        <p>{description}</p>
        <TechStack stack={techStack} />
      </article>
    </details>
  );
};

function onOutsideClick(detailsElement: HTMLElement): void {
  detailsElement.removeAttribute('open');
}
