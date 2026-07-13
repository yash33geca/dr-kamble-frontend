// src/data/reviews.js
// ============================================================
//  REVIEWS DUMMY DATA
//  Replace with real API calls when backend is ready:
//
//  Google reviews  → GET /api/reviews/google
//    (FastAPI calls Google Places API with your Place ID)
//
//  Patient reviews → GET /api/reviews/site
//    (FastAPI reads from Supabase reviews table)
//
//  POST new review → POST /api/reviews
//    { rating, title, body, userId }
// ============================================================

const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || ''
const GOOGLE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : '#'

// Google Business summary (aggregate)
// Replace with: GET https://places.googleapis.com/v1/places/{PLACE_ID}
// Fields: rating, userRatingCount
export const GOOGLE_SUMMARY = {
  rating: Number(import.meta.env.VITE_GOOGLE_FALLBACK_RATING) || 0,
  totalRatings: Number(import.meta.env.VITE_GOOGLE_FALLBACK_TOTAL_RATINGS) || 0,
  googleMapsUrl: import.meta.env.VITE_GOOGLE_REVIEW_URL || GOOGLE_REVIEW_URL,
  placeId: GOOGLE_PLACE_ID,
}

// Google reviews (fetched via Places API → your FastAPI backend)
// Each review from Places API has: authorAttribution, rating, text, relativePublishTimeDescription
export const GOOGLE_REVIEWS = [
  {
    id: 'g1',
    source: 'google',
    author: 'Priya Menon',
    initials: 'PM',
    rating: 5,
    date: '2 weeks ago',
    title: 'Outstanding care',
    body: 'Dr. Kamble took the time to truly listen. After years of bouncing between doctors, he identified my condition in a single consultation. Absolute game changer.',
  },
  {
    id: 'g2',
    source: 'google',
    author: 'Rohit Desai',
    initials: 'RD',
    rating: 5,
    date: '1 month ago',
    title: 'Best rheumatologist in Pune',
    body: 'Incredibly knowledgeable and patient. He explained my diagnosis in a way I could actually understand. Highly recommend for anyone dealing with joint or autoimmune issues.',
  },
  {
    id: 'g3',
    source: 'google',
    author: 'Sunita Kulkarni',
    initials: 'SK',
    rating: 5,
    date: '1 month ago',
    title: 'Very professional',
    body: 'The appointment was on time and the staff were courteous. Dr. Kamble\'s thorough approach gave me confidence in my treatment plan.',
  },
  {
    id: 'g4',
    source: 'google',
    author: 'Amit Joshi',
    initials: 'AJ',
    rating: 5,
    date: '2 months ago',
    title: 'Highly recommend',
    body: 'My mother has been a patient for over a year. The improvement in her arthritis has been remarkable. Dr. Kamble genuinely cares about his patients.',
  },
  {
    id: 'g5',
    source: 'google',
    author: 'Kavita Nair',
    initials: 'KN',
    rating: 4,
    date: '3 months ago',
    title: 'Good experience overall',
    body: 'Very knowledgeable doctor. The waiting time was a bit long but the consultation itself was thorough and reassuring.',
  },
  {
    id: 'g6',
    source: 'google',
    author: 'Suresh Patil',
    initials: 'SP',
    rating: 5,
    date: '3 months ago',
    title: 'Life-changing treatment',
    body: 'Was suffering from lupus for 3 years with no proper diagnosis. Dr. Kamble diagnosed and started treatment within 2 visits. Cannot thank him enough.',
  },
]

// Star distribution (for rating breakdown bar)
export const RATING_DISTRIBUTION = [
  { stars: 5, count: 270 },
  { stars: 4, count: 28  },
  { stars: 3, count: 9   },
  { stars: 2, count: 3   },
  { stars: 1, count: 2   },
]

