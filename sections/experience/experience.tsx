import { Children, FC, useState } from 'react';
import { List } from 'components/list';
import { SectionContainer } from 'components/section-container';
import { Experience, Job } from 'data/types';
import { ExperienceRow } from './components/row';
import { Timeline } from './components/timeline';

type ExperienceSectionProps = {
    experience: Experience;
};

const ExperienceSection: FC<ExperienceSectionProps> = ({ experience }) => {
    const [selected, setSelected] = useState<Job>();
    return (
        <SectionContainer id="experience" heading="My experience">
          <section style={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
          }}>
            <Timeline experience={experience} selected={selected} onSelect={setSelected} />
            {selected && <List><ExperienceRow {...selected} /></List>}
          </section>
        </SectionContainer>
    );
};

export default ExperienceSection;
