import { useCallback, useEffect, useRef, useState } from 'react';

type Highlight = {
  left: number;
  right: number;
  direction: 'forward' | 'back';
};

export function useHighlightRect(active: SectionId | undefined) {
  const containerRef = useRef<HTMLElement>(null);
  const [highlight, setHighlight] = useState<Highlight>();

  const measure = useCallback(() => {
    const container = containerRef.current;
    const link = active
      ? container?.querySelector(`[data-section="${active}"]`)
      : null;

    if (!container || !link) {
      return;
    }

    const containerBox = container.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    const left = linkBox.left - containerBox.left;
    const right = containerBox.right - linkBox.right;

    setHighlight((previous) => {
      if (previous?.left === left && previous.right === right) {
        return previous;
      }

      return {
        left,
        right,
        direction: previous && left < previous.left ? 'back' : 'forward',
      };
    });
  }, [active]);

  useEffect(measure, [measure]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [measure]);

  return { containerRef, highlight };
}
