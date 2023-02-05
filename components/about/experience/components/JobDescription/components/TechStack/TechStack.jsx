import {
  JavaTechIcon,
  CSharpTechIcon,
  AndroidTechIcon,
  ReactTechIcon,
  DotnetTechIcon,
} from "components/icon";

import styles from "./styles.module.css";

export const TechStack = ({ stack }) => {
  return (
    <>
      <p>Required skills</p>
      <ul className={styles.tech_stack}>
        {stack.map((tech) => (
          <TechItem key={tech.name} tech={tech} />
        ))}
      </ul>
    </>
  );
};

const TechItem = ({ tech }) => {
  const TechIcon = getIconComponent(tech.iconName);
  return (
    <li className={styles.tech_item}>
      <TechIcon />
      {tech.name}
    </li>
  );
};

function getIconComponent(iconName) {
  return techIconMap[iconName] ?? "div";
}

const techIconMap = {
  React: ReactTechIcon,
  Dotnet: DotnetTechIcon,
  CSharp: CSharpTechIcon,
  Android: AndroidTechIcon,
  Java: JavaTechIcon,
};
