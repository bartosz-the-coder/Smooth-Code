import Image from 'next/image';
import { ImageLoader } from 'components/image';
import styles from "styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bartosz Nowak</h2>
      <div>
        <p className={styles.subtitle}>Software Engineer by day,&nbsp;&nbsp;</p>
        <p className={styles.subtitle}>Software Engineer by night.</p>
      </div>
      <div className={styles.logo}>
        <Image
          src="/assets/logo.png"
          alt="Smooth Code logo"
          layout="fill"
          objectFit="contain"
          loader={ImageLoader}
        />
      </div>
    </div>
  );
}