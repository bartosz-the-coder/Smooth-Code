import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';
import { navLinkConfig } from './links';

const dirMap = {
  Left: 'next',
  Right: 'previous'
}

/**
 * @returns {import('react-swipeable').SwipeableHandlers}
 */
export function useNavigationSwipe() {
  const  { pathname, push } = useRouter()
  return useSwipeable({
    delta: 25,
    onSwiped: ({ dir }) => {
      const path = navLinkConfig[pathname][dirMap[dir]];
      if (path) {
        push(path)
      }
    }
  });
}

