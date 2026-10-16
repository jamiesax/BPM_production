import GearAccordion from '@/components/GearAccordion';

import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p>ABOUT THE STUDIO</p>
        <h1>
          Care for the
          <br />
          <em>whole picture.</em>
        </h1>
        <span>Music is a conversation. Our work starts with listening.</span>
      </header>

      <section className={styles.bio}>
        <div className={styles.portrait}>
          <div className={styles.light} />
          <span>BPM STUDIO NOTES / 001</span>
          <small>PLACE PORTRAIT HERE</small>
        </div>

        <div className={styles.bioCopy}>
          <p className={styles.eyebrow}>A LITTLE CONTEXT</p>
          <h2>
            BPM — Bad Man Piddy — is an independent music studio owned by
            Adelaja Oladipupo.
          </h2>
          <p>
            Built around a simple idea: every artist deserves a thoughtful
            partner who listens closely and helps the music find its clearest
            form.
          </p>
          <p>
            From production and recording to mixing and mastering, BPM brings
            care, curiosity, and a collaborative spirit to every project.
          </p>
          <div className={styles.signature}>
            Adelaja Oladipupo
            <span>OWNER · BPM / BAD MAN PIDDY</span>
          </div>
        </div>
      </section>

      <section className={styles.gear}>
        <div>
          <p className={styles.eyebrow}>TOOLS IN THE ROOM</p>
          <h2>
            Choose the tool
            <br />
            <span>that serves the song.</span>
          </h2>
          <p className={styles.gearIntro}>
            A few reliable pieces, used with intention. Open a category to see
            what’s in rotation.
          </p>
        </div>
        <GearAccordion />
      </section>

      <section className={styles.values}>
        <p className={styles.eyebrow}>HOW I LIKE TO WORK</p>
        <div>
          <article>
            <span>01</span>
            <h3>Listen before solving.</h3>
            <p>Every song arrives with its own center of gravity. Find that first.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Keep the human in it.</h3>
            <p>Polish should reveal the feeling, never sand it away.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Make it together.</h3>
            <p>The best decisions happen when trust and curiosity share the room.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
