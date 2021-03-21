import { Children } from "react";
import clsx from "clsx";
import styles from "styles/About.module.css";
import { EducationRow, ExperienceRow, SkillRow } from "components/about";

export default function About({ skills, experience, education }) {
  return (
    <div className={styles.container}>
      <h2>My Expertises</h2>
      <section>
        <h3>My&nbsp;experience</h3>
        <ul className={styles.list}>
          {Children.toArray(experience.map(ExperienceRow))}
        </ul>
      </section>
      <section className={styles.education}>
        <h3>Education</h3>
        <ul className={styles.list}>
          {Children.toArray(education.map(EducationRow))}
        </ul>
      </section>
      <section>
        <h3>My&nbsp;skills</h3>
        <ul className={clsx(styles.list, styles.inline_list)}>
          {Children.toArray(skills.map(SkillRow))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps(context) {
  const { skills, experience, education } = await import("data");
  return {
    props: {
      skills,
      experience,
      education,
    },
  };
}
