import { useEffect } from 'react';

export function useClickOutside(callback, boundryElementRef, root = typeof window !== 'undefined' ? window : null) {
  useEffect(() => {
    if (root === null) {
      return
    }

    const clickOutside = (event) => {
      if (!boundryElementRef.current.contains(event.target)) {
        callback(boundryElementRef.current)
      }
    };

    root.addEventListener("click", clickOutside);
    return () => {
      root.removeEventListener("click", clickOutside);
    };
  }, [boundryElementRef, root, callback]);
}