import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Logement from './pages/logement/Logement'
import Error404 from './pages/error404/Error404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
