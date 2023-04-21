import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx'

import Styles from './styles.module.css';

type Props = PropsWithChildren<{
  type: 'rectangle' | 'square';
}>

export const List: FC<Props> = ({ children, type }) => (
  <ul className={clsx(Styles.layout, Styles[type])}>
    {children}
  </ul>
)