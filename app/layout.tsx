import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import GlobalAudioPlayer from '@/components/GlobalAudioPlayer';
import Navbar from '@/components/Navbar';
import { AudioProvider } from '@/context/AudioContext';

import './globals.css';

export const metadata: Metadata = {
  title: 'BPM — Bad Man Piddy | Independent Producer & Mix Engineer',
  description:
    'Sound with intention. Production, mixing, and mastering for artists building something lasting.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AudioProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GlobalAudioPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
