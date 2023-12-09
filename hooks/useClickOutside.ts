import { RefObject, useEffect } from 'react';
import { isSSR } from 'utils/isSSR';

type ClickCallback = (element: HTMLElement) => void

export function useClickOutside(callback: ClickCallback, boundryElementRef: RefObject<HTMLElement>, root: HTMLElement | Window = isSSR ? null : window) {
  useEffect(() => {
    if (root === null) {
      return
    }

    const clickOutside: EventListener = (event) => {
      if (!boundryElementRef.current.contains(event.target as HTMLElement)) {
        callback(boundryElementRef.current)
      }
    };

    root.addEventListener("click", clickOutside);
    return () => {
      root.removeEventListener("click", clickOutside);
    };
  }, [boundryElementRef, root, callback]);
}