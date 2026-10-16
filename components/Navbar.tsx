'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/music', label: 'Music' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="BPM — Bad Man Piddy home"
        >
          <span className={styles.mark}>B</span>
          <span className={styles.brandName}>
            BPM
            <span className={styles.brandLight}>BAD MAN PIDDY</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`${styles.link} ${path === link.href ? styles.active : ''}`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className={styles.cta} href="/services#inquiry">
          Let’s work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
