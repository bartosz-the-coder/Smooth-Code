import type { IconName } from 'components/icon';

type EmploymentType = 'Contractor' | 'Full time employment';

export type Tech = {
  name: string;
  iconName: IconName;
};

export type Experience = {
  title: string;
  type: EmploymentType;
  employer: string;
  description: string;
  technologies: Tech[];
  startDate: Date;
  endDate: Date | null;
};

export const SKILL_TIERS = ['Expert', 'Advanced', 'Familiar'] as const;

export type SkillTier = (typeof SKILL_TIERS)[number];

export type Skill = {
  name: string;
  icon: IconName;
  tier: SkillTier;
};
