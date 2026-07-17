// ============================================================
//  LOCATION PICKER
//  src/components/booking/LocationPicker.jsx
//
//  Shows all 4 clinic locations as selectable cards.
//  Each card shows the next upcoming date for that location.
// ============================================================

import { useMemo } from 'react'
import { LOCATIONS, getNextAvailableDates } from '../../utils/availability.js'
import styles from './LocationPicker.module.css'

export default function LocationPicker({ selected, onSelect }) {
  // Pre-compute next date for each location (memoised — won't recalc on re-renders)
  const locationsWithNext = useMemo(() => {
    return LOCATIONS.map(loc => {
      const next = getNextAvailableDates(loc.id, 1)[0]
      const nextLabel = next
        ? next.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })
        : 'No upcoming dates'
      return { ...loc, nextDate: nextLabel }
    })
  }, [])

  return (
    <div className={styles.grid}>
      {locationsWithNext.map(loc => (
        <button
          key={loc.id}
          type="button"
          className={`${styles.card} ${selected === loc.id ? styles.selected : ''}`}
          onClick={() => onSelect(loc.id)}
        >
          <div className={styles.dot} style={{ background: loc.text }} />

          <div className={styles.name}>{loc.name}</div>
          <div className={styles.address}>{loc.address}</div>

          <div className={styles.tag} style={{ background: loc.color, color: loc.text }}>
            {loc.tag}
          </div>

          <div className={styles.next}>
            <span className={styles.nextLabel}>Next visit</span>
            <span className={styles.nextDate}>{loc.nextDate}</span>
          </div>
        </button>
      ))}
    </div>
  )
}