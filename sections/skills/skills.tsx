import { FC } from 'react';
import { techIcons } from 'components/icon';
import { SectionContainer } from 'components/section-container';
import { SKILL_TIERS, Skill, SkillTier } from 'data/types';

import styles from './styles.module.css';

type SkillsSectionProps = {
  skills: Skill[];
};

export const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => (
  <SectionContainer id="skills" heading="Skills" kicker="What I work with">
    <div className={styles.tiers}>
      {SKILL_TIERS.map((tier) => (
        <SkillTierGroup
          key={tier}
          tier={tier}
          skills={skills.filter((skill) => skill.tier === tier)}
        />
      ))}
    </div>
  </SectionContainer>
);

type SkillTierGroupProps = {
  tier: SkillTier;
  skills: Skill[];
};

const SkillTierGroup: FC<SkillTierGroupProps> = ({ tier, skills }) =>
  skills.length === 0 ? null : (
    <section className={styles.tier}>
      <h3 className={styles.tierName}>{tier}</h3>
      <ul className={styles.skills}>
        {skills.map(({ name, icon }) => {
          const Icon = techIcons[icon];
          return (
            <li key={name} className={styles.skill}>
              <Icon className={styles.icon} aria-hidden />
              {name}
            </li>
          );
        })}
      </ul>
    </section>
  );
