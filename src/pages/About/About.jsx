import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './About.css'

function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.slice(0, 2) || 'uz'
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
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

  // Til bo'yicha qadriyatlar matnlari
  const values = [
    {
      icon: '✦',
      title: { uz: "An'ana", ru: 'Традиция', en: 'Tradition', fr: 'Tradition', tr: 'Gelenek' },
      text: {
        uz: "Asrlar davomida saqlangan hunar va naqshlar — biz uchun muqaddas meros.",
        ru: 'Ремёсла и узоры, сохранённые веками — священное наследие для нас.',
        en: 'Crafts and patterns preserved for centuries — sacred heritage to us.',
        fr: 'Métiers et motifs préservés depuis des siècles — héritage sacré.',
        tr: 'Yüzyıllar boyunca korunan zanaat ve desenler — bizim için kutsal miras.',
      },
    },
    {
      icon: '◆',
      title: { uz: 'Sifat', ru: 'Качество', en: 'Quality', fr: 'Qualité', tr: 'Kalite' },
      text: {
        uz: "Har bir mahsulot — qo'lda yasalgan, har bir tikuv — diqqat bilan tekshirilgan.",
        ru: 'Каждое изделие — ручной работы, каждый шов — тщательно проверен.',
        en: 'Every product is handmade, every stitch carefully inspected.',
        fr: 'Chaque produit fait main, chaque couture vérifiée avec soin.',
        tr: 'Her ürün el yapımı, her dikiş özenle kontrol edilmiş.',
      },
    },
    {
      icon: '✧',
      title: { uz: 'Ishonch', ru: 'Доверие', en: 'Trust', fr: 'Confiance', tr: 'Güven' },
      text: {
        uz: "Mijozlarimizning ishonchi — bizning eng katta boyligimiz va mas'uliyatimiz.",
        ru: 'Доверие клиентов — наше главное богатство и ответственность.',
        en: 'Customer trust is our greatest wealth and responsibility.',
        fr: "La confiance des clients est notre plus grande richesse.",
        tr: 'Müşteri güveni — en büyük servetimiz ve sorumluluğumuz.',
      },
    },
    {
      icon: '✺',
      title: { uz: 'Hamkorlik', ru: 'Партнёрство', en: 'Partnership', fr: 'Partenariat', tr: 'Ortaklık' },
      text: {
        uz: "50 dan ortiq hunarmand bilan birga — har bir buyumning hikoyasi bor.",
        ru: 'Вместе с 50+ ремесленниками — за каждым изделием своя история.',
        en: 'Together with 50+ artisans — each piece carries its own story.',
        fr: '50+ artisans à nos côtés — chaque pièce a sa propre histoire.',
        tr: "50'den fazla zanaatkârla birlikte — her ürünün kendi hikâyesi var.",
      },
    },
  ]

  const timeline = [
    {
      year: '2020',
      title: {
        uz: 'Boshlanish',
        ru: 'Начало',
        en: 'The beginning',
        fr: 'Le début',
        tr: 'Başlangıç',
      },
      text: {
        uz: "G'oyamiz tug'ildi — O'zbek hunarmandchiligini butun dunyoga ko'rsatish.",
        ru: 'Зародилась идея — показать миру узбекское ремесло.',
        en: 'Our idea was born — to show Uzbek craft to the world.',
        fr: "Notre idée est née — montrer l'artisanat ouzbek au monde.",
        tr: "Fikrimiz doğdu — Özbek zanaatını dünyaya göstermek.",
      },
    },
    {
      year: '2022',
      title: {
        uz: "Birinchi marketpleyslar",
        ru: 'Первые маркетплейсы',
        en: 'First marketplaces',
        fr: 'Premiers marketplaces',
        tr: 'İlk pazaryerleri',
      },
      text: {
        uz: 'Wildberries va Uzum Marketda rasmiy hisobimiz ochildi.',
        ru: 'Открыли официальные аккаунты на Wildberries и Uzum Market.',
        en: 'Opened official accounts on Wildberries and Uzum Market.',
        fr: 'Comptes officiels ouverts sur Wildberries et Uzum Market.',
        tr: 'Wildberries ve Uzum Market’te resmi hesaplar açıldı.',
      },
    },
    {
      year: '2024',
      title: {
        uz: 'Kengayish',
        ru: 'Расширение',
        en: 'Expansion',
        fr: 'Expansion',
        tr: 'Genişleme',
      },
      text: {
        uz: 'Yandex Market va Ozonga chiqdik. 50+ hunarmand bilan hamkorlik.',
        ru: 'Вышли на Yandex Market и Ozon. Сотрудничество с 50+ мастерами.',
        en: 'Entered Yandex Market and Ozon. Collaboration with 50+ artisans.',
        fr: 'Entrée sur Yandex Market et Ozon. Collaboration avec 50+ artisans.',
        tr: "Yandex Market ve Ozon'a girdik. 50+ zanaatkâr ile iş birliği.",
      },
    },
    {
      year: '2026',
      title: {
        uz: 'Bugun',
        ru: 'Сегодня',
        en: 'Today',
        fr: "Aujourd'hui",
        tr: 'Bugün',
      },
      text: {
        uz: '12 viloyat, 200+ mahsulot, minglab xursand mijozlar.',
        ru: '12 регионов, 200+ товаров, тысячи довольных клиентов.',
        en: '12 regions, 200+ products, thousands of happy customers.',
        fr: '12 régions, 200+ produits, milliers de clients satisfaits.',
        tr: '12 bölge, 200+ ürün, binlerce mutlu müşteri.',
      },
    },
  ]

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-hero-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="ab-hero-grid">
            <div className="ab-hero-content">
              <span className="section-label">{t('about.label')}</span>
              <h1 className="ab-hero-title">{t('about.title')}</h1>
              <p className="ab-hero-text">{t('about.p1')}</p>
              <p className="ab-hero-text">{t('about.p2')}</p>
            </div>
            <div className="ab-hero-visual">
              <div className="ab-img ab-img-1">
                <img
                  src="https://images.unsplash.com/photo-1591197172062-c718f82aba20?w=600&q=80"
                  alt="Craftsman"
                />
              </div>
              <div className="ab-img ab-img-2">
                <img
                  src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=400&q=80"
                  alt="Embroidery"
                />
              </div>
              <div className="ab-decor-circle"></div>
              <div className="ab-decor-square"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ab-stats" ref={addToRefs}>
        <div className="container">
          <div className="ab-stats-grid">
            <div className="ab-stat">
              <span className="ab-stat-num">50<small>+</small></span>
              <span className="ab-stat-label">{t('about.statsClients')}</span>
            </div>
            <div className="ab-stat">
              <span className="ab-stat-num">200<small>+</small></span>
              <span className="ab-stat-label">{t('about.statsProducts')}</span>
            </div>
            <div className="ab-stat">
              <span className="ab-stat-num">5</span>
              <span className="ab-stat-label">{t('about.statsYears')}</span>
            </div>
            <div className="ab-stat">
              <span className="ab-stat-num">12</span>
              <span className="ab-stat-label">{t('about.statsRegions')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="ab-mission" ref={addToRefs}>
        <div className="container">
          <div className="ab-mission-box">
            <div className="ab-mission-pattern"></div>
            <div className="ab-mission-content">
              <span className="ab-mission-icon">❝</span>
              <h2>{t('about.missionTitle')}</h2>
              <p>{t('about.missionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="ab-values" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              {lang === 'ru' ? 'Ценности' : lang === 'en' ? 'Values' : lang === 'fr' ? 'Valeurs' : lang === 'tr' ? 'Değerler' : 'Qadriyatlar'}
            </span>
            <h2 className="section-title">
              {lang === 'ru' ? 'То, во что мы верим' :
               lang === 'en' ? 'What we believe in' :
               lang === 'fr' ? 'Ce en quoi nous croyons' :
               lang === 'tr' ? 'İnandığımız şeyler' :
               'Biz ishonadigan narsalar'}
            </h2>
          </div>

          <div className="ab-values-grid">
            {values.map((val, idx) => (
              <div className="ab-value-card" key={idx}>
                <span className="ab-value-icon">{val.icon}</span>
                <h3>{val.title[lang]}</h3>
                <p>{val.text[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="ab-timeline" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              {lang === 'ru' ? 'Наш путь' : lang === 'en' ? 'Our path' : lang === 'fr' ? 'Notre parcours' : lang === 'tr' ? 'Yolumuz' : "Bizning yo'l"}
            </span>
            <h2 className="section-title">
              {lang === 'ru' ? 'История в датах' :
               lang === 'en' ? 'History in dates' :
               lang === 'fr' ? "L'histoire en dates" :
               lang === 'tr' ? 'Tarihlerde tarih' :
               'Sanalarda tarix'}
            </h2>
          </div>

          <div className="ab-timeline-line">
            {timeline.map((item, idx) => (
              <div className={`ab-tl-item ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
                <div className="ab-tl-dot"></div>
                <div className="ab-tl-card">
                  <span className="ab-tl-year">{item.year}</span>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.text[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta" ref={addToRefs}>
        <div className="container">
          <div className="ab-cta-box">
            <h2>
              {lang === 'ru' ? 'Готовы открыть для себя наш мир?' :
               lang === 'en' ? 'Ready to discover our world?' :
               lang === 'fr' ? 'Prêt à découvrir notre univers ?' :
               lang === 'tr' ? 'Dünyamızı keşfetmeye hazır mısınız?' :
               "Bizning dunyomizni kashf qilishga tayyormisiz?"}
            </h2>
            <div className="ab-cta-actions">
              <Link to="/products" className="btn btn-primary">
                {t('home.heroBtnPrimary')} <span className="btn-arrow">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About