import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import products from '../../data/products'
import './Products.css'

function Products() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.slice(0, 2) || 'uz'

  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [search, setSearch] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Unikal kategoriyalar ro'yxati
  const categories = useMemo(() => {
    const unique = new Map()
    products.forEach((p) => {
      Object.entries(p.category).forEach(([code, val]) => {
        if (!unique.has(p.category.uz)) {
          unique.set(p.category.uz, p.category)
        }
      })
    })
    return Array.from(unique.values())
  }, [])

  // Filterlash + saralash
  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category.uz === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim()
      result = result.filter((p) =>
        p.name[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q)
      )
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name[lang].localeCompare(b.name[lang]))
    }

    return result
  }, [activeCategory, sortBy, search, lang])

  const formatPrice = (price) =>
    new Intl.NumberFormat('uz-UZ').format(price)

  // Modal ochilganda body scroll'ni to'xtatish
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedProduct])

  // ESC bilan modalni yopish
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div className="products-page">
      {/* HEADER */}
      <section className="products-hero">
        <div className="products-hero-bg" aria-hidden="true"></div>
        <div className="container">
          <span className="section-label">{t('products.label')}</span>
          <h1 className="products-hero-title">{t('products.title')}</h1>
          <p className="products-hero-subtitle">{t('products.subtitle')}</p>
        </div>
      </section>

      {/* CONTROLS */}
      <section className="products-controls">
        <div className="container">
          <div className="controls-wrapper">
            {/* Search */}
            <div className="search-box">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="text"
                placeholder={lang === 'ru' ? 'Поиск...' : lang === 'en' ? 'Search...' : lang === 'fr' ? 'Rechercher...' : lang === 'tr' ? 'Ara...' : 'Qidirish...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className="search-clear" onClick={() => setSearch('')}>×</button>
              )}
            </div>

            {/* Categories */}
            <ul className="category-list">
              <li>
                <button
                  className={activeCategory === 'all' ? 'active' : ''}
                  onClick={() => setActiveCategory('all')}
                >
                  {lang === 'ru' ? 'Все' : lang === 'en' ? 'All' : lang === 'fr' ? 'Tous' : lang === 'tr' ? 'Tümü' : 'Hammasi'}
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.uz}>
                  <button
                    className={activeCategory === cat.uz ? 'active' : ''}
                    onClick={() => setActiveCategory(cat.uz)}
                  >
                    {cat[lang]}
                  </button>
                </li>
              ))}
            </ul>

            {/* Sort */}
            <div className="sort-box">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">
                  {lang === 'ru' ? 'По умолчанию' : lang === 'en' ? 'Default' : lang === 'fr' ? 'Par défaut' : lang === 'tr' ? 'Varsayılan' : 'Tartiblash'}
                </option>
                <option value="price-asc">
                  {lang === 'ru' ? 'Цена ↑' : lang === 'en' ? 'Price ↑' : lang === 'fr' ? 'Prix ↑' : lang === 'tr' ? 'Fiyat ↑' : "Narx ↑"}
                </option>
                <option value="price-desc">
                  {lang === 'ru' ? 'Цена ↓' : lang === 'en' ? 'Price ↓' : lang === 'fr' ? 'Prix ↓' : lang === 'tr' ? 'Fiyat ↓' : "Narx ↓"}
                </option>
                <option value="name">
                  {lang === 'ru' ? 'По названию' : lang === 'en' ? 'By name' : lang === 'fr' ? 'Par nom' : lang === 'tr' ? 'İsim' : 'Nom bo\'yicha'}
                </option>
              </select>
            </div>
          </div>

          <div className="results-count">
            {filteredProducts.length} {lang === 'ru' ? 'товаров' : lang === 'en' ? 'products' : lang === 'fr' ? 'produits' : lang === 'tr' ? 'ürün' : 'mahsulot'}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="products-grid-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <span className="no-results-icon">✦</span>
              <p>
                {lang === 'ru' ? 'Ничего не найдено' :
                 lang === 'en' ? 'Nothing found' :
                 lang === 'fr' ? 'Rien trouvé' :
                 lang === 'tr' ? 'Bir şey bulunamadı' :
                 'Hech narsa topilmadi'}
              </p>
            </div>
          ) : (
            <div className="all-products-grid">
              {filteredProducts.map((product, idx) => (
                <article
                  key={product.id}
                  className="big-product-card"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="big-card-img">
                    {product.badge && (
                      <span className={`product-badge badge-${product.badge}`}>
                        {product.badge === 'new' ? '✦ NEW' : '★ HOT'}
                      </span>
                    )}
                    <img src={product.image} alt={product.name[lang]} loading="lazy" />
                    <div className="big-card-overlay">
                      <span className="overlay-text">
                        {t('products.detail')} →
                      </span>
                    </div>
                  </div>
                  <div className="big-card-info">
                    <span className="big-card-cat">{product.category[lang]}</span>
                    <h3 className="big-card-name">{product.name[lang]}</h3>
                    <p className="big-card-desc">{product.description[lang]}</p>
                    <div className="big-card-footer">
                      <div className="big-card-price">
                        <span className="price-num">{formatPrice(product.price)}</span>
                        <span className="price-cur">{t('products.currency')}</span>
                      </div>
                      <button className="big-card-btn">
                        {t('products.detail')}
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              ×
            </button>
            <div className="modal-grid">
              <div className="modal-img">
                {selectedProduct.badge && (
                  <span className={`product-badge badge-${selectedProduct.badge}`}>
                    {selectedProduct.badge === 'new' ? '✦ NEW' : '★ HOT'}
                  </span>
                )}
                <img src={selectedProduct.image} alt={selectedProduct.name[lang]} />
              </div>
              <div className="modal-info">
                <span className="modal-cat">{selectedProduct.category[lang]}</span>
                <h2>{selectedProduct.name[lang]}</h2>
                <p className="modal-desc">{selectedProduct.description[lang]}</p>
                <div className="modal-price-block">
                  <span className="modal-price-label">{t('products.price')}</span>
                  <div className="modal-price">
                    <span className="modal-price-num">{formatPrice(selectedProduct.price)}</span>
                    <span className="modal-price-cur">{t('products.currency')}</span>
                  </div>
                </div>
                <div className="modal-features">
                  <div className="modal-feature">
                    <span>✦</span>
                    {lang === 'ru' ? 'Ручная работа' :
                     lang === 'en' ? 'Handcrafted' :
                     lang === 'fr' ? 'Fait main' :
                     lang === 'tr' ? 'El yapımı' :
                     "Qo'lda yasalgan"}
                  </div>
                  <div className="modal-feature">
                    <span>⚡</span>
                    {lang === 'ru' ? 'Быстрая доставка' :
                     lang === 'en' ? 'Fast delivery' :
                     lang === 'fr' ? 'Livraison rapide' :
                     lang === 'tr' ? 'Hızlı teslimat' :
                     'Tezkor yetkazib berish'}
                  </div>
                  <div className="modal-feature">
                    <span>♥</span>
                    {lang === 'ru' ? 'Гарантия качества' :
                     lang === 'en' ? 'Quality guarantee' :
                     lang === 'fr' ? 'Garantie qualité' :
                     lang === 'tr' ? 'Kalite garantisi' :
                     'Sifat kafolati'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products