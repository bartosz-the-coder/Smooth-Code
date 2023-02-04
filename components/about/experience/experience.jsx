import { PeriodBadge } from "components/badge";
import styles from "./styles.module.css";

export const ExperienceRow = ({
  employer,
  title,
  type,
  startDate,
  endDate,
  projectDescription,
}) => (
  <li className={styles.experience_item}>
    <div className={styles.job_details}>
      <div>
        <span className={styles.job_title}>{title}</span>
        <span className={styles.job_employer}>{employer}</span>
      </div>
      <div className={styles.job_contractor}>{type}</div>
      <details className={styles.job_description}>
        <summary>Job details</summary>
        <article>
          <p> {projectDescription}</p>
          <p>Required skills</p>
          <ul>
            <li>Skill 1</li>
            <li>Skill X</li>
            <li>Skill X</li>
            <li>Skill X</li>
            <li>Skill X</li>
          </ul>
        </article>
      </details>
    </div>
    <PeriodBadge start={startDate} end={endDate} />
  </li>
);
