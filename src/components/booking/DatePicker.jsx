// src/components/booking/DatePicker.jsx
// Custom date picker — only enables dates valid for the selected location
import { useState, useMemo, useEffect, useRef } from 'react'
import { getLocationsForMonth, tomorrowString, toDateString } from '../../utils/availability.js'
import styles from './DatePicker.module.css'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS   = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December']

export default function DatePicker({ locationId, value, onChange, required }) {
  const today       = new Date()
  const tomorrowStr = tomorrowString()

  const [open,      setOpen]      = useState(false)
  const [viewYear,  setViewYear]  = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Build location map for current view month
  const locationMap = useMemo(
    () => getLocationsForMonth(viewYear, viewMonth),
    [viewYear, viewMonth]
  )

  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth    = new Date(viewYear, viewMonth + 1, 0).getDate()
  const cells = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth()

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const handleDayClick = (day) => {
    if (!day) return
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
    const loc     = locationMap.get(dateStr)
    const isPast  = dateStr < tomorrowStr
    const isWrong = locationId && loc?.id !== locationId
    if (isPast || isWrong) return
    onChange(dateStr)
    setOpen(false)
  }

  // Format display value
  const displayValue = value
    ? new Date(value + 'T12:00:00').toLocaleDateString('en-IN', {
        weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
      })
    : ''

  return (
    <div className={styles.wrap} ref={ref}>
      {/* Trigger input */}
      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ''} ${value ? styles.triggerFilled : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className={styles.triggerIcon}>📅</span>
        <span className={value ? styles.triggerValue : styles.triggerPlaceholder}>
          {displayValue || 'Select a date'}
        </span>
        <span className={styles.triggerChevron}>{open ? '▲' : '▼'}</span>
      </button>

      {/* Hidden native input for form validation */}
      <input type="date" name="date" value={value} onChange={() => {}}
        required={required} style={{ position:'absolute', opacity:0, pointerEvents:'none', width:0, height:0 }} />

      {/* Calendar dropdown */}
      {open && (
        <div className={styles.dropdown}>
          {/* Month nav */}
          <div className={styles.header}>
            <button type="button" className={styles.navBtn}
              onClick={prevMonth} disabled={isCurrentMonth}>‹</button>
            <span className={styles.monthLabel}>{MONTHS[viewMonth]} {viewYear}</span>
            <button type="button" className={styles.navBtn} onClick={nextMonth}>›</button>
          </div>

          {/* Weekday headers */}
          <div className={styles.weekdays}>
            {WEEKDAYS.map(d => <span key={d} className={styles.weekday}>{d}</span>)}
          </div>

          {/* Day grid */}
          <div className={styles.grid}>
            {cells.map((day, idx) => {
              if (!day) return <div key={`b${idx}`} />

              const dateStr  = `${viewYear}-${String(viewMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
              const loc      = locationMap.get(dateStr)
              const isPast   = dateStr < tomorrowStr
              const isWrong  = locationId && loc?.id !== locationId
              const disabled = isPast || isWrong
              const isToday  = dateStr === toDateString(today)
              const isSel    = dateStr === value

              return (
                <button
                  key={dateStr}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleDayClick(day)}
                  className={[
                    styles.day,
                    disabled ? styles.dayDisabled : styles.dayAvail,
                    isToday  ? styles.dayToday   : '',
                    isSel    ? styles.daySelected : '',
                  ].join(' ')}
                  title={disabled ? 'Not available' : `${loc?.name}`}
                >
                  {day}
                </button>
              )
            })}
          </div>

          {/* Footer hint */}
          <div className={styles.footer}>
            Only highlighted dates are available for this location
          </div>
        </div>
      )}
    </div>
  )
}