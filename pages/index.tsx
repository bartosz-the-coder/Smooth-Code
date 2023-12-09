import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Experience, Skills, Education } from 'data/types';
import ContactSection from 'sections/contact';
import EducationSection from 'sections/education';
import ExperienceSection from 'sections/experience';
import LandingSection from 'sections/landing';
import SkillsSection from 'sections/skills';

type HomeProps = {
  skills: Skills;
  experience: Experience;
  education: Education;
};

const Home: FC<HomeProps> = ({ skills, experience, education }) => {
  return (
    <>
      <LandingSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <ContactSection />
    </>
  );
}

export default Home

export const getStaticProps: GetStaticProps = async function(context) {
  const { skills, experience, education } = await import('data');
  return {
    props: {
      skills,
      experience,
      education,
    },
  };
}
