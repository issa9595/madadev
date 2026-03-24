import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { CreditCard, Lock, Ban, Zap } from 'lucide-react'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { tarifsPageMeta } from '../../data/seo/pageMeta'

function PriceDisplay({ price }) {
  const { t } = useTranslation()
  if (price.range) {
    return (
      <div className="pricing-price">
        {price.range[0]} <span className="pricing-arrow">→</span> {price.range[1]}
      </div>
    )
  }
  if (price.from) {
    return (
      <div className="pricing-price">
        <span className="pricing-from">{t('tarifsPage.plans.from')}</span>{price.from}
      </div>
    )
  }
  return <div className="pricing-price pricing-price--text">{price.text}</div>
}

function PricingCta({ cta }) {
  const className = `btn btn-${cta.variant} btn-full`
  if (cta.type === 'link') {
    return <Link to={cta.to} className={className}>{cta.label}</Link>
  }
  return <a href={cta.href} className={className}>{cta.label}</a>
}

function PricingCard({ plan }) {
  return (
    <div className={`pricing-card${plan.featured ? ' featured' : ''}`}>
      <div className="pricing-label">{plan.label}</div>
      <PriceDisplay price={plan.price} />
      <p className="pricing-delay">⚡ {plan.delay}</p>
      <hr className="pricing-divider" />
      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="check">✓</span> {feature}
          </li>
        ))}
        {plan.excluded.map((item) => (
          <li key={item}>
            <span className="muted check">-</span> <span className="muted">{item}</span>
          </li>
        ))}
      </ul>
      <PricingCta cta={plan.cta} />
    </div>
  )
}

function TableCell({ value }) {
  if (value === true)  return <td className="td-check">✓</td>
  if (value === false) return <td className="td-cross">-</td>
  return <td>{value}</td>
}

function FaqItem({ q, a }) {
  return (
    <div className="faq-item">
      <div className="faq-q">{q}</div>
      <div className="faq-a">{a}</div>
    </div>
  )
}

