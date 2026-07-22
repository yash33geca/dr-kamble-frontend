import { doctor } from '../data/dummy'
import doctorImage from '../assets/Dr.nishantImage.jpeg'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.visual}>
            {/* Mobile-only: label appears right above the photo */}
            <p className={`section-label ${styles.mobileLabel}`}>Meet the Doctor</p>

            <div className={styles.photoCard}>
              <img
                src={doctorImage}
                alt={doctor.name}
                className={styles.photoPlaceholder}
                loading="lazy"
              />
              <div className={styles.photoTag}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill="#0D7A6E"/>
                  <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                IRA Verified Member
              </div>
            </div>

            {/* Mobile-only: doctor name appears right below the photo */}
            <h2 className={`${styles.heading} ${styles.mobileHeading}`}>{doctor.name}</h2>

            {/* Mobile-only: title/qualification row right below the name */}
            <p className={`${styles.titleRow} ${styles.mobileTitleRow}`}>
              {doctor.title} · {doctor.specialty}
            </p>

            <div className={styles.memberships}>
              <p className={styles.membershipsTitle}>Professional Memberships</p>
              {doctor.memberships.map(m => (
                <div key={m} className={styles.memberItem}>
                  <span className={styles.memberDot} />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <p className={`section-label ${styles.desktopLabel}`}>Meet the Doctor</p>
            <h2 className={`${styles.heading} ${styles.desktopHeading}`}>{doctor.name}</h2>
            <p className={`${styles.titleRow} ${styles.desktopTitleRow}`}>
              {doctor.title} · {doctor.specialty}
            </p>

            {doctor.bio.split('\n\n').map((para, i) => (
              <p key={i} className={styles.bio}>{para}</p>
            ))}

            <div className={styles.quals}>
              <h3 className={styles.qualsTitle}>Qualifications</h3>
              <div className={styles.qualsList}>
                {doctor.qualifications.map(q => (
                  <div key={q.degree} className={styles.qual}>
                    <div className={styles.qualDegree}>{q.degree}</div>
                    <div className={styles.qualInst}>{q.institution}</div>
                    <div className={styles.qualYear}>{q.year}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.languages}>
              <span className={styles.langLabel}>Languages: </span>
              {doctor.languages.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}