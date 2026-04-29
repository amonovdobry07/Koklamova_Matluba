import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

const TARGET_EMAIL = 'omonovogabek79@gmail.com'

function Contact() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.slice(0, 2) || 'uz'

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = true
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = true
    if (!form.message.trim()) errs.message = true
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const subject = `Yangi murojaat: ${form.name}`
    const body = [
      `Ism: ${form.name}`,
      form.company ? `Korxona: ${form.company}` : null,
      `Email: ${form.email}`,
      form.phone ? `Telefon: ${form.phone}` : null,
      form.location ? `Manzil: ${form.location}` : null,
      '',
      'Xabar:',
      form.message,
    ].filter(Boolean).join('\n')

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
      setForm({ name: '', company: '', email: '', phone: '', location: '', message: '' })
    }, 4500)
  }

  const successText = {
    title:
      lang === 'ru' ? 'Спасибо!' :
      lang === 'en' ? 'Thank you!' :
      lang === 'fr' ? 'Merci !' :
      lang === 'tr' ? 'Teşekkürler!' :
      'Rahmat!',
    text:
      lang === 'ru' ? 'Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.' :
      lang === 'en' ? 'Your message has been sent. We will get in touch with you shortly.' :
      lang === 'fr' ? 'Votre message a été envoyé. Nous vous contacterons sous peu.' :
      lang === 'tr' ? 'Mesajınız gönderildi. En kısa zamanda sizinle iletişime geçeceğiz.' :
      'Xabaringiz yuborildi. Tez orada siz bilan bog\'lanamiz.',
  }

  return (
    <div className="contact-page">
      {/* ORNAMENT BACKGROUND */}
      <div className="contact-ornament" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ornament" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#ornament)" />
        </svg>
      </div>

      {/* HERO */}
      <section className="ct-hero">
        <div className="container">
          <div className="ct-hero-inner">
            <span className="section-label">{t('contact.label')}</span>
            <h1 className="ct-hero-title">{t('contact.title')}</h1>
            <p className="ct-hero-subtitle">{t('contact.subtitle')}</p>
            <div className="ct-hero-divider">
              <span></span>
              <i>✦</i>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GRID: FORM + INFO */}
      <section className="ct-main" ref={addToRefs}>
        <div className="container">
          <div className="ct-grid">
            {/* FORM SIDE */}
            <div className="ct-form-side">
              <div className="ct-form-deco" aria-hidden="true">
                <svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15 L40 15 M80 15 L120 15" stroke="currentColor" strokeWidth="1" />
                  <circle cx="60" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="60" cy="15" r="2" fill="currentColor" />
                  <circle cx="50" cy="15" r="1.5" fill="currentColor" />
                  <circle cx="70" cy="15" r="1.5" fill="currentColor" />
                </svg>
              </div>

              <h2 className="ct-form-title">
                {lang === 'ru' ? 'Напишите нам' :
                 lang === 'en' ? 'Send us a message' :
                 lang === 'fr' ? 'Envoyez-nous un message' :
                 lang === 'tr' ? 'Bize yazın' :
                 'Bizga yozing'}
              </h2>

              {success ? (
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="26" cy="26" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M14 27 l8 8 l16 -16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>{successText.title}</h3>
                  <p>{successText.text}</p>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit} noValidate>
                  <div className="ct-row">
                    <div className={`ct-field ${errors.name ? 'has-error' : ''} ${form.name ? 'filled' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">{t('contact.name')}*</label>
                    </div>
                    <div className={`ct-field ${form.company ? 'filled' : ''}`}>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                      />
                      <label htmlFor="company">{t('contact.company')}</label>
                    </div>
                  </div>

                  <div className="ct-row">
                    <div className={`ct-field ${errors.email ? 'has-error' : ''} ${form.email ? 'filled' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">{t('contact.email')}*</label>
                    </div>
                    <div className={`ct-field ${form.phone ? 'filled' : ''}`}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone">{t('contact.phone')}</label>
                    </div>
                  </div>

                  <div className={`ct-field ${form.location ? 'filled' : ''}`}>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                    />
                    <label htmlFor="location">{t('contact.location')}</label>
                  </div>

                  <div className={`ct-field ct-textarea ${errors.message ? 'has-error' : ''} ${form.message ? 'filled' : ''}`}>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">{t('contact.message')}*</label>
                  </div>

                  <button type="submit" className="ct-submit">
                    <span className="ct-submit-text">{t('contact.sendMail')}</span>
                    <span className="ct-submit-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* INFO SIDE */}
            <div className="ct-info-side">
              <a href={`mailto:${TARGET_EMAIL}`} className="ct-info-card ct-card-email">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </div>
                <div className="ct-info-body">
                  <span className="ct-info-label">{t('contact.emailLabel')}</span>
                  <span className="ct-info-value">{TARGET_EMAIL}</span>
                </div>
                <span className="ct-info-arrow">↗</span>
              </a>

              <a href="tel:+998901234567" className="ct-info-card ct-card-phone">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="ct-info-body">
                  <span className="ct-info-label">{t('contact.phoneLabel')}</span>
                  <span className="ct-info-value">+998 90 123 45 67</span>
                </div>
                <span className="ct-info-arrow">↗</span>
              </a>

              <div className="ct-info-card ct-card-hours">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="ct-info-body">
                  <span className="ct-info-label">{t('contact.workHours')}</span>
                  <span className="ct-info-value">{t('contact.workHoursValue')}</span>
                </div>
              </div>

              <div className="ct-info-card ct-card-address">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="ct-info-body">
                  <span className="ct-info-label">{t('contact.addressLabel')}</span>
                  <span className="ct-info-value">{t('contact.addressValue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="ct-map-section" ref={addToRefs}>
        <div className="container">
          <div className="ct-map-header">
            <span className="section-label">
              {lang === 'ru' ? 'Локация' :
               lang === 'en' ? 'Location' :
               lang === 'fr' ? 'Emplacement' :
               lang === 'tr' ? 'Konum' :
               'Lokatsiya'}
            </span>
            <h2 className="section-title">
              {lang === 'ru' ? 'Найдите нас на карте' :
               lang === 'en' ? 'Find us on the map' :
               lang === 'fr' ? 'Trouvez-nous sur la carte' :
               lang === 'tr' ? 'Bizi haritada bulun' :
               'Bizni xaritada toping'}
            </h2>
          </div>

          <div className="ct-map-wrap">
            <iframe
              title="Milliy Bozor Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.2697%2C41.3061%2C69.2897%2C41.3161&layer=mapnik&marker=41.3111%2C69.2797"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href="https://www.openstreetmap.org/?mlat=41.3111&mlon=69.2797#map=17/41.3111/69.2797"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-map-link"
            >
              <span>
                {lang === 'ru' ? 'Открыть в карте' :
                 lang === 'en' ? 'Open in map' :
                 lang === 'fr' ? 'Ouvrir sur la carte' :
                 lang === 'tr' ? 'Haritada aç' :
                 'Xaritada ochish'}
              </span>
              <span className="ct-map-arrow">↗</span>
            </a>
            <div className="ct-map-pin">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact