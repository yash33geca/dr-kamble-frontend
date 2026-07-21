import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/dummy'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './AllServicesPage.module.css'

export default function AllServicesPage() {
  const location = useLocation()
  const [highlightId, setHighlightId] = useState(null)

  // If arriving via a "Show more" link from the homepage (e.g.
  // #service-3), scroll to that card and flash a highlight so it's
  // clear which one was tapped.
  useEffect(() => {
    if (!location.hash) return
    const targetId = location.hash.slice(1)

    const scrollTimer = setTimeout(() => {
      const el = document.getElementById(targetId)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setHighlightId(targetId)
    }, 100)

    return () => clearTimeout(scrollTimer)
  }, [location.hash])

  useEffect(() => {
    if (!highlightId) return
    const clearTimer = setTimeout(() => setHighlightId(null), 2200)
    return () => clearTimeout(clearTimer)
  }, [highlightId])

  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className="container">
          <Link to="/" className={styles.back}>← Back to Home</Link>
          <p className={`section-label ${styles.label}`}>What We Treat</p>
          <h1 className={styles.title}>Conditions & Services</h1>
          <p className={styles.sub}>
            Specialised diagnosis and management of the full spectrum of rheumatological and autoimmune conditions.
          </p>
        </div>
      </div>

      <div className={`container ${styles.body}`}>
        <div className={styles.grid}>
          {services.map((s, i) => {
            const anchorId = `service-${s.id}`
            return (
              <div
                key={s.id}
                id={anchorId}
                className={`${styles.card} ${highlightId === anchorId ? styles.highlight : ''}`}
                style={{ animationDelay: `${(i % 6) * 60}ms` }}
              >
                <div className={styles.imageBox}>
                  {s.image ? (
                    <img src={s.image} alt={s.title} loading="lazy" />
                  ) : (
                    <span className={styles.iconFallback}>{s.icon}</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.desc}>{s.description}</p>
                </div>
                <div className={styles.footer}>
                  <span className={styles.duration}>⏱ {s.duration} min</span>
                  <Link to="/contact" className={styles.bookLink}>Book →</Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.cta}>
          <h3>Have questions about a condition?</h3>
          <p>Dr. Kamble's clinic is accepting new patients. Book a consultation to discuss your concerns.</p>
          <Link to="/contact" className="btn-primary">Book an Appointment →</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}