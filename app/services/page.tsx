import InquiryForm from '@/components/InquiryForm';

import styles from './services.module.css';

const services = [
  {
    n: '01',
    name: 'Production',
    detail:
      'Shape the idea, find the center of the song, and build an arrangement that gives the vocal room to mean something.',
    rate: 'From $1,200 / song',
  },
  {
    n: '02',
    name: 'Mixing',
    detail:
      'Bring every element into focus with depth, movement, and translation across the systems your listeners use.',
    rate: 'From $600 / song',
  },
  {
    n: '03',
    name: 'Mastering',
    detail:
      'The final, thoughtful pass: cohesive level, tone, and delivery prepared for your release.',
    rate: 'From $150 / song',
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p>HOW WE CAN WORK TOGETHER</p>
        <h1>
          Make room
          <br />
          <em>for the music.</em>
        </h1>
        <span>Thoughtful collaboration from first idea to final master.</span>
      </header>

      <section className={styles.services}>
        <div className={styles.sectionIntro}>
          <p>STUDIO SERVICES</p>
          <span>Each project is scoped to the music and what it needs.</span>
        </div>

        {services.map((service) => (
          <article className={styles.service} key={service.n}>
            <span className={styles.number}>{service.n}</span>
            <div>
              <h2>{service.name}</h2>
              <p>{service.detail}</p>
            </div>
            <span className={styles.rate}>{service.rate}</span>
          </article>
        ))}
      </section>

      <section className={styles.booking}>
        <div className={styles.bookingIntro}>
          <p className={styles.eyebrow}>THE FIRST STEP</p>
          <h2>
            Tell me what
            <br />
            <span>you’re making.</span>
          </h2>
          <p>
            Share a little about the project. I’ll get back to you within two
            working days with next steps and availability.
          </p>
          <div className={styles.bookingNote}>
            <span>01 — PROJECT DETAILS</span>
            <span>02 — A SHORT CONVERSATION</span>
            <span>03 — MAKE SOMETHING GOOD</span>
          </div>
        </div>

        <div id="inquiry" className={styles.formWrap}>
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
