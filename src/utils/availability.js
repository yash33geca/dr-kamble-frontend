// // ============================================================
// //  AVAILABILITY ENGINE
// //  src/utils/availability.js
// //
// //  Rules:
// //    - 2nd Thursday of month  → Hinganghat
// //    - 2nd Sunday of month    → Yavatmal
// //    - 3rd Sunday of month    → Madhya Pradesh
// //    - 4th Sunday of month    → Madhya Pradesh
// //    - All other days         → Nagpur
// //
// //  Public API:
// //    getLocationForDate(date)  → location object | null
// //    getLocationsForMonth(year, month) → Map<dateString, location>
// //    isDateAvailable(date, locationId) → boolean
// //    getNextAvailableDates(locationId, count) → Date[]
// //    LOCATIONS → array of all location objects
// // ============================================================

// // ── LOCATION DEFINITIONS ────────────────────────────────────
// export const LOCATIONS = [
//   {
//     id:      'nagpur',
//     name:    'Nagpur',
//     address: '3rd floor, Shar hari Complex, Block number 31, Central Bazar Road, near RBL Bank, opposite to Somalwar School, Ramdaspeth, Nagpur, Maharashtra 440010 ',
//     tag:     'Main Clinic · Regular hours',
//     color:   '#e8f5f0',
//     text:    '#094836',
//   },
//   {
//     id:      'hinganghat',
//     name:    'Hinganghat',
//     address: 'Hinganghat, Maharashtra',
//     tag:     'Second Thursday Of Every Month',
//     color:   '#fdf6e8',
//     text:    '#7a5a12',
//   },
//   {
//     id:      'yavatmal',
//     name:    'Yavatmal',
//     address: 'Yavatmal, Maharashtra',
//     tag:     'Second Sunday of Every Month',
//     color:   '#fde8e8',
//     text:    '#8b1a1a',
//   },
//   {
//     id:      'chandrapur',
//     name:    'Chandrapur',
//     address: 'Chandrapur, Maharashtra',
//     tag:     'First Thursday of Every Month',
//     color:   '#fde8e8',
//     text:    '#8b1a1a',
//   },
//    {
//     id:      'bhandara',
//     name:    'Bhandara',
//     address: 'Bhandara, Maharashtra',
//     tag:     'Third Saturday of Every Month',
//     color:   '#fde8e8',
//     text:    '#8b1a1a',
//   },
//    {
//     id:      'chhindwara',
//     name:    'Chhindwara',
//     address: 'Chhindwara, Madhya Pradesh',
//     tag:     'Fourth Thursday of Every Month',
//     color:   '#fde8e8',
//     text:    '#8b1a1a',
//   },
//     {
//     id:      'seoni',
//     name:    'Seoni',
//     address: 'Seoni, Madhya Pradesh',
//     tag:     'Third Thursday of Every Month',
//     color:   '#fde8e8',
//     text:    '#8b1a1a',
//   },

// ]

// // ── HELPERS ─────────────────────────────────────────────────

// /**
//  * Returns which occurrence (1st, 2nd, 3rd…) of a given weekday
//  * the date falls on within its month.
//  * e.g. 2nd Thursday → 2
//  */
// function nthWeekdayOfMonth(date) {
//   const d = new Date(date)
//   const dayOfMonth = d.getDate()
//   return Math.ceil(dayOfMonth / 7)
// }

// /**
//  * Returns 0 (Sun) … 6 (Sat) for a date.
//  */
// function weekday(date) {
//   return new Date(date).getDay()
// }

// /**
//  * How many Sundays of a given week-number exist in the month.
//  * Used to confirm "last Sunday" edge cases — not needed here
//  * since rules are explicit about 3rd and 4th.
//  */

// // ── CORE RULE ENGINE ────────────────────────────────────────

