import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './LoginModal.module.css'

// Google "G" SVG icon
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

export default function LoginModal({ onClose, redirectMessage }) {
  const { signInWithGoogle, authError, loading } = useAuth()

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleSignIn = async () => {
    try {
      await signInWithGoogle()
      onClose()
    } catch {
      // authError is set in context, just don't close modal
    }
  }

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={styles.brandMark}>NK</div>

        <h2 id="modal-title" className={styles.title}>Sign in to Book</h2>

        <p className={styles.sub}>
          {redirectMessage ||
            'Please sign in with your Google account to book an appointment with Dr. Kamble.'}
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

        <div className={styles.divider}><span>Why sign in?</span></div>

        <ul className={styles.benefits}>
          <li>
            <span className={styles.benefitIcon}>📅</span>
            <span>Book and manage appointments online</span>
          </li>
          <li>
            <span className={styles.benefitIcon}>🔒</span>
            <span>Securely access your medical records</span>
          </li>
          <li>
            <span className={styles.benefitIcon}>📧</span>
            <span>Receive appointment reminders & updates</span>
          </li>
        </ul>

        <p className={styles.privacy}>
          We only use your Google account to verify your identity. Your data is never shared with third parties.
        </p>
      </div>
    </div>
  )
}