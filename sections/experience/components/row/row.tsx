import { FC } from 'react';
import clsx from 'clsx';
import { PeriodBadge } from 'components/badge';
import { Experience } from 'data/types';
import { JobDescription } from './components/JobDescription';
import { useHasSelectorFallback } from './hooks';
import styles from './styles.module.css';

type Props = Experience;

export const ExperienceRow: FC<Props> = ({
  employer,
  title,
  type,
  startDate,
  endDate,
  project,
}) => {
  const [expanded, setExpanded] = useHasSelectorFallback();
  return (
    <li
      className={clsx({
        [styles.root]: true,
        [styles.expanded]: expanded,
      })}
    >
      <article className={styles.experience_item}>
        <div className={styles.job_details}>
          <div>
            <span className={styles.job_title}>{title}</span>
            <span className={styles.job_employer}>{employer}</span>
          </div>
          <div className={styles.job_contractor}>{type}</div>
        </div>
        <JobDescription
          className={styles.job_description}
          description={project.description}
          techStack={project.technologies}
          onExpanded={setExpanded}
        />
        <PeriodBadge
          className={styles.job_badge}
          start={startDate}
          end={endDate}
        />
      </article>
    </li>
  );
};
