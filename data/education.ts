import { getFormattedDate } from './utils';

export const education = [
  {
    name: "Wroclaw University of Technology",
    startDate: getFormattedDate(new Date(2013, 2, 1)),
    endDate: getFormattedDate(new Date(2015, 5, 30)),
    degree: "Master of Science",
    field: "Computer Science",
    specialisation: "Internet and mobile technologies",
  },
  {
    name: "Czestochowa University of Technology",
    startDate: getFormattedDate(new Date(2009, 9, 1)),
    endDate: getFormattedDate(new Date(2013, 1, 30)),
    degree: "Bachelor of Science",
    field: "Computer Science",
    specialisation: "Software engineering",
  }
];
