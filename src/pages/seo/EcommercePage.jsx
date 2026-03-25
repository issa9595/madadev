import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ShoppingBag, Leaf, Package, ClipboardList, Settings, GraduationCap, Globe } from 'lucide-react'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { ecommercePageMeta } from '../../data/seo/pageMeta'

const NICHE_ICONS = [ShoppingBag, Leaf, Package]
const PROCESS_ICONS = [ClipboardList, Settings, GraduationCap]

export default function EcommercePage() {
  const { t } = useTranslation()

  const nicheItems = t('ecommercePage.niches.items', { returnObjects: true })
  const paymentChecklist = t('ecommercePage.payments.checklist', { returnObjects: true })
  const includedChecklist = t('ecommercePage.payments.includedChecklist', { returnObjects: true })
  const processSteps = t('ecommercePage.process.steps', { returnObjects: true })
  const pricingFeatures = t('ecommercePage.pricing.pricingFeatures', { returnObjects: true })
  const pricingChecklist = t('ecommercePage.pricing.checklist', { returnObjects: true })
  const faqItems = t('ecommercePage.faq.items', { returnObjects: true })

  return (
    <SeoPageShell meta={ecommercePageMeta}>
      <section className="hero">
        <div className="container">
          <div className="badge">
            <span className="dot" />
            {t('ecommercePage.hero.badge')}
          </div>
          <h1>
            {t('ecommercePage.hero.title')} <span className="gradient-text">{t('ecommercePage.hero.titleHighlight')}</span>
            <br />
            {t('ecommercePage.hero.titleLine2')}
          </h1>
          <p className="hero-sub">
            {t('ecommercePage.hero.sub')}
          </p>
          <div className="hero-ctas">
            <a href="/#contact" className="btn btn-primary">
              {t('ecommercePage.hero.ctaQuote')}
            </a>
            <Link to="/tarifs" className="btn btn-outline">
              {t('ecommercePage.hero.ctaTarifs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Pour quelle boutique ? */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('ecommercePage.niches.sectionTitle')}</h2>
            <p className="section-subtitle">{t('ecommercePage.niches.sectionSubtitle')}</p>
          </div>
          <div className="cards-grid">
            {nicheItems.map((item, i) => {
              const Icon = NICHE_ICONS[i]
              return (
                <div key={i} className="card">
                  <div className="card-icon"><Icon size={28} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Shopify vs Next.js */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('ecommercePage.platforms.sectionTitle')}</h2>
            <p className="section-subtitle">{t('ecommercePage.platforms.sectionSubtitle')}</p>
          </div>
          <div className="platform-grid platform-grid--two">
            <div className="platform-card">
              <div className="platform-icon"><ShoppingBag size={36} /></div>
              <h3>{t('ecommercePage.platforms.shopify.title')}</h3>
              <p>{t('ecommercePage.platforms.shopify.description')}</p>
              <div className="tags" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                {t('ecommercePage.platforms.shopify.tags', { returnObjects: true }).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="platform-card">
              <div className="platform-icon"><Globe size={36} /></div>
              <h3>{t('ecommercePage.platforms.nextjs.title')}</h3>
              <p>{t('ecommercePage.platforms.nextjs.description')}</p>
              <div className="tags" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                {t('ecommercePage.platforms.nextjs.tags', { returnObjects: true }).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem', fontSize: '0.95rem' }}>
            {t('ecommercePage.platforms.advice')}
          </p>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>{t('ecommercePage.payments.title')}</h2>
              <p>{t('ecommercePage.payments.description')}</p>
              <ul className="checklist">
                {paymentChecklist.map((item) => (
                  <li key={item}>
                    <span className="check">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ background: 'var(--bg-card)' }}>
              <h3 style={{ marginBottom: '1.25rem' }}>{t('ecommercePage.payments.includedTitle')}</h3>
              <ul className="checklist">
                {includedChecklist.map((item) => (
                  <li key={item}>
                    <span className="check">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('ecommercePage.process.sectionTitle')}</h2>
            <p className="section-subtitle">{t('ecommercePage.process.sectionSubtitle')}</p>
          </div>
          <div className="cards-grid">
            {processSteps.map((step, i) => {
              const Icon = PROCESS_ICONS[i]
              return (
                <div key={i} className="card">
                  <div className="card-icon"><Icon size={28} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tarif + réassurance */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div className="pricing-block">
              <p style={{ opacity: 0.85, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                {t('ecommercePage.pricing.pricingLabel')}
              </p>
              <div className="price">{t('ecommercePage.pricing.pricingPrice')}</div>
              <p className="price-sub">{t('ecommercePage.pricing.pricingSub')}</p>
              <ul className="pricing-features">
                {pricingFeatures.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a href="/#contact" className="btn" style={{ background: 'white', color: '#4f46e5', fontWeight: 700 }}>
                {t('ecommercePage.pricing.pricingCta')}
              </a>
            </div>
            <div>
              <h2>{t('ecommercePage.pricing.title')}</h2>
              <p>{t('ecommercePage.pricing.description')}</p>
              <p>{t('ecommercePage.pricing.noSurprise')}</p>
              <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                {pricingChecklist.map((item) => (
                  <li key={item}>
                    <span className="check">✦</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/tarifs" className="btn btn-outline" style={{ marginTop: '1.75rem' }}>
                {t('ecommercePage.pricing.ctaTarifs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('ecommercePage.faq.sectionTitle')}</h2>
            <p className="section-subtitle">{t('ecommercePage.faq.sectionSubtitle')}</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <div key={item.q} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-alt" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <h2>
            {t('ecommercePage.cta.titleBefore')} <span className="gradient-text">{t('ecommercePage.cta.titleHighlight')}</span>
          </h2>
          <p>{t('ecommercePage.cta.sub')}</p>
          <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
            {t('ecommercePage.cta.btn')}
          </a>
        </div>
      </section>
    </SeoPageShell>
  )
}
