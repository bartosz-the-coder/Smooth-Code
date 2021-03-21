import { Children } from "react";
import { FullStarIcon as FullStarIcon, EmptyStarIcon, HalfStarIcon } from "components/icon";
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
      if (index < fullStars) {
        return <FullStarIcon className={styles.star} />;
      }

      if (hasHalfStar && index === fullStars) {
        return <HalfStarIcon className={styles.star} />;
      }

      return <EmptyStarIcon className={styles.star}/>;
    })
  );
};
