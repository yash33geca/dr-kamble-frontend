import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './ContactPage.module.css'

// Save the reference illustration to this exact path in your project:
// src/assets/contactpage.png
import contactIllustration from '../assets/contactpage.png'

const EMAIL = 'dr.nkamble7@gmail.com'
const PHONE_DISPLAY = '+91 77568 42639'
const PHONE_TEL = '+917756842639'

const HOSPITAL_NAME = 'Dr Nishant Kamble - Rheumatology and Autoimmune Disease Clinic'
const MAP_QUERY = encodeURIComponent(`${HOSPITAL_NAME}, Nagpur`)

const FACEBOOK_URL = 'https://www.facebook.com'
const TWITTER_URL = 'https://x.com/drnishant_gmc?s=11'
const INSTAGRAM_URL = 'https://www.instagram.com/dr.nishant.rheumatologist?igsh=MWI3eW5mZWZ2bjhwOA==&utm_source=ig_contact_invite'
const LINKEDIN_URL = 'https://www.linkedin.com'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  // mailto: only opens a mail app if the visitor's device/browser has one
  // configured as default. Copy to clipboard as a reliable fallback.
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // mailto: href still fires as a normal link even if this fails.
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <p className={styles.overline}>Contact Dr. Nishant Kamble</p>
          <h1 className={styles.heading}>Reach out for consultations, queries or directions.</h1>
          <p className={styles.subtitle}>For urgent medical needs, please call directly.</p>
        </section>

        <section className={styles.mainGrid}>
          {/* ---------- Left: booking + online consult panel ---------- */}
          <div className={styles.bookingPanel}>
            <div className={styles.panelTop}>
              <div className={styles.panelTopText}>
                <p className={styles.panelOverline}>Appointments &amp; Online</p>
                <h2 className={styles.panelHeading}>Book or consult instantly</h2>
                <p className={styles.panelText}>
                  Choose an option to request an appointment or find Dr. Kamble on Practo and Justdial.
                </p>
              </div>
              <img
                className={styles.panelIllustration}
                src={contactIllustration}
                alt=""
                aria-hidden="true"
              />
            </div>

            <Link className={styles.bookNowButton} to="/appointment">
              🗓️ Book Appointment Now
            </Link>

            <div className={styles.panelDivider} />

            <div className={styles.consultRow}>
              <a
                className={styles.consultButton}
                target="_blank"
                rel="noreferrer"
                href="https://www.practo.com/nagpur/doctor/nishant-kamble-rheumatologist"
              >
                Consult on Practo <span aria-hidden="true">→</span>
              </a>
              <a
                className={styles.consultButton}
                target="_blank"
                rel="noreferrer"
                href="https://www.justdial.com/Nagpur/Dr-Nishant-Kamble-Rheumatology-and-Autoimmune-Disease-Clinic-Near-Rbl-Bank-And-Opposite-Somalwar-School-Ramdaspeth/0712PX712-X712-260302001517-U9N4_BZDET/reviews"
              >
                View on Justdial <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.panelDivider} />

            <div className={styles.panelBottomRow}>
              <div className={styles.hoursBlock}>
                <p className={styles.bottomLabel}>🕐 Clinic Hours</p>
                <p className={styles.bottomValue}>10:00 AM – 7:00 PM</p>
              </div>
              <div className={styles.quickLinksBlock}>
                <a
                  className={styles.quickLink}
                  href={`https://wa.me/${PHONE_TEL.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 Chat on WhatsApp
                </a>
                <Link className={styles.quickLink} to="/#faq">
                  ❔ FAQs &amp; Help
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- Right: contact details grid ---------- */}
          <div className={styles.contactGrid}>
            <article className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">📞</div>
              <p className={styles.cardLabel}>Call Us</p>
              <p className={styles.cardValue}>{PHONE_DISPLAY}</p>
              <a className={styles.cardButton} href={`tel:${PHONE_TEL}`}>Call Now</a>
            </article>

            <article className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">✉️</div>
              <p className={styles.cardLabel}>Email Us</p>
              <p className={styles.cardValue}>{EMAIL}</p>
              <a className={styles.cardButton} href={`mailto:${EMAIL}`} onClick={handleEmailClick}>
                {copied ? 'Email Copied ✓' : 'Send Email'}
              </a>
              {copied && (
                <p className={styles.copyHint} role="status">
                  Copied! Paste it if your mail app didn't open.
                </p>
              )}
            </article>

            <article className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.cardIcon} aria-hidden="true">📍</div>
              <p className={styles.cardLabel}>Visit Us</p>
              <p className={styles.cardValue}>{HOSPITAL_NAME}</p>
              <a
                className={styles.cardButton}
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/maps/search/${MAP_QUERY}`}
              >
                View on Map
              </a>
            </article>
          </div>
        </section>

        <section className={styles.socialSection}>
          <p className={styles.followTitle}>Follow Us</p>
          <div className={styles.socialLinks}>
            <a className={styles.socialButton} href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook</a>
            <a className={styles.socialButton} href={TWITTER_URL} target="_blank" rel="noreferrer">Twitter</a>
            <a className={styles.socialButton} href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
            <a className={styles.socialButton} href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}