import * as TechIcons from 'components/icon/tech';
import type { IconName } from './types';

const iconMap = new Map(Object.entries(TechIcons))

export function getIconComponent(iconName: IconName) {
  const capitalized =
  iconName.charAt(0).toUpperCase()
  + iconName.slice(1);

  return iconMap.get(capitalized) ?? UnknownTech;
}

const UnknownTech = () => <i>🤷</i>