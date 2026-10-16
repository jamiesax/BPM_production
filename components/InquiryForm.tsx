'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

import styles from './InquiryForm.module.css';

type InquiryConfirmation = {
  name: string;
  email: string;
  service: string;
  timeline: string;
};

export default function InquiryForm() {
  const [confirmation, setConfirmation] =
    useState<InquiryConfirmation | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const inquiry = {
      name: String(form.get('name')),
      email: String(form.get('email')),
      service: String(form.get('service')),
      timeline: String(form.get('timeline')),
    };

    sessionStorage.setItem('bpm-demo-inquiry', JSON.stringify(inquiry));
    setConfirmation(inquiry);
  }

  if (confirmation) {
    return (
      <section className={styles.confirmation} aria-live="polite">
        <span className={styles.confirmationIcon}>✓</span>
        <p className={styles.confirmationEyebrow}>DEMO REQUEST SAVED</p>
        <h3>Thanks, {confirmation.name.split(' ')[0]}.</h3>
        <p>
          Your {confirmation.service.toLowerCase()} inquiry is saved in this
          browser session. In the finished site, this is where the studio will
          confirm availability and follow up at{' '}
          <strong>{confirmation.email}</strong>.
        </p>

        <dl>
          <div>
            <dt>Service</dt>
            <dd>{confirmation.service}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{confirmation.timeline || 'Flexible'}</dd>
          </div>
        </dl>

        <button type="button" onClick={() => setConfirmation(null)}>
          Create another inquiry
        </button>
        <small>
          Frontend preview only · No email or appointment has been sent.
        </small>
      </section>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>
          Your name
          <input name="name" autoComplete="name" placeholder="Name" required />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          What do you need?
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option>Production</option>
            <option>Mixing</option>
            <option>Mastering</option>
            <option>Production + mixing</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          Ideal timeline
          <select name="timeline" defaultValue="Flexible">
            <option>Flexible</option>
            <option>Within a month</option>
            <option>1–3 months</option>
            <option>3+ months</option>
          </select>
        </label>
      </div>

      <label>
        Tell me about the project
        <textarea
          name="message"
          rows={5}
          placeholder="A little about the music, where you are in the process, and what you’re looking for…"
          required
        />
      </label>

      <div className={styles.submitRow}>
        <button type="submit">
          Continue inquiry <span>↗</span>
        </button>
        <p>Share the details and we’ll take it from there.</p>
      </div>
    </form>
  );
}