export default function TarifsPage() {
  const { t } = useTranslation()

  const PRICING_PLANS = useMemo(() => [
    {
      id: 'vitrine',
      label: t('tarifsPage.plans.vitrine.label'),
      price: { range: ['400€', '700€'] },
      delay: t('tarifsPage.plans.vitrine.delay'),
      features: t('tarifsPage.plans.vitrine.features', { returnObjects: true }),
      excluded: t('tarifsPage.plans.vitrine.excluded', { returnObjects: true }),
      cta: { type: 'link', to: '/site-vitrine', label: t('tarifsPage.plans.vitrine.cta'), variant: 'outline' },
    },
    {
      id: 'ecommerce',
      label: t('tarifsPage.plans.ecommerce.label'),
      featured: true,
      price: { from: '1500€' },
      delay: t('tarifsPage.plans.ecommerce.delay'),
      features: t('tarifsPage.plans.ecommerce.features', { returnObjects: true }),
      excluded: [],
      cta: { type: 'link', to: '/ecommerce', label: t('tarifsPage.plans.ecommerce.cta'), variant: 'primary' },
    },
    {
      id: 'custom',
      label: t('tarifsPage.plans.custom.label'),
      price: { text: t('tarifsPage.plans.custom.priceText') },
      delay: t('tarifsPage.plans.custom.delay'),
      features: t('tarifsPage.plans.custom.features', { returnObjects: true }),
      excluded: [],
      cta: { type: 'anchor', href: '/#contact', label: t('tarifsPage.plans.custom.cta'), variant: 'outline' },
    },
  ], [t])

  const COMPARISON_ROWS = useMemo(() => {
    const cr = (key) => t(`tarifsPage.comparison.rows.${key}`)
    return [
      { feature: cr('price.label'), vitrine: cr('price.vitrine'), ecommerce: cr('price.ecommerce'), custom: cr('price.custom') },
      { feature: cr('delay.label'), vitrine: cr('delay.vitrine'), ecommerce: cr('delay.ecommerce'), custom: cr('delay.custom') },
      { feature: cr('customDesign'),     vitrine: true,  ecommerce: true,  custom: true  },
      { feature: cr('mobileFirst'),      vitrine: true,  ecommerce: true,  custom: true  },
      { feature: cr('baseSeo'),          vitrine: true,  ecommerce: true,  custom: true  },
      { feature: cr('contactForm'),      vitrine: true,  ecommerce: true,  custom: true  },
      { feature: cr('revision'),         vitrine: true,  ecommerce: true,  custom: true  },
      { feature: cr('ecommerceShop'),    vitrine: false, ecommerce: true,  custom: true  },
      { feature: cr('securePayments'),   vitrine: false, ecommerce: true,  custom: true  },
      { feature: cr('stockManagement'),  vitrine: false, ecommerce: true,  custom: true  },
      { feature: cr('apiIntegrations'),  vitrine: false, ecommerce: false, custom: true  },
      { feature: cr('backOffice'),       vitrine: false, ecommerce: false, custom: true  },
    ]
  }, [t])

  const FAQ_ITEMS = t('tarifsPage.faq.items', { returnObjects: true })

  return (
    <SeoPageShell meta={tarifsPageMeta}>
      <section className="hero">
        <div className="container">
          <div className="badge">
            <span className="dot" />
            {t('tarifsPage.hero.badge')}
          </div>
          <h1>
            <span className="gradient-text">{t('tarifsPage.hero.titleHighlight')}</span>
            {t('tarifsPage.hero.titleAfter')}
            <br />
            {t('tarifsPage.hero.titleLine2')}
          </h1>
          <p className="hero-sub">
            {t('tarifsPage.hero.sub')}
          </p>
          <div className="hero-ctas">
            <a href="/#contact" className="btn btn-primary">{t('tarifsPage.hero.ctaQuote')}</a>
            <a href="/#portfolio" className="btn btn-outline">{t('tarifsPage.hero.ctaPortfolio')}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="trust-bar">
            <div className="trust-item">
              <CreditCard size={18} className="trust-icon" />
              <span>{t('tarifsPage.trust.payment')}</span>
            </div>
            <div className="trust-item">
              <Lock size={18} className="trust-icon" />
              <span>{t('tarifsPage.trust.fixedPrice')}</span>
            </div>
            <div className="trust-item">
              <Ban size={18} className="trust-icon" />
              <span>{t('tarifsPage.trust.noDeposit')}</span>
            </div>
            <div className="trust-item">
              <Zap size={18} className="trust-icon" />
              <span>{t('tarifsPage.trust.freeQuote')}</span>
            </div>
          </div>
          <div className="section-header" style={{ marginTop: '3rem' }}>
            <h2 className="section-title">{t('tarifsPage.plans.sectionTitle')}</h2>
            <p className="section-subtitle">{t('tarifsPage.plans.sectionSubtitle')}</p>
          </div>
          <div className="pricing-grid">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('tarifsPage.comparison.sectionTitle')}</h2>
            <p className="section-subtitle">{t('tarifsPage.comparison.sectionSubtitle')}</p>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>{t('tarifsPage.comparison.thFeature')}</th>
                  <th>{t('tarifsPage.comparison.thVitrine')}</th>
                  <th>{t('tarifsPage.comparison.thEcommerce')} <span className="td-badge">{t('tarifsPage.comparison.popularBadge')}</span></th>
                  <th>{t('tarifsPage.comparison.thCustom')}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <TableCell value={row.vitrine} />
                    <TableCell value={row.ecommerce} />
                    <TableCell value={row.custom} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('tarifsPage.faq.sectionTitle')}</h2>
            <p className="section-subtitle">{t('tarifsPage.faq.sectionSubtitle')}</p>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-alt">
        <div className="container">
          <h2>
            {t('tarifsPage.cta.titleBefore')}<span className="gradient-text">{t('tarifsPage.cta.titleHighlight')}</span> ?
          </h2>
          <p>{t('tarifsPage.cta.sub')}</p>
          <a href="/#contact" className="btn btn-primary btn-cta">{t('tarifsPage.cta.btn')}</a>
        </div>
      </section>
    </SeoPageShell>
  )
}
