import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import marketplaces from "../../data/marketplaces";
import products from "../../data/products";
import "./MarketDetail.css";

function MarketDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "uz";

  const marketplace = marketplaces.find((m) => m.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!marketplace) {
    const notFoundText =
      lang === "ru"
        ? "Маркетплейс не найден"
        : lang === "en"
          ? "Marketplace not found"
          : lang === "fr"
            ? "Marketplace non trouvé"
            : lang === "tr"
              ? "Pazaryeri bulunamadı"
              : "Marketpleys topilmadi";

    return (
      <div className="md-not-found">
        <div className="container">
          <h1>404</h1>
          <p>{notFoundText}</p>
          <button
            onClick={() => navigate("/marketplace")}
            className="btn btn-primary"
          >
            {t("marketDetail.back")}
          </button>
        </div>
      </div>
    );
  }

  const mpProducts = products.filter((p) =>
    marketplace.productIds.includes(p.id),
  );
  const formatPrice = (price) => new Intl.NumberFormat("uz-UZ").format(price);

  const handleLogoError = (e) => {
    e.target.style.display = "none";
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = "grid";
    }
  };

  return (
    <div
      className="market-detail"
      style={{ "--brand-color": marketplace.color }}
    >
      <section className="md-hero">
        <div className="md-hero-bg" aria-hidden="true"></div>
        <div className="container">
          <button onClick={() => navigate("/marketplace")} className="md-back">
            {t("marketDetail.back")}
          </button>

          <div className="md-hero-content">
            <div className="md-logo-large">
              <img
                src={marketplace.logo}
                alt={marketplace.name}
                onError={handleLogoError}
              />
              <span className="md-logo-fallback" style={{ display: "none" }}>
                {marketplace.name.charAt(0)}
              </span>
            </div>

            <div className="md-hero-text">
              <span className="md-label">{t("marketplace.label")}</span>
              <h1 className="md-title">
                {marketplace.name}
                <span className="md-title-tail">
                  {t("marketDetail.productsAt")}
                </span>
              </h1>
              <p className="md-description">{marketplace.description[lang]}</p>

              <a
                href={marketplace.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="md-store-btn"
              >
                {t("marketDetail.visitStore")}
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="md-products">
        <div className="container">
          <div className="md-products-header">
            <h2>
              {marketplace.name}
              <span>{t("marketDetail.productsAt")}</span>
            </h2>
            <span className="md-count">
              {mpProducts.length} {t("products.label").toLowerCase()}
            </span>
          </div>

          <div className="md-products-grid">
            {mpProducts.map((product, idx) => (
              <a
                key={product.id}
                href={
                  marketplace.productLinks[product.id] || marketplace.storeUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="md-product-card"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="md-product-img">
                  {product.badge && (
                    <span className={`product-badge badge-${product.badge}`}>
                      {product.badge === "new" ? "✦ NEW" : "★ HOT"}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name[lang]}
                    loading="lazy"
                  />
                  <div className="md-product-overlay">
                    <span className="md-product-overlay-text">
                      {t("marketDetail.buyNow")} ↗
                    </span>
                  </div>
                </div>
                <div className="md-product-info">
                  <span className="md-product-cat">
                    {product.category[lang]}
                  </span>
                  <h3 className="md-product-name">{product.name[lang]}</h3>
                  <div className="md-product-bottom">
                    <div className="md-product-price">
                      <span className="price-num">
                        {formatPrice(product.price)}
                      </span>
                      <span className="price-cur">
                        {t("products.currency")}
                      </span>
                    </div>
                    <span className="md-product-arrow">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MarketDetail;
