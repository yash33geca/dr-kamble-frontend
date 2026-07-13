// import { services } from '../data/dummy'
// import styles from './Services.module.css'

// export default function Services() {
//   return (
//     <section id="services" className={styles.section}>
//       <div className="container">
//         <div className={styles.header}>
//           <p className="section-label">What We Treat</p>
//           <h2 className={styles.heading}>Conditions & Services</h2>
//           <p className={styles.sub}>
//             Specialised diagnosis and management of the full spectrum of rheumatological and autoimmune conditions.
//           </p>
//         </div>

//         <div className={styles.grid}>
//           {services.map((s, i) => (
//             <div key={s.id} className={styles.card} style={{ animationDelay: `${i * 60}ms` }}>
//               <div className={styles.iconBox}>{s.icon}</div>
//               <div className={styles.cardBody}>
//                 <h3 className={styles.title}>{s.title}</h3>
//                 <p className={styles.desc}>{s.description}</p>
//               </div>
//               <div className={styles.footer}>
//                 <span className={styles.duration}>⏱ {s.duration} min</span>
//                 <a href="#contact" className={styles.bookLink}>Book →</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// import { useEffect, useRef } from 'react'
// import { services } from '../data/dummy'
// import styles from './Services.module.css'

// export default function Services() {
//   const sliderRef  = useRef(null)
//   const isPausedRef = useRef(false)

//   function scrollSlider(direction) {
//     const el = sliderRef.current
//     if (!el) return
//     const card = el.querySelector('[data-slider-item]')
//     const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8
//     el.scrollBy({ left: direction * step, behavior: 'smooth' })
//   }

//   // Auto-slide left → right through the services, looping back to the
//   // start once it reaches the end. Adding more services to the data
//   // just makes the track longer — no other change needed. Pauses while
//   // the user is hovering/touching so it doesn't fight manual scrolling.
//   useEffect(() => {
//     const el = sliderRef.current
//     if (!el || services.length === 0) return

//     const intervalId = setInterval(() => {
//       if (isPausedRef.current) return
//       const maxScroll = el.scrollWidth - el.clientWidth
//       if (maxScroll <= 0) return
//       if (el.scrollLeft >= maxScroll - 4) {
//         el.scrollTo({ left: 0, behavior: 'smooth' })
//       } else {
//         scrollSlider(1)
//       }
//     }, 3200)

//     return () => clearInterval(intervalId)
//   }, [])

//   return (
//     <section id="services" className={styles.section}>
//       <div className="container">
//         <div className={styles.header}>
//           <p className="section-label">What We Treat</p>
//           <h2 className={styles.heading}>Conditions & Services</h2>
//           <p className={styles.sub}>
//             Specialised diagnosis and management of the full spectrum of rheumatological and autoimmune conditions.
//           </p>
//         </div>

//         <div className={styles.sliderWrap}>
//           <div
//             className={styles.slider}
//             ref={sliderRef}
//             onMouseEnter={() => { isPausedRef.current = true }}
//             onMouseLeave={() => { isPausedRef.current = false }}
//             onTouchStart={() => { isPausedRef.current = true }}
//             onTouchEnd={() => { isPausedRef.current = false }}
//           >
//             {services.map((s, i) => (
//               <div
//                 key={s.id}
//                 data-slider-item
//                 className={styles.card}
//                 style={{ animationDelay: `${i * 60}ms` }}
//               >
//                 <div className={styles.imageBox}>
//                   {s.image ? (
//                     <img src={s.image} alt={s.title} loading="lazy" />
//                   ) : (
//                     <span className={styles.iconFallback}>{s.icon}</span>
//                   )}
//                 </div>
//                 <div className={styles.cardBody}>
//                   <h3 className={styles.title}>{s.title}</h3>
//                   <p className={styles.desc}>{s.description}</p>
//                 </div>
//                 <div className={styles.footer}>
//                   <span className={styles.duration}>⏱ {s.duration} min</span>
//                   <a href="#contact" className={styles.bookLink}>Book →</a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.sliderControls}>
//             <button
//               type="button"
//               className={styles.sliderBtn}
//               onClick={() => scrollSlider(-1)}
//               aria-label="Scroll services left"
//             >
//               ←
//             </button>
//             <button
//               type="button"
//               className={styles.sliderBtn}
//               onClick={() => scrollSlider(1)}
//               aria-label="Scroll services right"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useEffect, useMemo, useRef } from 'react'
import { services } from '../data/dummy'
import styles from './Services.module.css'

const PAGE_SIZE = 6

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

  const pages = useMemo(() => chunk(services, PAGE_SIZE), [])

  function scrollSlider(direction) {
    const el = sliderRef.current
    if (!el) return
    // One "page" (6 cards) is exactly the slider's own width, so step
    // by clientWidth rather than a single card's width.
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  // Auto-slide right through the pages of 6, looping back to the start
  // once it reaches the end. Adding more services just adds more pages —
  // no other change needed. Pauses on hover/touch so it doesn't fight
  // manual scrolling or reading.
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
  }, [pages.length])

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Treat</p>
          <h2 className={styles.heading}>Conditions & Services</h2>
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
                    </div>
                    <div className={styles.footer}>
                      <span className={styles.duration}>⏱ {s.duration} min</span>
                      <a href="#contact" className={styles.bookLink}>Book →</a>
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
        </div>
      </div>
    </section>
  )
}