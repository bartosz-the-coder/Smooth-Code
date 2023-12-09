import { FC } from 'react';
import { PeriodBadge } from 'components/badge';
import { SettingIcon, ReaderIcon, SchoolIcon } from 'components/icon';
import { Education } from 'data/types';
import styles from './styles.module.css';

export const EducationRow: FC<Education[number]> = (props) => (
  <li className={styles.item}>
    <div className={styles.title_wrapper}>
      <div>{props.name}</div>
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
