import { CSSProperties, FC } from 'react';
import clsx from 'clsx';
import { Experience, Job } from 'data/types';
import Styles from './styles.module.css';

type TimelineProps = {
  experience: Experience;
  selected?: Job
  onSelect(selected: Job): void;
};

export const Timeline: FC<TimelineProps> = ({ experience, selected, onSelect }) => {
  const reversedJobs = experience.slice().reverse();
  return (
    <section className={Styles.timeline} style={{ '--data-length': experience.length } as CSSProperties}>
      <div className={Styles.timeAxis} />
      {reversedJobs.map((job, index) => (
        <article
          key={job.startDate}
          style={{ '--column': index + 1 } as CSSProperties} 
          className={clsx({
            [Styles.event]: true,
            [Styles.selected]: job === selected
          })}
          onClick={() => onSelect(job)}
        >
          <div className={Styles.job}>
            <p>{job.title}</p>
            <p>{job.startDate}</p>
          </div>
        </article>
      ))}
    </section>
  );
};


// to consider 
// https://react-chrono.vercel.app/introduction/getting-started.html