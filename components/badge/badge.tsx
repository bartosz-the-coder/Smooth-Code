import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export const Badge: FC<BadgeProps> = ({ children, className }) => (
  <div className={clsx(styles.badge, className)}>{children}</div>
);

type PeriodBadgeProps = {
  className?: string;
  start: string;
  end: string;
};

export const PeriodBadge: FC<PeriodBadgeProps> = ({
  start,
  end,
  className,
}) => (
  <Badge className={className}>
    {start} → {end}
  </Badge>
);
