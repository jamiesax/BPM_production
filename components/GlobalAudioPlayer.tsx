'use client';

import { useAudio } from '@/context/AudioContext';

import styles from './GlobalAudioPlayer.module.css';

function stamp(value: number) {
  const minutes = Math.floor(value / 60);
  const seconds = String(Math.floor(value % 60)).padStart(2, '0');

  return `${minutes}:${seconds}`;
}

export default function GlobalAudioPlayer() {
  const { currentTrack, isPlaying, toggle, progress, duration, seek } = useAudio();

  if (!currentTrack) {
    return null;
  }

  return (
    <aside className={styles.player} aria-label="Audio player">
      <button
        className={styles.play}
        onClick={toggle}
        disabled={!currentTrack.audioUrl}
        aria-label={isPlaying ? 'Pause track' : 'Play track'}
      >
        {isPlaying ? 'Ⅱ' : '▶'}
      </button>

      <div className={styles.track}>
        <strong>{currentTrack.title}</strong>
        <span>{currentTrack.artist}</span>
      </div>

      <div className={styles.timeline}>
        <span>{stamp(progress)}</span>
        <input
          aria-label="Track position"
          type="range"
          min="0"
          max={duration || 0}
          value={Math.min(progress, duration || 0)}
          onChange={(event) => seek(Number(event.target.value))}
          disabled={!currentTrack.audioUrl || !duration}
        />
        <span>{duration ? stamp(duration) : '—:—'}</span>
      </div>

      <span className={styles.label}>
        {currentTrack.audioUrl ? 'NOW PLAYING' : 'AUDIO COMING SOON'}
      </span>
    </aside>
  );
}
