import type { IconName } from 'components/icon';

type EmpoymentType = 'Contractor' | 'Full time employment';

type Project = {
  technologies: Tech[];
  description: string;
};

export type Tech = {
  name: string;
  iconName: IconName;
};

export type Experience = {
  title: string;
  type: EmpoymentType;
  employer: string;
  startDate: string;
  endDate: string;
  project: Project;
};

export type Skill = {
  name: string;
  level: SkillLevel;
  icon: IconName;
};

type SkillLevel =
  | 0.0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1.0;
