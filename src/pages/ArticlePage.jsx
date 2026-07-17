import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/dummy'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './ArticlePage.module.css'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <>
        <Navbar />
        <div className={styles.notFound}>
          <h1>Article not found</h1>
          <Link to="/" className="btn-primary">← Back to Home</Link>
        </div>
        <Footer />
      </>
    )
  }

  const paragraphs = article.content.split('\n\n')

  return (
    <>
      <Navbar />
      <article className={styles.article}>
        <div className={styles.hero}>
          <div className="container">
            <span className={styles.cat}>{article.category}</span>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.meta}>
              <span>{article.author}</span>
              <span>·</span>
              <span>{new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>

        <div className={`container ${styles.body}`}>
          <div className={styles.lead}>{article.excerpt}</div>

          {paragraphs.map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              const text = para.slice(2, -2)
              return <h2 key={i} className={styles.subhead}>{text}</h2>
            }
            // inline bold
            const parts = para.split(/(\*\*[^*]+\*\*)/)
            return (
              <p key={i} className={styles.para}>
                {parts.map((p, j) =>
                  p.startsWith('**') ? <strong key={j}>{p.slice(2, -2)}</strong> : p
                )}
              </p>
            )
          })}

          <div className={styles.cta}>
            <h3>Have questions about this condition?</h3>
            <p>Dr. Kamble's clinic is accepting new patients. Book a consultation to discuss your concerns.</p>
            <Link to="/contact" className="btn-primary">Book an Appointment →</Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
