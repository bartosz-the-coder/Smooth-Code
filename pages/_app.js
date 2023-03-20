/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head';
import { IconContext } from 'components/icon';
import { Header } from 'components/header';
import { Navigation } from 'components/navigation';
import { ThemeSwitch } from 'components/theme-switch';
import { useScrollSpy } from 'hooks/useScrollSpy';

import styles from 'styles/App.module.css';
import 'styles/globals.css';



function SmoothApp({ Component, pageProps }) {
  const ref = useScrollSpy()
  return (
    <IconContext.Provider value={iconStyle}>
      <div className={styles.container}>
        <SmoothHead />
        <Header>
          <ThemeSwitch />
        </Header>
        <Navigation />
        <main ref={ref}>
          <Component {...pageProps} />
        </main>
      </div>
    </IconContext.Provider>
  );
}

const SmoothHead = () => (
  <Head>
    <title>Smooth Code</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest"></link>
    <link
        href="https://fonts.googleapis.com/css2?family=Economica:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
  </Head>
);

const iconStyle = {
  style: {
    verticalAlign: "middle",
  }
};

export default SmoothApp;