// /**
//  * Given a Date, returns the matching LOCATION object.
//  * Returns the Nagpur location as fallback for all other days.
//  *
//  * @param {Date|string} date
//  * @returns {{ id, name, address, tag, color, text }}
//  */
// export function getLocationForDate(date) {
//   const d    = new Date(date)
//   const day  = weekday(d)        // 0=Sun, 4=Thu
//   const nth  = nthWeekdayOfMonth(d)

//   // 2nd Thursday → Hinganghat
//   if (day === 4 && nth === 2) return LOCATIONS.find(l => l.id === 'hinganghat')

//   // 2nd Sunday → Yavatmal
//   if (day === 0 && nth === 2) return LOCATIONS.find(l => l.id === 'yavatmal')

//   // 3rd Saturday → bhandara
//   if (day === 6 && nth === 3 ) return LOCATIONS.find(l => l.id === 'bhandara')

//   // 1st Thursday → chandrapur
//   if (day === 4 && nth === 1) return LOCATIONS.find(l => l.id === 'chandrapur')

//   // 4th Thursday → chhindwara
//   if (day === 4 && ( nth === 4)) return LOCATIONS.find(l => l.id === 'chhindwara')

//   // 3rd Thursday → seoni
//   if (day === 4 && ( nth === 3)) return LOCATIONS.find(l => l.id === 'seoni')

//   // Everything else → Nagpur
//   return LOCATIONS.find(l => l.id === 'nagpur')
// }

// /**
//  * Returns a Map of { 'YYYY-MM-DD' → locationObject }
//  * for every day in a given month.
//  *
//  * @param {number} year
//  * @param {number} month  0-indexed (0 = January)
//  * @returns {Map<string, object>}
//  */
// export function getLocationsForMonth(year, month) {
//   const map = new Map()
//   const daysInMonth = new Date(year, month + 1, 0).getDate()

//   for (let day = 1; day <= daysInMonth; day++) {
//     const d   = new Date(year, month, day)
//     const key = toDateString(d)
//     map.set(key, getLocationForDate(d))
//   }
//   return map
// }

// /**
//  * Returns true if a given date belongs to a specific location.
//  *
//  * @param {Date|string} date
//  * @param {string} locationId
//  * @returns {boolean}
//  */
// export function isDateAvailable(date, locationId) {
//   const loc = getLocationForDate(date)
//   return loc?.id === locationId
// }

// /**
//  * Returns the next N dates that belong to a given location,
//  * starting from tomorrow.
//  *
//  * @param {string} locationId
//  * @param {number} count
//  * @returns {Date[]}
//  */
// export function getNextAvailableDates(locationId, count = 3) {
//   const results = []
//   const cursor  = new Date()
//   cursor.setDate(cursor.getDate() + 1) // start from tomorrow
//   cursor.setHours(0, 0, 0, 0)

//   // Search up to 90 days ahead
//   for (let i = 0; i < 90 && results.length < count; i++) {
//     if (isDateAvailable(cursor, locationId)) {
//       results.push(new Date(cursor))
//     }
//     cursor.setDate(cursor.getDate() + 1)
//   }
//   return results
// }

// // ── UTIL ────────────────────────────────────────────────────

// /**
//  * Converts a Date to 'YYYY-MM-DD' string (local time, not UTC).
//  */
// export function toDateString(date) {
//   const d = new Date(date)
//   const y = d.getFullYear()
//   const m = String(d.getMonth() + 1).padStart(2, '0')
//   const day = String(d.getDate()).padStart(2, '0')
//   return `${y}-${m}-${day}`
// }

// /**
//  * Returns today's date string 'YYYY-MM-DD'.
//  */
// export function todayString() {
//   return toDateString(new Date())
// }

