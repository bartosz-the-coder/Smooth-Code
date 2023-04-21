import * as TechIcons from 'components/icon/tech';

import styles from './styles.module.css';

export const TechStack = ({ stack }) => {
  return (
    <>
      <h4>Tech stack</h4>
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
  const capitalized =
  iconName.charAt(0).toUpperCase()
  + iconName.slice(1);

  // eslint-disable-next-line import/namespace
  return TechIcons[capitalized] ?? UnknownTech;
}

const UnknownTech = () => <i>🤷</i>