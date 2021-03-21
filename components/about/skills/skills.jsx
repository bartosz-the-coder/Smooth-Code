import { Children } from "react";
import { FullStarIcon, EmptyStarIcon, HalfStarIcon } from "components/icon";
import styles from "./styles.module.css";

export const SkillRow = ({ name, level }) => {
  return (
    <li className={styles.skill_item}>
      <div>{name}</div>
      <div className={styles.stars}>{createLevelStars(level)}</div>
    </li>
  );
};

const createLevelStars = (level) => {
  const fiveGradeLevel = (level * 10) / 2;
  const fullStars = Math.trunc(fiveGradeLevel);
  const hasHalfStar = fullStars !== fiveGradeLevel;
  return Children.toArray(
    new Array(5).fill(null).map((_, index) => {
      let StarIcon;
      if (index < fullStars) {
        StarIcon = FullStarIcon;
      } else if (hasHalfStar && index === fullStars) {
        StarIcon = HalfStarIcon;
      } else {
        StarIcon = EmptyStarIcon;
      }

      return <StarIcon className={styles.star} />;
    })
  );
};
