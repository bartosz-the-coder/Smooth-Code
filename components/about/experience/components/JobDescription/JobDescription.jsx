import { useRef } from "react";
import { useClickOutside } from 'hooks/useClickOutside';
import { TechStack } from './components/TechStack'

import styles from "./styles.module.css";

export const JobDescription = ({ description, techStack }) => {
  const detailsRef = useRef(null);

  useClickOutside(onOutsideClick, detailsRef)

  return (
    <details 
      ref={detailsRef} 
      className={styles.job_description}
      >
      <summary>Job details</summary>
      <article>
        <h4>Responsibilities</h4>
        <p>{description}</p>
        <TechStack stack={techStack} />
      </article>
    </details>
  );
};

function onOutsideClick(detailsElement) {
  detailsElement.removeAttribute('open')
}