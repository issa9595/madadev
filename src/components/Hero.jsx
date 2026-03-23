import { memo } from 'react'
import './Hero.css'
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-glow glow-1" />
        <div className="hero-glow glow-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          {t('hero.badge')}
        </div>

        <h1 className="hero-title">
          {t('hero.titlePrefix')}{' '}
          <span className="hero-highlight">{t('hero.titleHighlight')}</span>{' '}
          {t('hero.titleSuffix')}
        </h1>

        <p className="hero-description">
          {t('hero.description')}
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            {t('hero.primaryCta')}
          </a>
          <a href="#contact" className="btn btn-outline">
            {t('hero.secondaryCta')}
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">+30</span>
            <span className="stat-label">{t('hero.stats.projectsLabel')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">{t('hero.stats.experienceValue')}</span>
            <span className="stat-label">{t('hero.stats.experienceLabel')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">{t('hero.stats.satisfactionLabel')}</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}

export default memo(Hero)
