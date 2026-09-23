import { FC } from 'react';
import clsx from 'clsx';
import { useActiveSection } from 'hooks/useActiveSection';
import { navLinks, navSectionIds } from './links';
import { useHighlightRect } from './useHighlightRect';

import styles from './styles.module.css';

export const Navigation: FC = () => {
  const active = useActiveSection(navSectionIds);
  const { containerRef, highlight } = useHighlightRect(active);

  return (
    <nav className={styles.navigation} aria-label="Sections" ref={containerRef}>
      {highlight && (
        <span
          className={styles.highlight}
          style={{ left: highlight.left, right: highlight.right }}
          data-direction={highlight.direction}
        />
      )}
      <ul className={styles.list}>
        {navLinks.map(({ id, name, Icon }) => (
          <li key={id}>
            <a
              className={clsx(styles.link, id === active && styles.active)}
              href={`#${id}`}
              data-section={id}
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
