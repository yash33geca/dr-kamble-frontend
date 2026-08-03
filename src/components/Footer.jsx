import { Link, useLocation } from 'react-router-dom'
import { doctor, clinic } from '../data/dummy'
import styles from './Footer.module.css'
import logo from '../assets/logo.png'

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

const conditionServiceIds = [
  1, 3, 7, 2, 8, 4, 9, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
]

const MAP_URL = 'https://maps.app.goo.gl/w57dp4Nz4g5Mdpsz7'
const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4703219916832!2d79.07286904144954!3d21.13367329312056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c123cafec017%3A0x50e3dff22f92ae2c!2sDr%20Nishant%20Kamble%20-%20Rheumatology%20and%20Autoimmune%20Disease%20Clinic!5e0!3m2!1sen!2sin!4v1784144879456!5m2!1sen!2sin'

// TODO: swap in the clinic's actual Facebook and LinkedIn URLs when available.
const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.56 1.52-3.97 3.85-3.97 1.12 0 2.29.2 2.29.2v2.5h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.91h-2.39v7.04A10 10 0 0 0 22 12Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/drnishant_gmc?s=11',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dr.nishant.rheumatologist?igsh=MWI3eW5mZWZ2bjhwOA==&utm_source=ig_contact_invite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM21 21h-3.38v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.62-2.39 3.28V21H9.8V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.21-1.75 3.44 0 4.07 2.26 4.07 5.21V21Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandMark}>
              <img src={logo} alt="Dr. Nishant Kamble Rheumatology logo" />
            </div>
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
          {/* <div>
            <p className={styles.colTitle}>Navigation</p>
            <div className={styles.navRow}>
              {['About', 'Services', 'Articles', 'Reviews', 'FAQ', 'Contact'].map(l => {
                if (l === 'Services') {
                  return (
                    <Link key={l} to="/services" className={styles.link}>{l}</Link>
                  )
                }
                if (l === 'Contact') {
                  return (
                    <Link key={l} to="/website/contact" className={styles.link}>{l}</Link>
                  )
                }
                const hash = `#${l.toLowerCase()}`
                return isHome ? (
                  <a key={l} href={hash} className={styles.link}>{l}</a>
                ) : (
                  <Link key={l} to={`/${hash}`} className={styles.link}>{l}</Link>
                )
              })}
            </div>
          </div> */}

          <div>
            <p className={styles.colTitle}>Clinic</p>
            <p className={styles.addr}>{clinic.address}</p>
            <p className={styles.addr}>{clinic.phone}</p>
            <p className={styles.addr}>{clinic.email}</p>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={styles.addrLink}>
              View on Google Maps
            </a>
          </div>

          <div className={styles.mapCol}>
            <p className={styles.colTitle}>Location</p>
            <iframe
              src={MAP_EMBED_URL}
              className={styles.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              allowFullScreen
            />
          </div>

          <div className={styles.socialsCol}>
            <p className={styles.colTitle}>Follow Us</p>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialIcon}
                  aria-label={social.name}
                >
                  <span className={styles.socialIconCircle}>{social.icon}</span>
                  <span className={styles.socialIconLabel}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.conditionsCol}>
            <p className={styles.colTitle}>Conditions Treated</p>
            <div className={styles.conditionsGrid}>
              {conditions.map((c, index) => (
                <Link
                  key={c}
                  to={`/services#service-${conditionServiceIds[index]}`}
                  className={styles.conditionItem}
                >
                  {c}
                </Link>
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