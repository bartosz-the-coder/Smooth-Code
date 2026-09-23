import {
  HomeIcon,
  ContactIcon,
  PortfolioIcon,
  IconType,
  SkillsIcon,
} from 'components/icon';

type NavLink = {
  id: SectionId;
  name: string;
  Icon: IconType;
};

export const navLinks: readonly NavLink[] = [
  { id: 'top', name: 'Home', Icon: HomeIcon },
  { id: 'skills', name: 'Skills', Icon: SkillsIcon },
  { id: 'portfolio', name: 'Portfolio', Icon: PortfolioIcon },
  { id: 'contact', name: 'Contact', Icon: ContactIcon },
];

export const navSectionIds: readonly SectionId[] = navLinks.map(({ id }) => id);
