import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, memo } from 'react';
import clsx from 'clsx';
import ImageLoader from 'components/image';
import { navLinkConfig } from './links';

import styles from './styles.module.css';


export const Navigation = memo(() => (
  <nav className={styles.navigation}>
    <div className={styles.logo}>
      <Image
        src="/assets/logo.png"
        alt="Smooth Code logo"
        layout="fill"
        objectFit="contain"
        loader={ImageLoader}
      />
    </div>
    <ul className={styles.list}>
      {Object.entries(navLinkConfig).map(([route, { Icon, name }]) => (
        <NavLink key={name} href={route} aria-label={name}>
          <Icon />
          <label className={styles.label}>{name}</label>
        </NavLink>
      ))}
    </ul>
  </nav>
));

Navigation.displayName = 'Navigation'

type NavLinkProps = PropsWithChildren<{
  href: string;
}>;

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const { asPath } = useRouter(); 
  const linkClassNames = clsx(styles.link, {
    [styles.active]: asPath === href,
  });

  return (
    <li className={linkClassNames}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};
