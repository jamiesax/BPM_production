import TrackCard from '@/components/TrackCard';
import { tracks } from '@/data/tracks';

import styles from './music.module.css';

export default function MusicPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p>CATALOGUE / 2023 — 2025</p>
        <h1>
          Work that
          <br />
          <em>found its way.</em>
        </h1>
        <span>
          A selection of records shaped in close collaboration with artists.
        </span>
      </header>

      <section className={styles.catalog}>
        <div className={styles.catalogTop}>
          <h2>
            Selected releases{' '}
            <span>({String(tracks.length).padStart(2, '0')})</span>
          </h2>
          <p>PRODUCTION · MIXING · MASTERING</p>
        </div>

        <div className={styles.grid}>
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section className={styles.credits}>
        <div>
          <p className={styles.eyebrow}>BEHIND THE RECORD</p>
          <h2>
            Good work is
            <br />
            <span>a team effort.</span>
          </h2>
        </div>

        <div className={styles.creditList}>
          <div>
            <span>ARTIST</span>
            <span>RELEASE</span>
            <span>CONTRIBUTION</span>
          </div>
          <p>
            <b>Nia Vale</b>
            <span>Slow Motion — EP</span>
            <span>Production, mix</span>
          </p>
          <p>
            <b>Elliot North</b>
            <span>Blue Hour — Single</span>
            <span>Production, mix, master</span>
          </p>
          <p>
            <b>Mara Sol</b>
            <span>Open Water — Single</span>
            <span>Mix, master</span>
          </p>
          <p>
            <b>Nia Vale</b>
            <span>Almost Home — Single</span>
            <span>Production, mix</span>
          </p>
        </div>
      </section>
    </div>
  );
}
