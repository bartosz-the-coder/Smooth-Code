import { useState } from 'react';

const useFakeState: typeof useState<boolean> = () =>
  [false, () => void 0] as const;

export function useHasSelectorFallback() {
  let useStateHook = useFakeState;

  try {
    !!document.querySelector(':root:has(> *)');
  } catch (e) {
    console.info('Use fallback for :has selector');
    useStateHook = useState;
  }

  return useStateHook(false);
}
