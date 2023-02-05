import { PeriodBadge } from "components/badge";
import { SettingIcon, ReaderIcon, SchoolIcon } from "components/icon";
import styles from "./styles.module.css";

export const EducationRow = (props) => (
  <li className={styles.education_item}>
    <div className={styles.title_wrapper}>
      <div className={styles.name}>{props.name}</div>
      <PeriodBadge start={props.startDate} end={props.endDate} />
    </div>
    <section>
      <h3 title="Degree">
        <SchoolIcon />
        <span>{props.degree}</span>
      </h3>
      <h3 title="Field of study">
        <ReaderIcon />
        <span>{props.field}</span>
      </h3>
      <h3 title="Specialisation">
        <SettingIcon />
        <span>{props.specialisation}</span>
      </h3>
    </section>
  </li>
);
