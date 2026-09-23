import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export const Badge: FC<BadgeProps> = ({ children, className }) => (
  <span className={clsx(styles.badge, className)}>{children}</span>
);
