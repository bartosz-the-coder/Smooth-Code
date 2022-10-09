import { useState, useRef } from 'react';
import styles from 'styles/Contact.module.css';

export default function Contact() {
  const formRef = useRef();
  const [name, setName] = useState();
  const [messageLength, setMessageLength] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    fetch(
      '/api/contact',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        ['name', 'email', 'message'].reduce((acc, key) => {
          acc[key] = event.target[key].value;
          return acc;
        }, {}))
    })
  };
  const onReset = () => setName(null);
  const onDismiss = () => formRef.current.reset();

  const onMessageChange = (event) => {
    setMessageLength(event.target.value?.length ?? 0);
  };

  return (
    <div className={styles.container}>
      <h2>Contact</h2>
      <div className={styles.page_content}>
        <p>Let's stay in touch!</p>
        <p>
          You can contact me via email{" "}
          <a
            className={styles.contact_link}
            href="mailto:contact@smoothcode.pl"
          >
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
            <input id="email" type="email" placeholder="Your email" required />
            <textarea
              id="message"
              placeholder="Your message"
              required
              minLength={50}
              onChange={onMessageChange}
            />
            <small className={styles.message_info}>
              At least 50 characters (currently: {messageLength} )
            </small>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}
