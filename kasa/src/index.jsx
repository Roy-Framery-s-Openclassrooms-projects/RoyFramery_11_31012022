import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// CSS
import './index.scss'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Housing from './pages/Housing'
import Error from './pages/Error'

const newLang = 'fr'
document.documentElement.lang = newLang

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exat path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
