import {
  jsonLdEcommerceService,
  jsonLdNantesLocalBusiness,
  jsonLdSiteVitrineService,
  jsonLdTarifsWebPage,
} from './jsonLd'

/** Métadonnées + JSON-LD par route SEO (contenu FR figé pour le référencement). */
export const siteVitrinePageMeta = {
  path: '/site-vitrine',
  title: 'Création Site Vitrine Artisan, Restaurant, TPE | 400–700€, livraison 24-48h - MadaDev',
  description:
    'Site vitrine professionnel sur mesure pour artisans, restaurants et TPE à Nantes. 400 à 700€, livré en 24-48h. Visible sur Google, parfait sur mobile. Devis gratuit.',
  keywords:
    'site vitrine artisan Nantes, site vitrine restaurant Nantes, site vitrine plombier, site internet artisan, créer site vitrine professionnel, site web restaurant, site vitrine PME, site professionnel pas cher Nantes',
  jsonLd: jsonLdSiteVitrineService,
}

export const ecommercePageMeta = {
  path: '/ecommerce',
  title: 'Création Boutique en Ligne Nantes | Shopify & Next.js sur mesure - MadaDev',
  description:
    'Boutique en ligne sur mesure à Nantes. Shopify ou Next.js, paiement par carte bancaire et Stripe. À partir de 1500€, délai minimum 1 semaine. Devis gratuit.',
  keywords:
    'créer boutique en ligne freelance, boutique en ligne sur mesure Nantes, développeur Shopify Nantes, e-commerce Next.js, boutique mode en ligne, boutique artisanale en ligne, création e-commerce Nantes, vendre en ligne',
  jsonLd: jsonLdEcommerceService,
}

export const tarifsPageMeta = {
  path: '/tarifs',
  title: 'Tarifs Site Web Nantes | Combien coûte un site vitrine ? - MadaDev',
  description:
    'Combien coûte un site web ? Vitrine 400–700€ (24-48h), e-commerce dès 1500€ (min. 1 semaine). Prix clairs, sans surprise. Paiement après validation. Devis gratuit.',
  keywords:
    'combien coûte un site vitrine, tarif site internet artisan, prix site vitrine restaurant, combien coûte un site e-commerce, tarif développeur web freelance Nantes, prix création site web 2024',
  jsonLd: jsonLdTarifsWebPage,
}

export const nantesPageMeta = {
  path: '/nantes',
  title: 'Création Site Internet Nantes | Freelance Web Artisans & PME - MadaDev',
  description:
    'Développeur web freelance à Nantes pour artisans, restaurants et PME. Sites vitrine 400–700€ livrés en 24–48h. Boutiques en ligne dès 1500€. Présentiel ou remote.',
  keywords:
    'création site internet Nantes, freelance web Nantes, site vitrine artisan Nantes, développeur web Loire-Atlantique, agence web Nantes pas cher, site internet restaurant Nantes, développeur freelance 44',
  jsonLd: jsonLdNantesLocalBusiness,
}
