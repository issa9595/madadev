import { memo, useMemo } from 'react'
import './Services.css'
import { useTranslation } from 'react-i18next'

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

export default memo(Services)
