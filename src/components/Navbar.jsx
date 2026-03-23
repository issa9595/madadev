import { memo, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, resolveSelectableLanguage } from '../i18n/languages'
import './Navbar.css'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateScrolled = () => {
      setScrolled(prev => {
        const next = window.scrollY > 50
        return prev === next ? prev : next
      })
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateScrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = useMemo(
    () => [
      { href: '#services', label: t('nav.links.services') },
      { href: '#offre', label: t('nav.links.offer') },
      { href: '#about', label: t('nav.links.about') },
      { href: '#portfolio', label: t('nav.links.portfolio') },
      { href: '#contact', label: t('nav.links.contact') },
    ],
    [t],
  )

  const selectedLanguage = resolveSelectableLanguage(i18n.resolvedLanguage || i18n.language)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="logo" aria-label={t('nav.logoAria')}>
          <span className="logo-bracket">&lt;</span>
          MadaDev
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label={t('nav.mainAria')}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="language-switcher">
            <select
              id="lang-select"
              className="language-select"
              value={selectedLanguage}
              onChange={e => i18n.changeLanguage(e.target.value)}
            >
              <option value="" disabled>
                {t('language.selectDefault')}
              </option>
              {SUPPORTED_LANGUAGES.map(code => (
                <option key={code} value={code}>
                  {t(`language.options.${code}`)}
                </option>
              ))}
            </select>
          </div>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            {t('nav.cta')}
          </a>
        </nav>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={t('nav.menuAria')}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default memo(Navbar)
