import { PeriodBadge } from 'components/badge';

export const ExperienceRow = ({ employer, startDate, endDate }) => (
  <li>
    <div>{employer}</div>
    <PeriodBadge start={startDate} end={endDate} />
  </li>
);
