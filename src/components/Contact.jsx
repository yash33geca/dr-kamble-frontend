import { useState } from 'react'
import { clinic } from '../data/dummy'
import { useAuth } from '../context/AuthContext'
import LoginModal from './LoginModal'
import styles from './Contact.module.css'

export default function Contact() {
  const { user } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up to FastAPI endpoint
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <p className="section-label">Get in Touch</p>
            <h2 className={styles.heading}>Book an Appointment</h2>
            <p className={styles.sub}>
              Fill out the form and our team will get back to you within a few hours to confirm your appointment.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>📍</div>
                <div>
                  <p className={styles.detailLabel}>Clinic Address</p>
                  <p className={styles.detailValue}>{clinic.address}</p>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>📞</div>
                <div>
                  <p className={styles.detailLabel}>Phone</p>
                  <p className={styles.detailValue}>{clinic.phone}</p>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>✉️</div>
                <div>
                  <p className={styles.detailLabel}>Email</p>
                  <p className={styles.detailValue}>{clinic.email}</p>
                </div>
              </div>
            </div>

            <div className={styles.hours}>
              <p className={styles.hoursTitle}>Clinic Hours</p>
              {clinic.hours.map(h => (
                <div key={h.day} className={styles.hour}>
                  <span className={styles.hourDay}>{h.day}</span>
                  <span className={styles.hourTime}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formCard}>
            {!user ? (
              <div className={styles.authGate}>
                <div className={styles.authGateIcon}>🔒</div>
                <h3 className={styles.authGateTitle}>Sign in to Book</h3>
                <p className={styles.authGateSub}>
                  Please sign in with your Google account to send a booking request. It only takes a moment.
                </p>
                <button className="btn-primary" onClick={() => setShowModal(true)}
                  style={{ width: '100%', justifyContent: 'center' }}>
                  Sign in with Google
                </button>
                <p className={styles.authGateNote}>
                  Your data is encrypted and never shared with third parties.
                </p>
              </div>
            ) : submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Received</h3>
                <p>Thank you. Our team will contact you within a few hours to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Send a Message</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Priya Desai"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="priya@example.com"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Message / Reason for Visit *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={5}
                    placeholder="Please describe your symptoms or what you'd like to discuss..."
                    required
                  />
                </div>

                <button type="submit" className={`btn-primary ${styles.submit}`}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <LoginModal onClose={() => setShowModal(false)} />
      )}
    </section>
  )
}