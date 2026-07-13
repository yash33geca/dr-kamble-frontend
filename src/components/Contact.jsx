// src/components/Contact.jsx
import { useState, useEffect } from 'react'
import { push, ref, serverTimestamp } from 'firebase/database'
import { useAuth } from '../context/AuthContext.jsx'
import { database } from '../firebase.js'
import LoginModal from './LoginModal.jsx'
import DatePicker from './booking/DatePicker.jsx'
import { LOCATIONS, getNextAvailableDates } from '../utils/availability.js'
import { saveAppointmentToGoogleSheet } from '../services/googleSheets.js'
import styles from './Contact.module.css'

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default function Contact() {
  const { user } = useAuth()
  const [showLogin, setShowLogin]   = useState(false)
  const [locationId, setLocationId] = useState('')
  const [submitted, setSubmitted]   = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [lastBooking, setLastBooking] = useState(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', message: '',
  })

  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        name:  prev.name  || user.displayName || '',
        email: prev.email || user.email || '',
      }))
    }
  }, [user])

  const selectedLocation = LOCATIONS.find(l => l.id === locationId)

  const handleChange = e => {
    setSubmitError('')
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleDateChange = d => {
    setSubmitError('')
    setForm(prev => ({ ...prev, date: d }))
  }
  const handleLocationSelect = id => {
    setSubmitError('')
    setLocationId(id)
    setForm(prev => ({ ...prev, date: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!user) { setShowLogin(true); return }

    setSubmitting(true)
    setSubmitError('')

    const booking = {
      patient: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      },
      preferredDate: form.date,
      message: form.message.trim(),
      location: selectedLocation
        ? {
            id: selectedLocation.id,
            name: selectedLocation.name,
            address: selectedLocation.address,
            tag: selectedLocation.tag,
          }
        : { id: locationId },
      status: 'requested',
      userId: user.uid,
      userEmail: user.email || '',
      submittedAt: new Date().toISOString(),
    }

    try {
      const result = await saveAppointmentToGoogleSheet(booking)

      if (!result?.ok) {
        await push(ref(database, 'appointments'), {
          ...booking,
          googleSheetError: result?.reason || 'Google Sheets submission failed',
          createdAt: serverTimestamp(),
        })

        throw new Error(result.reason || 'Google Sheets submission failed')
      }

      setLastBooking({
        id: result?.data?.id || 'google-sheet',
        date: form.date,
        locationName: selectedLocation?.name || 'your selected clinic',
      })
      setSubmitted(true)
      setLocationId('')
      setForm({ name: '', email: '', phone: '', date: '', message: '' })
    } catch (err) {
      console.error('Failed to save appointment:', err)
      setSubmitError('Your appointment could not be saved to Google Sheets. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">

        <div className={styles.header}>
          <p className="section-label">Get in Touch</p>
          <h2 className={styles.heading}>Book an Appointment</h2>
          <p className={styles.sub}>
            Choose your preferred location and we'll confirm your appointment within a few hours.
          </p>
        </div>

        <div className={styles.layout}>

          {/* ── booking form ── */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h3>Appointment Requested!</h3>
                <p>
                  {lastBooking?.date ? `Requested for ${formatDate(lastBooking.date)} at ${lastBooking.locationName}.` : ''}
                  {' '}Our team will confirm within a few hours.
                </p>
                <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* Auth nudge */}
                {!user && (
                  <div className={styles.authNudge}>
                    <span>🔒</span>
                    <p>
                      <button type="button" className={styles.nudgeLink}
                        onClick={() => setShowLogin(true)}>
                        Sign in with Google
                      </button>
                      {' '}to pre-fill your details and track this booking.
                    </p>
                  </div>
                )}

                {/* ── STEP 1: Location picker ── */}
                {!locationId ? (
                  <div className={styles.stepSection}>
                    <p className={styles.stepLabel}>
                      <span className={styles.stepNum}>1</span>
                      Choose a clinic location
                    </p>
                    <div className={styles.locationGrid}>
                      {LOCATIONS.map(loc => {
                        const next = getNextAvailableDates(loc.id, 1)[0]
                        const nextLabel = next
                          ? next.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })
                          : '—'
                        return (
                          <button key={loc.id} type="button"
                            className={styles.locationCard}
                            onClick={() => handleLocationSelect(loc.id)}>
                            <div className={styles.locationName}>{loc.name}</div>
                            <div className={styles.locationAddress}>
                              <span className={styles.locationIcon} aria-hidden="true">📍</span>
                              {loc.address}
                            </div>
                            {loc.phone && (
                              <div className={styles.locationPhone}>
                                <span className={styles.locationIcon} aria-hidden="true">📞</span>
                                {loc.phone}
                              </div>
                            )}
                            <div className={styles.locationTag}
                              style={{ background: loc.color, color: loc.text }}>
                              {loc.tag}
                            </div>
                            <div className={styles.locationNext}>
                              Next visit <strong>{nextLabel}</strong>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ) : (

                  /* ── STEP 2: Details form ── */
                  <div className={styles.stepSection}>

                    {/* Selected location banner */}
                    <div className={styles.selectedLocation}
                      style={{ borderColor: selectedLocation?.text, background: selectedLocation?.color }}>
                      <div>
                        {/* <p className={styles.selectedLocationLabel}>Selected clinic</p> */}
                        <p className={styles.selectedLocationName}
                          style={{ color: selectedLocation?.text }}>
                          📍 {selectedLocation?.name}
                        </p>
                        {/* <p className={styles.selectedLocationTag}>{selectedLocation?.tag}</p> */}
                      </div>
                      <button type="button" className={styles.changeBtn}
                        onClick={() => handleLocationSelect('')}>
                        Change
                      </button>
                    </div>

                    <p className={styles.stepLabel} style={{ marginTop: 24 }}>
                      <span className={styles.stepNum}>2</span>
                      Your details
                    </p>

                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>Full Name *</label>
                        <input type="text" name="name" value={form.name}
                          onChange={handleChange} className={styles.input}
                          placeholder="Priya Desai" required />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Phone *</label>
                        <input type="tel" name="phone" value={form.phone}
                          onChange={handleChange} className={styles.input}
                          placeholder="+91 98765 43210" required/>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label className={styles.label}>Email Address</label>
                        <input type="email" name="email" value={form.email}
                          onChange={handleChange} className={styles.input}
                          placeholder="priya@example.com"/>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>
                          Preferred Date *
                          {selectedLocation && (
                            <span className={styles.dateHint} style={{ color: selectedLocation.text }}>
                              {' '}· {selectedLocation.tag}
                            </span>
                          )}
                        </label>
                        {/* Custom date picker — only valid dates are clickable */}
                        <DatePicker
                          locationId={locationId}
                          value={form.date}
                          onChange={handleDateChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.field} style={{ marginBottom: 24 }}>
                      <label className={styles.label}>Symptoms / Reason for Visit</label>
                      <textarea name="message" value={form.message}
                        onChange={handleChange} className={styles.textarea} rows={3}
                        placeholder="Describe your symptoms or what you'd like to discuss..." />
                    </div>

                    {submitError && (
                      <p className={styles.submitError}>{submitError}</p>
                    )}

                    <button type="submit" className={styles.submitBtn} disabled={submitting}>
                      {submitting ? 'Saving...' : user ? 'Request Appointment →' : 'Sign in & Request →'}
                    </button>

                  </div>
                )}

              </form>
            )}
          </div>
        </div>
      </div>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          redirectMessage="Sign in with Google to save your appointment request."
        />
      )}
    </section>
  )
}