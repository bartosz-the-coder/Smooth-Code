import clsx from "clsx";
import styles from "styles/About.module.css";

export default function About(props) {
  return (
    <div className={styles.container}>
      <h2>My Expertises</h2>
      <section>
        <h3>My&nbsp;experience</h3>
        <ul className={styles.list}>
          <li>
            <div>Avanade</div>
            <div className={styles.badge}>APR 2021 → CURRENTLY</div>
          </li>
          <li>
            <div>EY GDS Poland</div>
            <div className={styles.badge}>JUN 2017 → MAR 2021</div>
          </li>
          <li>
            <div>Credit Suisse</div>
            <div className={styles.badge}>SEP 2013 → MAY 2017</div>
          </li>
          <li>
            <div>Aduma Mobile</div>
            <div className={styles.badge}>JUL 2013 → AUG 2013</div>
          </li>
        </ul>
      </section>
      <section>
        <h3>My&nbsp;skills</h3>
        <ul className={clsx(styles.list, styles.inline_list)}>
          <li>.NET/C#</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>GIT</li>
        </ul>
      </section>
      <section>
        <h3>Education</h3>
        <ul className={clsx(styles.list, styles.inline_list)}>
          <li>Wroclaw University of Technology</li>
          <li>Czestochowa University of Technology</li>
        </ul>
      </section>
    </div>
  );
}
