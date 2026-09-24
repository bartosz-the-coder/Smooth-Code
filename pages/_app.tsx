import { AppType } from 'next/app';
import Head from 'next/head';
import clsx from 'clsx';
import { Economica, IBM_Plex_Sans } from 'next/font/google';
import { SiteFooter } from 'components/footer';
import { SiteHeader } from 'components/header';

import styles from 'styles/App.module.css';
import 'styles/globals.css';

const DESCRIPTION =
  'Bartosz Nowak — software engineer specialising in React, TypeScript and .NET. Skills, work history and contact details.';

const economica = Economica({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Oswald', 'Arial Narrow', 'sans-serif'],
  variable: '--font-display',
});

const plexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  variable: '--font-body',
});

const SmoothApp: AppType = ({ Component, pageProps }) => (
  <div className={clsx(styles.app, economica.variable, plexSans.variable)}>
    <SmoothHead />
    <SiteHeader />
    <main className={styles.main}>
      <Component {...pageProps} />
    </main>
    <SiteFooter />
  </div>
);

const SmoothHead = () => (
  <Head>
    <title>Smooth Code | Bartosz Nowak</title>
    <meta name="description" content={DESCRIPTION} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Smooth Code | Bartosz Nowak" />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/assets/logo.png" />
    <meta name="twitter:card" content="summary" />
  </Head>
);

export default SmoothApp;
