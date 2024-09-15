import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Nav from './components/layout/nav/Nav.jsx'
import Main from './components/layout/main/Main.jsx'
import Footer from './components/layout/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import Projetos from './pages/projetos/Projetos.jsx'
import SobreMim from './pages/sobremim/SobreMim.jsx'
import Contato from './pages/contato/Contato.jsx'

function App() {
  return (
    <div className="app-container">
      <Router>
        <Nav />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Projetos />} />
            <Route path='/sobremim' element={<SobreMim />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  )
}

export default App