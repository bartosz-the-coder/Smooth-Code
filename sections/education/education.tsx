import { Children, FC } from 'react';
import { List } from 'components/list';
import { SectionContainer } from 'components/section-container';
import { Education } from 'data/types';
import { EducationRow } from './components/row';

type EducationSection = {
  education: Education;
}

const EducationSection: FC<EducationSection> = ({ education }) => {
  return (
    <SectionContainer id="education" heading="My education">
      <List type="rectangle">
        {Children.toArray(education.map(EducationRow))}
      </List>
    </SectionContainer>
  );
} 

export default EducationSection;