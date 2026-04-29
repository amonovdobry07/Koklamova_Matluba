import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

const languages = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'tr', label: 'TR' },
]

function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const currentLang =
    languages.find((l) => l.code === i18n.language?.slice(0, 2)) || languages[0]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menyu ochilganda orqa fon skroll bo'lib ketmasligi uchun (qotirib qo'yish)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Qora xiralashgan orqa fon (Faqat menyu ochilganda chiqadi) */}
      <div 
        className={`menu-overlay ${menuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      ></div>

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-mark">M</span>
            <span className="logo-text">MATLUBA TEXTIL</span>
          </NavLink>

          <button
            className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li style={{'--i': 1}}><NavLink to="/" end onClick={closeMenu}>{t('nav.home')}</NavLink></li>
              <li style={{'--i': 2}}><NavLink to="/products" onClick={closeMenu}>{t('nav.products')}</NavLink></li>
              <li style={{'--i': 3}}><NavLink to="/marketplace" onClick={closeMenu}>{t('nav.marketplace')}</NavLink></li>
              <li style={{'--i': 4}}><NavLink to="/about" onClick={closeMenu}>{t('nav.about')}</NavLink></li>
              <li style={{'--i': 5}}><NavLink to="/contact" onClick={closeMenu}>{t('nav.contact')}</NavLink></li>
            </ul>

            <div className="lang-switcher" style={{'--i': 6}}>
              <button
                className="lang-current"
                onClick={() => setLangOpen(!langOpen)}
              >
                {currentLang.label}
                <span className="arrow">▾</span>
              </button>
              <ul className={`lang-list ${langOpen ? 'open' : ''}`}>
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className={lang.code === currentLang.code ? 'active' : ''}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar