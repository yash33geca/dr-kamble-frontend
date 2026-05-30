// ============================================================
//  AVAILABILITY ENGINE
//  src/utils/availability.js
//
//  Rules:
//    - 2nd Thursday of month  → Hinganghat
//    - 2nd Sunday of month    → Yavatmal
//    - 3rd Sunday of month    → Madhya Pradesh
//    - 4th Sunday of month    → Madhya Pradesh
//    - All other days         → Nagpur
//
//  Public API:
//    getLocationForDate(date)  → location object | null
//    getLocationsForMonth(year, month) → Map<dateString, location>
//    isDateAvailable(date, locationId) → boolean
//    getNextAvailableDates(locationId, count) → Date[]
//    LOCATIONS → array of all location objects
// ============================================================

// ── LOCATION DEFINITIONS ────────────────────────────────────
export const LOCATIONS = [
  {
    id:      'nagpur',
    name:    'Nagpur',
    address: 'Viman Nagar, Nagpur, Maharashtra',
    tag:     'Main Clinic · Regular hours',
    color:   '#e8f5f0',
    text:    '#094836',
  },
  {
    id:      'hinganghat',
    name:    'Hinganghat',
    address: 'Hinganghat, Wardha district, Maharashtra',
    tag:     'Second Thursday Of Every Month',
    color:   '#fdf6e8',
    text:    '#7a5a12',
  },
  {
    id:      'yavatmal',
    name:    'Yavatmal',
    address: 'Yavatmal, Maharashtra',
    tag:     'Second Sunday of every month',
    color:   '#f0e8fd',
    text:    '#4a1a8b',
  },
  {
    id:      'madhyapradesh',
    name:    'Madhya Pradesh',
    address: 'Madhya Pradesh (city TBC on booking confirmation)',
    tag:     '3rd & 4th Sunday of every month',
    color:   '#fde8e8',
    text:    '#8b1a1a',
  },
]

// ── HELPERS ─────────────────────────────────────────────────

/**
 * Returns which occurrence (1st, 2nd, 3rd…) of a given weekday
 * the date falls on within its month.
 * e.g. 2nd Thursday → 2
 */
function nthWeekdayOfMonth(date) {
  const d = new Date(date)
  const dayOfMonth = d.getDate()
  return Math.ceil(dayOfMonth / 7)
}

/**
 * Returns 0 (Sun) … 6 (Sat) for a date.
 */
function weekday(date) {
  return new Date(date).getDay()
}

/**
 * How many Sundays of a given week-number exist in the month.
 * Used to confirm "last Sunday" edge cases — not needed here
 * since rules are explicit about 3rd and 4th.
 */

// ── CORE RULE ENGINE ────────────────────────────────────────

/**
 * Given a Date, returns the matching LOCATION object.
 * Returns the Nagpur location as fallback for all other days.
 *
 * @param {Date|string} date
 * @returns {{ id, name, address, tag, color, text }}
 */
export function getLocationForDate(date) {
  const d    = new Date(date)
  const day  = weekday(d)        // 0=Sun, 4=Thu
  const nth  = nthWeekdayOfMonth(d)

  // 2nd Thursday → Hinganghat
  if (day === 4 && nth === 2) return LOCATIONS.find(l => l.id === 'hinganghat')

  // 2nd Sunday → Yavatmal
  if (day === 0 && nth === 2) return LOCATIONS.find(l => l.id === 'yavatmal')

  // 3rd or 4th Sunday → Madhya Pradesh
  if (day === 0 && (nth === 3 || nth === 4)) return LOCATIONS.find(l => l.id === 'madhyapradesh')

  // Everything else → Nagpur
  return LOCATIONS.find(l => l.id === 'nagpur')
}

/**
 * Returns a Map of { 'YYYY-MM-DD' → locationObject }
 * for every day in a given month.
 *
 * @param {number} year
 * @param {number} month  0-indexed (0 = January)
 * @returns {Map<string, object>}
 */
export function getLocationsForMonth(year, month) {
  const map = new Map()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  for (let day = 1; day <= daysInMonth; day++) {
    const d   = new Date(year, month, day)
    const key = toDateString(d)
    map.set(key, getLocationForDate(d))
  }
  return map
}

/**
 * Returns true if a given date belongs to a specific location.
 *
 * @param {Date|string} date
 * @param {string} locationId
 * @returns {boolean}
 */
export function isDateAvailable(date, locationId) {
  const loc = getLocationForDate(date)
  return loc?.id === locationId
}

/**
 * Returns the next N dates that belong to a given location,
 * starting from tomorrow.
 *
 * @param {string} locationId
 * @param {number} count
 * @returns {Date[]}
 */
export function getNextAvailableDates(locationId, count = 3) {
  const results = []
  const cursor  = new Date()
  cursor.setDate(cursor.getDate() + 1) // start from tomorrow
  cursor.setHours(0, 0, 0, 0)

  // Search up to 90 days ahead
  for (let i = 0; i < 90 && results.length < count; i++) {
    if (isDateAvailable(cursor, locationId)) {
      results.push(new Date(cursor))
    }
    cursor.setDate(cursor.getDate() + 1)
  }
  return results
}

// ── UTIL ────────────────────────────────────────────────────

/**
 * Converts a Date to 'YYYY-MM-DD' string (local time, not UTC).
 */
export function toDateString(date) {
  const d = new Date(date)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/**
 * Returns today's date string 'YYYY-MM-DD'.
 */
export function todayString() {
  return toDateString(new Date())
}

/**
 * Returns tomorrow's date string (min selectable date).
 */
export function tomorrowString() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return toDateString(d)
}