'use client';

import { useState } from 'react';

import styles from './ABTrackSwitcher.module.css';

const bars = Array.from(
  { length: 68 },
  (_, index) => 16 + ((index * 31 + (index % 7) * 13) % 75),
);

export default function ABTrackSwitcher() {
  const [version, setVersion] = useState<'before' | 'after'>('after');

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>THE DIFFERENCE IS IN THE DETAILS</p>
          <h2>
            Same song.
            <br />
            <span>New perspective.</span>
          </h2>
        </div>
        <p className={styles.description}>
          A considered mix keeps the emotion intact and gives every detail a
          place to live. Switch between the rough and the final mix.
        </p>
      </div>

      <div className={styles.demo}>
        <div className={styles.demoTop}>
          <div>
            <span className={styles.liveDot} /> MIX COMPARISON{' '}
            <span className={styles.demoLabel}>DEMO SESSION</span>
          </div>
          <div className={styles.switch}>
            <button
              className={version === 'before' ? styles.selected : ''}
              onClick={() => setVersion('before')}
            >
              BEFORE
            </button>
            <button
              className={version === 'after' ? styles.selected : ''}
              onClick={() => setVersion('after')}
            >
              AFTER
            </button>
          </div>
        </div>

        <div
          className={`${styles.waveform} ${version === 'before' ? styles.before : ''}`}
          aria-label={`${version} mix waveform`}
        >
          {bars.map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>

        <div className={styles.demoBottom}>
          <span>{version === 'before' ? 'Artist rough mix' : 'BPM final mix'}</span>
          <span>Audio sample will be added soon</span>
        </div>
      </div>
    </section>
  );
}
