import { memo, useMemo } from 'react'
import './Portfolio.css'
import { useTranslation } from 'react-i18next'

function Portfolio() {
  const { t } = useTranslation()
  const projects = useMemo(() => t('portfolio.projects', { returnObjects: true }), [t])

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="section-subtitle">{t('portfolio.subtitle')}</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <a
              key={i}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-thumbnail">
                <picture>
                  <source srcSet={project.preview.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
                  <img src={project.preview} alt={`${project.title} ${project.category}`} className="project-preview" loading="lazy" width="634" height="396" />
                </picture>
                <div className="project-overlay">{t('portfolio.viewProject')} ↗</div>
              </div>
              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {(project.tech || []).map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>{t('portfolio.ctaQuestion')}</p>
          <a href="#contact" className="btn btn-primary">
            {t('portfolio.ctaAction')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default memo(Portfolio)
