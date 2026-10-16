export type Track = {
  id: string;
  title: string;
  artist: string;
  year: string;
  role: string;
  artwork: string;
  audioUrl?: string;
};

// Replace artwork paths and add licensed audio files in /public/audio to publish real releases.
export const tracks: Track[] = [
  {
    id: '01',
    title: 'Slow Motion',
    artist: 'Nia Vale',
    year: '2025',
    role: 'Production · Mix',
    artwork: 'linear-gradient(145deg, #583c2f, #17110f)',
  },
  {
    id: '02',
    title: 'Blue Hour',
    artist: 'Elliot North',
    year: '2024',
    role: 'Production · Mix · Master',
    artwork: 'linear-gradient(145deg, #344553, #11171b)',
  },
  {
    id: '03',
    title: 'Open Water',
    artist: 'Mara Sol',
    year: '2024',
    role: 'Mix · Master',
    artwork: 'linear-gradient(145deg, #43534d, #131916)',
  },
  {
    id: '04',
    title: 'Almost Home',
    artist: 'Nia Vale',
    year: '2023',
    role: 'Production · Mix',
    artwork: 'linear-gradient(145deg, #674b3c, #1b1512)',
  },
];
