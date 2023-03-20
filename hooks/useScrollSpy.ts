
import { useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import _debounce from "lodash/debounce";

export function useScrollSpy() {
  const { push } = useRouter();
  const containerRef = useRef<HTMLElement>(null);

  const observer = useMemo<IntersectionObserver>(
    () => typeof window === 'undefined' ? null :
      new IntersectionObserver(
        (entries) => {
          const visible = entries.find((e) => e.isIntersecting);
          if (
            visible &&
            !window.location.hash.endsWith(visible.target.id)
          ) {
            push({ hash: `#${visible.target.id}` });
          }
        },
        {
          root: containerRef.current,
          threshold: 1,
        }
      ),
    [containerRef.current]
  );

  useEffect(() => {
    if (!observer) {
      return
    }

    const container = containerRef.current;
    Array.from(container.children).forEach((el) => observer.observe(el));

    return () => {
      Array.from(container.children).forEach((el) => observer.unobserve(el));
    };
  }, [observer]);

  return containerRef;
}
