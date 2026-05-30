// import { reviews } from '../data/dummy'
// import styles from './Reviews.module.css'

// function Stars({ count }) {
//   return (
//     <div className={styles.stars}>
//       {Array.from({ length: 5 }).map((_, i) => (
//         <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
//       ))}
//     </div>
//   )
// }

// export default function Reviews() {
//   const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)

//   return (
//     <section id="reviews" className={styles.section}>
//       <div className="container">
//         <div className={styles.header}>
//           <div className={styles.headerLeft}>
//             <p className="section-label">Patient Stories</p>
//             <h2 className={styles.heading}>What Our Patients Say</h2>
//           </div>
//           <div className={styles.overallRating}>
//             <span className={styles.bigRating}>{avg}</span>
//             <div>
//               <Stars count={5} />
//               <p className={styles.ratingMeta}>Based on {reviews.length} verified reviews</p>
//             </div>
//           </div>
//         </div>

//         <div className={styles.grid}>
//           {reviews.map((r, i) => (
//             <div key={r.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
//               <div className={styles.cardTop}>
//                 <div className={styles.avatar}>
//                   {r.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div>
//                   <p className={styles.name}>{r.name}</p>
//                   <p className={styles.condition}>{r.condition}</p>
//                 </div>
//                 <Stars count={r.rating} />
//               </div>
//               <p className={styles.text}>"{r.text}"</p>
//               <p className={styles.date}>
//                 {new Date(r.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { useEffect, useMemo, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { GOOGLE_SUMMARY } from '../data/reviews.js'
import { database } from '../firebase.js'
import RatingSummary from './reviews/RatingSummary.jsx'
import ReviewCard    from './reviews/ReviewCard.jsx'
import ReviewForm    from './reviews/ReviewForm.jsx'
import styles from './Reviews.module.css'

const REVIEWS_PER_PAGE = 6

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'U'
}

function formatReviewDate(createdAt) {
  if (!createdAt) return 'Recently'
  return new Date(createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function normalizeReview(id, review) {
  const author = review.authorName || 'Patient'
  const createdAt = typeof review.createdAt === 'number' ? review.createdAt : 0
  return {
    id,
    source: review.source || 'patient',
    author,
    initials: review.initials || getInitials(author),
    rating: Number(review.rating) || 0,
    date: formatReviewDate(createdAt),
    title: review.title || null,
    body: review.body || '',
    verified: review.verified !== false,
    createdAt,
  }
}

export default function Reviews() {
  const [showForm,      setShowForm]      = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [reviews,       setReviews]       = useState([])
  const [loading,       setLoading]       = useState(true)
  const [loadError,     setLoadError]     = useState('')
  const [page,          setPage]          = useState(1)

  useEffect(() => {
    const reviewsRef = ref(database, 'reviews')

    const unsubscribe = onValue(
      reviewsRef,
      snapshot => {
        const data = snapshot.val() || {}
        const nextReviews = Object.entries(data)
          .map(([id, review]) => normalizeReview(id, review))
          .sort((a, b) => b.createdAt - a.createdAt)

        setReviews(nextReviews)
        setLoading(false)
      },
      error => {
        console.error('Failed to load reviews:', error)
        setLoadError('Could not load reviews right now.')
        setLoading(false)
      }
    )

    return unsubscribe
  }, [])

  const totalPages = Math.max(1, Math.ceil(reviews.length / REVIEWS_PER_PAGE))
  const displayed = useMemo(() => {
    const start = (page - 1) * REVIEWS_PER_PAGE
    return reviews.slice(start, start + REVIEWS_PER_PAGE)
  }, [page, reviews])

  useEffect(() => {
    setPage(current => Math.min(current, totalPages))
  }, [totalPages])

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className="section-label">What patients say</p>
            <h2 className={styles.heading}>Patient Reviews</h2>
          </div>
          <a
            href={GOOGLE_SUMMARY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.leaveGoogleReview}
          >
            <GoogleIcon />
            Leave a Google review
          </a>
        </div>

        {/* Aggregate rating summary */}
        <RatingSummary reviews={reviews} />

        {/* Reviews grid + Write a review side by side */}
        <div className={styles.layout}>

          {/* Left: review cards */}
          <div>
            {loading && <p className={styles.stateText}>Loading reviews...</p>}
            {loadError && <p className={styles.stateError}>{loadError}</p>}

            {!loading && !loadError && reviews.length === 0 && (
              <p className={styles.stateText}>No patient reviews yet. Be the first to share your experience.</p>
            )}

            {!loading && !loadError && reviews.length > 0 && (
              <>
                <div className={styles.grid}>
                  {displayed.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button
                      type="button"
                      className={styles.pageBtn}
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                    >
                      Previous
                    </button>
                    <span className={styles.pageStatus}>
                      Page {page} of {totalPages}
                    </span>
                    <button
                      type="button"
                      className={styles.pageBtn}
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right: write a review */}
          <div className={styles.formCol}>
            {!showForm && !formSubmitted ? (
              <div className={styles.writePrompt}>
                <div className={styles.writeIcon}>✍️</div>
                <h3>Been a patient?</h3>
                <p>
                  Your experience helps others make informed decisions.
                  Share how your visit went.
                </p>
                <button
                  className={styles.writeBtn}
                  onClick={() => setShowForm(true)}
                >
                  Write a review
                </button>
                <a
                  href={GOOGLE_SUMMARY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.googleReviewLink}
                >
                  <GoogleIcon />
                  Or review us on Google
                </a>
              </div>
            ) : (
              <ReviewForm
                onSubmitted={() => {
                  setShowForm(false)
                  setFormSubmitted(true)
                }}
              />
            )}
          </div>

        </div>
      </div>
    </section>
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
