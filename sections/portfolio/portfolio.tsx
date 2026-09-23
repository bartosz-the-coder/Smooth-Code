import { FC } from 'react';
import clsx from 'clsx';
import { Badge } from 'components/badge';
import { SectionContainer } from 'components/section-container';
import { TechStack } from 'components/tech-stack';
import { formatMonthYear } from 'data/utils';

import styles from './styles.module.css';
import type { Experience } from 'data/types';

type PortfolioSectionProps = {
  portfolio: Experience[];
};

export const PortfolioSection: FC<PortfolioSectionProps> = ({ portfolio }) => (
  <SectionContainer id="portfolio" heading="Portfolio" kicker="Where I've been">
    <ol className={styles.timeline}>
      {portfolio.map((experience) => (
        <TimelineItem
          key={`${experience.employer}-${experience.title}`}
          experience={experience}
        />
      ))}
    </ol>
  </SectionContainer>
);

type TimelineItemProps = {
  experience: Experience;
};

const TimelineItem: FC<TimelineItemProps> = ({ experience }) => {
  const { title, employer, type, description, technologies } = experience;
  const { startDate, endDate } = experience;
  const isCurrent = endDate === null;

  return (
    <li className={clsx(styles.item, isCurrent && styles.current)}>
      <p className={styles.period}>
        <time dateTime={startDate.toISOString()}>
          {formatMonthYear(startDate)}
        </time>
        <span className={styles.separator} aria-hidden>
          –
        </span>
        {endDate ? (
          <time dateTime={endDate.toISOString()}>
            {formatMonthYear(endDate)}
          </time>
        ) : (
          <span className={styles.present}>Present</span>
        )}
      </p>
      <article className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.employer}>
          {employer}
          <Badge>{type}</Badge>
        </p>
        <p className={styles.description}>{description}</p>
        <TechStack stack={technologies} />
      </article>
    </li>
  );
};
