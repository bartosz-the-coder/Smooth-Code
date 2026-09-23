import { FC } from 'react';
import { careerStart, currentRole, portfolio } from 'data/portfolio';
import { skills } from 'data/skills';
import { yearsSince } from 'data/utils';
import { ContactSection } from 'sections/contact';
import { HeroSection } from 'sections/hero';
import { PortfolioSection } from 'sections/portfolio';
import { SkillsSection } from 'sections/skills';

const Home: FC = () => (
  <>
    <HeroSection
      role={currentRole}
      yearsOfExperience={yearsSince(careerStart)}
    />
    <SkillsSection skills={skills} />
    <PortfolioSection portfolio={portfolio} />
    <ContactSection />
  </>
);

export default Home;
