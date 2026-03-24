import { Link } from 'react-router-dom'
import { CreditCard, Lock, Ban, Zap } from 'lucide-react'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { tarifsPageMeta } from '../../data/seo/pageMeta'

const PRICING_PLANS = [
  {
    id: 'vitrine',
    label: 'Site vitrine',
    price: { range: ['400€', '700€'] },
    delay: 'Livraison en 24 à 48h',
    features: [
      'Design sur mesure',
      'Mobile-first & responsive',
      'SEO de base (balises, metas)',
      'Formulaire de contact',
      'Copywriting orienté conversion',
      '1 révision incluse',
      'Accompagnement mise en ligne',
    ],
    excluded: ['Catalogue produits', 'Système de paiement'],
    cta: { type: 'link', to: '/site-vitrine', label: 'En savoir plus', variant: 'outline' },
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    featured: true,
    price: { from: '1500€' },
    delay: 'Délai minimum · 1 semaine',
    features: [
      'Boutique en ligne complète',
      'Shopify ou Next.js (pas de WooCommerce)',
      'Carte bancaire, Stripe, autres moyens selon besoin',
      'Gestion commandes & stocks',
      'Mobile-first & SEO e-commerce',
      'Emails transactionnels',
      '1 révision incluse',
      "Formation à l'administration",
    ],
    excluded: [],
    cta: { type: 'link', to: '/ecommerce', label: 'En savoir plus', variant: 'primary' },
  },
  {
    id: 'custom',
    label: 'Sur mesure',
    price: { text: 'Devis gratuit' },
    delay: 'Délai selon le projet',
    features: [
      'Application web complexe',
      'API & intégrations tierces',
      'Base de données sur mesure',
      'Authentification utilisateurs',
      'Dashboard & back-office',
      'CI/CD & DevOps',
      'Maintenance incluse (option)',
      'Support prioritaire',
    ],
    excluded: [],
    cta: { type: 'anchor', href: '/#contact', label: 'Demander un devis', variant: 'outline' },
  },
]

const COMPARISON_ROWS = [
  { feature: 'Prix',               vitrine: '400€ → 700€',       ecommerce: 'À partir de 1500€', custom: 'Devis gratuit' },
  { feature: 'Délai de livraison', vitrine: '24 à 48h',           ecommerce: 'Min. 1 semaine',    custom: 'Selon projet'  },
  { feature: 'Design sur mesure',  vitrine: true,  ecommerce: true,  custom: true  },
  { feature: 'Mobile-first',       vitrine: true,  ecommerce: true,  custom: true  },
  { feature: 'SEO de base',        vitrine: true,  ecommerce: true,  custom: true  },
  { feature: 'Formulaire de contact', vitrine: true,  ecommerce: true,  custom: true  },
  { feature: '1 révision incluse', vitrine: true,  ecommerce: true,  custom: true  },
  { feature: 'Boutique e-commerce',vitrine: false, ecommerce: true,  custom: true  },
  { feature: 'Paiements sécurisés',vitrine: false, ecommerce: true,  custom: true  },
  { feature: 'Gestion stocks',     vitrine: false, ecommerce: true,  custom: true  },
  { feature: 'API & intégrations', vitrine: false, ecommerce: false, custom: true  },
  { feature: 'Back-office sur mesure', vitrine: false, ecommerce: false, custom: true },
]

