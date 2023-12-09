import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Experience, Skills } from 'data/types';
import ContactSection from 'sections/contact';
import ExperienceSection from 'sections/experience';
import LandingSection from 'sections/landing';
import SkillsSection from 'sections/skills';

type HomeProps = {
  skills: Skills;
  experience: Experience;
};

const Home: FC<HomeProps> = ({ skills, experience }) => {
  return (
    <>
      <LandingSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <ContactSection />
    </>
  );
}

export default Home

export const getStaticProps: GetStaticProps = async function(context) {
  const { skills, experience } = await import('data');
  return {
    props: {
      skills,
      experience,
    },
  };
}
