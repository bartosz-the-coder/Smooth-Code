import { NextRouter, useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { debounce } from 'utils/debounce';

export function useScrollSpy() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const routerRef = useRef(router);

  useEffect(() => {
    routerRef.current = router;
  }, [router]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const push = getDebouncedPush(routerRef.current);

    const observer = new IntersectionObserver(getObserverCallback(push), {
      root: container,
      threshold: 0.25,
    });

    Array.from(container.children).forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}

function getDebouncedPush(router: NextRouter) {
  return debounce((hash: string) => {
    router.push({ hash }).catch((err: unknown) => {
      if (err instanceof Error && 'cancelled' in err && !err.cancelled) {
        throw err;
      }
    });
  }, 100);
}

function getObserverCallback(
  push: (hash: string) => void
): IntersectionObserverCallback {
  return (entries) => {
    const [visible] = entries
      .filter((e) => e.isIntersecting)
      .sort((one, other) => one.time - other.time);

    if (!visible) {
      return;
    }

    push(`#${visible.target.id}`);
  };
}
