import { Link } from 'react-router-dom'
import { doctor, clinic } from '../data/dummy'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandMark}>NK</div>
            <div>
              <p className={styles.brandName}>{doctor.name}</p>
              <p className={styles.brandSub}>{doctor.specialty}</p>
            </div>
          </div>
          <p className={styles.tagline}>
            Providing expert rheumatology care with compassion and evidence-based practice.
          </p>
        </div>

        <div className={styles.links}>
          <div>
            <p className={styles.colTitle}>Navigation</p>
            {['About', 'Services', 'Articles', 'Reviews', 'FAQ', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a>
            ))}
          </div>
          <div>
            <p className={styles.colTitle}>Clinic</p>
            <p className={styles.addr}>{clinic.address}</p>
            <p className={styles.addr}>{clinic.phone}</p>
            <p className={styles.addr}>{clinic.email}</p>
          </div>
          <div>
            <p className={styles.colTitle}>Conditions Treated</p>
            {['Rheumatoid Arthritis', 'Lupus (SLE)', 'Gout', 'Ankylosing Spondylitis', 'Osteoporosis', 'Vasculitis'].map(c => (
              <p key={c} className={styles.link}>{c}</p>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {doctor.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
