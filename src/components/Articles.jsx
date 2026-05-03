import { Link } from 'react-router-dom'
import { articles } from '../data/dummy'
import styles from './Articles.module.css'

export default function Articles() {
  const [featured, ...rest] = articles

  return (
    <section id="articles" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Patient Education</p>
            <h2 className={styles.heading}>Medical Articles & Guides</h2>
          </div>
          <p className={styles.sub}>
            Evidence-based articles on rheumatic conditions, treatments, and living well with autoimmune disease.
          </p>
        </div>

        <div className={styles.grid}>
          <Link to={`/articles/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredBg} />
            <div className={styles.featuredContent}>
              <span className={styles.catBadge}>{featured.category}</span>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.meta}>
                <span>{featured.author}</span>
                <span>·</span>
                <span>{new Date(featured.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
                <span>·</span>
                <span>{featured.readTime} min read</span>
              </div>
            </div>
          </Link>

          <div className={styles.list}>
            {rest.map(a => (
              <Link key={a.id} to={`/articles/${a.slug}`} className={styles.item}>
                <div className={styles.itemContent}>
                  <span className={styles.itemCat}>{a.category}</span>
                  <h4 className={styles.itemTitle}>{a.title}</h4>
                  <div className={styles.itemMeta}>
                    <span>{new Date(a.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{a.readTime} min read</span>
                  </div>
                </div>
                <span className={styles.arrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
