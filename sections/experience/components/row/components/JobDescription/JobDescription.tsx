import { FC, ReactEventHandler, useRef } from 'react';
import clsx from 'clsx';
import { Tech } from 'data/types';
import { useClickOutside } from 'hooks/useClickOutside';
import { TechStack } from '../../../../../../components/TechStack';

import styles from './styles.module.css';

type Props = {
  className: string;
  description: string;
  techStack: Tech[];
  // workaround for missing :has selector support
  onExpanded?(expanded: boolean): void;
};

export const JobDescription: FC<Props> = ({
  className,
  description,
  techStack,
  onExpanded,
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useClickOutside(onOutsideClick, detailsRef);

  const handleToggle: ReactEventHandler<HTMLDetailsElement> | undefined =
    onExpanded ? (event) => onExpanded(event.currentTarget.open) : undefined;

  return (
    <details
      ref={detailsRef}
      className={clsx(styles.job_description, className)}
      onToggle={handleToggle}
    >
      <summary>Job details</summary>
      <article className={styles.stack}>
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
