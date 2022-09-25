import { HomeIcon, ContactIcon, AboutIcon } from 'components/icon';

export const navLinkConfig = {
  '/': {
    name: 'Home',
    Icon: HomeIcon,
    next: '/about',
    previous: null
  },
  '/about': {
    name: 'About',
    Icon: AboutIcon,
    next: '/contact',
    previous: '/'
  },
  '/contact': {
    name: 'Contact',
    Icon: ContactIcon,
    next: null,
    previous: '/about'
  },
}