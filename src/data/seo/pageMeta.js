import {
  jsonLdEcommerceService,
  jsonLdNantesLocalBusiness,
  jsonLdSiteVitrineService,
  jsonLdTarifsWebPage,
} from './jsonLd'

/** Métadonnées + JSON-LD par route SEO (contenu FR figé pour le référencement). */
export const siteVitrinePageMeta = {
  path: '/site-vitrine',
  title: 'Création Site Vitrine Professionnel Nantes | 400 à 700€, livraison 24-48h — MadaDev',
  description:
    'Création de sites vitrine sur mesure pour artisans, restaurants et TPE à Nantes. Fourchette 400 à 700€, livraison en 24-48h pour un projet standard. Devis gratuit.',
  keywords:
    'site vitrine artisan Nantes, site vitrine restaurant, site professionnel pas cher, créer site internet entreprise, site web PME Nantes, création site vitrine Nantes',
  jsonLd: jsonLdSiteVitrineService,
}

export const ecommercePageMeta = {
  path: '/ecommerce',
  title: 'Création Site E-commerce Nantes | Boutique en ligne sur mesure — MadaDev',
  description:
    'Développeur e-commerce freelance à Nantes. Boutiques Shopify ou Next.js sur mesure. Paiements carte bancaire et Stripe. À partir de 1500€, délai minimum 1 semaine.',
  keywords:
    'boutique en ligne freelance, développeur Shopify Nantes, création e-commerce Nantes, Next.js e-commerce, Stripe, paiement carte bancaire',
  jsonLd: jsonLdEcommerceService,
}

export const tarifsPageMeta = {
  path: '/tarifs',
  title: 'Tarifs Création Site Web Nantes | Vitrine 400–700€, E-commerce dès 1500€ — MadaDev',
  description:
    'Prix transparents : sites vitrine 400 à 700€ (livraison 24-48h), e-commerce sur mesure dès 1500€, délai minimum 1 semaine. Sans WooCommerce. Devis gratuit.',
  keywords:
    'combien coûte un site vitrine, tarif site e-commerce, prix création site web Nantes, devis site internet, tarif développeur web freelance Nantes',
  jsonLd: jsonLdTarifsWebPage,
}

export const nantesPageMeta = {
  path: '/nantes',
  title: 'Développeur Web Freelance Nantes | Création Site Internet — MadaDev',
  description:
    'Développeur web freelance à Nantes : sites vitrine 400–700€ livrés en 24–48h ; boutiques en ligne dès 1500€ (min. 1 semaine). Basé à Nantes, France.',
  keywords:
    'freelance création site web Nantes, agence web Nantes, développeur web Loire-Atlantique, création site internet 44, développeur web freelance Nantes, site internet Nantes',
  jsonLd: jsonLdNantesLocalBusiness,
}
