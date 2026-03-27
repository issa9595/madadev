import { memo } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="logo">
          <span className="logo-bracket">&lt;</span>
          MadaDev
          <span className="logo-bracket">/&gt;</span>
        </Link>
        <p className="footer-copy">
          © {year} MadaDev · {t('footer.copyRole')} ·{' '}
          <a href="https://mada-dev.com" target="_blank" rel="noreferrer">mada-dev.com</a>
        </p>
        <nav className="footer-nav" aria-label={t('footer.secondaryAria')}>
          <Link to="/site-vitrine">{t('footer.links.siteVitrine')}</Link>
          <Link to="/ecommerce">{t('footer.links.ecommerce')}</Link>
          <Link to="/tarifs">{t('footer.links.tarifs')}</Link>
          <Link to="/nantes">{t('footer.links.nantes')}</Link>
          <a href="/#portfolio">{t('nav.links.portfolio')}</a>
          <a href="/#contact">{t('nav.links.contact')}</a>
        </nav>
      </div>
    </footer>
  )
}

export default memo(Footer)
