import { FC, FormEventHandler, useState } from 'react';
import { ArrowIcon, LinkedInIcon, MailIcon } from 'components/icon';
import { SectionContainer } from 'components/section-container';

import styles from './styles.module.css';

const EMAIL = 'contact@smoothcode.pl';
const LINKEDIN = 'https://www.linkedin.com/in/bartoszn/';

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export const ContactSection: FC = () => (
  <SectionContainer id="contact" heading="Contact" kicker="Let's stay in touch">
    <div className={styles.layout}>
      <div className={styles.direct}>
        <a className={styles.channel} href={`mailto:${EMAIL}`}>
          <MailIcon className={styles.channelIcon} aria-hidden />
          <span className={styles.channelLabel}>Email</span>
          <span className={styles.channelValue}>{EMAIL}</span>
          <ArrowIcon className={styles.channelArrow} aria-hidden />
        </a>
        <a
          className={styles.channel}
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={styles.channelIcon} aria-hidden />
          <span className={styles.channelLabel}>LinkedIn</span>
          <span className={styles.channelValue}>in/bartoszn</span>
          <ArrowIcon className={styles.channelArrow} aria-hidden />
        </a>
      </div>
      {FORM_ENDPOINT ? <ContactForm endpoint={FORM_ENDPOINT} /> : null}
    </div>
  </SectionContainer>
);

type ContactFormProps = {
  endpoint: string;
};

const ContactForm: FC<ContactFormProps> = ({ endpoint }) => {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    void send(event.currentTarget);
  };

  const send = async (form: HTMLFormElement) => {
    setStatus('submitting');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Form endpoint responded with ${response.status}`);
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.card}>
        <p className={styles.successTitle}>Message sent</p>
        <p className={styles.successBody}>
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className={styles.card} onSubmit={onSubmit}>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>Message</span>
        <textarea name="message" rows={4} minLength={20} required />
      </label>
      {status === 'error' ? (
        <p className={styles.error} role="alert">
          Something went wrong. Please email me at {EMAIL} instead.
        </p>
      ) : null}
      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};
