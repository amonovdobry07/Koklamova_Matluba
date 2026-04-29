import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa' // Ikonkalar qo'shildi
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-pattern" aria-hidden="true"></div>

      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-mark">M</span>
            <h3>Milliy Bozor</h3>
          </div>
          <p>{t('footer.tagline')}</p>
          
          {/* Ijtimoiy tarmoqlar qismi qo'shildi */}
          <div className="footer-socials">
            <a href="https://t.me/Matluba_Kuklamova" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="https://instagram.com/matluba.textil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>{t('footer.navigation')}</h4>
          <ul>
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/products">{t('nav.products')}</Link></li>
            <li><Link to="/marketplace">{t('nav.marketplace')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <ul className="footer-contact">
            <li>📍 {t('contact.addressValue')}</li>
            <li>📞 +998 90 123 45 67</li>
            <li>✉️ omonovogabek79@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Milliy Bozor. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer