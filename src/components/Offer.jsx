import { memo, useMemo } from 'react'
import './Offer.css'
import { useTranslation } from 'react-i18next'

function Offer() {
  const { t } = useTranslation()
  const benefits = useMemo(() => t('offer.benefits', { returnObjects: true }), [t])
  const pricingDetails = useMemo(() => t('offer.pricing.details', { returnObjects: true }), [t])

  return (
    <section className="section offer-section" id="offre">
      <div className="container">
        <div className="offer-header">
          <span className="offer-badge">{t('offer.badge')}</span>
          <h2 className="section-title offer-title">
            {t('offer.title')}
          </h2>
          <p className="section-subtitle offer-subtitle">
            {t('offer.subtitle')}
          </p>
        </div>

        <div className="offer-grid">
          {benefits.map((b, i) => (
            <div key={i} className="offer-card">
              <span className="offer-card-icon">{b.icon}</span>
              <h3 className="offer-card-title">{b.title}</h3>
              <p className="offer-card-desc">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="offer-pricing">
          <div className="pricing-inner">
            <div className="pricing-left">
              <p className="pricing-label">{t('offer.pricing.label')}</p>
              <p className="pricing-range">
                <span className="pricing-from">400 €</span>
                <span className="pricing-sep">→</span>
                <span className="pricing-to">700 €</span>
              </p>
              <p className="pricing-note">
                {t('offer.pricing.note')}
              </p>
            </div>
            <div className="pricing-right">
              {pricingDetails.map(detail => (
                <div key={detail} className="pricing-detail">
                  <span className="pricing-check">✓</span>
                  <span>{detail}</span>
                </div>
              ))}
              <a href="#contact" className="btn btn-primary pricing-cta">
                {t('offer.pricing.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Offer)
