import { useEffect, useState } from 'react';

export function useActiveSection(
  ids: readonly SectionId[]
): SectionId | undefined {
  const [active, setActive] = useState<SectionId>();

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }

        const current = ids.filter((id) => visible.has(id)).pop();
        if (current) {
          setActive(current);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
