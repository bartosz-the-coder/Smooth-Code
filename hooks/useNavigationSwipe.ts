import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';

export function useNavigationSwipe() {
  const  { pathname, push } = useRouter()
  return useSwipeable({
    onSwiped: ({ dir }) => {
      const currentPath = navLinks[pathname]
      push(currentPath[dir.toLowerCase()])
    }
  });
}

const navLinks = {
  '/': {
    name: 'Home',
    left: '/about',
    right: '/contact'
  },
  '/about': {
    name: 'About',
    left: '/contact',
    right: '/'
  },
  '/contact': {
    name: 'Contact',
    left: '/',
    right: '/about'
  },
}