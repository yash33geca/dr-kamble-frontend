import { Link } from 'react-router-dom'
import { doctor, clinic } from '../data/dummy'
import styles from './Footer.module.css'

const conditions = [
  'Rheumatoid Arthritis',
  'Ankylosing Spondylitis',
  'Psoriatic Arthritis',
  'Lupus (SLE)',
  "Sjögren's Syndrome",
  'Gout',
  'Osteoarthritis',
  'Osteoporosis',
  'Vasculitis',
  'Systemic Sclerosis',
  'Inflammatory Myositis',
  'Mixed Connective Tissue Disease',
  'Reactive Arthritis',
  'Enteropathic Arthritis',
  'Juvenile Idiopathic Arthritis',
  'Fibromyalgia',
  "Behçet's Disease",
  'Antiphospholipid Syndrome',
  'UCTD',
  "Raynaud's Phenomenon",
  'IgG4-Related Disease',
  'Sarcoidosis'
]

const MAP_URL = 'https://maps.app.goo.gl/w57dp4Nz4g5Mdpsz7'
const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4703219916832!2d79.07286904144954!3d21.13367329312056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c123cafec017%3A0x50e3dff22f92ae2c!2sDr%20Nishant%20Kamble%20-%20Rheumatology%20and%20Autoimmune%20Disease%20Clinic!5e0!3m2!1sen!2sin!4v1784144879456!5m2!1sen!2sin'

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
            <div className={styles.navRow}>
              {['About', 'Services', 'Articles', 'Reviews', 'FAQ', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>Clinic</p>
            <p className={styles.addr}>{clinic.address}</p>
            <p className={styles.addr}>{clinic.phone}</p>
            <p className={styles.addr}>{clinic.email}</p>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={styles.addrLink}>
              View on Google Maps
            </a>
            <iframe
              src={MAP_EMBED_URL}
              className={styles.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              allowFullScreen
            />
          </div>

          <div className={styles.conditionsCol}>
            <p className={styles.colTitle}>Conditions Treated</p>
            <div className={styles.conditionsGrid}>
              {conditions.map(c => (
                <span key={c} className={styles.conditionItem}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {doctor.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}