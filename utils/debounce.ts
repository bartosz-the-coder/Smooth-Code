/**
 * Trailing-edge debounce: `fn` runs once `wait` ms have elapsed without a new
 * call, using the arguments of that most recent call.
 */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  wait: number
): (...args: Args) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}
