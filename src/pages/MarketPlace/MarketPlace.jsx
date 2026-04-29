import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import marketplaces from '../../data/marketplaces'
import './MarketPlace.css'

function MarketPlace() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.slice(0, 2) || 'uz'

  return (
    <div className="marketplace-page">
      {/* HERO */}
      <section className="mp-hero">
        <div className="mp-hero-bg" aria-hidden="true"></div>
        <div className="container">
          <span className="section-label">{t('marketplace.label')}</span>
          <h1 className="mp-hero-title">{t('marketplace.title')}</h1>
          <p className="mp-hero-subtitle">{t('marketplace.subtitle')}</p>
        </div>
      </section>

      {/* MARKETPLACES GRID */}
      <section className="mp-grid-section">
        <div className="container">
          <div className="mp-grid">
            {marketplaces.map((mp, idx) => (
              <Link
                to={`/marketplace/${mp.slug}`}
                key={mp.slug}
                className="mp-card"
                style={{
                  '--brand-color': mp.color,
                  animationDelay: `${idx * 0.12}s`,
                }}
              >
                <div className="mp-card-bg" aria-hidden="true"></div>

                <div className="mp-card-top">
                  <div className="mp-logo-box">
                    <img
                      src={mp.logo}
                      alt={mp.name}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'grid'
                      }}
                    />
                    <span className="mp-logo-fallback" style={{ display: 'none' }}>
                      {mp.name.charAt(0)}
                    </span>
                  </div>
                  <span className="mp-product-count">
                    {mp.productIds.length} {t('products.label').toLowerCase()}
                  </span>
                </div>

                <div className="mp-card-body">
                  <h2 className="mp-name">{mp.name}</h2>
                  <p className="mp-description">{mp.description[lang]}</p>
                </div>

                <div className="mp-card-footer">
                  <span className="mp-cta">
                    {t('marketplace.visit')}
                    <span className="mp-arrow">→</span>
                  </span>
                </div>

                <div className="mp-corner-decor" aria-hidden="true"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INFO BANNER */}
      <section className="mp-info-banner">
        <div className="container">
          <div className="info-banner-grid">
            <div className="info-item">
              <div className="info-icon">✦</div>
              <div>
                <h3>{lang === 'ru' ? 'Официальные магазины' : lang === 'en' ? 'Official stores' : lang === 'fr' ? 'Magasins officiels' : lang === 'tr' ? 'Resmi mağazalar' : 'Rasmiy do\'konlar'}</h3>
                <p>{lang === 'ru' ? 'Покупайте напрямую у нас на любой платформе' : lang === 'en' ? 'Buy directly from us on any platform' : lang === 'fr' ? 'Achetez directement chez nous sur toute plateforme' : lang === 'tr' ? 'Her platformda doğrudan bizden alın' : "Har qanday platformada to'g'ridan-to'g'ri bizdan oling"}</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">⚡</div>
              <div>
                <h3>{lang === 'ru' ? 'Быстрая доставка' : lang === 'en' ? 'Fast delivery' : lang === 'fr' ? 'Livraison rapide' : lang === 'tr' ? 'Hızlı teslimat' : 'Tezkor yetkazib berish'}</h3>
                <p>{lang === 'ru' ? 'Доставка по всей стране и за рубеж' : lang === 'en' ? 'Delivery nationwide and abroad' : lang === 'fr' ? 'Livraison nationale et internationale' : lang === 'tr' ? 'Yurt içi ve yurt dışı teslimat' : "Mamlakat va xorijga yetkazib berish"}</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">♥</div>
              <div>
                <h3>{lang === 'ru' ? 'Гарантия качества' : lang === 'en' ? 'Quality guarantee' : lang === 'fr' ? 'Garantie qualité' : lang === 'tr' ? 'Kalite garantisi' : 'Sifat kafolati'}</h3>
                <p>{lang === 'ru' ? 'Каждый товар проверен лично' : lang === 'en' ? 'Every product personally checked' : lang === 'fr' ? 'Chaque produit personnellement vérifié' : lang === 'tr' ? 'Her ürün şahsen kontrol edildi' : "Har bir mahsulot shaxsan tekshirilgan"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarketPlace