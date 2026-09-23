import { FC } from 'react';
import clsx from 'clsx';
import { useActiveSection } from 'hooks/useActiveSection';
import { navLinks, navSectionIds } from './links';

import styles from './styles.module.css';

export const Navigation: FC = () => {
  const active = useActiveSection(navSectionIds);

  return (
    <nav className={styles.navigation} aria-label="Sections">
      <ul className={styles.list}>
        {navLinks.map(({ id, name, Icon }) => (
          <li key={id}>
            <a
              className={clsx(styles.link, id === active && styles.active)}
              href={`#${id}`}
              aria-current={id === active ? 'true' : undefined}
            >
              <Icon className={styles.icon} aria-hidden />
              <span className={styles.label}>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
