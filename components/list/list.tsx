import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import Styles from './styles.module.css';

type Props = PropsWithChildren<{
  className?: string;
  type: 'rectangle' | 'square';
}>;

export const List: FC<Props> = ({ children, type, className }) => (
  <ul className={clsx(Styles.layout, Styles[type], className)}>{children}</ul>
);
