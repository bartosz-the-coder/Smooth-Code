import Image from "next/image";
import { ImageLoader } from "components/image";

import { SectionContainer } from "components/section-container";

import Styles from './styles.module.css'
import { FC } from "react";

const LandingSection: FC = () => (
  <SectionContainer
    id="_"
    heading="Bartosz Nowak"
    className={Styles.container}
    headingClassName={Styles.title}
  >
    <div>
      <p className={Styles.subtitle}>
        Software Engineer by day,&nbsp;&nbsp;
      </p>
      <p className={Styles.subtitle}>Software Engineer by night.</p>
    </div>
    <div className={Styles.logo}>
      <Image
        src="/assets/logo.png"
        alt="Smooth Code logo"
        layout="fill"
        objectFit="contain"
        loader={ImageLoader}
      />
    </div>
  </SectionContainer>
);

export default LandingSection