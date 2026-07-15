import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Articles from '../components/Articles'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Articles />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
