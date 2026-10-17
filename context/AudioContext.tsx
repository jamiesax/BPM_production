'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';

import type { Track } from '@/data/tracks';

type AudioState = {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  playTrack: (track: Track) => void;
  toggle: () => void;
  seek: (time: number) => void;
  closePlayer: () => void;
};

const AudioCtx = createContext<AudioState | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const updateProgress = () => setProgress(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  function playTrack(track: Track) {
    setCurrentTrack(track);
    setProgress(0);

    const audio = audioRef.current;

    if (!audio || !track.audioUrl) {
      setIsPlaying(false);
      return;
    }

    audio.src = track.audioUrl;
    void audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }

  function toggle() {
    const audio = audioRef.current;

    if (!audio || !currentTrack?.audioUrl) {
      return;
    }

    if (audio.paused) {
      void audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      return;
    }

    audio.pause();
    setIsPlaying(false);
  }

  function seek(time: number) {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  }

  function closePlayer() {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
    }

    setCurrentTrack(null);
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
  }

  return (
    <AudioCtx.Provider
      value={{
        currentTrack,
        isPlaying,
        progress,
        duration,
        playTrack,
        toggle,
        seek,
        closePlayer,
      }}
    >
      <audio ref={audioRef} preload="metadata" />
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const value = useContext(AudioCtx);

  if (!value) {
    throw new Error('useAudio must be used inside AudioProvider');
  }

  return value;
}
