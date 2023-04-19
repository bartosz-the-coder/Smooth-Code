import { GetStaticProps } from 'next';
import { FC } from 'react';
import { Experience, Skills, Education } from 'data/types';
import AboutSection from 'sections/about';
import ContactSection from 'sections/contact';
import LandingSection from 'sections/landing';

type HomeProps = {
  skills: Skills;
  experience: Experience;
  education: Education;
};

const Home: FC<HomeProps> = ({ skills, experience, education }) => {
  return (
    <>
      <LandingSection />
      <AboutSection
        education={education}
        experience={experience}
        skills={skills}
      />
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
