import { useRef } from "react";
import { useClickOutside } from 'hooks/useClickOutside';
import { TechStack } from './components/TechStack'

import styles from "./styles.module.css";

export const JobDescription = ({ description, skills }) => {
  const detailsRef = useRef(null);

  useClickOutside(onOutsideClick, detailsRef)

  return (
    <details 
      ref={detailsRef} 
      className={styles.job_description}
      >
      <summary>Job details</summary>
      <article>
        <p> {description}</p>
        <TechStack stack={skills} />
      </article>
    </details>
  );
};

function onOutsideClick(detailsElement) {
  detailsElement.removeAttribute('open')
}