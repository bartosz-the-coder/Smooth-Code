import { PeriodBadge } from 'components/badge';

export const EducationRow = (props) => (
  <li>
    <div>{props.name}</div>
    <div>{props.degree} </div>
    <PeriodBadge start={props.startDate} end={props.endDate} />
  </li>
);
