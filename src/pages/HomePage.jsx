import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Articles from '../components/Articles'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Hero />
        </div>
        <div className={styles.servicesSection}>
          <Services />
        </div>
        <div className={styles.aboutSection}>
          <About />
        </div>
        <div className={styles.reviewsSection}>
          <Reviews />
        </div>
        <div className={styles.articlesSection}>
          <Articles />
        </div>
        <div className={styles.faqSection}>
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  )
}
