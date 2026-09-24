import { Experience } from './types';

export const portfolio: [Experience, ...Experience[]] = [
  {
    title: 'Senior Frontend Developer',
    type: 'Contractor',
    employer: 'Galaxy Digital',
    startDate: new Date(2021, 9, 1),
    endDate: null,
    description:
      'Development of cryptocurrency trading apps in Next.js and React.',
    technologies: [
      { name: 'React', iconName: 'react' },
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'CSS', iconName: 'css' },
      { name: 'GIT', iconName: 'git' },
      { name: 'Jenkins', iconName: 'jenkins' },
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    type: 'Contractor',
    employer: 'GRID esports',
    startDate: new Date(2021, 7, 1),
    endDate: new Date(2022, 4, 30),
    description: 'Development of an esport data hub in React.',
    technologies: [
      { name: 'React', iconName: 'react' },
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'CSS-in-JS', iconName: 'cssinjs' },
      { name: 'GIT', iconName: 'git' },
    ],
  },
  {
    title: 'Software Engineer',
    type: 'Contractor',
    employer: 'Avanade',
    startDate: new Date(2021, 3, 1),
    endDate: new Date(2021, 6, 30),
    description:
      'Development of a React web application for content management.',
    technologies: [
      { name: 'React', iconName: 'react' },
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'CSS', iconName: 'css' },
      { name: 'GIT', iconName: 'git' },
    ],
  },
  {
    title: 'Technical Leader',
    type: 'Full time employment',
    employer: 'EY GDS (CS) Poland',
    startDate: new Date(2019, 9, 1),
    endDate: new Date(2021, 2, 30),
    description:
      'Leading the development team working on various React web applications for tax return and settlement.',
    technologies: [
      { name: 'React', iconName: 'react' },
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'CSS', iconName: 'css' },
      { name: 'CSS-in-JS', iconName: 'cssinjs' },
      { name: 'GIT', iconName: 'git' },
      { name: 'T-SQL', iconName: 'tsql' },
      { name: 'Azure DevOps', iconName: 'azuredevops' },
    ],
  },
  {
    title: 'Senior Web Developer',
    type: 'Full time employment',
    employer: 'EY GDS (CS) Poland',
    startDate: new Date(2017, 5, 1),
    endDate: new Date(2019, 8, 30),
    description:
      'Development of multiple React web applications for tax return and settlement.',
    technologies: [
      { name: 'React', iconName: 'react' },
      { name: 'TypeScript', iconName: 'typescript' },
      { name: 'Angular', iconName: 'angular' },
      { name: 'CSS', iconName: 'css' },
      { name: 'GIT', iconName: 'git' },
      { name: 'T-SQL', iconName: 'tsql' },
    ],
  },
  {
    title: '.NET Software Engineer',
    type: 'Full time employment',
    employer: 'Credit Suisse Poland',
    startDate: new Date(2013, 8, 1),
    endDate: new Date(2017, 4, 30),
    description:
      'Development and maintenance of WPF client applications for market risk management, plus an ASP.NET WebAPI service.',
    technologies: [
      { name: 'C#', iconName: 'csharp' },
      { name: '.NET', iconName: 'dotnet' },
      { name: 'WPF', iconName: 'xaml' },
      { name: 'ASP.NET', iconName: 'aspnet' },
      { name: 'T-SQL', iconName: 'tsql' },
      { name: 'SVN', iconName: 'svn' },
    ],
  },
  {
    title: 'Android Developer',
    type: 'Full time employment',
    employer: 'Aduma Mobile',
    startDate: new Date(2013, 5, 1),
    endDate: new Date(2013, 7, 30),
    description:
      'Internship. Development of an Android client application for a shopping centre.',
    technologies: [
      { name: 'Android', iconName: 'android' },
      { name: 'Java', iconName: 'java' },
      { name: 'GIT', iconName: 'git' },
      { name: 'SQLite', iconName: 'sqlite' },
    ],
  },
];

export const [currentRole] = portfolio;

export const careerStart = portfolio.reduce(
  (earliest, role) => (role.startDate < earliest ? role.startDate : earliest),
  currentRole.startDate
);
