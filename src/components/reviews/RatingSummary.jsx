// src/components/reviews/RatingSummary.jsx
import styles from './RatingSummary.module.css'
import { GOOGLE_SUMMARY } from '../../data/reviews.js'

function StarIcon({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"
      fill={filled ? '#F59E0B' : 'none'}
      stroke={filled ? '#F59E0B' : '#D1D5DB'}
      strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
    </svg>
  )
}

export default function RatingSummary({ reviews = [] }) {
  const total = reviews.length
  const average = total
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / total
    : 0
  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(review => Math.round(review.rating) === stars).length,
  }))

  return (
    <div className={styles.wrap}>

      {/* Left: big rating number */}
      <div className={styles.score}>
        <div className={styles.number}>{average.toFixed(1)}</div>
        <div className={styles.stars}>
          {[1,2,3,4,5].map(i => (
            <StarIcon key={i} filled={i <= Math.round(average)} />
          ))}
        </div>
        <div className={styles.count}>
          {total.toLocaleString('en-IN')} patient reviews
        </div>
        <a
          href={GOOGLE_SUMMARY.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.googleLink}
        >
          <GoogleIcon />
          View on Google
        </a>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Right: breakdown bars */}
      <div className={styles.bars}>
        {ratingDistribution.map(({ stars, count }) => {
          const pct = total ? Math.round((count / total) * 100) : 0
          return (
            <div key={stars} className={styles.barRow}>
              <span className={styles.barLabel}>{stars}</span>
              <StarIcon filled />
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className={styles.barCount}>{count}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}
