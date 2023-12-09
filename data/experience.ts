import { getFormattedDate } from './utils';

export const experience = [
  {
    title: 'Senior Frontend Developer',
    type: 'Contractor',
    employer: 'Galaxy Digital',
    startDate: getFormattedDate(new Date(2021, 9, 1)),
    endDate: getFormattedDate(),
    project: {
      technologies: [
        { name: 'React', iconName: 'react' },
        { name: 'TypeScript', iconName: 'typescript' },
        { name: 'CSS', iconName: 'css' },
        { name: 'GIT', iconName: 'git' },
        { name: 'Jenkins', iconName: 'jenkins' },
      ],
      description: 'Development of cryptocurrency trading apps in React',
    },
  },
  {
    title: 'Senior Frontend Engineer',
    type: 'Contractor',
    employer: 'GRID esports',
    startDate: getFormattedDate(new Date(2021, 7, 1)),
    endDate: getFormattedDate(new Date(2022, 4, 30)),
    project: {
      technologies: [
        { name: 'React', iconName: 'react' },
        { name: 'TypeScript', iconName: 'typescript' },
        { name: 'Styled Components', iconName: 'styledcomponents' },
        { name: 'GIT', iconName: 'git' },
      ],
      description: 'Development of esport data hub in React ',
    },
  },
  {
    title: 'Software Engineer',
    type: 'Contractor',
    employer: 'Avanade',
    startDate: getFormattedDate(new Date(2021, 3, 1)),
    endDate: getFormattedDate(new Date(2021, 6, 30)),
    project: {
      technologies: [
        { name: 'React', iconName: 'react' },
        { name: 'TypeScript', iconName: 'typescript' },
        { name: 'CSS', iconName: 'css' },
        { name: 'GIT', iconName: 'git' },
      ],
      description:
        'Development of React web application for content management.',
    },
  },
  {
    title: 'Technical Leader',
    type: 'Full time employment',
    employer: 'EY GDS (CS) Poland',
    startDate: getFormattedDate(new Date(2019, 9, 1)),
    endDate: getFormattedDate(new Date(2021, 2, 30)),
    project: {
      technologies: [
        { name: 'React', iconName: 'react' },
        { name: 'TypeScript', iconName: 'typescript' },
        { name: 'CSS', iconName: 'css' },
        { name: 'Styled Components', iconName: 'styledcomponents' },
        { name: 'GIT', iconName: 'git' },
        { name: 'T-SQL', iconName: 'tsql' },
        { name: 'Azure DevOps', iconName: 'azuredevops' },
      ],
      description:
        'Leading the development team working on various React web applications for tax return and settlement.',
    },
  },
  {
    title: 'Senior Web Developer',
    type: 'Full time employment',
    employer: 'EY GDS (CS) Poland',
    startDate: getFormattedDate(new Date(2017, 5, 1)),
    endDate: getFormattedDate(new Date(2029, 8, 30)),
    project: {
      technologies: [
        { name: 'React', iconName: 'react' },
        { name: 'TypeScript', iconName: 'typescript' },
        { name: 'Angular', iconName: 'angular' },
        { name: 'CSS', iconName: 'css' },
        { name: 'GIT', iconName: 'git' },
        { name: 'T-SQL', iconName: 'tsql' },
      ],
      description:
        'Development of multiple React web applications for tax return and settlement.',
    },
  },
  {
    title: '.NET Software Engineer',
    type: 'Full time employment',
    employer: 'Credit Suisse Poland',
    startDate: getFormattedDate(new Date(2013, 8, 1)),
    endDate: getFormattedDate(new Date(2017, 4, 30)),
    project: {
      technologies: [
        { name: 'C#', iconName: 'csharp' },
        { name: '.NET', iconName: 'dotnet' },
        { name: 'WPF', iconName: 'xaml' },
        { name: 'ASP.NET', iconName: 'aspnet' },
        { name: 'T-SQL', iconName: 'tsql' },
        { name: 'SVN', iconName: 'svn' },
      ],
      description: `
          Development and maintainence of WPF client applications for market risk management.
          Development of ASP.NET WebAPI service.
        `,
    },
  },
  {
    title: 'Android Developer',
    type: 'Full time employment',
    employer: 'Aduma Mobile',
    startDate: getFormattedDate(new Date(2013, 5, 1)),
    endDate: getFormattedDate(new Date(2013, 7, 30)),
    project: {
      technologies: [
        { name: 'Android', iconName: 'android' },
        { name: 'Java', iconName: 'java' },
        { name: 'GIT', iconName: 'git' },
        { name: 'SQLite', iconName: 'sqlite' },
      ],
      description:
        'Internship. Development of Android client application for shopping centre.',
    },
  },
];
