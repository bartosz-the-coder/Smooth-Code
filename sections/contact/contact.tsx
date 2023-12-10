import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useRef,
  useState,
} from 'react';
import { SectionContainer } from 'components/section-container';

import Styles from './styles.module.css';

const NAME_FIELD_ID = 'content_name';

const ContactSection: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>();
  const [messageLength, setMessageLength] = useState<number>(0);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const nameField: unknown = event.currentTarget[NAME_FIELD_ID];

    if (!(nameField instanceof HTMLInputElement)) {
      return;
    }

    setName(nameField.value);
  };

  const onReset: FormEventHandler<HTMLFormElement> = () => {
    setName(undefined);
    setMessageLength(0);
  };

  const onMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMessageLength(event.target.value.length);
  };

  return (
    <SectionContainer id="contact" heading="Contact">
      <div className={Styles.page_content}>
        <p>Let&apos;s stay in touch!</p>
        <p>
          You can contact me via email{' '}
          <a
            className={Styles.contact_link}
            href="mailto:contact@smoothcode.pl"
          >
            contact@smoothcode.pl
          </a>
        </p>
        <strong>OR</strong>
        <p>
          Visit my LinkedIn profile{' '}
          <a
            className={Styles.contact_link}
            href="https://www.linkedin.com/in/bartoszn/"
          >
            LinkedIn profile
          </a>
        </p>
        <strong>OR</strong>
        <p>Fill that contact form</p>
        <section className={Styles.form_container}>
          <form
            ref={formRef}
            className={Styles.contact_form}
            onSubmit={onSubmit}
            onReset={onReset}
          >
            <input
              id={NAME_FIELD_ID}
              type="text"
              placeholder="Your name"
              required
            />
            <input type="email" placeholder="Your email" required />
            <textarea
              id="message"
              placeholder="Your message"
              required
              minLength={50}
              onChange={onMessageChange}
            />
            <small className={Styles.message_info}>
              At least 50 characters (currently: {messageLength} )
            </small>
            <button type="submit">Send</button>
            <div className={Styles.contact_form_overlay} data-visible={!!name}>
              <h3>Thanks for your time {name}</h3>
              Unfortunately the contact form is out of order, <br />
              please try to use other ways of communication.
              <button type="reset">Dismiss</button>
            </div>
          </form>
        </section>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
