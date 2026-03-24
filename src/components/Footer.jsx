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
          <a href="/#services">{t('nav.links.services')}</a>
          <a href="/#offre">{t('nav.links.offer')}</a>
          <a href="/#about">{t('nav.links.about')}</a>
          <a href="/#portfolio">{t('nav.links.portfolio')}</a>
          {/* <a href="/#contact">{t('nav.links.contact')}</a>
          <Link to="/site-vitrine">Site vitrine</Link>
          <Link to="/ecommerce">E-commerce</Link>
          <Link to="/tarifs">Tarifs</Link>
          <Link to="/nantes">Nantes</Link> */}
        </nav>
      </div>
    </footer>
  )
}

export default memo(Footer)
