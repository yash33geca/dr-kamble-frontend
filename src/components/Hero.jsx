import { useState } from 'react'
import { doctor } from '../data/dummy'
import { useAuth } from '../context/AuthContext'
import LoginModal from './LoginModal'
import styles from './Hero.module.css'
import { Link, useNavigate } from 'react-router-dom'
import drNishantImage from '../assets/Dr.nishantImage.jpeg'



import rheumatoidArthritisImg from '../assets/Services_Images/Rheumatoid arthritis .png'
import lupusImg from '../assets/Services_Images/Lupus .png'
import vasculitisImg from '../assets/Services_Images/Vasculitis Arthritis.png'
import psoriaticArthritisImg from '../assets/Services_Images/Psoriatic Arthritis.jpeg'
import sjogrensImg from '../assets/Services_Images/Sjogrens Disease.jpeg'
import osteoarthritisImg from '../assets/Services_Images/Osteoarthritis.jpeg'
import myositisImg from '../assets/Services_Images/Inflammatory Myositis.png'
import reactiveArthritisImg from '../assets/Services_Images/Reactive Arthritis.jpeg'
import juvenileIdiopathicArthritisImg from '../assets/Services_Images/Juvenile Idiopathic Arthritis.png'
import undifferentiatedconnectivetissuediseaseImg from '../assets/Services_Images/undifferentiated-connective-tissue-disease.png'
import behcetsImg from '../assets/Services_Images/Behcets Disease.png'
import igG4relateddisease from '../assets/Services_Images/IgG4-Related Disease.png'
import osteoporosis from '../assets/Services_Images/Osteoporosis.png'
import systemicsclerosis from '../assets/Services_Images/Systemic sclerosis.png'
import enteropathic from '../assets/Services_Images/Enteropathic .png'
import mixedconnectivetissuedisease from '../assets/Services_Images/Mixed connective tissue disease.png'
import fibromyalgia from '../assets/Services_Images/Fibromyalgia.png'
import antiphospholipidsyndrome from '../assets/Services_Images/Antiphospholipid syndrome.png'
import raynaudsphenomenon from '../assets/Services_Images/Raynaud’s phenomenon.png'
import sarcoidosis from '../assets/Services_Images/Sarcoidosis.png'
import gout from '../assets/Services_Images/Gout.png'
import ankylosingspondylitis from '../assets/Services_Images/Ankylosing spondylitis.png'

const stats = [
  { value: `${doctor.experience}+`, label: 'Years Experience' },
  { value: `${(doctor.patients / 1000).toFixed(1)}k+`, label: 'Patients Treated' },
  { value: '1', label: 'International Fellowships' },
  { value: '6', label: 'Hospitals Affiliated' },
]

const specialtyTags = ['Rheumatoid Arthritis', 'Lupus', 'Gout', 'Ankylosing Spondylitis', 'Osteoporosis']

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
            <Link to="/services" className="btn-outline">View Services</Link>
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

        {/* Desktop-only visual: photo frame + credential/specialty badges */}
        <div className={styles.visual}>
          <div className={styles.photoFrame}>
            <img src={drNishantImage} alt={doctor.name} className={styles.photoImg} />

          <div className={styles.nameOverlay}>
          <span className={styles.nameText}>{doctor.name}</span>
          {/* <span className={styles.nameSpecialty}>{doctor.title}</span> */}
       </div>
      </div>

        
        </div>
      </div>

      {showModal && (
        <LoginModal onClose={() => setShowModal(false)} />
      )}
    </section>
  )
}