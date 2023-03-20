import Image from "next/image";
import { useState, useRef, Children } from "react";
import { ImageLoader } from "components/image";
import {
  AboutSection,
  EducationRow,
  ExperienceRow,
  SkillRow,
} from "components/about";

import homeStyles from "styles/Home.module.css";
import aboutStyles from "styles/About.module.css";
import contentStyles from "styles/Contact.module.css";

export default function Home({ skills, experience, education }) {
  const formRef = useRef(null);
  const [name, setName] = useState();
  const [messageLength, setMessageLength] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
  };

  const onReset = () => setName(null);
  const onDismiss = () => formRef.current.reset();

  const onMessageChange = (event) => {
    setMessageLength(event.target.value?.length ?? 0);
  };

  return (
    <>
      <div id="_" className={homeStyles.container}>
        <h2 className={homeStyles.title}>Bartosz Nowak</h2>
        <div>
          <p className={homeStyles.subtitle}>
            Software Engineer by day,&nbsp;&nbsp;
          </p>
          <p className={homeStyles.subtitle}>Software Engineer by night.</p>
        </div>
        <div className={homeStyles.logo}>
          <Image
            src="/assets/logo.png"
            alt="Smooth Code logo"
            layout="fill"
            objectFit="contain"
            loader={ImageLoader}
          />
        </div>
      </div>
      <div id="about" className={aboutStyles.container}>
        <h2>My Expertises</h2>
        <AboutSection title="My experience" shape="rectangle">
          {Children.toArray(experience.map(ExperienceRow))}
        </AboutSection>
        <AboutSection title="My skills" shape="square">
          {Children.toArray(skills.map(SkillRow))}
        </AboutSection>
        <AboutSection title="My education" shape="rectangle">
          {Children.toArray(education.map(EducationRow))}
        </AboutSection>
      </div>
      <div id="contact" className={contentStyles.container}>
        <h2>Contact</h2>
        <div className={contentStyles.page_content}>
          <p>Let's stay in touch!</p>
          <p>
            You can contact me via email{" "}
            <a
              className={contentStyles.contact_link}
              href="mailto:contact@smoothcode.pl"
            >
              contact@smoothcode.pl
            </a>
          </p>
          <strong>OR</strong>
          <p>
            Visit my LinkedIn profile{" "}
            <a
              className={contentStyles.contact_link}
              href="https://www.linkedin.com/in/bartoszn/"
            >
              LinkedIn profile
            </a>
          </p>
          <strong>OR</strong>
          <p>Fill that contact form</p>
          <section className={contentStyles.form_container}>
            <div
              className={contentStyles.contact_form_overlay}
              data-visible={!!name}
            >
              <h3>Thanks for your time {name}</h3>
              Unfortunately the contact form is out of order, <br />
              please try to use other ways of communication.
              <button onClick={onDismiss}>Dismiss</button>
            </div>
            <form
              ref={formRef}
              className={contentStyles.contact_form}
              onSubmit={onSubmit}
              onReset={onReset}
            >
              <input id="name" type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <textarea
                id="message"
                placeholder="Your message"
                required
                minLength={50}
                onChange={onMessageChange}
              />
              <small className={contentStyles.message_info}>
                At least 50 characters (currently: {messageLength} )
              </small>
              <button type="submit">Send</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { skills, experience, education } = await import("data");
  return {
    props: {
      skills,
      experience,
      education,
    },
  };
}
