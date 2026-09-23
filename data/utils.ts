const MONTH_YEAR = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
});

export const formatMonthYear = (date: Date): string => MONTH_YEAR.format(date);

export const formatPeriod = (start: Date, end: Date | null): string =>
  `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : 'Present'}`;

export const yearsSince = (date: Date): number =>
  Math.floor((Date.now() - date.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
