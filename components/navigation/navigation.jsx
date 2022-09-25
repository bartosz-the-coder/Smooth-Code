import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { HomeIcon, ContactIcon, AboutIcon } from 'components/icon';
import { ImageLoader } from 'components/image';
import styles from './styles.module.css';

export const Navigation = () => (
  <nav className={styles.navigation}>
    <div className={styles.logo}>
      <Image
        src='/assets/logo.png'
        alt='Smooth Code logo'
        layout='fill'
        objectFit='contain'
        loader={ImageLoader}
      />
    </div>
    <ul className={styles.list}>
      <NavLink href='/'>
        <HomeIcon />
        Home
      </NavLink>
      <NavLink href='/about'>
        <AboutIcon />
        About
      </NavLink>
      <NavLink href='/contact'>
        <ContactIcon />
        Contact
      </NavLink>
    </ul>
  </nav>
);

const NavLink = ({ href, children }) => {
  const { pathname } = useRouter();
  const linkClassNames = clsx(styles.link, {
    [styles.link_active]: pathname === href,
  });
  return (
    <li className={linkClassNames}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};
