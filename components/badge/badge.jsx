import clsx from 'clsx';
import styles from './styles.module.css';

export const Badge = ({ children, className }) => (
  <div className={clsx(styles.badge, className)}>{children}</div>
);

export const PeriodBadge = ({ start, end, className }) => (
  <Badge className={className}>
    {start} → {end}
  </Badge>
);
