import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type CopyProps = PropsWithChildren<{
  className?: string;
}>;

export const Copy: FC<CopyProps> = ({ children, className }) => (
  <div className={clsx(styles.copy, className)}>{children}</div>
);
