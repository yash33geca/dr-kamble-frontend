// // src/components/reviews/ReviewCard.jsx
// import styles from './ReviewCard.module.css'

// function Stars({ rating }) {
//   return (
//     <div className={styles.stars}>
//       {[1,2,3,4,5].map(i => (
//         <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"
//           fill={i <= rating ? '#F59E0B' : 'none'}
//           stroke={i <= rating ? '#F59E0B' : '#D1D5DB'}
//           strokeWidth="1.5">
//           <path strokeLinecap="round" strokeLinejoin="round"
//             d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
//         </svg>
//       ))}
//     </div>
//   )
// }

// export default function ReviewCard({ review }) {
//   const isGoogle = review.source === 'google'

//   return (
//     <div className={styles.card}>
//       {/* Source badge */}
//       {isGoogle && (
//         <div className={styles.sourceBadge}>
//           <GoogleIcon />
//           Google review
//         </div>
//       )}

//       {/* Stars + date */}
//       <div className={styles.meta}>
//         <Stars rating={review.rating} />
//         <span className={styles.date}>{review.date}</span>
//       </div>

//       {/* Title */}
//       {review.title && <p className={styles.title}>{review.title}</p>}

//       {/* Body */}
//       <p className={styles.body}>{review.body}</p>

//       {/* Author */}
//       <div className={styles.author}>
//         <div className={styles.avatar}>{review.initials}</div>
//         <span className={styles.name}>{review.author}</span>
//         {review.verified && (
//           <span className={styles.verified}>✓ Verified patient</span>
//         )}
//       </div>
//     </div>
//   )
// }

// function GoogleIcon() {
//   return (
//     <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
//       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//       <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
//       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//     </svg>
//   )
// }

// src/components/reviews/ReviewForm.jsx
import { useState } from 'react'
import { push, ref, serverTimestamp } from 'firebase/database'
import { useAuth } from '../../context/AuthContext.jsx'
import { database } from '../../firebase.js'
import styles from './ReviewForm.module.css'

const STAR_LABELS = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very good', 5: 'Excellent' }

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJF8D-yiPB1DsRLK6SL_Lf41A'

function StarPicker({ value, onChange }) {
  const [hover, setHover] = useState(0)
  const active = hover || value

  return (
    <div className={styles.starPicker}>
      {[1, 2, 3, 4, 5].map(i => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(i)}
          aria-label={`${i} star${i > 1 ? 's' : ''}`}
          className={styles.starBtn}
        >
          <svg
            width="32" height="32" viewBox="0 0 24 24"
            fill={active >= i ? '#F59E0B' : 'none'}
            stroke={active >= i ? '#F59E0B' : '#D1D5DB'}
            strokeWidth="1.5"
            style={{ transition: 'all 0.1s' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      ))}
      {active > 0 && (
        <span className={styles.starLabel}>{STAR_LABELS[active]}</span>
      )}
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

export default function ReviewForm({ onSubmitted }) {
  const { user, signInWithGoogle } = useAuth()
  const [form, setForm]       = useState({ rating: 0, title: '', body: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [done, setDone]       = useState(false)

  if (done) {
    return (
      <div className={styles.successWrap}>
        <div className={styles.successIcon}>✓</div>
        <h4>Review submitted!</h4>
        <p>Thank you. Your review will appear after a brief verification check.</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className={styles.signInCard}>
        <div className={styles.promptIcon}>✍️</div>
        <h3>Share your experience</h3>
        <p>Sign in with your Google account to leave a review. Only verified patients can submit.</p>
        <button className={styles.signInBtn} onClick={signInWithGoogle}>
          <GoogleIcon /> Sign in with Google
        </button>
        <div className={styles.orDivider}><span>or</span></div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.googleDirectBtn}
        >
          <GoogleIcon /> Review us directly on Google
        </a>
      </div>
    )
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (form.rating === 0)            { setError('Please select a star rating.'); return }
    if (form.body.trim().length < 20) { setError('Please write at least 20 characters.'); return }
    setError('')
    setLoading(true)

    const authorName = user.displayName || user.email || 'Patient'
    const initials = authorName
      .split(' ')
      .filter(Boolean)
      .map(name => name[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'U'

    try {
      await push(ref(database, 'reviews'), {
        source: 'patient',
        authorName,
        initials,
        rating: form.rating,
        title: form.title.trim() || null,
        body: form.body.trim(),
        verified: true,
        userId: user.uid,
        userEmail: user.email || '',
        createdAt: serverTimestamp(),
      })
      setDone(true)
      onSubmitted?.()
    } catch (err) {
      console.error('Failed to save review:', err)
      setError('Could not save your review right now. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Write a review</h3>

      <div className={styles.userRow}>
        <div className={styles.userAvatar}>
          {user.photoURL
            ? <img src={user.photoURL} alt={user.displayName || 'Patient'} referrerPolicy="no-referrer" />
            : (user.displayName || user.email || 'P')[0]
          }
        </div>
        <div>
          <p className={styles.userName}>{user.displayName || user.email}</p>
          <p className={styles.userSub}>Posting as verified patient</p>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Rating *</label>
        <StarPicker value={form.rating} onChange={v => setForm(f => ({ ...f, rating: v }))} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Title (optional)</label>
        <input
          type="text" className={styles.input}
          placeholder="Summarise your experience"
          value={form.title} maxLength={80}
          onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Your review *</label>
        <textarea
          className={styles.textarea} rows={4}
          placeholder="Tell others about your experience with Dr. Kamble..."
          value={form.body} maxLength={600}
          onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
        />
        <span className={styles.charCount}>{form.body.length} / 600</span>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit review'}
      </button>
    </form>
  )
}
