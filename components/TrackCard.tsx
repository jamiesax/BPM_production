'use client';

import { useAudio } from '@/context/AudioContext';
import type { Track } from '@/data/tracks';

import styles from './TrackCard.module.css';

export default function TrackCard({ track }: { track: Track }) {
  const { playTrack, currentTrack, isPlaying, toggle } = useAudio();
  const selected = currentTrack?.id === track.id;

  function handlePlay() {
    if (selected) {
      toggle();
      return;
    }

    playTrack(track);
  }

  return (
    <article className={styles.card}>
      <button
        className={styles.cover}
        style={{ background: track.artwork }}
        onClick={handlePlay}
        aria-label={`${selected && isPlaying ? 'Pause' : 'Play'} ${track.title}`}
      >
        <span>{selected && isPlaying ? 'Ⅱ' : '▶'}</span>
        <small>0{track.id}</small>
      </button>

      <div className={styles.info}>
        <div>
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
        </div>
        <span className={styles.year}>{track.year}</span>
      </div>

      <div className={styles.meta}>
        {track.role}
        <span>{track.audioUrl ? 'LISTEN' : 'PREVIEW SOON'}</span>
      </div>
    </article>
  );
}
