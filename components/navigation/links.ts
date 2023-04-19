import { HomeIcon, ContactIcon, AboutIcon, IconType } from 'components/icon';

type Path = `/#${SectionId}`

type NavLinkConfig = {
  name: string;
  Icon: IconType;
}

export const navLinkConfig: Record<Path, NavLinkConfig> = {
  '/#_': {
    name: 'Home',
    Icon: HomeIcon,
  },
  '/#about': {
    name: 'About',
    Icon: AboutIcon,
  },
  '/#contact': {
    name: 'Contact',
    Icon: ContactIcon,
  },
}