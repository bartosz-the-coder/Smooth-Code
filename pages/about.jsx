import { Children } from 'react';
import { AboutSection, EducationRow, ExperienceRow, SkillRow } from 'components/about';
import styles from 'styles/About.module.css';

export default function About({ skills, experience, education }) {
  return (
    <div className={styles.container}>
      <h2>My Expertises</h2>      
      <AboutSection title="My experience" type="list">
        {Children.toArray(experience.map(ExperienceRow))}
      </AboutSection>
      <AboutSection title="My education" type="list">
        {Children.toArray(education.map(EducationRow))}
      </AboutSection>
      <AboutSection title="My skills" type="grid">
        {Children.toArray(skills.map(SkillRow))}
      </AboutSection>
    </div>
  );
}

export async function getStaticProps(context) {
  const { skills, experience, education } = await import("data");
  return {
    props: {
      skills,
      experience,
      education,
    },
  };
}
