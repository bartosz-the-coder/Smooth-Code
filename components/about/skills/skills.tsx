import {
  FullStarIcon,
  EmptyStarIcon,
  HalfStarIcon,
  IconType,
} from 'components/icon';
import styles from './styles.module.css';

export const SkillRow = ({ name, level }) => {
  return (
    <li className={styles.skill_item}>
      <div>{name}</div>
      <div className={styles.stars}>{createLevelStars(level)}</div>
    </li>
  );
};
const createLevelStars = (level: number) => {
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
