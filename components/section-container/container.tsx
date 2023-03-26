import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import Styles from './styles.module.css';

type SectionContainerProps = PropsWithChildren<{
  id: string;
  heading: string;
  className?: string;
  headingClassName?: string;
}>;

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  heading,
  id,
  className,
  headingClassName,
}) => (
  <section id={id} className={clsx(Styles.container, className)}>
    <h2 className={headingClassName}>{heading}</h2>
    {children}
  </section>
);
