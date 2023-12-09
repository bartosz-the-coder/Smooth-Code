import { Children, FC } from 'react';
import { List } from 'components/list';
import { SectionContainer } from 'components/section-container';
import { Experience } from 'data/types';
import { ExperienceRow } from './components/row';

type ExperienceSectionProps = {
  experience: Experience[];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <SectionContainer id="experience" heading="My experience">
      <List type="rectangle">
        {Children.toArray(experience.map(ExperienceRow))}
      </List>
    </SectionContainer>
  );
} 

export default ExperienceSection;