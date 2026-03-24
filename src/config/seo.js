/** Constantes partagées pour les pages marketing / SEO (FR). */
export const SITE_ORIGIN = 'https://mada-dev.com'

export const OG_IMAGE_URL = `${SITE_ORIGIN}/previews/madadev.png`

export const BUSINESS_EMAIL = 'issamadayev@gmail.com'

export const BUSINESS_GEO = {
  '@type': 'GeoCoordinates',
  latitude: 47.2184,
  longitude: -1.5536,
}

export const BUSINESS_SAME_AS = [
  'https://github.com/issa9595',
  'https://www.linkedin.com/in/issa-madayev-325395253',
]

export function postalAddressNantes() {
  return {
    '@type': 'PostalAddress',
    addressLocality: 'Nantes',
    addressRegion: 'Pays de la Loire',
    postalCode: '44000',
    addressCountry: 'FR',
  }
}
