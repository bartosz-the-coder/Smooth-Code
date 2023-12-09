import { FC } from 'react';
import {
  FullStarIcon,
  EmptyStarIcon,
  HalfStarIcon,
  IconType,
} from 'components/icon';
import { getIconComponent } from 'components/icon/utils';
import { Skill } from 'data/types';
import styles from './styles.module.css';

type Props = Skill;

export const SkillRow: FC<Props> = ({ name, level, icon }) => {
  const TechIcon = getIconComponent(icon);
  return (
    <li className={styles.skill_item}>
      <div className={styles.skill_name}>
        <TechIcon />
        {name}
      </div>
      <div className={styles.stars}>{renderLevelStars(level)}</div>
    </li>
  );
};

const renderLevelStars = (level: number) => {
  const fiveGradeLevel = level * 10;
  const fullStars = Math.floor(fiveGradeLevel / 2);
  const hasHalfStar = Boolean(fiveGradeLevel % 2);
  return new Array(5).fill(null).map((_, index) => {
    let StarIcon: IconType;
    if (index < fullStars) {
      StarIcon = FullStarIcon;
    } else if (hasHalfStar && index === fullStars) {
      StarIcon = HalfStarIcon;
    } else {
      StarIcon = EmptyStarIcon;
    }

    return <StarIcon key={index} className={styles.star} />;
  });
};
