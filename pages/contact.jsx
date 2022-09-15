import { useState, useRef } from "react";
import styles from "styles/Contact.module.css";

export default function Contact() {
  const formRef = useRef();
  const [name, setName] = useState();
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
  };
  const onReset = () => setName(null)
  const onDismiss = () => formRef.current.reset();
  return (
    <div className={styles.container}>
      <h2>Contact</h2>
      <p>Let's stay in touch!</p>
      <p>
        You can contact me via email{" "}
        <a className={styles.contact_link} href="mailto:contact@smoothcode.pl">
          contact@smoothcode.pl
        </a>
      </p>
      <strong>OR</strong>
      <p>
        Visit my LinkedIn profile{" "}
        <a
          className={styles.contact_link}
          href="https://www.linkedin.com/in/bartoszn/"
        >
          LinkedIn profile
        </a>
      </p>
      <strong>OR</strong>
      <p>Fill that contact form</p>
      <section className={styles.form_container}>
        <div className={styles.contact_form_overlay} data-visible={!!name}>
          <h3>Thanks for your time {name}</h3>
          Unfortunately the contact form is out of order, <br />
          please try to use other ways of communication.
          <button onClick={onDismiss}>Dismiss</button>
        </div>
        <form 
          ref={formRef}
          className={styles.contact_form} 
          onSubmit={onSubmit}
          onReset={onReset}
        >
          <input id="name" type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" required minLength={50} />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
