import * as TechIcons from 'components/icon/tech';

export function getIconComponent(iconName: string) {
  const capitalized =
  iconName.charAt(0).toUpperCase()
  + iconName.slice(1)

  // eslint-disable-next-line import/namespace
  return TechIcons[capitalized] ?? UnknownTech;
}

const UnknownTech = () => <i>🤷</i>