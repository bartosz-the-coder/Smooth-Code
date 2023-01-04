import { PeriodBadge } from "components/badge";
import styles from "./styles.module.css";

export const ExperienceRow = ({ employer, title, type, startDate, endDate }) => (
  <li className={styles.experience_item}>
    <div className={styles.job_details}>
      <div>
        <span className={styles.job_title}>{title}</span>
        <span className={styles.job_employer}>{employer}</span>
      </div>
      <div className={styles.job_contractor}>{type}</div>
    </div>
    <PeriodBadge start={startDate} end={endDate} />
  </li>
);
