export function getFormattedDate(date?: Date): string {
  if (!date) {
    return 'currently';
  }

  return date.toLocaleString('en-GB', {
    month: 'short',
    year: 'numeric',
  });
}
