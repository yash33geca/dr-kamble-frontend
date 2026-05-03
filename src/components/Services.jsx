import { services } from '../data/dummy'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Treat</p>
          <h2 className={styles.heading}>Conditions & Services</h2>
          <p className={styles.sub}>
            Specialised diagnosis and management of the full spectrum of rheumatological and autoimmune conditions.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.id} className={styles.card} style={{ animationDelay: `${i * 60}ms` }}>
              <div className={styles.iconBox}>{s.icon}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.description}</p>
              </div>
              <div className={styles.footer}>
                <span className={styles.duration}>⏱ {s.duration} min</span>
                <a href="#contact" className={styles.bookLink}>Book →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
