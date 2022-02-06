import Image from 'next/image';
import { ImageLoader } from 'components/image';
import styles from "styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <h2>Bartosz Nowak</h2>
      <div>
        <p>Software developer by day,</p>
        <p>Software developer by night.</p>
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