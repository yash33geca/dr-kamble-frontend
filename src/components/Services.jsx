import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/dummy'
import styles from './Services.module.css'

const DESKTOP_PAGE_SIZE = 6
const MOBILE_PAGE_SIZE  = 2
const MOBILE_BREAKPOINT = 640

function chunk(list, size) {
  const pages = []
  for (let i = 0; i < list.length; i += size) {
    pages.push(list.slice(i, i + size))
  }
  return pages
}

export default function Services() {
  const sliderRef   = useRef(null)
  const isPausedRef = useRef(false)

  // Track whether we're in the mobile breakpoint so the number of cards
  // per "page" (and per auto-slide step) can differ: 6 on desktop/tablet,
  // 2 on mobile.
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= MOBILE_BREAKPOINT : false
  )

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const handleChange = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  const pageSize = isMobile ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE
  const pages = useMemo(() => chunk(services, pageSize), [pageSize])

  // If the breakpoint flips (resize/rotate) the page count changes, so
  // snap the scroll position back to the start to avoid landing mid-card.
  useEffect(() => {
    sliderRef.current?.scrollTo({ left: 0 })
  }, [pageSize])

  function scrollSlider(direction) {
    const el = sliderRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  // Auto-slide right through the pages, looping back to the start once
  // it reaches the end. Depends on pageSize too, since the interval
  // closes over `el` sizing that changes with it.
  useEffect(() => {
    const el = sliderRef.current
    if (!el || pages.length <= 1) return

    const intervalId = setInterval(() => {
      if (isPausedRef.current) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 0) return
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollSlider(1)
      }
    }, 3800)

    return () => clearInterval(intervalId)
  }, [pages.length, pageSize])

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Treat</p>
          <h2 className={styles.heading}>Conditions </h2>
          <p className={styles.sub}>
            Specialised diagnosis and management of the full spectrum of rheumatological and autoimmune conditions.
          </p>
        </div>

        <div className={styles.sliderWrap}>
          <div
            className={styles.slider}
            ref={sliderRef}
            onMouseEnter={() => { isPausedRef.current = true }}
            onMouseLeave={() => { isPausedRef.current = false }}
            onTouchStart={() => { isPausedRef.current = true }}
            onTouchEnd={() => { isPausedRef.current = false }}
          >
            {pages.map((pageServices, pageIndex) => (
              <div className={styles.page} key={pageIndex}>
                {pageServices.map((s, i) => (
                  <div
                    key={s.id}
                    className={styles.card}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className={styles.imageBox}>
                      {s.image ? (
                        <img src={s.image} alt={s.title} loading="lazy" />
                      ) : (
                        <span className={styles.iconFallback}>{s.icon}</span>
                      )}
                    </div>
                    <div className={styles.cardBody}>
                       <h3 className={styles.title}>{s.title}</h3>
                       <p className={styles.desc}>{s.description}</p>
                       <Link to={`/services#service-${s.id}`} className={styles.showMore}>
                         Show more →
                       </Link>
                    </div>
                    <div className={styles.footer}>
                      <span className={styles.duration}>⏱ {s.duration} min</span>
                      <a href="/contact" className={styles.bookLink}>Book →</a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {pages.length > 1 && (
            <div className={styles.sliderControls}>
              <button
                type="button"
                className={styles.sliderBtn}
                onClick={() => scrollSlider(-1)}
                aria-label="Previous services"
              >
                ←
              </button>
              <button
                type="button"
                className={styles.sliderBtn}
                onClick={() => scrollSlider(1)}
                aria-label="Next services"
              >
                →
              </button>
            </div>
          )}

          <Link to="/services" className={styles.viewMoreLink}>
            View More →
          </Link>
        </div>
      </div>
    </section>
  )
}

