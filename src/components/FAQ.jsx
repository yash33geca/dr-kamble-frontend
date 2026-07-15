import { useState } from 'react'
import { faqs } from '../data/dummy'
import styles from './FAQ.module.css'

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        <span>{faq.question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && <p className={styles.answer}>{faq.answer}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className="section-label">Got Questions?</p>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <p className={styles.sub}>
              Can't find your answer here? Call us or use the contact form and we'll respond within one business day.
            </p>
            <a href="/contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
              Ask a Question →
            </a>
          </div>
          <div className={styles.right}>
            {faqs.map(f => <FAQItem key={f.id} faq={f} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
