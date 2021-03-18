import Head from "next/head";
import { IconContext } from "components/icon";
import { Header } from "components/header";
import { Navigation } from "components/navigation";
import { ThemeSwitch } from "components/theme-switch";
import styles from "styles/App.module.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={iconStyle}>
      <div className={styles.container}>
        <Head>
          <title>Smooth Code</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header>
          <ThemeSwitch />
        </Header>
        <Navigation />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </IconContext.Provider>
  );
}

const iconStyle = { style: { verticalAlign: "middle", fontSize: 24 } };

export default MyApp;
