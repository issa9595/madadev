import { memo, useMemo } from 'react'
import './Services.css'
import { useTranslation } from 'react-i18next'
import { Monitor, ShoppingCart, Settings, TrendingUp, Plug, Shield } from 'lucide-react'

const SERVICE_ICONS = [Monitor, ShoppingCart, Settings, TrendingUp, Plug, Shield]

function Services() {
  const { t } = useTranslation()
  const services = useMemo(() => t('services.items', { returnObjects: true }), [t])

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <div key={i} className="service-card">
                <div className="service-icon">
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default memo(Services)
