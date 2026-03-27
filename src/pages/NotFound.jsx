import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './NotFound.css'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="not-found">
      <div className="not-found__inner">
        <div className="not-found__code">404</div>
        <h1 className="not-found__heading">{t('notFound.heading')}</h1>
        <p className="not-found__description">{t('notFound.description')}</p>
        <Link to="/" className="btn btn-primary not-found__cta">
          {t('notFound.cta')}
        </Link>
      </div>
    </div>
  )
}
