import { useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './LoginPage.module.css'

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  )
}

export default function LoginPage() {
  const { user, loading, signInWithGoogle, authError } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Where to go after login — default to home
  const from = location.state?.from || '/'

  // If already logged in, redirect away
  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true })
    }
  }, [user, loading, navigate, from])

  const handleSignIn = async () => {
    try {
      await signInWithGoogle()
      navigate(from, { replace: true })
    } catch {
      // authError set in context
    }
  }

  if (loading) return null

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.leftInner}>
          <Link to="/" className={styles.backLink}>
            ← Back to website
          </Link>

          <div className={styles.brandMark}>NK</div>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.sub}>
            Sign in to book appointments, view your medical records, and manage your care with Dr. Nishant Kamble.
          </p>

          {authError && (
            <div className={styles.errorBanner}>{authError}</div>
          )}

          <button
            className={styles.googleBtn}
            onClick={handleSignIn}
            disabled={loading}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className={styles.divider}><span>Patient Portal Access</span></div>

          <ul className={styles.features}>
            <li>
              <div className={styles.featureIcon}>📅</div>
              <div>
                <p className={styles.featureTitle}>Online Appointments</p>
                <p className={styles.featureDesc}>Book, reschedule, or cancel visits anytime</p>
              </div>
            </li>
            <li>
              <div className={styles.featureIcon}>🗂️</div>
              <div>
                <p className={styles.featureTitle}>Medical Records</p>
                <p className={styles.featureDesc}>Access diagnoses, prescriptions & lab reports</p>
              </div>
            </li>
            <li>
              <div className={styles.featureIcon}>🔔</div>
              <div>
                <p className={styles.featureTitle}>Reminders & Updates</p>
                <p className={styles.featureDesc}>Get appointment confirmations and follow-up alerts</p>
              </div>
            </li>
          </ul>

          <p className={styles.privacy}>
            Your data is encrypted and never shared. We use Google only to verify your identity.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.quote}>
          <p className={styles.quoteText}>
            "Our goal is to help every patient understand their condition and achieve the best possible quality of life."
          </p>
          <div className={styles.quoteAuthor}>
            <div className={styles.quoteAvatar}>NK</div>
            <div>
              <p className={styles.quoteName}>Dr. Nishant Kamble</p>
              <p className={styles.quoteRole}>MD, DM (Rheumatology) · Pune</p>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {[
            { val: '14+', label: 'Years Experience' },
            { val: '8.5k+', label: 'Patients Treated' },
            { val: '4.9', label: 'Avg. Rating' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}