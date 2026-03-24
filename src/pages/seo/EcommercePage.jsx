import { Link } from 'react-router-dom'
import { ShoppingBag, Leaf, Package, ClipboardList, Settings, GraduationCap, Globe } from 'lucide-react'
import SeoPageShell from '../../components/seo/SeoPageShell'
import { ecommercePageMeta } from '../../data/seo/pageMeta'

const FAQ_ITEMS = [
  {
    q: 'Combien coûte une boutique en ligne ?',
    a: "Un site e-commerce sur mesure démarre à 1500€. Le prix final dépend du nombre de produits, des intégrations et des moyens de paiement. Vous recevez un devis détaillé et gratuit avant tout engagement. Paiement en fin de projet.",
  },
  {
    q: 'Shopify ou Next.js quelle différence pour moi ?',
    a: "Shopify est idéal si vous voulez gérer votre boutique vous-même facilement, avec un back-office très simple. Next.js est préférable si vous avez besoin d'une boutique 100% sur mesure, plus performante, et que vous n'avez pas peur d'un peu plus de technique. Je vous conseille selon votre situation.",
  },
  {
    q: 'Est-ce que mes clients peuvent payer par carte bancaire ?',
    a: "Oui, c'est inclus dans chaque projet e-commerce. Les paiements sont gérés via Stripe (Visa, Mastercard, CB…). PayPal ou Mollie peuvent être ajoutés selon le besoin.",
  },
  {
    q: 'Pourquoi pas WooCommerce ?',
    a: "Je ne propose pas WooCommerce car c'est un plugin WordPress qui devient vite lourd, lent et difficile à maintenir. Shopify et Next.js offrent de meilleures performances, plus de sécurité, et une expérience d'achat bien plus fluide pour vos clients.",
  },
  {
    q: 'Est-ce que je pourrai gérer ma boutique seul après la livraison ?',
    a: "Oui. Une formation à l'administration est incluse dans chaque projet. Vous apprenez à ajouter des produits, gérer les commandes et les stocks. Pour Shopify en particulier, l'interface est très intuitive.",
  },
  {
    q: 'Est-ce que je paye en avance ?',
    a: "Non. Le paiement se fait en fin de projet, une fois que vous avez validé votre boutique. Pas d'acompte pour les projets standard.",
  },
]

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
            Création de <span className="gradient-text">boutique en ligne</span>
            <br />
            sur mesure à Nantes
          </h1>
          <p className="hero-sub">
            Vendez en ligne avec une boutique professionnelle Shopify ou Next.js, paiement par carte bancaire, mobile-first. À partir de 1500€, livré en minimum 1 semaine.
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

      {/* Pour quelle boutique ? */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pour quelle boutique ?</h2>
            <p className="section-subtitle">J'interviens sur tous types de projets e-commerce, quelle que soit votre activité.</p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon"><ShoppingBag size={28} /></div>
              <h3>Mode &amp; accessoires</h3>
              <p>Boutique de vêtements, bijoux, maroquinerie galerie produits, variantes de tailles et couleurs, expérience d'achat soignée.</p>
              <div className="tags">
                <span className="tag">Boutique mode en ligne</span>
                <span className="tag">Bijoux</span>
              </div>
            </div>
            <div className="card">
              <div className="card-icon"><Leaf size={28} /></div>
              <h3>Artisanat &amp; fait main</h3>
              <p>Savons, bougies, céramiques, créations artisanales mettez en valeur votre travail avec une boutique qui vous ressemble.</p>
              <div className="tags">
                <span className="tag">Boutique artisanale</span>
                <span className="tag">Fait main</span>
              </div>
            </div>
            <div className="card">
              <div className="card-icon"><Package size={28} /></div>
              <h3>Produits physiques &amp; livraison</h3>
              <p>Tout type de produits avec gestion des stocks, intégration Colissimo / DHL, suivi de commandes, emails automatiques.</p>
              <div className="tags">
                <span className="tag">E-commerce livraison</span>
                <span className="tag">Colissimo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify vs Next.js */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shopify ou Next.js comment je choisis ?</h2>
            <p className="section-subtitle">Chaque projet est différent. Je recommande la technologie adaptée à votre situation.</p>
          </div>
          <div className="platform-grid platform-grid--two">
            <div className="platform-card">
              <div className="platform-icon"><ShoppingBag size={36} /></div>
              <h3>Shopify</h3>
              <p>
                Idéal si vous voulez gérer votre boutique vous-même facilement. Interface admin très simple, écosystème d'applications, lancement rapide. Parfait pour les boutiques avec un catalogue standard.
              </p>
              <div className="tags" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                <span className="tag">Gestion facile</span>
                <span className="tag">Lancement rapide</span>
              </div>
            </div>
            <div className="platform-card">
              <div className="platform-icon"><Globe size={36} /></div>
              <h3>Next.js sur mesure</h3>
              <p>
                Idéal pour une boutique 100% personnalisée, plus performante, sans les limites de Shopify. Checkout unique, catalogue spécifique, intégrations métier. Performances maximales.
              </p>
              <div className="tags" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                <span className="tag">100% sur mesure</span>
                <span className="tag">Ultra-performant</span>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem', fontSize: '0.95rem' }}>
            Pas sûr de ce dont vous avez besoin ? Je vous conseille gratuitement après un rapide échange sur votre projet.
          </p>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>Paiements : carte bancaire, Stripe et plus</h2>
              <p>
                Vos clients règlent par carte bancaire en toute sécurité. Stripe est au cœur du dispositif rapide, fiable, reconnu partout.
              </p>
              <ul className="checklist">
                <li>
                  <span className="check">✦</span> Carte bancaire (Visa, Mastercard, CB…) via Stripe
                </li>
                <li>
                  <span className="check">✦</span> PayPal ou Mollie en option selon le projet
                </li>
                <li>
                  <span className="check">✦</span> Paiement sécurisé SSL/HTTPS
                </li>
                <li>
                  <span className="check">✦</span> Gestion des commandes et des stocks
                </li>
                <li>
                  <span className="check">✦</span> Emails automatiques (confirmation, expédition…)
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
                  <span className="check">✦</span> Pages produits optimisées pour vendre
                </li>
                <li>
                  <span className="check">✦</span> Panier &amp; checkout fluide
                </li>
                <li>
                  <span className="check">✦</span> Visible sur Google (SEO e-commerce)
                </li>
                <li>
                  <span className="check">✦</span> Intégration livraison (Colissimo, DHL…)
                </li>
                <li>
                  <span className="check">✦</span> Analytics intégré (GA4 ou Plausible)
                </li>
                <li>
                  <span className="check">✦</span> Formation à l'administration incluse
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comment ça se passe ?</h2>
            <p className="section-subtitle">Un projet e-commerce simple, structuré, sans surprise.</p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon"><ClipboardList size={28} /></div>
              <h3>1. Brief &amp; devis</h3>
              <p>On parle de votre projet produits, objectifs, budget. Je vous envoie un devis gratuit et détaillé sous 24h. Aucun engagement.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Settings size={28} /></div>
              <h3>2. Développement</h3>
              <p>Je construis votre boutique. Vous recevez une préversion en ligne pour valider le design et les fonctionnalités avant la mise en production.</p>
            </div>
            <div className="card">
              <div className="card-icon"><GraduationCap size={28} /></div>
              <h3>3. Livraison &amp; formation</h3>
              <p>
                Votre boutique est mise en ligne. Je vous forme à la gestion (produits, commandes, stocks). Vous payez uniquement une fois le site validé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarif + réassurance */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div className="pricing-block">
              <p style={{ opacity: 0.85, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                Site e-commerce
              </p>
              <div className="price">1500€+</div>
              <p className="price-sub">Délai minimum · 1 semaine</p>
              <ul className="pricing-features">
                <li>✓ Boutique complète sur mesure</li>
                <li>✓ Carte bancaire &amp; Stripe inclus</li>
                <li>✓ Mobile-first &amp; visible sur Google</li>
                <li>✓ 1 révision incluse</li>
                <li>✓ Formation à l'administration</li>
                <li>✓ Pas d'acompte demandé</li>
              </ul>
              <a href="/#contact" className="btn" style={{ background: 'white', color: '#4f46e5', fontWeight: 700 }}>
                Démarrer ma boutique
              </a>
            </div>
            <div>
              <h2>À partir de 1500€ sans mauvaise surprise</h2>
              <p>
                Le prix final dépend de la complexité de votre boutique : nombre de produits, intégrations, moyens de paiement, fonctionnalités spécifiques.
              </p>
              <p>Dans tous les cas, vous recevez un devis gratuit et détaillé avant de vous engager. Aucun frais caché.</p>
              <ul className="checklist" style={{ marginTop: '1.25rem' }}>
                <li>
                  <span className="check">✦</span> Devis gratuit sous 24h
                </li>
                <li>
                  <span className="check">✦</span> Prix fixe contractualisé
                </li>
                <li>
                  <span className="check">✦</span> Paiement en fin de projet pas d'acompte
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

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle">Ce que vous vous demandez avant de vous lancer.</p>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
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
            Prêt à lancer votre <span className="gradient-text">boutique en ligne</span> ?
          </h2>
          <p>Devis gratuit sous 24h · À partir de 1500€ · Paiement après validation</p>
          <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
            Démarrer maintenant
          </a>
        </div>
      </section>
    </SeoPageShell>
  )
}
