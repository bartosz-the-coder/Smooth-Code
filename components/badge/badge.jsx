import styles from "./styles.module.css";

export const Badge = ({ children }) => (
  <div className={styles.badge}>{children}</div>
);

export const PeriodBadge = ({ start, end }) => (
  <Badge>
    {start} → {end}
  </Badge>
);
