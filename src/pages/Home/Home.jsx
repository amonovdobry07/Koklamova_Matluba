import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import products from '../../data/products'
import './Home.css'

function Home() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.slice(0, 2) || 'uz'
  const featuredProducts = products.slice(0, 4)
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat('uz-UZ').format(price)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-pattern" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">
              <span className="dot"></span>
              {t('home.heroLabel')}
            </span>
            <h1 className="hero-title">
              {t('home.heroTitle')}
            </h1>
            <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                {t('home.heroBtnPrimary')}
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t('home.heroBtnSecondary')}
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-stack">
              <div className="hero-img hero-img-1">
                <img
                  src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=600&q=80"
                  alt="Suzani"
                />
              </div>
              <div className="hero-img hero-img-2">
                <img
                  src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=400&q=80"
                  alt="Ceramics"
                />
              </div>
              <div className="hero-img hero-img-3">
                <img
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&q=80"
                  alt="Carpet"
                />
              </div>
              <div className="hero-decor"></div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span></span>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="home-about" ref={addToRefs}>
        <div className="container">
          <div className="about-grid">
            <div className="about-left">
              <span className="section-label">{t('home.aboutLabel')}</span>
              <h2 className="section-title">{t('home.aboutTitle')}</h2>
              <p className="about-text">{t('home.aboutText')}</p>
              <Link to="/about" className="link-arrow">
                {t('home.heroBtnSecondary')} <span>→</span>
              </Link>
            </div>
            <div className="about-right">
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-num">50+</span>
                  <span className="stat-label">{t('about.statsClients').toLowerCase()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">200+</span>
                  <span className="stat-label">{t('about.statsProducts').toLowerCase()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">5</span>
                  <span className="stat-label">{t('about.statsYears').toLowerCase()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">12</span>
                  <span className="stat-label">{t('about.statsRegions').toLowerCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-features" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">★</span>
            <h2 className="section-title">{t('home.featuresTitle')}</h2>
            <p className="section-subtitle">{t('home.featuresSubtitle')}</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>{t('home.f1Title')}</h3>
              <p>{t('home.f1Desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>{t('home.f2Title')}</h3>
              <p>{t('home.f2Desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♥</div>
              <h3>{t('home.f3Title')}</h3>
              <p>{t('home.f3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-products" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('products.label')}</span>
            <h2 className="section-title">{t('products.title')}</h2>
            <p className="section-subtitle">{t('products.subtitle')}</p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-img-wrap">
                  {product.badge && (
                    <span className={`product-badge badge-${product.badge}`}>
                      {product.badge === 'new' ? '✦ NEW' : '★ HOT'}
                    </span>
                  )}
                  <img src={product.image} alt={product.name[lang]} loading="lazy" />
                  <div className="product-overlay">
                    <Link to="/products" className="overlay-btn">
                      {t('products.detail')}
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-cat">{product.category[lang]}</span>
                  <h3 className="product-name">{product.name[lang]}</h3>
                  <div className="product-price">
                    <span className="price-num">{formatPrice(product.price)}</span>
                    <span className="price-cur">{t('products.currency')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="products-cta">
            <Link to="/products" className="btn btn-primary">
              {t('home.heroBtnPrimary')} <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="home-cta" ref={addToRefs}>
        <div className="container">
          <div className="cta-box">
            <div className="cta-pattern"></div>
            <div className="cta-content">
              <h2>{t('home.ctaTitle')}</h2>
              <p>{t('home.ctaText')}</p>
              <Link to="/products" className="btn btn-light">
                {t('home.ctaBtn')} <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home