import clsx from 'clsx';
import { PeriodBadge } from "components/badge";
import styles from "./styles.module.css";

export const ExperienceRow = ({ employer, title, type, startDate, endDate }) => (
  <li className={styles.experience_item}>
    <div className={styles.job_details}>
      <span className={clsx(styles.job_title, { [styles.job_contractor]: type === 'Contractor' })}>{title}</span>
      <span className={styles.job_employer}>{employer}</span>
    </div>
    <PeriodBadge start={startDate} end={endDate} />
  </li>
);
