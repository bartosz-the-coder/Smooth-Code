import { Children, FC } from 'react';
import {
  AboutSection as AboutSubsection,
  EducationRow,
  ExperienceRow,
  SkillRow,
} from 'components/about';
import { SectionContainer } from 'components/section-container';
import { Education, Experience, Skills } from 'data/types';

type AboutSectionProps = {
  skills: Skills;
  experience: Experience;
  education: Education;
}

const AboutSection: FC<AboutSectionProps> = ({ skills, experience, education }) => {
  return (
    <SectionContainer id="about" heading="My Expertises">
      <AboutSubsection title="My experience" shape="rectangle">
        {Children.toArray(experience.map(ExperienceRow))}
      </AboutSubsection>
      <AboutSubsection title="My skills" shape="square">
        {Children.toArray(skills.map(SkillRow))}
      </AboutSubsection>
      <AboutSubsection title="My education" shape="rectangle">
        {Children.toArray(education.map(EducationRow))}
      </AboutSubsection>
    </SectionContainer>
  );
} 

export default AboutSection;