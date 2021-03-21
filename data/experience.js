import { getFormattedDate } from './utils';

export const experience = [
  {
    title: "Software Engineer / Self-employed",
    employer: "Avanade",
    startDate: getFormattedDate(getFormattedDate(new Date(2021, 4, 1))),
    endDate: getFormattedDate(),
    description:
      "Development of multiple React web applications for tax return and settlement.",
  },
  {
    title: "Web developer / Technical Leader",
    employer: "EY GDS (CS) Poland",
    startDate: getFormattedDate(new Date(2017, 6, 1)),
    endDate: getFormattedDate(new Date(2021, 3, 30)),
    description:
      "Development of multiple React web applications for tax return and settlement.",
  },
  {
    title: ".NET Software Engineer",
    employer: "Credit Suisse Poland",
    startDate: getFormattedDate(new Date(2013, 9, 1)),
    endDate: getFormattedDate(new Date(2017, 5, 30)),
    description:
      "Development and maintainence of WPF client applications for market risk management.",
  },
  {
    title: "Android Developer",
    employer: "Aduma Mobile",
    startDate: getFormattedDate(new Date(2013, 6, 1)),
    endDate: getFormattedDate(new Date(2013, 8, 30)),
    description:
      "Internship. Development of Android client application for shopping centre.",
  },
];
