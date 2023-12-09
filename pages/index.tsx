import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Experience, Skill } from 'data/types';
import ContactSection from 'sections/contact';
import ExperienceSection from 'sections/experience';
import LandingSection from 'sections/landing';
import SkillsSection from 'sections/skills';

type HomeProps = {
  skills: Skill[];
  portfolio: Experience[];
};

const Home: FC<HomeProps> = ({ skills, portfolio }) => {
  return (
    <>
      <LandingSection />
      <SkillsSection skills={skills} />
      <ExperienceSection portfolio={portfolio} />
      <ContactSection />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async function () {
  const { skills, portfolio } = await import('data');
  return {
    props: {
      skills,
      portfolio,
    },
  };
};
