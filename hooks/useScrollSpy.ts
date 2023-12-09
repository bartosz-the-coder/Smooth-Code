import { NextRouter, useRouter } from 'next/router';
import { useEffect, useRef, useMemo } from 'react';
import { debounce } from 'lodash';
import { isSSR } from 'utils/isSSR';

type EnchancedIntersectionObserver = IntersectionObserver & {
  paused?: boolean;
};

export function useScrollSpy() {
  const containerRef = useRef<HTMLElement>(null);
  const routerRef = useRef<NextRouter>();
  routerRef.current = useRouter();

  const observer = useMemo<EnchancedIntersectionObserver | null>(() => {
    if (isSSR || !routerRef.current) {
      return null;
    }
    return new IntersectionObserver(getObserverCallback(routerRef.current), {
      root: containerRef.current,
      threshold: 0.25,
    });
  }, []);

  useEffect(() => {
    if (!observer || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    Array.from(container.children).forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return containerRef;
}

function getObserverCallback(router: NextRouter): IntersectionObserverCallback {
  const push = debounce(router.push, 100, { trailing: true });
  return (entries) => {
    const [visible] = entries
      .filter((e) => e.isIntersecting)
      .sort((one, other) => one.time - other.time);

    if (!visible) {
      return;
    }

    const hash = `#${visible.target.id}`;
    push({ hash })?.catch((err: Error) => {
      if ('cancelled' in err && !err.cancelled) {
        throw err;
      }
    });
  };
}
