import { FC } from 'react';
import { PeriodBadge } from 'components/badge';
import { JobDescription } from './components/JobDescription';
import styles from './styles.module.css';

type Props = import('data/types').Experience[number];

export const ExperienceRow: FC<Props> = ({
  employer,
  title,
  type,
  startDate,
  endDate,
  project,
}) => (
  <li className={styles.experience_item}>
    <div className={styles.job_details}>
      <div>
        <span className={styles.job_title}>{title}</span>
        <span className={styles.job_employer}>{employer}</span>
      </div>
      <div className={styles.job_contractor}>{type}</div>
      <JobDescription description={project.description} techStack={project.technologies} />
    </div>
    <PeriodBadge start={startDate} end={endDate} />
  </li>
);
