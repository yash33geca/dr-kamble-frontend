import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import LoginPage from './pages/LoginPage'
import './index.css'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}