import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { ImageLoader } from 'components/image';
import styles from './styles.module.css';
import { navLinkConfig } from './links';
import { useEffect } from 'react';

export const Navigation = () => (
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
        <NavLink key={name} href={route}>
          <Icon />
          {name}
        </NavLink>
      ))}
    </ul>
  </nav>
);

const NavLink = ({ href, children }) => {
  const { route, asPath } = useRouter(); 
  const linkClassNames = clsx(styles.link, {
    [styles.link_active]: asPath === `${route}${href}`,
  });

  useEffect(() => {
    const listener = (ev) => {
      console.log(ev)
    };

    window.addEventListener('popstate', listener);

    return window.removeEventListener('popstate', listener)
  }, [])

  return (
    <li className={linkClassNames}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};
