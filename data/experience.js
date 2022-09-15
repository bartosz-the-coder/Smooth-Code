import { getFormattedDate } from "./utils";

export const experience = [
  {
    title: "Senior Frontend Developer",
    type: 'Contractor',
    employer: "Galaxy Digital Services",
    startDate: getFormattedDate(new Date(2021, 9, 1)),
    endDate: getFormattedDate(),
    technology: "React",
    projectDescription: "Development of cryptocurrency trading apps in React",
  },
  {
    title: "Senior Frontend Engineer",
    type: 'Contractor',
    employer: "GRID esports",
    startDate: getFormattedDate(new Date(2021, 7, 1)),
    endDate: getFormattedDate(new Date(2022, 4, 30)),
    technology: "React",
    projectDescription:
      "Development an esport data hub in React ",
  },
  {
    title: "Software Engineer",
    type: 'Contractor',
    employer: "Avanade",
    startDate: getFormattedDate(new Date(2021, 3, 1)),
    endDate: getFormattedDate(new Date(2021, 6, 30)),
    technology: "React",
    projectDescription:
      "Development of React web application for content management.",
  },
  {
    title: "Technical Leader",
    type: 'Full time employment',
    employer: "EY GDS (CS) Poland",
    startDate: getFormattedDate(new Date(2019, 9, 1)),
    endDate: getFormattedDate(new Date(2021, 2, 30)),
    technology: "React",
    projectDescription:
      "Leading a development team working on various React web applications for tax return and settlement.",
  },
  {
    title: "Senior Web Developer",
    type: 'Full time employment',
    employer: "EY GDS (CS) Poland",
    startDate: getFormattedDate(new Date(2017, 5, 1)),
    endDate: getFormattedDate(new Date(2029, 8, 30)),
    technology: "React",
    projectDescription:
      "Development of multiple React web applications for tax return and settlement.",
  },
  {
    title: ".NET Software Engineer",
    type: 'Full time employment',
    employer: "Credit Suisse Poland",
    startDate: getFormattedDate(new Date(2013, 8, 1)),
    endDate: getFormattedDate(new Date(2017, 4, 30)),
    technology: ".NET / WPF",
    projectDescription:
      "Development and maintainence of WPF client applications for market risk management.",
  },
  {
    title: "Android Developer",
    type: 'Full time employment',
    employer: "Aduma Mobile",
    startDate: getFormattedDate(new Date(2013, 5, 1)),
    endDate: getFormattedDate(new Date(2013, 7, 30)),
    technology: "Android (Java)",
    projectDescription:
      "Internship. Development of Android client application for shopping centre.",
  },
];
