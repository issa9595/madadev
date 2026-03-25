import {
  BUSINESS_EMAIL,
  BUSINESS_GEO,
  BUSINESS_SAME_AS,
  SITE_ORIGIN,
  postalAddressNantes,
} from '../../config/seo'

function localBusinessProvider() {
  return {
    '@type': 'LocalBusiness',
    name: 'MadaDev',
    url: SITE_ORIGIN,
    email: BUSINESS_EMAIL,
    address: postalAddressNantes(),
  }
}

export const jsonLdSiteVitrineService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création site vitrine professionnel à Nantes',
  provider: localBusinessProvider(),
  description:
    'Création de sites vitrine professionnels pour artisans, restaurants et TPE à Nantes. Fourchette 400 à 700€, livraison en 24-48h pour un projet standard.',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '400',
    highPrice: '700',
    priceCurrency: 'EUR',
  },
  areaServed: ['Nantes', 'Loire-Atlantique', 'France'],
}

export const jsonLdEcommerceService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création site e-commerce à Nantes',
  provider: localBusinessProvider(),
  description:
    'Création de boutiques en ligne sur mesure avec Shopify ou Next.js. Paiements par carte bancaire et Stripe. À partir de 1500€, délai minimum une semaine.',
  offers: {
    '@type': 'Offer',
    price: '1500',
    priceCurrency: 'EUR',
  },
  areaServed: ['Nantes', 'Loire-Atlantique', 'France'],
}

export const jsonLdTarifsWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tarifs création site web Nantes - MadaDev',
  url: `${SITE_ORIGIN}/tarifs`,
  description:
    'Prix transparents pour la création de sites web à Nantes. Sites vitrine 400 à 700€ (livraison 24-48h). E-commerce sur mesure dès 1500€ (min. 1 semaine).',
  provider: {
    '@type': 'LocalBusiness',
    name: 'MadaDev',
    url: SITE_ORIGIN,
    email: BUSINESS_EMAIL,
    priceRange: '400€ - 1500€+',
    address: postalAddressNantes(),
  },
}

export const jsonLdNantesLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_ORIGIN}/#business`,
  name: 'MadaDev',
  description:
    'Développeur web freelance à Nantes : sites vitrine 400-700€ en 24-48h, e-commerce sur mesure dès 1500€ (min. 1 semaine). Disponible partout en France.',
  url: SITE_ORIGIN,
  email: BUSINESS_EMAIL,
  address: postalAddressNantes(),
  geo: BUSINESS_GEO,
  areaServed: ['Nantes', 'Loire-Atlantique', 'Pays de la Loire', 'France'],
  priceRange: '400€ - 1500€+',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: BUSINESS_SAME_AS,
}
