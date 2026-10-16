import Link from 'next/link';

import ABTrackSwitcher from '@/components/ABTrackSwitcher';
import TrackCard from '@/components/TrackCard';
import { tracks } from '@/data/tracks';

import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span /> PRODUCER · MIX ENGINEER · INDEPENDENT STUDIO
          </p>
          <h1>
            Sound with
            <br />
            <em>intention.</em>
          </h1>
          <p className={styles.lead}>
            BPM helps independent artists turn honest ideas into records that
            feel like themselves — only more.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/services#inquiry">
              Start a project <span>↗</span>
            </Link>
            <Link className={styles.secondary} href="/music">
              Explore selected work <span>↓</span>
            </Link>
          </div>
        </div>

        <div
          className={styles.heroVisual}
          aria-label="Abstract studio listening room"
        >
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={styles.disc}>
            <div className={styles.discCenter}>BPM</div>
          </div>
          <span className={styles.visualNote}>
            LISTEN CLOSELY
            <br />
            MAKE IT LAST
          </span>
          <span className={styles.visualIndex}>FIG. 01 — THE ROOM</span>
        </div>

        <div className={styles.heroFoot}>
          <span>BAD MAN PIDDY</span>
          <span>PRODUCTION / MIXING / MASTERING</span>
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>
      </section>

      <ABTrackSwitcher />

      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>A FEW RECENT FAVORITES</p>
            <h2>
              Selected <span>work.</span>
            </h2>
          </div>
          <Link href="/music">
            Full discography <span>↗</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {tracks.slice(0, 3).map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section className={styles.quote}>
        <span>“</span>
        <blockquote>
          The best production doesn’t get between you and the song. It helps
          the song become more itself.
        </blockquote>
        <p>THE BPM APPROACH</p>
      </section>
    </div>
  );
}
