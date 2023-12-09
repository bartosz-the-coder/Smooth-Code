import {
  HomeIcon,
  ContactIcon,
  AboutIcon,
  IconType,
  SkillsIcon,
} from 'components/icon';

type Path = `/#${SectionId}`;

type NavLinkConfig = {
  name: string;
  Icon: IconType;
};

export const navLinkConfig: Record<Path, NavLinkConfig> = {
  '/#_': {
    name: 'Home',
    Icon: HomeIcon,
  },
  '/#skills': {
    name: 'Skills',
    Icon: SkillsIcon,
  },
  '/#portfolio': {
    name: 'Portfolio',
    Icon: AboutIcon,
  },
  '/#contact': {
    name: 'Contact',
    Icon: ContactIcon,
  },
};
