import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doctor } from '../data/dummy'
import { useAuth } from '../context/AuthContext'
import LoginModal from './LoginModal'
import styles from './Hero.module.css'

const stats = [
  { value: `${doctor.experience}+`, label: 'Years Experience' },
  { value: `${(doctor.patients / 1000).toFixed(1)}k+`, label: 'Patients Treated' },
  { value: '3', label: 'International Fellowships' },
  { value: '5', label: 'Hospitals Affiliated' },
]

export default function Hero() {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleBookClick = (e) => {
    e.preventDefault()
    if (!user) {
      setShowModal(true)
    } else {
      navigate('/contact')
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.bgGrid} />
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Accepting New Patients · Nagpur
          </div>

          <h1 className={styles.heading}>
            Specialist Care for
            <em className={styles.italic}> Arthritis &</em>
            <br />Autoimmune Disease
          </h1>

          <p className={styles.sub}>
            Led by <strong>{doctor.name}</strong>, {doctor.title} — providing
            evidence-based rheumatology care to patients across Nagpur Maharashtra and India.
          </p>

          <div className={styles.actions}>
            <button className="btn-primary" onClick={handleBookClick}>
              Book an Appointment →
            </button>
            <a href="#services" className="btn-outline">View Services</a>
          </div>

          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.avatar}>
              <span>NK</span>
            </div>
            <div className={styles.cardInfo}>
              <h3>{doctor.name}</h3>
              <p>{doctor.title}</p>
              <p className={styles.cardSpec}>{doctor.specialty}</p>
            </div>
            <div className={styles.cardTags}>
              {['Rheumatoid Arthritis', 'Lupus', 'Gout', 'Ankylosing Spondylitis', 'Osteoporosis'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <div className={styles.cardMeta}>
              <span>🕐 Mon–Sat</span>
              <span>📍 Ramdaspeth, Nagpur</span>
            </div>
          </div>
                
          {/* <div className={styles.floatBadge}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="8" fill="#0D7A6E" />
              <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            APLAR Certified Specialist
          </div> */}
        </div>
      </div>

      {showModal && (
        <LoginModal onClose={() => setShowModal(false)} />
      )}
    </section>
  )
}