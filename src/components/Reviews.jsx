import { reviews } from '../data/dummy'
import styles from './Reviews.module.css'

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className="section-label">Patient Stories</p>
            <h2 className={styles.heading}>What Our Patients Say</h2>
          </div>
          <div className={styles.overallRating}>
            <span className={styles.bigRating}>{avg}</span>
            <div>
              <Stars count={5} />
              <p className={styles.ratingMeta}>Based on {reviews.length} verified reviews</p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div key={r.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className={styles.name}>{r.name}</p>
                  <p className={styles.condition}>{r.condition}</p>
                </div>
                <Stars count={r.rating} />
              </div>
              <p className={styles.text}>"{r.text}"</p>
              <p className={styles.date}>
                {new Date(r.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
