import { RefObject, useEffect } from 'react';
import { isSSR } from 'utils/isSSR';

type ClickCallback = (element: HTMLElement) => void;
type RootElement = HTMLElement | Window | null;

export function useClickOutside(
  callback: ClickCallback,
  boundryElementRef: RefObject<HTMLElement>,
  root: RootElement = isSSR ? null : window
) {
  useEffect(() => {
    if (root === null) {
      return;
    }

    const clickOutside: EventListener = (event) => {
      const element = boundryElementRef.current;
      if (element && !element.contains(event.target as HTMLElement)) {
        callback(element);
      }
    };

    root.addEventListener('click', clickOutside);
    return () => {
      root.removeEventListener('click', clickOutside);
    };
  }, [boundryElementRef, root, callback]);
}
