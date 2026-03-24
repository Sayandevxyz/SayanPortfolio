import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound.jsx'
import SkillNetwork from './pages/Skills'
import ThemeToggle from './pages/themeToggle'
import SemesterTimeline from './pages/SemesterTimeline'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Theme toggle button */}
      <ThemeToggle />
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/skills" element={<SkillNetwork />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} /> {/* ✅ fixed lowercase */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/SemesterTimeline" element={<SemesterTimeline />} />

        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Sayan Mondal — Built with React
      </footer>
    </div>
  )
}
