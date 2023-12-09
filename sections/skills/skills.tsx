import { Children, FC } from 'react';
import { List } from 'components/list';
import { SectionContainer } from 'components/section-container';
import { SkillRow } from './components/row';
import type { Skill } from 'data/types';

type SkillsSectionProps = {
  skills: Skill[];
};

const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <SectionContainer id="skills" heading="My Skills">
      <List type="square">{Children.toArray(skills.map(SkillRow))}</List>
    </SectionContainer>
  );
};

export default SkillsSection;
