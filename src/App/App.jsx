import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import MarketPlace from '../pages/MarketPlace/MarketPlace'
import MarketDetail from '../pages/MarketPlace/MarketDetail'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/marketplace/:slug" element={<MarketDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App