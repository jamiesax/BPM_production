import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <p className={styles.eyebrow}>BPM · BAD MAN PIDDY</p>
          <h2>
            Make something
            <br />
            <span>that stays with you.</span>
          </h2>
        </div>
        <Link className={styles.contact} href="/services#inquiry">
          Start a project <span>↗</span>
        </Link>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} BPM · Bad Man Piddy</span>
        <span>Independent studio · Working everywhere</span>
        <div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
          <a href="mailto:studio@yourdomain.com">Email ↗</a>
        </div>
      </div>
    </footer>
  );
}