// /**
//  * Returns tomorrow's date string (min selectable date).
//  */
// export function tomorrowString() {
//   const d = new Date()
//   d.setDate(d.getDate() + 1)
//   return toDateString(d)
// }

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
// NOTE: `phone` values below are placeholders — replace with the
// real clinic contact numbers for each location.
export const LOCATIONS = [
  {
    id:      'nagpur',
    name:    'Nagpur',
    address: '3rd Floor, Shar Hari Complex, Block Number 31, Central Bazar Road, Near RBL Bank, Opposite to Somalwar School, Ramdaspeth, Nagpur, Maharashtra 440010 ',
    phone:   '+91 7756842639',
    tag:     'Main Clinic · Regular hours',
    color:   '#e8f5f0',
    text:    '#094836',
  },
  {
    id:      'hinganghat',
    name:    'Hinganghat',
    address: 'DR. Manwar Dental Clinic , Opp. Laxmi Talkies, Ruba Chowk, Hinganghat, Maharashtra 442301',
    phone:   '+91 7083891555' + '  & ' + '+91 7775869977',
    tag:     'Second Thursday Of Every Month',
    color:   '#fdf6e8',
    text:    '#7a5a12',
  },
  {
    id:      'yavatmal',
    name:    'Yavatmal',
    address: 'Darshil Hospital,Dr. Janbandhu Tilakwadi, Bapat Chowk Yavatmal, Maharashtra 445001',
    phone:   '+91  7218397444',
    tag:     'Second Sunday of Every Month',
    color:   '#fde8e8',
    text:    '#8b1a1a',
  },
  {
    id:      'chandrapur',
    name:    'Chandrapur',
    address: 'Dr. Kubers Hospital, Bhanapeth Ward Chandrapur, Maharashtra',
    phone:   '+91 9175181674',
    tag:     'First Thursday of Every Month',
    color:   '#fde8e8',
    text:    '#8b1a1a',
  },
   {
    id:      'bhandara',
    name:    'Bhandara',
    address: 'Rodge Hospital, Sai Mandir Road, Near Rangari Nursing HomeBhandara, Maharashtra',
    phone:   '+91 9359060732' + '  & ' + '+91  9960495769',
    tag:     'Third Saturday of Every Month',
    color:   '#fde8e8',
    text:    '#8b1a1a',
  },
   {
    id:      'chhindwara',
    name:    'Chhindwara',
    address: 'Arogya Super Speciality Hospital, Opp. Pooja Lodge, Parsiya Road,Chhindwara, Madhya Pradesh',
    phone:   '+91 6262640425',
    tag:     'Fourth Thursday of Every Month',
    color:   '#fde8e8',
    text:    '#8b1a1a',
  },
    {
    id:      'seoni',
    name:    'Seoni',
    address: 'Sewa Diagnostic Centre, Anantam Building, Somwari Chowk, Bhairoganj,Seoni, Madhya Pradesh',
    phone:   '+91 8459027972' + '  & ' + '+91  9243418463',
    tag:     'Third Thursday of Every Month',
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
 * @returns {{ id, name, address, phone, tag, color, text }}
 */
export function getLocationForDate(date) {
  const d    = new Date(date)
  const day  = weekday(d)        // 0=Sun, 4=Thu
  const nth  = nthWeekdayOfMonth(d)

  // 2nd Thursday → Hinganghat
  if (day === 4 && nth === 2) return LOCATIONS.find(l => l.id === 'hinganghat')

  // 2nd Sunday → Yavatmal
  if (day === 0 && nth === 2) return LOCATIONS.find(l => l.id === 'yavatmal')

  // 3rd Saturday → bhandara
  if (day === 6 && nth === 3 ) return LOCATIONS.find(l => l.id === 'bhandara')

  // 1st Thursday → chandrapur
  if (day === 4 && nth === 1) return LOCATIONS.find(l => l.id === 'chandrapur')

  // 4th Thursday → chhindwara
  if (day === 4 && ( nth === 4)) return LOCATIONS.find(l => l.id === 'chhindwara')

  // 3rd Thursday → seoni
  if (day === 4 && ( nth === 3)) return LOCATIONS.find(l => l.id === 'seoni')

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