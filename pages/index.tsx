import { FC } from "react";
import LandingSection from "sections/landing";
import AboutSection from "sections/about";
import ContactSection from "sections/contact";
import { Experience, Skills, Education } from "data/types";

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
