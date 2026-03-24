import { Link } from 'react-router-dom'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { ecommercePageMeta } from '../../data/seo/pageMeta'

export default function EcommercePage() {
  return (
    <SeoPageShell meta={ecommercePageMeta}>
        <section className="hero">
          <div className="container">
            <div className="badge">
              <span className="dot" />
              Disponible maintenant · Nantes &amp; remote
            </div>
            <h1>
              Création de <span className="gradient-text">site e-commerce</span>
              <br />à Nantes
            </h1>
            <p className="hero-sub">
              Boutique en ligne sur mesure avec Shopify ou Next.js. Paiements par carte bancaire et Stripe — tarifs à partir de 1500€, délai minimum une semaine (je ne propose pas WooCommerce).
            </p>
            <div className="hero-ctas">
              <a href="/#contact" className="btn btn-primary">
                Demander un devis gratuit
              </a>
              <Link to="/tarifs" className="btn btn-outline">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Boutique en ligne sur mesure</h2>
              <p className="section-subtitle">Je choisis la meilleure technologie selon votre activité et votre budget.</p>
            </div>
            <div className="platform-grid platform-grid--two">
              <div className="platform-card">
                <div className="platform-icon">🛍️</div>
                <h3>Shopify</h3>
                <p>
                  Idéal pour lancer vite une boutique solide : interface admin claire, écosystème d&apos;apps, encaissement par carte bancaire et passerelles (Stripe, etc.).
                </p>
                <div className="tags" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                  <span className="tag">Développeur Shopify Nantes</span>
                </div>
              </div>
              <div className="platform-card">
                <div className="platform-icon">⚡</div>
                <h3>Next.js sur mesure</h3>
                <p>
                  Catalogue et tunnel d&apos;achat 100% personnalisés, performances élevées, paiements carte bancaire et Stripe intégrés au checkout.
                </p>
                <div className="tags" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                  <span className="tag">E-commerce Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2>Paiements : carte bancaire, Stripe et plus</h2>
                <p>
                  Vos clients règlent par carte bancaire (CB) en toute sécurité ; Stripe est au cœur du dispositif, avec possibilité d&apos;ajouter d&apos;autres moyens selon le besoin.
                </p>
                <ul className="checklist">
                  <li>
                    <span className="check">✦</span> Carte bancaire (Visa, Mastercard…) et Stripe
                  </li>
                  <li>
                    <span className="check">✦</span> PayPal ou Mollie en option selon le projet
                  </li>
                  <li>
                    <span className="check">✦</span> Paiement sécurisé SSL/HTTPS
                  </li>
                  <li>
                    <span className="check">✦</span> Gestion des commandes et stocks
                  </li>
                  <li>
                    <span className="check">✦</span> Emails transactionnels automatiques
                  </li>
                  <li>
                    <span className="check">✦</span> Compatible mobile &amp; tablette
                  </li>
                  <li>
                    <span className="check">✦</span> Tableau de bord pour gérer votre boutique
                  </li>
                </ul>
              </div>
              <div className="card" style={{ background: 'var(--bg-card)' }}>
                <h3 style={{ marginBottom: '1.25rem' }}>Ce qui est inclus</h3>
                <ul className="checklist">
                  <li>
                    <span className="check">✦</span> Catalogue produits illimité
                  </li>
                  <li>
                    <span className="check">✦</span> Filtres et recherche produits
                  </li>
                  <li>
                    <span className="check">✦</span> Page produit optimisée conversion
                  </li>
                  <li>
                    <span className="check">✦</span> Panier &amp; checkout optimisé
                  </li>
                  <li>
                    <span className="check">✦</span> SEO e-commerce (balises, schema)
                  </li>
                  <li>
                    <span className="check">✦</span> Intégration livraison (Colissimo, DHL…)
                  </li>
                  <li>
                    <span className="check">✦</span> Analytics intégré (GA4 ou Plausible)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Optimisé pour convertir vos visiteurs en acheteurs</h2>
              <p className="section-subtitle">Un bon site e-commerce ne se limite pas à afficher des produits.</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">🎯</div>
                <h3>UX pensée pour vendre</h3>
                <p>
                  Pages produits claires, appels à l&apos;action visibles, processus d&apos;achat simplifié — chaque élément est conçu pour réduire les abandons de panier.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">📱</div>
                <h3>Mobile-first</h3>
                <p>
                  Plus de 60% des achats en ligne se font sur mobile. Votre boutique est optimisée pour une expérience d&apos;achat parfaite sur smartphone.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">🔍</div>
                <h3>SEO e-commerce</h3>
                <p>
                  Balises produits, données structurées Schema.org, URLs propres — vos produits remontent sur Google et attirent du trafic qualifié.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="two-col">
              <div className="pricing-block">
                <p style={{ opacity: 0.85, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  Site e-commerce
                </p>
                <div className="price">1500€+</div>
                <p className="price-sub">Délai minimum · 1 semaine</p>
                <ul className="pricing-features">
                  <li>✓ Livraison en 1 semaine minimum</li>
                  <li>✓ Boutique complète sur mesure</li>
                  <li>✓ Carte bancaire &amp; Stripe</li>
                  <li>✓ Mobile-first &amp; SEO</li>
                  <li>✓ 1 révision incluse</li>
                  <li>✓ Formation à l&apos;administration</li>
                </ul>
                <a href="/#contact" className="btn" style={{ background: 'white', color: '#4f46e5', fontWeight: 700 }}>
                  Démarrer ma boutique
                </a>
              </div>
              <div>
                <h2>À partir de 1500€, planifiez au moins une semaine</h2>
                <p>
                  Le prix final dépend de la complexité de votre boutique : nombre de produits, intégrations, moyens de paiement (carte bancaire, Stripe, etc.), fonctionnalités métier.
                </p>
                <p>Dans tous les cas, vous recevez un devis gratuit et détaillé avant de vous engager. Aucune mauvaise surprise.</p>
                <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                  <li>
                    <span className="check">✦</span> Devis gratuit sous 24h
                  </li>
                  <li>
                    <span className="check">✦</span> Prix fixe contractualisé
                  </li>
                  <li>
                    <span className="check">✦</span> Paiement en fin de projet
                  </li>
                  <li>
                    <span className="check">✦</span> Support post-lancement inclus
                  </li>
                </ul>
                <Link to="/tarifs" className="btn btn-outline" style={{ marginTop: '1.75rem' }}>
                  Voir tous les tarifs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section section-alt">
          <div className="container">
            <h2>
              Prêt à lancer votre <span className="gradient-text">boutique en ligne</span> ?
            </h2>
            <p>Devis gratuit sous 24h · E-commerce à partir de 1500€ · Délai minimum 1 semaine</p>
            <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
              Démarrer maintenant
            </a>
          </div>
        </section>
    </SeoPageShell>
  )
}