const FAQ_ITEMS = [
  {
    q: 'Combien coûte un site vitrine ?',
    a: "Les sites vitrine sont en général entre 400 € et 700 € selon la complexité, avec livraison en 24 à 48 h pour un projet standard. Le devis détaille le périmètre : design, développement, SEO de base, formulaire de contact et mise en ligne.",
  },
  {
    q: 'Combien coûte un site vitrine pour un artisan ou un restaurant ?',
    a: "Pour un artisan (plombier, électricien, menuisier…) ou un restaurant, le tarif est le même : entre 400 et 700€ selon le contenu et le nombre de pages. Un devis gratuit et détaillé vous est envoyé sous 24h.",
  },
  {
    q: 'Combien coûte un site e-commerce ?',
    a: "Un site e-commerce sur mesure (Shopify ou Next.js, pas WooCommerce) démarre à 1500 € et peut monter selon le catalogue, les intégrations et les moyens de paiement (carte bancaire, Stripe, etc.). Comptez au minimum une semaine de délai. Devis gratuit avant engagement.",
  },
  {
    q: 'Pourquoi une fourchette 400 à 700€ pour un site vitrine ?',
    a: "400 € est le point d'entrée pour un site vitrine standard (quelques pages, design sur mesure, SEO de base). La fourchette monte si votre projet nécessite plus de pages, des fonctionnalités supplémentaires ou un contenu plus riche. Vous recevez toujours un devis détaillé gratuit avant de vous engager.",
  },
  {
    q: 'Y a-t-il des frais cachés ou récurrents ?',
    a: "Non. Mon tarif couvre le développement du site. Seuls l'hébergement et le nom de domaine (gérés par vous ou accompagnés par moi) génèrent des coûts annuels environ 10 à 30€/an selon l'hébergeur. Pas d'abonnement mensuel à me payer.",
  },
  {
    q: 'Quand est-ce que je paye ?',
    a: "Le paiement se fait en fin de projet, une fois que vous avez validé le site. Pas d'acompte sur les projets standard. Vous ne prenez aucun risque.",
  },
  {
    q: 'Que se passe-t-il si je veux des modifications après livraison ?',
    a: "1 révision est incluse dans chaque formule. Pour des modifications supplémentaires, je vous propose un tarif horaire ou un forfait maintenance mensuel selon vos besoins.",
  },
  {
    q: 'Quelle est la différence entre un site vitrine et un site e-commerce ?',
    a: "Un site vitrine présente votre activité, vos services, vos coordonnées l'objectif est de générer des contacts et des appels. Un site e-commerce permet à vos clients d'acheter directement en ligne, avec un panier et un système de paiement par carte bancaire.",
  },
]

function PriceDisplay({ price }) {
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
        <span className="pricing-from">À partir de </span>{price.from}
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
  return (
    <SeoPageShell meta={tarifsPageMeta}>
      <section className="hero">
        <div className="container">
          <div className="badge">
            <span className="dot" />
            Prix fixe · Sans surprise · Devis gratuit
          </div>
          <h1>
            <span className="gradient-text">Tarifs</span> création
            <br />
            site web à Nantes
          </h1>
          <p className="hero-sub">
            Des prix clairs et fixes pour chaque projet. Pas de mauvaises surprises, pas de devis à rallonge. Vous savez exactement ce que vous payez avant de commencer.
          </p>
          <div className="hero-ctas">
            <a href="/#contact" className="btn btn-primary">Demander un devis gratuit</a>
            <a href="/#portfolio" className="btn btn-outline">Voir les réalisations</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="trust-bar">
            <div className="trust-item">
              <CreditCard size={18} className="trust-icon" />
              <span>Paiement en fin de projet</span>
            </div>
            <div className="trust-item">
              <Lock size={18} className="trust-icon" />
              <span>Prix fixe contractualisé</span>
            </div>
            <div className="trust-item">
              <Ban size={18} className="trust-icon" />
              <span>Pas d'acompte demandé</span>
            </div>
            <div className="trust-item">
              <Zap size={18} className="trust-icon" />
              <span>Devis gratuit sous 24h</span>
            </div>
          </div>
          <div className="section-header" style={{ marginTop: '3rem' }}>
            <h2 className="section-title">Formules &amp; tarifs</h2>
            <p className="section-subtitle">Choisissez la formule adaptée à votre projet.</p>
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
            <h2 className="section-title">Comparatif des formules</h2>
            <p className="section-subtitle">Tout ce qui est inclus dans chaque formule, sans ambiguïté.</p>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fonctionnalité</th>
                  <th>Site vitrine</th>
                  <th>E-commerce <span className="td-badge">Populaire</span></th>
                  <th>Sur mesure</th>
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
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle">Ce que vous vous demandez avant de vous lancer.</p>
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
            Prêt à démarrer votre <span className="gradient-text">projet web</span> ?
          </h2>
          <p>Devis gratuit sous 24h · Vitrine 400–700€ · E-commerce dès 1500€</p>
          <a href="/#contact" className="btn btn-primary btn-cta">Obtenir mon devis gratuit</a>
        </div>
      </section>
    </SeoPageShell>
  )
}
