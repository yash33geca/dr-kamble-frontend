import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import LoginPage from './pages/LoginPage'
import './index.css'
import Contact from './components/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website/contact" element={<Contact />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}