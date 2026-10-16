'use client';

import { useState } from 'react';

import styles from './GearAccordion.module.css';

const gear = [
  {
    name: 'Monitoring',
    items: 'ATC SCM45A · Neumann KH 120 · Audeze LCD-X',
    note: 'Translation at every level, from room to headphones.',
  },
  {
    name: 'Conversion & preamps',
    items: 'Lynx Aurora(n) · Neve 1073 · API 512c',
    note: 'Clean capture when it matters. Color when it serves the song.',
  },
  {
    name: 'Instruments',
    items: '1964 Fender Jazzmaster · Prophet-6 · Moog Subsequent 37',
    note: 'A small collection of instruments with their own point of view.',
  },
  {
    name: 'Software',
    items: 'Pro Tools · Ableton Live · FabFilter · Soundtoys',
    note: 'A focused toolkit, chosen for the work rather than the list.',
  },
];

export default function GearAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {gear.map((item, index) => {
        const isOpen = open === index;

        return (
          <section className={styles.item} key={item.name}>
            <button
              className={styles.trigger}
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={styles.number}>0{index + 1}</span>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.symbol}>{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && (
              <div className={styles.body}>
                <p>{item.items}</p>
                <span>{item.note}</span>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
