import './Services.css'

const services = [
  {
    icon: '🎨',
    title: 'Sites vitrine',
    description:
      'Des sites élégants et performants pour présenter votre activité et convertir vos visiteurs en clients.',
    tags: ['React', 'Next.js', 'Vite'],
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description:
      'Boutiques en ligne sur mesure, optimisées pour les conversions, avec paiement sécurisé intégré.',
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
  },
  {
    icon: '⚙️',
    title: 'Applications web',
    description:
      'Applications web complexes avec tableau de bord, authentification, base de données et API REST.',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
  },
  {
    icon: '🚀',
    title: 'Optimisation & SEO',
    description:
      'Audit, refonte technique et optimisation pour améliorer les performances et votre référencement.',
    tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
  },
  {
    icon: '🔗',
    title: 'Intégrations API',
    description:
      'Connexion à des services tiers : CRM, paiement, emailing, réseaux sociaux, et bien plus.',
    tags: ['REST API', 'GraphQL', 'Webhooks'],
  },
  {
    icon: '🛡️',
    title: 'Maintenance & support',
    description:
      'Suivi continu, mises à jour de sécurité et support technique pour votre sérénité.',
    tags: ['DevOps', 'CI/CD', 'Monitoring'],
  },
]

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes services</h2>
          <p className="section-subtitle">
            Des solutions web adaptées à vos besoins, de la conception à la mise en production.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
