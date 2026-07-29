import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
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
            <button className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }} onClick={() => navigate('/contact')}>
              Ask a Question →
            </button>
          </div>
          <div className={styles.right}>
            {faqs.map(f => <FAQItem key={f.id} faq={f} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
