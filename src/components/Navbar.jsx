import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoginModal from './LoginModal'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Articles', to: '/#articles' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/website/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleBookClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!user) {
      setShowModal(true)
    } else {
      navigate('/contact')
    }
  }

  const initials = user?.displayName
    ? user.displayName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : '?'

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link to="/" className={styles.brand}>
            <span className={styles.brandMark}>NK</span>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Dr. Nishant Kamble</span>
              <span className={styles.brandSub}>Consultant Rheumatologist</span>
            </div>
          </Link>

          <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {navLinks.map(link => (
              <Link key={link.label} to={link.to} className={styles.link}
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <button className={`btn-primary ${styles.ctaBtn}`} onClick={handleBookClick}>
              Book Appointment
            </button>
          </nav>

          <div className={styles.rightSlot}>
            {user ? (
              <div className={styles.userMenu} ref={dropdownRef}>
                <button
                  className={styles.avatarBtn}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-label="User menu"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} className={styles.avatarImg} />
                  ) : (
                    <span className={styles.avatarInitials}>{initials}</span>
                  )}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`${styles.chevron} ${dropdownOpen ? styles.chevronUp : ''}`}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                      <p className={styles.dropdownName}>{user.displayName}</p>
                      <p className={styles.dropdownEmail}>{user.email}</p>
                    </div>
                    <div className={styles.dropdownDivider} />
                    <button className={styles.dropdownItem} onClick={() => {
                      setDropdownOpen(false)
                      navigate('/contact')
                    }}>
                      📅 Book Appointment
                    </button>
                    <div className={styles.dropdownDivider} />
                    <button className={`${styles.dropdownItem} ${styles.signOutItem}`}
                      onClick={() => { setDropdownOpen(false); signOut() }}>
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className={styles.signInBtn} onClick={() => setShowModal(true)}>
                Sign in
              </button>
            )}

            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu">
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          redirectMessage="Sign in with Google to book an appointment with Dr. Kamble."
        />
      )}
    </>
  )
}