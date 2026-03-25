import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LANGUAGE_AUTONYMS, detectInitialLanguage } from './i18n/languages'

const resources = {
  fr: {
    translation: {
      language: {
        label: 'Langue',
        selectDefault: 'Choisir une langue',
        options: {
          fr: 'Français',
          en: 'English',
          es: 'Español',
          ru: 'Russkii',
          de: 'Deutsch',
          nl: 'Nederlands',
          it: 'Italiano',
          zh: 'Zhongwen',
          ja: 'Nihongo',
        },
      },
      nav: {
        logoAria: 'MadaDev, développeur web freelance, retour en haut',
        mainAria: 'Navigation principale',
        links: {
          services: 'Services',
          offer: "L'offre",
          about: 'À propos',
          portfolio: 'Portfolio',
          contact: 'Contact',
        },
        cta: 'Me contacter',
        menuAria: 'Menu',
      },
      hero: {
        badge: 'Disponible pour de nouveaux projets',
        titlePrefix: 'Je conçois des',
        titleHighlight: 'expériences web',
        titleSuffix: 'qui font la différence',
        description:
          "Développeur web freelance passionné, je transforme vos idées en applications modernes, performantes et accessibles. Du design à la mise en ligne, je m'occupe de tout.",
        primaryCta: 'Voir mes projets',
        secondaryCta: 'Discutons ensemble',
        stats: {
          projectsLabel: 'Projets livrés',
          experienceValue: '5 ans',
          experienceLabel: 'Expérience',
          satisfactionLabel: 'Clients satisfaits',
        },
      },
      services: {
        title: 'Mes services',
        subtitle:
          'Des solutions web adaptées à vos besoins, de la conception à la mise en production.',
        items: [
          {
            icon: '🎨',
            title: 'Sites vitrine',
            description:
              'Des sites élégants et performants pour présenter votre activité et convertir vos visiteurs en clients.',
            tags: ['React', 'Next.js', 'Vite'],
          },
          {
            icon: '🛒',
            title: 'E-commerce',
            description:
              'Boutiques en ligne sur mesure (Shopify ou Next.js), optimisées pour les conversions, avec paiements par carte bancaire et Stripe.',
            tags: ['Shopify', 'Next.js', 'Stripe'],
          },
          {
            icon: '⚙️',
            title: 'Applications web',
            description:
              'Applications web complexes avec tableau de bord, authentification, base de données et API REST.',
            tags: ['Node.js', 'Express', 'PostgreSQL'],
          },
          {
            icon: '🚀',
            title: 'Optimisation et SEO',
            description:
              'Audit, refonte technique et optimisation pour améliorer les performances et votre référencement.',
            tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
          },
          {
            icon: '🔗',
            title: 'Intégrations API',
            description:
              'Connexion à des services tiers : CRM, paiement, emailing, réseaux sociaux, et bien plus.',
            tags: ['REST API', 'GraphQL', 'Webhooks'],
          },
          {
            icon: '🛡️',
            title: 'Maintenance et support',
            description:
              'Suivi continu, mises à jour de sécurité et support technique pour votre sérénité.',
            tags: ['DevOps', 'CI/CD', 'Monitoring'],
          },
        ],
      },
      offer: {
        badge: "L'offre",
        title: 'Votre site, votre machine à vendre',
        subtitle:
          "Un site web qui ne convertit pas, c'est de l'argent jeté. Je conçois des sites pensés pour transformer vos visiteurs en acheteurs : sites vitrine livrés en 24 à 48h pour un projet standard.",
        benefits: [
          {
            icon: '💰',
            title: 'Un site qui vend',
            description:
              'Pas juste une vitrine, une machine à convertir. Chaque section, chaque bouton, chaque mot est pensé pour transformer un visiteur en client.',
          },
          {
            icon: '📱',
            title: '100% mobile et rapide',
            description:
              'Plus de 60 % de vos visiteurs arrivent sur mobile. Votre site est optimisé pour offrir une expérience fluide sur tous les appareils.',
          },
          {
            icon: '🎯',
            title: 'Copywriting orienté action',
            description:
              "Des accroches qui captent, des arguments qui convainquent, des appels à l'action qui déclenchent. Le design sert le message.",
          },
          {
            icon: '🔍',
            title: 'SEO et visibilité',
            description:
              'Votre site est optimisé pour apparaître sur Google : structure sémantique, balises, performances, pour attirer du trafic dès le lancement.',
          },
          {
            icon: '⚡',
            title: 'Livraison express',
            description:
              'Pour un site vitrine standard : livraison en 24 à 48h. Les boutiques en ligne (e-commerce) nécessitent au minimum une semaine et sont chiffrées à partir de 1500€.',
          },
          {
            icon: '🔧',
            title: 'Autonomie totale',
            description:
              'Vous repartez avec un site que vous pouvez faire évoluer. Pas de dépendance, pas de coûts cachés, vous êtes propriétaire de votre outil.',
          },
        ],
        pricing: {
          label: 'Investissement',
          labelVitrine: 'Sites vitrine',
          note:
            'Fourchette 400 à 700€ pour un site vitrine, selon la complexité. Tarif fixe convenu, sans surprise.',
          ecommerceLine:
            'E-commerce sur mesure : à partir de 1500€, délai minimum 1 semaine (devis personnalisé).',
          details: [
            'Livraison en 24 à 48h pour un site vitrine standard',
            "Pas d'abonnement, paiement unique",
            "Révisions incluses jusqu'à votre satisfaction",
            'Hébergement et domaine guidés ou pris en charge',
          ],
          cta: 'Démarrer mon projet',
        },
      },
      about: {
        title: 'À propos de moi',
        subtitle: 'Passionné par le web depuis plus de 5 ans',
        paragraph1:
          'Bonjour ! Je suis un développeur web freelance basé en France, spécialisé dans la création de sites vitrine, landing pages et applications web avec React et Node.js. Je travaille avec des startups, PME et entrepreneurs pour donner vie à leurs projets digitaux.',
        paragraph2:
          "Mon approche : comprendre vos besoins, proposer des solutions adaptées, livrer dans les délais, et rester disponible après la mise en ligne. La qualité du code et l'expérience utilisateur sont au cœur de chaque projet.",
        perks: [
          'Code propre et maintenable',
          'Livraison dans les délais',
          'Communication transparente',
          'Support après livraison',
        ],
        cta: 'Travailler ensemble',
        skillsTitle: 'Compétences techniques',
        skills: [
          { name: 'React / Next.js', level: 95 },
          { name: 'Node.js / Express', level: 88 },
          { name: 'TypeScript', level: 85 },
          { name: 'PostgreSQL / MongoDB', level: 80 },
          { name: 'UI/UX et Figma', level: 75 },
          { name: 'DevOps / Docker', level: 70 },
        ],
      },
      portfolio: {
        title: 'Mes projets',
        subtitle:
          'Une sélection de projets récents illustrant mes compétences et mon savoir-faire.',
        projects: [
          {
            title: 'Locali',
            category: 'Application web',
            description:
              'Plateforme de mise en relation locale permettant aux utilisateurs de trouver des services et commerces à proximité.',
            tech: ['React', 'Node.js', 'Maps API'],
            preview: '/previews/locali.jpg',
            link: 'https://www.mylocali.fr',
          },
          {
            title: "L'Essence",
            category: 'Site vitrine',
            description:
              'Site vitrine élégant pour une marque lifestyle, avec un design soigné et une expérience utilisateur fluide.',
            tech: ['Vite', 'React', 'CSS'],
            preview: '/previews/lessence.jpg',
            link: 'https://mada-dev-template1.vercel.app',
          },
          {
            title: 'Lumia',
            category: 'Application web',
            description:
              'Assistant vocal interactif propulsé par IA, avec reconnaissance vocale et réponses en temps réel.',
            tech: ['React', 'Web Speech API', 'AI'],
            preview: '/previews/lumia.jpg',
            link: 'https://vocal-assistant-two.vercel.app',
          },
        ],
        viewProject: 'Voir le projet',
        ctaQuestion: 'Vous avez un projet en tête ?',
        ctaAction: 'Parlons-en',
      },
      contact: {
        title: 'Parlons de votre projet',
        subtitle: 'Prêt à démarrer ? Envoyez-moi un message et je vous réponds sous 24h.',
        emailLabel: 'Email',
        locationLabel: 'Localisation',
        locationValue: 'France (remote)',
        availabilityLabel: 'Disponibilité',
        availabilityValue: 'Dès maintenant',
        successTitle: 'Message envoyé !',
        successBody: 'Merci pour votre message. Je vous réponds dans les 24 heures.',
        form: {
          name: 'Nom complet',
          email: 'Email',
          projectType: 'Type de projet',
          message: 'Décrivez votre projet',
          namePlaceholder: 'Jean Dupont',
          emailPlaceholder: 'jean@exemple.fr',
          messagePlaceholder: 'Parlez-moi de votre projet, vos objectifs, votre délai...',
          selectPlaceholder: 'Sélectionner...',
          options: [
            'Site vitrine',
            'E-commerce',
            'Application web',
            'Refonte / optimisation',
            'Autre',
          ],
          error:
            'Une erreur est survenue. Réessayez ou écrivez directement à issamadayev@gmail.com',
          sending: 'Envoi en cours...',
          submit: 'Envoyer le message',
        },
      },
      tarifsPage: {
        hero: {
          badge: 'Prix fixe · Sans surprise · Devis gratuit',
          titleHighlight: 'Tarifs',
          titleAfter: ' création',
          titleLine2: 'site web à Nantes',
          sub: 'Des prix clairs et fixes pour chaque projet. Pas de mauvaises surprises, pas de devis à rallonge. Vous savez exactement ce que vous payez avant de commencer.',
          ctaQuote: 'Demander un devis gratuit',
          ctaPortfolio: 'Voir les réalisations',
        },
        trust: {
          payment: 'Paiement en fin de projet',
          fixedPrice: 'Prix fixe contractualisé',
          noDeposit: "Pas d'acompte demandé",
          freeQuote: 'Devis gratuit sous 24h',
        },
        plans: {
          sectionTitle: 'Formules & tarifs',
          sectionSubtitle: 'Choisissez la formule adaptée à votre projet.',
          from: 'À partir de ',
          vitrine: {
            label: 'Site vitrine',
            delay: 'Livraison en 24 à 48h',
            features: [
              'Design sur mesure',
              'Mobile-first & responsive',
              'SEO de base (balises, metas)',
              'Formulaire de contact',
              'Copywriting orienté conversion',
              '1 révision incluse',
              'Accompagnement mise en ligne',
            ],
            excluded: ['Catalogue produits', 'Système de paiement'],
            cta: 'En savoir plus',
          },
          ecommerce: {
            label: 'E-commerce',
            delay: 'Délai minimum · 1 semaine',
            features: [
              'Boutique en ligne complète',
              'Shopify ou Next.js (pas de WooCommerce)',
              'Carte bancaire, Stripe, autres moyens selon besoin',
              'Gestion commandes & stocks',
              'Mobile-first & SEO e-commerce',
              'Emails transactionnels',
              '1 révision incluse',
              "Formation à l'administration",
            ],
            cta: 'En savoir plus',
          },
          custom: {
            label: 'Sur mesure',
            priceText: 'Devis gratuit',
            delay: 'Délai selon le projet',
            features: [
              'Application web complexe',
              'API & intégrations tierces',
              'Base de données sur mesure',
              'Authentification utilisateurs',
              'Dashboard & back-office',
              'CI/CD & DevOps',
              'Maintenance incluse (option)',
              'Support prioritaire',
            ],
            cta: 'Demander un devis',
          },
        },
        comparison: {
          sectionTitle: 'Comparatif des formules',
          sectionSubtitle: "Tout ce qui est inclus dans chaque formule, sans ambiguïté.",
          thFeature: 'Fonctionnalité',
          thVitrine: 'Site vitrine',
          thEcommerce: 'E-commerce',
          popularBadge: 'Populaire',
          thCustom: 'Sur mesure',
          rows: {
            price: { label: 'Prix', vitrine: '400€ → 700€', ecommerce: 'À partir de 1500€', custom: 'Devis gratuit' },
            delay: { label: 'Délai de livraison', vitrine: '24 à 48h', ecommerce: 'Min. 1 semaine', custom: 'Selon projet' },
            customDesign: 'Design sur mesure',
            mobileFirst: 'Mobile-first',
            baseSeo: 'SEO de base',
            contactForm: 'Formulaire de contact',
            revision: '1 révision incluse',
            ecommerceShop: 'Boutique e-commerce',
            securePayments: 'Paiements sécurisés',
            stockManagement: 'Gestion stocks',
            apiIntegrations: 'API & intégrations',
            backOffice: 'Back-office sur mesure',
          },
        },
        faq: {
          sectionTitle: 'Questions fréquentes',
          sectionSubtitle: 'Ce que vous vous demandez avant de vous lancer.',
          items: [
            {
              q: 'Combien coûte un site vitrine ?',
              a: "Les sites vitrine sont en général entre 400 € et 700 € selon la complexité, avec livraison en 24 à 48 h pour un projet standard. Le devis détaille le périmètre : design, développement, SEO de base, formulaire de contact et mise en ligne.",
            },
            {
              q: 'Combien coûte un site vitrine pour un artisan ou un restaurant ?',
              a: "Pour un artisan (plombier, électricien, menuisier…) ou un restaurant, le tarif est le même : entre 400 et 700€ selon le contenu et le nombre de pages. Un devis gratuit et détaillé vous est envoyé sous 24h.",
            },
            {
              q: 'Combien coûte un site e-commerce ?',
              a: "Un site e-commerce sur mesure (Shopify ou Next.js, pas WooCommerce) démarre à 1500 € et peut monter selon le catalogue, les intégrations et les moyens de paiement (carte bancaire, Stripe, etc.). Comptez au minimum une semaine de délai. Devis gratuit avant engagement.",
            },
            {
              q: 'Pourquoi une fourchette 400 à 700€ pour un site vitrine ?',
              a: "400 € est le point d'entrée pour un site vitrine standard (quelques pages, design sur mesure, SEO de base). La fourchette monte si votre projet nécessite plus de pages, des fonctionnalités supplémentaires ou un contenu plus riche. Vous recevez toujours un devis détaillé gratuit avant de vous engager.",
            },
            {
              q: 'Y a-t-il des frais cachés ou récurrents ?',
              a: "Non. Mon tarif couvre le développement du site. Seuls l'hébergement et le nom de domaine (gérés par vous ou accompagnés par moi) génèrent des coûts annuels environ 10 à 30€/an selon l'hébergeur. Pas d'abonnement mensuel à me payer.",
            },
            {
              q: 'Quand est-ce que je paye ?',
              a: "Le paiement se fait en fin de projet, une fois que vous avez validé le site. Pas d'acompte sur les projets standard. Vous ne prenez aucun risque.",
            },
            {
              q: 'Que se passe-t-il si je veux des modifications après livraison ?',
              a: "1 révision est incluse dans chaque formule. Pour des modifications supplémentaires, je vous propose un tarif horaire ou un forfait maintenance mensuel selon vos besoins.",
            },
            {
              q: 'Quelle est la différence entre un site vitrine et un site e-commerce ?',
              a: "Un site vitrine présente votre activité, vos services, vos coordonnées l'objectif est de générer des contacts et des appels. Un site e-commerce permet à vos clients d'acheter directement en ligne, avec un panier et un système de paiement par carte bancaire.",
            },
          ],
        },
        cta: {
          titleBefore: 'Prêt à démarrer votre ',
          titleHighlight: 'projet web',
          sub: 'Devis gratuit sous 24h · Vitrine 400-700€ · E-commerce dès 1500€',
          btn: 'Obtenir mon devis gratuit',
        },
      },
      siteVitrinePage: {
        hero: {
          badge: 'Disponible maintenant · Nantes & remote',
          title: 'Création de',
          titleHighlight: 'site vitrine',
          titleLine2: 'pour artisans, restaurants et TPE',
          sub: 'Un site professionnel, rapide et visible sur Google livré en 24 à 48h, entre 400 et 700€. Pas de Wix, pas de template : du sur mesure.',
          ctaQuote: 'Demander un devis gratuit',
          ctaPortfolio: 'Voir les réalisations',
        },
        niches: {
          sectionTitle: 'Quel que soit votre métier',
          sectionSubtitle: 'Un site pensé pour votre activité, pas un template générique pour tout le monde.',
          items: [
            {
              title: 'Artisans & métiers du bâtiment',
              description: "Plombier, électricien, menuisier, peintre, maçon montrez votre savoir-faire et générez des demandes de devis directement depuis votre site.",
              tags: ['Site vitrine artisan', 'Devis en ligne'],
            },
            {
              title: 'Restaurants & cafés',
              description: "Menu en ligne, galerie photos, horaires, prise de contact tout ce qu'il faut pour donner envie et remplir votre salle. Mis à jour facilement.",
              tags: ['Site vitrine restaurant', 'Menu en ligne'],
            },
            {
              title: 'Commerçants & TPE',
              description: "Boutique, cabinet, agence soyez visible sur Google localement et convertissez vos visiteurs en clients avec une présence professionnelle.",
              tags: ['Site web PME Nantes', 'SEO local'],
            },
            {
              title: 'Professions libérales',
              description: "Médecin, avocat, coach, thérapeute, photographe présentez vos services, votre parcours et facilitez la prise de contact ou de rendez-vous.",
              tags: ['Site professionnel freelance', 'Prise de contact'],
            },
          ],
        },
        includes: {
          title: 'Ce que comprend votre site vitrine',
          description: 'Pas de template. Pas de page générée à la chaîne. Chaque site est construit sur mesure pour votre activité.',
          checklist: [
            'Design moderne adapté à votre secteur',
            'Parfait sur smartphone 70% des recherches se font sur mobile',
            'Visible sur Google dès la mise en ligne (SEO de base inclus)',
            'Formulaire de contact intégré',
            'Textes orientés pour convaincre vos visiteurs (copywriting inclus)',
            "Site ultra-rapide chargement en moins d'1 seconde",
            '1 révision incluse après livraison',
            'Accompagnement pour la mise en ligne',
          ],
          pricingLabel: 'Site vitrine',
          pricingPrice: '400€ → 700€',
          pricingSub: 'Livraison 24 à 48h · Paiement à la fin',
          pricingFeatures: [
            'Livraison en 24 à 48h',
            'Design sur mesure',
            'Parfait sur mobile & Google',
            'Formulaire de contact',
            '1 révision incluse',
            'Accompagnement hébergement',
            "Pas d'acompte demandé",
          ],
          pricingCta: 'Démarrer mon projet',
        },
        process: {
          sectionTitle: 'Livré en 24 à 48h voici comment',
          sectionSubtitle: 'Un processus simple, sans jargon technique.',
          steps: [
            {
              title: '1. On discute de votre projet',
              description: "Vous m'expliquez votre activité, vos besoins, ce que vous aimez. Je vous envoie un devis détaillé et gratuit sous 24h. Aucun engagement.",
            },
            {
              title: '2. Je crée votre site',
              description: "Je développe votre site vitrine sur mesure. Vous recevez une préversion en ligne pour valider avant que je publie quoi que ce soit.",
            },
            {
              title: '3. Mise en ligne & paiement',
              description: "Votre site est publié sur votre nom de domaine. Vous payez uniquement une fois le site validé pas avant.",
            },
          ],
        },
        vsWix: {
          title: 'Pourquoi ne pas passer par Wix ou WordPress ?',
          p1: "Wix et WordPress semblent pratiques mais en réalité, les sites générés sont lents, peu personnalisables, et difficiles à faire sortir en haut de Google.",
          p2: "Un site développé sur mesure charge 3× plus vite, se différencie visuellement de la concurrence, et est optimisé pour convertir dès le départ sans les limites d'un constructeur de site.",
          checklist: [
            'Pas de pub Wix ou de badge "Créé avec WordPress"',
            'Design unique pas le même template que votre concurrent',
            'Chargement ultra-rapide (Google favorise les sites rapides)',
            "Pas d'abonnement mensuel à payer à Wix",
            'Code propre, maintenable, évolutif',
          ],
          comparisonTitle: 'Sur mesure vs. constructeur',
          comparisonSubtitle: 'Ce que vous gagnez avec un vrai site pro',
          rows: [
            { label: 'Vitesse de chargement', good: '&lt; 1 s', bad: '3-8 s (Wix)' },
            { label: 'Design unique', good: '✓', bad: '✗' },
            { label: 'SEO optimisé', good: '✓', bad: 'Partiel' },
            { label: 'Abonnement mensuel', good: 'Non', bad: '13-25€/mois' },
            { label: 'Pub visible sur le site', good: 'Non', bad: 'Oui (Wix gratuit)' },
          ],
        },
        faq: {
          sectionTitle: 'Questions fréquentes',
          sectionSubtitle: 'Ce que vous vous demandez avant de vous lancer.',
          items: [
            {
              q: 'Combien coûte un site vitrine pour un artisan ?',
              a: "Pour un artisan (plombier, électricien, menuisier, peintre…), un site vitrine professionnel est entre 400 et 700€ selon le nombre de pages et le contenu. Livraison en 24 à 48h pour un projet standard. Devis gratuit sous 24h.",
            },
            {
              q: 'Combien coûte un site vitrine pour un restaurant ?',
              a: "Un site vitrine pour un restaurant (menu en ligne, galerie, réservation) est dans la même fourchette : 400 à 700€. Si vous souhaitez un système de réservation en ligne intégré, cela peut être ajouté selon le besoin.",
            },
            {
              q: 'Est-ce que je peux modifier mon site après livraison ?',
              a: "1 révision est incluse dans chaque formule. Pour des modifications régulières, je propose un forfait maintenance mensuel. Pour des petites retouches ponctuelles, je facture à l'heure.",
            },
            {
              q: 'Pourquoi ne pas faire le site moi-même avec Wix ou WordPress ?',
              a: "Wix et WordPress, c'est pratique pour débuter mais les résultats sont souvent lents, peu optimisés pour Google, et difficiles à personnaliser vraiment. Un site développé sur mesure charge 3× plus vite, se démarque visuellement, et est pensé pour convertir vos visiteurs en clients. Et vous l'avez en 24-48h.",
            },
            {
              q: 'Est-ce que mon site sera visible sur Google ?',
              a: "Oui. Chaque site inclut les bases du SEO : balises titre, méta-descriptions, structure des titres, vitesse de chargement optimisée. Pour un référencement local fort (ex : «plombier Nantes»), je recommande d'y associer une fiche Google Business que j'aide à créer si besoin.",
            },
            {
              q: 'Est-ce que je paie en avance ?',
              a: "Non. Pour les projets standard (vitrine, e-commerce simple), le paiement se fait en fin de projet, une fois que vous avez validé le site. Pas d'acompte demandé.",
            },
          ],
        },
        cta: {
          titleBefore: 'Prêt à créer votre ',
          titleHighlight: 'site vitrine',
          sub: 'Devis gratuit sous 24h · Entre 400 et 700€ · Livraison 24 à 48h · Paiement après validation',
          btn: 'Démarrer maintenant',
        },
      },
      footer: {
        copyRole: 'Développeur web freelance',
        secondaryAria: 'Navigation secondaire',
      },
    },
  },
}

const deepMerge = (base, patch) => {
  if (Array.isArray(patch)) return patch
  if (typeof patch !== 'object' || patch === null) return patch
  const output = { ...base }
  Object.keys(patch).forEach(key => {
    output[key] = deepMerge(base?.[key], patch[key])
  })
  return output
}

resources.en = {
  translation: deepMerge(resources.fr.translation, {
    language: { label: 'Language', selectDefault: 'Choose a language', options: { fr: 'French', en: 'English', es: 'Spanish', ru: 'Russian', de: 'German', nl: 'Dutch', it: 'Italian', zh: 'Chinese', ja: 'Japanese' } },
    nav: {
      logoAria: 'MadaDev, freelance web developer, back to top',
      mainAria: 'Main navigation',
      links: { services: 'Services', offer: 'Offer', about: 'About', portfolio: 'Portfolio', contact: 'Contact' },
      cta: 'Contact me',
      menuAria: 'Menu',
    },
    hero: { badge: 'Available for new projects', titlePrefix: 'I design', titleHighlight: 'web experiences', titleSuffix: 'that make a difference', description: 'Passionate freelance web developer, I turn your ideas into modern, high-performance, and accessible applications. From design to launch, I handle everything.', primaryCta: 'View my projects', secondaryCta: "Let's talk", stats: { projectsLabel: 'Projects delivered', experienceValue: '5 years', experienceLabel: 'Experience', satisfactionLabel: 'Satisfied clients' } },
    services: {
      title: 'My services',
      subtitle: 'Web solutions tailored to your needs, from design to production.',
      items: [
        {
          icon: '🎨',
          title: 'Showcase websites',
          description: 'Elegant and high-performance websites to present your business and convert visitors into clients.',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: 'Online stores',
          description:
            'Custom online stores (Shopify or Next.js) optimized for conversions, with card payments and Stripe.',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: 'Web applications',
          description: 'Complex web applications with dashboards, authentication, database, and REST API.',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: 'Performance & SEO',
          description: 'Audit, technical refactoring, and optimization to improve performance and search rankings.',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: 'API integrations',
          description: 'Connecting to third-party services: CRM, payments, emailing, social media, and more.',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: 'Maintenance & support',
          description: 'Continuous monitoring, security updates, and technical support for your peace of mind.',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: 'Offer',
      title: 'Your website, your sales machine',
      subtitle:
        'A website that does not convert is wasted money. I design sites built to turn visitors into buyers: showcase sites delivered in 24 to 48 hours for a standard project.',
      benefits: [
        {
          icon: '💰',
          title: 'A website that sells',
          description: 'Not just a showcase, a conversion machine. Every section, button, and word is designed to turn a visitor into a client.',
        },
        {
          icon: '📱',
          title: '100% mobile and fast',
          description: 'Over 60% of your visitors come from mobile. Your site is optimized to deliver a smooth experience on all devices.',
        },
        {
          icon: '🎯',
          title: 'Action-oriented copywriting',
          description: 'Headlines that hook, arguments that convince, calls to action that convert. Design serves the message.',
        },
        {
          icon: '🔍',
          title: 'SEO and visibility',
          description: 'Your site is optimized to appear on Google: semantic structure, tags, and performance to attract traffic from day one.',
        },
        {
          icon: '⚡',
          title: 'Express delivery',
          description:
            'For a standard showcase site: delivery in 24 to 48 hours. Online stores require at least one week and start from €1,500.',
        },
        {
          icon: '🔧',
          title: 'Full autonomy',
          description: 'You leave with a site you can grow. No dependency, no hidden costs you own your tool.',
        },
      ],
      pricing: {
        label: 'Investment',
        labelVitrine: 'Showcase websites',
        note: '€400 to €700 range for a showcase site, depending on complexity. Agreed fixed price, no surprises.',
        ecommerceLine: 'Custom e-commerce: from €1,500, minimum one-week timeline (custom quote).',
        details: [
          'Delivery in 24 to 48h for a standard showcase site',
          'No subscription, one-time payment',
          'Revisions included until you are satisfied',
          'Hosting and domain guidance or full handling',
        ],
        cta: 'Start my project',
      },
    },
    about: { title: 'About me', subtitle: 'Passionate about the web for over 5 years', paragraph1: 'Hi! I am a freelance web developer based in France, specialized in showcase websites, landing pages, and web applications with React and Node.js. I work with startups, SMEs, and entrepreneurs to bring their digital projects to life.', paragraph2: 'My approach: understand your needs, propose suitable solutions, deliver on time, and stay available after launch. Code quality and user experience are at the core of every project.', perks: ['Clean and maintainable code', 'On-time delivery', 'Transparent communication', 'Post-delivery support'], cta: 'Work together', skillsTitle: 'Technical skills', skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Node.js / Express', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 80 },
      { name: 'UI/UX & Figma', level: 75 },
      { name: 'DevOps / Docker', level: 70 },
    ] },
    portfolio: {
      title: 'My projects',
      subtitle: 'A selection of recent projects showcasing my skills and expertise.',
      projects: [
        {
          title: 'Locali',
          category: 'Web application',
          description:
            'Local networking platform helping users find nearby services and businesses.',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: 'Showcase website',
          description:
            'Elegant showcase site for a lifestyle brand, with polished design and smooth user experience.',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        {
          title: 'Lumia',
          category: 'Web application',
          description:
            'Interactive AI-powered voice assistant with speech recognition and real-time responses.',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: 'View project',
      ctaQuestion: 'Do you have a project in mind?',
      ctaAction: "Let's talk",
    },
    contact: { title: 'Let us talk about your project', subtitle: 'Ready to start? Send me a message and I will reply within 24h.', locationLabel: 'Location', availabilityLabel: 'Availability', availabilityValue: 'Available now', successTitle: 'Message sent!', successBody: 'Thank you for your message. I will reply within 24 hours.', form: { name: 'Full name', projectType: 'Project type', message: 'Describe your project', namePlaceholder: 'John Doe', emailPlaceholder: 'john@example.com', messagePlaceholder: 'Tell me about your project, your goals, your deadline...', selectPlaceholder: 'Select...', options: ['Showcase website', 'Online store', 'Web application', 'Redesign / optimization', 'Other'], error: 'An error occurred. Try again or email me directly at issamadayev@gmail.com', sending: 'Sending...', submit: 'Send message' } },
    tarifsPage: {
      hero: {
        badge: 'Fixed price · No surprises · Free quote',
        titleHighlight: 'Pricing',
        titleAfter: ' web design',
        titleLine2: 'in Nantes',
        sub: 'Clear, fixed prices for every project. No bad surprises, no inflated quotes. You know exactly what you pay before you start.',
        ctaQuote: 'Get a free quote',
        ctaPortfolio: 'View our work',
      },
      trust: {
        payment: 'Payment at project completion',
        fixedPrice: 'Fixed price, contractually set',
        noDeposit: 'No upfront deposit',
        freeQuote: 'Free quote within 24h',
      },
      plans: {
        sectionTitle: 'Plans & pricing',
        sectionSubtitle: 'Choose the plan that fits your project.',
        from: 'Starting from ',
        vitrine: {
          label: 'Showcase site',
          delay: 'Delivered in 24 to 48h',
          features: [
            'Custom design',
            'Mobile-first & responsive',
            'Basic SEO (tags, metas)',
            'Contact form',
            'Conversion-focused copywriting',
            '1 revision included',
            'Go-live support',
          ],
          excluded: ['Product catalog', 'Payment system'],
          cta: 'Learn more',
        },
        ecommerce: {
          label: 'E-commerce',
          delay: 'Minimum lead time · 1 week',
          features: [
            'Full online store',
            'Shopify or Next.js (no WooCommerce)',
            'Credit card, Stripe, and other payment methods as needed',
            'Order & inventory management',
            'Mobile-first & e-commerce SEO',
            'Transactional emails',
            '1 revision included',
            'Admin training',
          ],
          cta: 'Learn more',
        },
        custom: {
          label: 'Custom',
          priceText: 'Free quote',
          delay: 'Timeline based on project',
          features: [
            'Complex web application',
            'API & third-party integrations',
            'Custom database',
            'User authentication',
            'Dashboard & back-office',
            'CI/CD & DevOps',
            'Maintenance included (option)',
            'Priority support',
          ],
          cta: 'Request a quote',
        },
      },
      comparison: {
        sectionTitle: 'Plan comparison',
        sectionSubtitle: 'Everything included in each plan, with no ambiguity.',
        thFeature: 'Feature',
        thVitrine: 'Showcase site',
        thEcommerce: 'E-commerce',
        popularBadge: 'Popular',
        thCustom: 'Custom',
        rows: {
          price: { label: 'Price', vitrine: '€400 → €700', ecommerce: 'From €1,500', custom: 'Free quote' },
          delay: { label: 'Delivery time', vitrine: '24 to 48h', ecommerce: 'Min. 1 week', custom: 'Per project' },
          customDesign: 'Custom design',
          mobileFirst: 'Mobile-first',
          baseSeo: 'Basic SEO',
          contactForm: 'Contact form',
          revision: '1 revision included',
          ecommerceShop: 'E-commerce store',
          securePayments: 'Secure payments',
          stockManagement: 'Inventory management',
          apiIntegrations: 'API & integrations',
          backOffice: 'Custom back-office',
        },
      },
      faq: {
        sectionTitle: 'Frequently asked questions',
        sectionSubtitle: 'What you wonder before getting started.',
        items: [
          {
            q: 'How much does a showcase website cost?',
            a: 'Showcase websites generally range between €400 and €700 depending on complexity, with delivery in 24 to 48 hours for a standard project. The quote details the scope: design, development, basic SEO, contact form, and go-live support.',
          },
          {
            q: 'How much does a showcase site cost for a tradesperson or restaurant?',
            a: 'For a tradesperson (plumber, electrician, carpenter…) or a restaurant, the price is the same: between €400 and €700 depending on content and the number of pages. A free, detailed quote is sent within 24 hours.',
          },
          {
            q: 'How much does an e-commerce website cost?',
            a: 'A custom e-commerce site (Shopify or Next.js, no WooCommerce) starts at €1,500 and can go up depending on the catalogue, integrations, and payment methods (credit card, Stripe, etc.). Allow a minimum of one week. Free quote before any commitment.',
          },
          {
            q: 'Why a range of €400 to €700 for a showcase site?',
            a: '€400 is the entry point for a standard showcase site (a few pages, custom design, basic SEO). The range goes up if your project requires more pages, additional features, or richer content. You always receive a free, detailed quote before committing.',
          },
          {
            q: 'Are there any hidden or recurring fees?',
            a: 'No. My fee covers the development of the site. Only hosting and a domain name (managed by you or with my assistance) generate annual costs of approximately €10 to €30/year depending on the provider. No monthly subscription payable to me.',
          },
          {
            q: 'When do I pay?',
            a: 'Payment is made at the end of the project, once you have approved the site. No deposit required for standard projects. You take no risk.',
          },
          {
            q: 'What happens if I want changes after delivery?',
            a: '1 revision is included in every plan. For additional changes, I offer an hourly rate or a monthly maintenance package depending on your needs.',
          },
          {
            q: 'What is the difference between a showcase site and an e-commerce site?',
            a: 'A showcase site presents your business, your services, and your contact details the goal is to generate leads and calls. An e-commerce site allows your customers to buy directly online, with a cart and a credit card payment system.',
          },
        ],
      },
      cta: {
        titleBefore: 'Ready to start your ',
        titleHighlight: 'web project',
        sub: 'Free quote within 24h · Showcase €400-€700 · E-commerce from €1,500',
        btn: 'Get my free quote',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: 'Available now · Nantes & remote',
        title: 'Creating a',
        titleHighlight: 'showcase website',
        titleLine2: 'for tradespeople, restaurants and small businesses',
        sub: 'A professional, fast website visible on Google, delivered in 24 to 48h, between €400 and €700. No Wix, no template: fully custom.',
        ctaQuote: 'Get a free quote',
        ctaPortfolio: 'View our work',
      },
      niches: {
        sectionTitle: 'Whatever your trade',
        sectionSubtitle: 'A site built for your business, not a generic template for everyone.',
        items: [
          {
            title: 'Tradespeople & construction',
            description: 'Plumber, electrician, carpenter, painter, mason showcase your expertise and generate quote requests directly from your site.',
            tags: ['Tradesperson website', 'Online quotes'],
          },
          {
            title: 'Restaurants & cafés',
            description: 'Online menu, photo gallery, opening hours, contact form everything you need to attract customers and fill your tables. Easily updated.',
            tags: ['Restaurant website', 'Online menu'],
          },
          {
            title: 'Retailers & small businesses',
            description: 'Shop, practice, agency be visible on Google locally and convert visitors into customers with a professional presence.',
            tags: ['SME website Nantes', 'Local SEO'],
          },
          {
            title: 'Liberal professions',
            description: 'Doctor, lawyer, coach, therapist, photographer present your services, your background and make it easy to get in touch or book an appointment.',
            tags: ['Freelance professional website', 'Contact form'],
          },
        ],
      },
      includes: {
        title: 'What your showcase website includes',
        description: 'No template. No mass-produced pages. Every site is built custom for your business.',
        checklist: [
          'Modern design tailored to your industry',
          'Perfect on smartphones 70% of searches happen on mobile',
          'Visible on Google from day one (basic SEO included)',
          'Integrated contact form',
          'Conversion-oriented copy (copywriting included)',
          'Ultra-fast site loading in under 1 second',
          '1 revision included after delivery',
          'Go-live support',
        ],
        pricingLabel: 'Showcase website',
        pricingPrice: '€400 → €700',
        pricingSub: 'Delivered in 24-48h · Pay at the end',
        pricingFeatures: [
          'Delivered in 24 to 48h',
          'Custom design',
          'Perfect on mobile & Google',
          'Contact form',
          '1 revision included',
          'Hosting support',
          'No deposit required',
        ],
        pricingCta: 'Start my project',
      },
      process: {
        sectionTitle: 'Delivered in 24 to 48h here is how',
        sectionSubtitle: 'A simple process, no technical jargon.',
        steps: [
          {
            title: '1. We discuss your project',
            description: 'You tell me about your business, your needs, what you like. I send you a detailed, free quote within 24h. No commitment.',
          },
          {
            title: '2. I build your site',
            description: 'I develop your custom showcase site. You receive an online preview to approve before I publish anything.',
          },
          {
            title: '3. Go live & payment',
            description: 'Your site is published on your domain. You pay only once the site is approved not before.',
          },
        ],
      },
      vsWix: {
        title: 'Why not use Wix or WordPress?',
        p1: 'Wix and WordPress seem convenient but in reality, the sites they produce are slow, hard to customize, and difficult to rank on Google.',
        p2: 'A custom-built site loads 3× faster, stands out visually from the competition, and is optimized to convert from the start without the limitations of a site builder.',
        checklist: [
          'No Wix ads or "Made with WordPress" badge',
          'Unique design not the same template as your competitor',
          'Ultra-fast loading (Google favors fast sites)',
          'No monthly subscription to pay to Wix',
          'Clean, maintainable, scalable code',
        ],
        comparisonTitle: 'Custom vs. site builder',
        comparisonSubtitle: 'What you gain with a real professional site',
        rows: [
          { label: 'Loading speed', good: '&lt; 1 s', bad: '3-8 s (Wix)' },
          { label: 'Unique design', good: '✓', bad: '✗' },
          { label: 'Optimized SEO', good: '✓', bad: 'Partial' },
          { label: 'Monthly subscription', good: 'None', bad: '€13-25/month' },
          { label: 'Ads visible on site', good: 'None', bad: 'Yes (free Wix)' },
        ],
      },
      faq: {
        sectionTitle: 'Frequently asked questions',
        sectionSubtitle: 'What you wonder before getting started.',
        items: [
          {
            q: 'How much does a showcase website cost for a tradesperson?',
            a: 'For a tradesperson (plumber, electrician, carpenter, painter…), a professional showcase website costs between €400 and €700 depending on the number of pages and content. Delivered in 24 to 48h for a standard project. Free quote within 24h.',
          },
          {
            q: 'How much does a showcase website cost for a restaurant?',
            a: 'A showcase website for a restaurant (online menu, gallery, reservations) falls in the same range: €400 to €700. If you want an integrated online booking system, it can be added based on your needs.',
          },
          {
            q: 'Can I make changes to my site after delivery?',
            a: '1 revision is included in every plan. For regular updates, I offer a monthly maintenance package. For small one-off tweaks, I charge by the hour.',
          },
          {
            q: 'Why not build the site myself with Wix or WordPress?',
            a: 'Wix and WordPress are handy to get started but the results are often slow, poorly optimized for Google, and hard to truly customize. A custom-built site loads 3× faster, stands out visually, and is designed to convert visitors into clients. And you get it in 24-48h.',
          },
          {
            q: 'Will my site be visible on Google?',
            a: "Yes. Every site includes SEO basics: title tags, meta descriptions, heading structure, optimized loading speed. For strong local SEO (e.g. 'plumber Nantes'), I recommend pairing it with a Google Business profile, which I can help you set up.",
          },
          {
            q: 'Do I pay upfront?',
            a: 'No. For standard projects (showcase, simple e-commerce), payment is made at the end of the project, once you have approved the site. No deposit required.',
          },
        ],
      },
      cta: {
        titleBefore: 'Ready to create your ',
        titleHighlight: 'showcase website',
        sub: 'Free quote within 24h · Between €400 and €700 · Delivered in 24-48h · Pay after approval',  
        btn: 'Get started now',
      },
    },
    footer: { copyRole: 'Freelance web developer', secondaryAria: 'Secondary navigation' },
  }),
}
resources.es = {
  translation: deepMerge(resources.fr.translation, {
    language: {
      label: 'Idioma',
      selectDefault: 'Elegir un idioma',
      options: {
        fr: 'Francés',
        en: 'Inglés',
        es: 'Español',
        ru: 'Ruso',
        de: 'Alemán',
        nl: 'Neerlandés',
        it: 'Italiano',
        zh: 'Chino',
        ja: 'Japonés',
      },
    },
    nav: {
      logoAria: 'MadaDev, desarrollador web freelance, volver arriba',
      mainAria: 'Navegación principal',
      links: { services: 'Servicios', offer: 'Oferta', about: 'Sobre mí', portfolio: 'Portafolio', contact: 'Contacto' },
      cta: 'Contactarme',
      menuAria: 'Menú',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      titlePrefix: 'Diseño',
      titleHighlight: 'experiencias web',
      titleSuffix: 'que marcan la diferencia',
      description:
        'Desarrollador web freelance apasionado, transformo tus ideas en aplicaciones modernas, rápidas y accesibles. Del diseño al lanzamiento, me encargo de todo.',
      primaryCta: 'Ver mis proyectos',
      secondaryCta: 'Hablemos',
      stats: {
        projectsLabel: 'Proyectos entregados',
        experienceValue: '5 años',
        experienceLabel: 'Experiencia',
        satisfactionLabel: 'Clientes satisfechos',
      },
    },
    services: {
      title: 'Mis servicios',
      subtitle:
        'Soluciones web adaptadas a tus necesidades, desde el diseño hasta la producción.',
      items: [
        {
          icon: '🎨',
          title: 'Sitios corporativos',
          description:
            'Sitios elegantes y rápidos para presentar tu actividad y convertir visitantes en clientes.',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: 'Comercio electrónico',
          description:
            'Tiendas online a medida, optimizadas para conversiones con pago seguro integrado.',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: 'Aplicaciones web',
          description:
            'Aplicaciones web completas con panel, autenticación, base de datos y API REST.',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: 'Optimización y SEO',
          description:
            'Auditoría, mejora técnica y optimización para subir rendimiento y visibilidad.',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: 'Integraciones API',
          description:
            'Conexión con servicios externos: CRM, pagos, emailing, redes sociales y más.',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: 'Mantenimiento y soporte',
          description:
            'Seguimiento continuo, actualizaciones de seguridad y soporte técnico.',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: 'La oferta',
      title: 'Tu sitio, tu máquina de ventas',
      subtitle:
        'Un sitio web que no convierte es dinero perdido. Sitios vitrina entregados en 24 a 48 horas para un proyecto estándar.',
      benefits: [
        {
          icon: '💰',
          title: 'Un sitio que vende',
          description:
            'No solo una vitrina, una máquina de conversión. Cada sección, botón y palabra está pensada para convertir.',
        },
        {
          icon: '📱',
          title: '100% móvil y rápido',
          description:
            'Más del 60% de tus visitas llegan desde móvil. Tu sitio estará optimizado para todos los dispositivos.',
        },
        {
          icon: '🎯',
          title: 'Copywriting orientado a acción',
          description:
            'Titulares que captan, argumentos que convencen y llamadas a la acción que convierten.',
        },
        {
          icon: '🔍',
          title: 'SEO y visibilidad',
          description:
            'Tu sitio optimizado para Google: estructura semántica, etiquetas y rendimiento.',
        },
        {
          icon: '⚡',
          title: 'Entrega express',
          description:
            'Sitio vitrina estándar en 24 a 48h. E-commerce desde 1500€, mínimo 1 semana.',
        },
        {
          icon: '🔧',
          title: 'Autonomía total',
          description:
            'Te llevas un sitio que puedes evolucionar sin dependencia ni costes ocultos.',
        },
      ],
      pricing: {
        label: 'Inversión',
        labelVitrine: 'Sitios vitrina',
        note:
          'Entre 400 y 700€ para un sitio vitrina, según complejidad. Precio fijo acordado, sin sorpresas.',
        ecommerceLine:
          'E-commerce a medida: desde 1500€, plazo mínimo 1 semana (presupuesto personalizado).',
        details: [
          'Entrega en 24 a 48h para un sitio vitrina estándar',
          'Sin suscripción, pago único',
          'Revisiones incluidas hasta tu satisfacción',
          'Alojamiento y dominio guiados o gestionados',
        ],
        cta: 'Empezar mi proyecto',
      },
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Apasionado por la web desde hace más de 5 años',
      paragraph1:
        'Hola, soy desarrollador web freelance en Francia, especializado en sitios corporativos, landing pages y aplicaciones web con React y Node.js.',
      paragraph2:
        'Mi enfoque: entender tus necesidades, proponer soluciones adecuadas, entregar en plazo y seguir disponible después del lanzamiento.',
      perks: [
        'Código limpio y mantenible',
        'Entrega en plazo',
        'Comunicación transparente',
        'Soporte después de la entrega',
      ],
      cta: 'Trabajemos juntos',
      skillsTitle: 'Habilidades técnicas',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'UI/UX y Figma', level: 75 },
        { name: 'DevOps / Docker', level: 70 },
      ],
    },
    portfolio: {
      title: 'Mis proyectos',
      subtitle:
        'Una selección de proyectos recientes que muestran mis habilidades y experiencia.',
      projects: [
        {
          title: 'Locali',
          category: 'Aplicación web',
          description:
            'Plataforma local para ayudar a usuarios a encontrar servicios y comercios cercanos.',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: 'Sitio corporativo',
          description:
            'Sitio elegante para una marca lifestyle con diseño cuidado y experiencia fluida.',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        {
          title: 'Lumia',
          category: 'Aplicación web',
          description:
            'Asistente de voz impulsado por IA con reconocimiento de voz y respuestas en tiempo real.',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: 'Ver proyecto',
      ctaQuestion: '¿Tienes un proyecto en mente?',
      ctaAction: 'Hablemos',
    },
    contact: {
      title: 'Hablemos de tu proyecto',
      subtitle: '¿Listo para empezar? Envíame un mensaje y respondo en 24h.',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      locationValue: 'Francia (remoto)',
      availabilityLabel: 'Disponibilidad',
      availabilityValue: 'Desde ahora',
      successTitle: '¡Mensaje enviado!',
      successBody: 'Gracias por tu mensaje. Te respondo en las próximas 24 horas.',
      form: {
        name: 'Nombre completo',
        email: 'Email',
        projectType: 'Tipo de proyecto',
        message: 'Describe tu proyecto',
        namePlaceholder: 'Juan Pérez',
        emailPlaceholder: 'juan@ejemplo.com',
        messagePlaceholder: 'Cuéntame tu proyecto, tus objetivos y plazo...',
        selectPlaceholder: 'Seleccionar...',
        options: [
          'Sitio corporativo',
          'Comercio electrónico',
          'Aplicación web',
          'Rediseño / optimización',
          'Otro',
        ],
        error:
          'Ha ocurrido un error. Inténtalo de nuevo o escribe a issamadayev@gmail.com',
        sending: 'Enviando...',
        submit: 'Enviar mensaje',
      },
    },
    tarifsPage: {
      hero: {
        badge: 'Precio fijo · Sin sorpresas · Presupuesto gratuito',
        titleHighlight: 'Tarifas',
        titleAfter: ' creación',
        titleLine2: 'sitio web en Nantes',
        sub: 'Precios claros y fijos para cada proyecto. Sin malas sorpresas, sin presupuestos inflados. Sabes exactamente lo que pagas antes de empezar.',
        ctaQuote: 'Pedir un presupuesto gratuito',
        ctaPortfolio: 'Ver las realizaciones',
      },
      trust: {
        payment: 'Pago al final del proyecto',
        fixedPrice: 'Precio fijo contractualizado',
        noDeposit: 'Sin anticipo',
        freeQuote: 'Presupuesto gratuito en 24h',
      },
      plans: {
        sectionTitle: 'Planes y tarifas',
        sectionSubtitle: 'Elige el plan adaptado a tu proyecto.',
        from: 'Desde ',
        vitrine: {
          label: 'Sitio corporativo',
          delay: 'Entrega en 24 a 48h',
          features: [
            'Diseño a medida',
            'Mobile-first y responsive',
            'SEO básico (etiquetas, metas)',
            'Formulario de contacto',
            'Copywriting orientado a conversión',
            '1 revisión incluida',
            'Acompañamiento en la puesta en línea',
          ],
          excluded: ['Catálogo de productos', 'Sistema de pago'],
          cta: 'Saber más',
        },
        ecommerce: {
          label: 'E-commerce',
          delay: 'Plazo mínimo · 1 semana',
          features: [
            'Tienda online completa',
            'Shopify o Next.js (sin WooCommerce)',
            'Tarjeta bancaria, Stripe u otros métodos según necesidad',
            'Gestión de pedidos e inventario',
            'Mobile-first y SEO e-commerce',
            'Correos transaccionales',
            '1 revisión incluida',
            'Formación en la administración',
          ],
          cta: 'Saber más',
        },
        custom: {
          label: 'A medida',
          priceText: 'Presupuesto gratuito',
          delay: 'Plazo según el proyecto',
          features: [
            'Aplicación web compleja',
            'API e integraciones de terceros',
            'Base de datos a medida',
            'Autenticación de usuarios',
            'Dashboard y back-office',
            'CI/CD y DevOps',
            'Mantenimiento incluido (opción)',
            'Soporte prioritario',
          ],
          cta: 'Pedir un presupuesto',
        },
      },
      comparison: {
        sectionTitle: 'Comparativa de planes',
        sectionSubtitle: 'Todo lo incluido en cada plan, sin ambigüedad.',
        thFeature: 'Funcionalidad',
        thVitrine: 'Sitio corporativo',
        thEcommerce: 'E-commerce',
        popularBadge: 'Popular',
        thCustom: 'A medida',
        rows: {
          price: { label: 'Precio', vitrine: '400€ → 700€', ecommerce: 'Desde 1500€', custom: 'Presupuesto gratuito' },
          delay: { label: 'Plazo de entrega', vitrine: '24 a 48h', ecommerce: 'Mín. 1 semana', custom: 'Según proyecto' },
          customDesign: 'Diseño a medida',
          mobileFirst: 'Mobile-first',
          baseSeo: 'SEO básico',
          contactForm: 'Formulario de contacto',
          revision: '1 revisión incluida',
          ecommerceShop: 'Tienda e-commerce',
          securePayments: 'Pagos seguros',
          stockManagement: 'Gestión de inventario',
          apiIntegrations: 'API e integraciones',
          backOffice: 'Back-office a medida',
        },
      },
      faq: {
        sectionTitle: 'Preguntas frecuentes',
        sectionSubtitle: 'Lo que te preguntas antes de lanzarte.',
        items: [
          {
            q: '¿Cuánto cuesta un sitio corporativo?',
            a: 'Los sitios corporativos están generalmente entre 400€ y 700€ según la complejidad, con entrega en 24 a 48 horas para un proyecto estándar. El presupuesto detalla el alcance: diseño, desarrollo, SEO básico, formulario de contacto y puesta en línea.',
          },
          {
            q: '¿Cuánto cuesta un sitio corporativo para un artesano o un restaurante?',
            a: 'Para un artesano (fontanero, electricista, carpintero…) o un restaurante, el precio es el mismo: entre 400 y 700€ según el contenido y el número de páginas. Se envía un presupuesto gratuito y detallado en 24 horas.',
          },
          {
            q: '¿Cuánto cuesta un sitio e-commerce?',
            a: 'Un sitio e-commerce a medida (Shopify o Next.js, sin WooCommerce) comienza desde 1500€ y puede subir según el catálogo, las integraciones y los métodos de pago (tarjeta bancaria, Stripe, etc.). Cuenta con un mínimo de una semana de plazo. Presupuesto gratuito antes de cualquier compromiso.',
          },
          {
            q: '¿Por qué una horquilla de 400 a 700€ para un sitio corporativo?',
            a: '400€ es el punto de entrada para un sitio corporativo estándar (pocas páginas, diseño a medida, SEO básico). La horquilla sube si tu proyecto necesita más páginas, funcionalidades adicionales o un contenido más rico. Siempre recibes un presupuesto gratuito y detallado antes de comprometerte.',
          },
          {
            q: '¿Hay tarifas ocultas o recurrentes?',
            a: 'No. Mi tarifa cubre el desarrollo del sitio. Solo el alojamiento y el nombre de dominio (gestionados por ti o con mi ayuda) generan costes anuales de aproximadamente 10 a 30€/año según el proveedor. Sin suscripción mensual que pagarme.',
          },
          {
            q: '¿Cuándo pago?',
            a: 'El pago se realiza al final del proyecto, una vez que hayas validado el sitio. Sin anticipo en los proyectos estándar. No corres ningún riesgo.',
          },
          {
            q: '¿Qué pasa si quiero modificaciones después de la entrega?',
            a: '1 revisión está incluida en cada plan. Para modificaciones adicionales, te propongo una tarifa por horas o un forfait de mantenimiento mensual según tus necesidades.',
          },
          {
            q: '¿Cuál es la diferencia entre un sitio corporativo y un sitio e-commerce?',
            a: 'Un sitio corporativo presenta tu actividad, tus servicios y tus datos de contacto el objetivo es generar contactos y llamadas. Un sitio e-commerce permite a tus clientes comprar directamente en línea, con un carrito y un sistema de pago con tarjeta bancaria.',
          },
        ],
      },
      cta: {
        titleBefore: 'Listo para empezar tu ',
        titleHighlight: 'proyecto web',
        sub: 'Presupuesto gratuito en 24h · Corporativo 400-700€ · E-commerce desde 1500€',
        btn: 'Obtener mi presupuesto gratuito',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: 'Disponible ahora · Nantes y remoto',
        title: 'Creación de',
        titleHighlight: 'sitio corporativo',
        titleLine2: 'para artesanos, restaurantes y pymes',
        sub: 'Un sitio profesional, rápido y visible en Google, entregado en 24 a 48h, entre 400 y 700€. Sin Wix, sin plantillas: totalmente a medida.',
        ctaQuote: 'Pedir un presupuesto gratuito',
        ctaPortfolio: 'Ver las realizaciones',
      },
      niches: {
        sectionTitle: 'Sea cual sea tu sector',
        sectionSubtitle: 'Un sitio pensado para tu actividad, no una plantilla genérica para todos.',
        items: [
          {
            title: 'Artesanos y construcción',
            description: 'Fontanero, electricista, carpintero, pintor, albañil muestra tu experiencia y genera solicitudes de presupuesto directamente desde tu sitio.',
            tags: ['Sitio para artesanos', 'Presupuestos en línea'],
          },
          {
            title: 'Restaurantes y cafés',
            description: 'Carta en línea, galería de fotos, horarios, contacto todo lo necesario para atraer clientes y llenar tu local. Fácil de actualizar.',
            tags: ['Sitio para restaurantes', 'Carta en línea'],
          },
          {
            title: 'Comercios y pymes',
            description: 'Tienda, despacho, agencia sé visible en Google localmente y convierte visitantes en clientes con una presencia profesional.',
            tags: ['Sitio web pyme Nantes', 'SEO local'],
          },
          {
            title: 'Profesiones liberales',
            description: 'Médico, abogado, coach, terapeuta, fotógrafo presenta tus servicios, tu trayectoria y facilita el contacto o la reserva de citas.',
            tags: ['Sitio profesional freelance', 'Formulario de contacto'],
          },
        ],
      },
      includes: {
        title: 'Qué incluye tu sitio corporativo',
        description: 'Sin plantillas. Sin páginas generadas en serie. Cada sitio se construye a medida para tu actividad.',
        checklist: [
          'Diseño moderno adaptado a tu sector',
          'Perfecto en smartphone el 70% de las búsquedas se hacen desde móvil',
          'Visible en Google desde el primer día (SEO básico incluido)',
          'Formulario de contacto integrado',
          'Textos orientados a convencer a tus visitantes (copywriting incluido)',
          'Sitio ultra-rápido carga en menos de 1 segundo',
          '1 revisión incluida tras la entrega',
          'Acompañamiento en la puesta en línea',
        ],
        pricingLabel: 'Sitio corporativo',
        pricingPrice: '400€ → 700€',
        pricingSub: 'Entrega 24 a 48h · Pago al final',
        pricingFeatures: [
          'Entrega en 24 a 48h',
          'Diseño a medida',
          'Perfecto en móvil y Google',
          'Formulario de contacto',
          '1 revisión incluida',
          'Acompañamiento en alojamiento',
          'Sin anticipo',
        ],
        pricingCta: 'Iniciar mi proyecto',
      },
      process: {
        sectionTitle: 'Entregado en 24 a 48h así es como',
        sectionSubtitle: 'Un proceso sencillo, sin tecnicismos.',
        steps: [
          {
            title: '1. Hablamos de tu proyecto',
            description: 'Me cuentas tu actividad, tus necesidades, lo que te gusta. Te envío un presupuesto detallado y gratuito en 24h. Sin compromiso.',
          },
          {
            title: '2. Creo tu sitio',
            description: 'Desarrollo tu sitio corporativo a medida. Recibes una vista previa en línea para validar antes de que publique nada.',
          },
          {
            title: '3. Publicación y pago',
            description: 'Tu sitio se publica en tu dominio. Pagas únicamente una vez que hayas validado el sitio, no antes.',
          },
        ],
      },
      vsWix: {
        title: '¿Por qué no usar Wix o WordPress?',
        p1: 'Wix y WordPress parecen prácticos pero en realidad, los sitios generados son lentos, poco personalizables y difíciles de posicionar en Google.',
        p2: "Un sitio desarrollado a medida carga 3× más rápido, se diferencia visualmente de la competencia y está optimizado para convertir desde el principio, sin las limitaciones de un constructor de sitios.",
        checklist: [
          'Sin publicidad de Wix ni badge "Creado con WordPress"',
          'Diseño único no la misma plantilla que tu competidor',
          'Carga ultra-rápida (Google favorece los sitios rápidos)',
          'Sin suscripción mensual que pagar a Wix',
          'Código limpio, mantenible y escalable',
        ],
        comparisonTitle: 'A medida vs. constructor',
        comparisonSubtitle: 'Lo que ganas con un sitio profesional real',
        rows: [
          { label: 'Velocidad de carga', good: '&lt; 1 s', bad: '3-8 s (Wix)' },
          { label: 'Diseño único', good: '✓', bad: '✗' },
          { label: 'SEO optimizado', good: '✓', bad: 'Parcial' },
          { label: 'Suscripción mensual', good: 'No', bad: '13-25€/mes' },
          { label: 'Publicidad visible en el sitio', good: 'No', bad: 'Sí (Wix gratuito)' },
        ],
      },
      faq: {
        sectionTitle: 'Preguntas frecuentes',
        sectionSubtitle: 'Lo que te preguntas antes de lanzarte.',
        items: [
          {
            q: '¿Cuánto cuesta un sitio corporativo para un artesano?',
            a: 'Para un artesano (fontanero, electricista, carpintero, pintor…), un sitio corporativo profesional cuesta entre 400 y 700€ según el número de páginas y el contenido. Entrega en 24 a 48h para un proyecto estándar. Presupuesto gratuito en 24h.',
          },
          {
            q: '¿Cuánto cuesta un sitio corporativo para un restaurante?',
            a: 'Un sitio corporativo para un restaurante (carta en línea, galería, reservas) está en la misma horquilla: 400 a 700€. Si deseas un sistema de reservas en línea integrado, se puede añadir según la necesidad.',
          },
          {
            q: '¿Puedo modificar mi sitio después de la entrega?',
            a: '1 revisión está incluida en cada plan. Para modificaciones frecuentes, ofrezco un forfait de mantenimiento mensual. Para pequeños retoques puntuales, facturo por horas.',
          },
          {
            q: '¿Por qué no hacer el sitio yo mismo con Wix o WordPress?',
            a: 'Wix y WordPress son prácticos para empezar, pero los resultados suelen ser lentos, poco optimizados para Google y difíciles de personalizar de verdad. Un sitio desarrollado a medida carga 3× más rápido, destaca visualmente y está pensado para convertir visitantes en clientes. Y lo tienes en 24-48h.',
          },
          {
            q: '¿Mi sitio será visible en Google?',
            a: 'Sí. Cada sitio incluye las bases del SEO: etiquetas de título, meta descripciones, estructura de encabezados, velocidad de carga optimizada. Para un SEO local potente (p. ej. «fontanero Nantes»), recomiendo asociarlo a una ficha de Google Business, que te ayudo a crear si lo necesitas.',
          },
          {
            q: '¿Pago por adelantado?',
            a: 'No. Para los proyectos estándar (corporativo, e-commerce sencillo), el pago se realiza al final del proyecto, una vez que hayas validado el sitio. Sin anticipo.',
          },
        ],
      },
      cta: {
        titleBefore: 'Listo para crear tu ',
        titleHighlight: 'sitio corporativo',
        sub: 'Presupuesto gratuito en 24h · Entre 400 y 700€ · Entrega 24 a 48h · Pago tras la validación',
        btn: 'Empezar ahora',
      },
    },
    footer: {
      copyRole: 'Desarrollador web freelance',
      secondaryAria: 'Navegación secundaria',
    },
  }),
}
resources.ru = {
  translation: deepMerge(resources.en.translation, {
    language: {
      label: 'Язык',
      selectDefault: 'Выберите язык',
      options: {
        fr: 'Французский',
        en: 'Английский',
        es: 'Испанский',
        ru: 'Русский',
        de: 'Немецкий',
        nl: 'Нидерландский',
        it: 'Итальянский',
        zh: 'Китайский',
        ja: 'Японский',
      },
    },
    nav: {
      logoAria: 'MadaDev, веб-разработчик фрилансер, наверх',
      mainAria: 'Основная навигация',
      links: {
        services: 'Услуги',
        offer: 'Предложение',
        about: 'Обо мне',
        portfolio: 'Портфолио',
        contact: 'Контакты',
      },
      cta: 'Связаться со мной',
      menuAria: 'Меню',
    },
    hero: {
      badge: 'Открыт для новых проектов',
      titlePrefix: 'Я создаю',
      titleHighlight: 'веб-решения',
      titleSuffix: 'которые дают результат',
      description:
        'Я увлечённый веб-разработчик фрилансер. Превращаю ваши идеи в современные, быстрые и доступные приложения. От дизайна до запуска беру всё на себя.',
      primaryCta: 'Посмотреть проекты',
      secondaryCta: 'Обсудить проект',
      stats: {
        projectsLabel: 'Сданных проектов',
        experienceValue: '5 лет',
        experienceLabel: 'Опыт',
        satisfactionLabel: 'Довольных клиентов',
      },
    },
    services: {
      title: 'Мои услуги',
      subtitle: 'Веб-решения под ваши задачи: от идеи до продакшена.',
      items: [
        {
          icon: '🎨',
          title: 'Сайты-витрины',
          description:
            'Элегантные и быстрые сайты для презентации вашей деятельности и конверсии посетителей в клиентов.',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: 'Интернет-магазины',
          description:
            'Интернет-магазины под ключ, оптимизированные под продажи, с безопасной оплатой.',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: 'Веб-приложения',
          description:
            'Полноценные веб-приложения с панелью управления, авторизацией, базой данных и REST API.',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: 'Оптимизация и SEO',
          description:
            'Аудит, технические улучшения и оптимизация производительности и видимости.',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: 'Интеграции API',
          description:
            'Интеграция сторонних сервисов: CRM, платежи, почтовые рассылки, соцсети и многое другое.',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: 'Поддержка и сопровождение',
          description:
            'Постоянное сопровождение, обновления безопасности и техническая поддержка.',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: 'Предложение',
      title: 'Ваш сайт как машина продаж',
      subtitle:
        'Сайт, который не конвертирует, это потерянные деньги. Я делаю сайты, которые превращают посетителей в клиентов, с запуском за 24-48 часов.',
      benefits: [
        {
          icon: '💰',
          title: 'Сайт, который продает',
          description:
            'Не просто витрина, а инструмент конверсии. Каждый блок, кнопка и текст работают на результат.',
        },
        {
          icon: '📱',
          title: '100% адаптивный и быстрый',
          description:
            'Более 60% посетителей приходят с мобильных устройств. Сайт будет идеально адаптирован под все экраны.',
        },
        {
          icon: '🎯',
          title: 'Тексты, ориентированные на действие',
          description:
            'Заголовки, которые цепляют, аргументы, которые убеждают, и CTA, которые конвертируют.',
        },
        {
          icon: '🔍',
          title: 'SEO и видимость',
          description:
            'Сайт оптимизирован под Google: семантика, мета-теги и производительность.',
        },
        {
          icon: '⚡',
          title: 'Быстрый запуск',
          description:
            'Стандартный проект запускается за 24-48 часов, в зависимости от сложности.',
        },
        {
          icon: '🔧',
          title: 'Полная автономия',
          description:
            'Вы получаете сайт, который можете развивать без зависимости и скрытых платежей.',
        },
      ],
      pricing: {
        label: 'Инвестиции',
        labelVitrine: 'Сайты-визитки',
        note:
          'Ориентир 400-700€ для сайта-визитки в зависимости от сложности. Фиксированная договорённая цена.',
        ecommerceLine:
          'Интернет-магазин на заказ: от 1500€, минимум 1 неделя (индивидуальный расчёт).',
        details: [
          'Сдача за 24-48 ч для стандартного сайта-визитки',
          'Без подписки, единоразовая оплата',
          'Правки включены до полного результата',
          'Помощь с хостингом и доменом',
        ],
        cta: 'Начать проект',
      },
    },
    about: {
      title: 'Обо мне',
      subtitle: 'Более 5 лет в веб-разработке',
      paragraph1:
        'Я фриланс веб-разработчик во Франции. Специализируюсь на сайтах-визитках, лендингах и веб-приложениях на React и Node.js.',
      paragraph2:
        'Мой подход: понять ваши задачи, предложить подходящее решение, сдать в срок и оставаться на связи после запуска.',
      perks: [
        'Чистый и поддерживаемый код',
        'Соблюдение сроков',
        'Прозрачная коммуникация',
        'Поддержка после релиза',
      ],
      cta: 'Работать вместе',
      skillsTitle: 'Технические навыки',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'UI/UX и Figma', level: 75 },
        { name: 'DevOps / Docker', level: 70 },
      ],
    },
    portfolio: {
      title: 'Мои проекты',
      subtitle: 'Подборка недавних проектов и реализованных решений.',
      projects: [
        {
          title: 'Locali',
          category: 'Веб-приложение',
          description:
            'Локальная платформа, помогающая пользователям находить услуги и бизнес рядом.',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: 'Сайт-визитка',
          description:
            'Элегантный сайт для lifestyle-бренда с аккуратным дизайном и удобным UX.',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        {
          title: 'Lumia',
          category: 'Веб-приложение',
          description:
            'Интерактивный голосовой помощник на базе ИИ с распознаванием речи в реальном времени.',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: 'Открыть проект',
      ctaQuestion: 'Есть идея проекта?',
      ctaAction: 'Давайте обсудим',
    },
    contact: {
      title: 'Обсудим ваш проект',
      subtitle: 'Готовы стартовать? Напишите мне, и я отвечу в течение 24 часов.',
      emailLabel: 'Email',
      locationLabel: 'Локация',
      locationValue: 'Франция (удаленно)',
      availabilityLabel: 'Доступность',
      availabilityValue: 'Сейчас',
      successTitle: 'Сообщение отправлено!',
      successBody: 'Спасибо за сообщение. Я отвечу в течение 24 часов.',
      form: {
        name: 'Полное имя',
        projectType: 'Тип проекта',
        message: 'Опишите ваш проект',
        namePlaceholder: 'Иван Иванов',
        emailPlaceholder: 'ivan@example.com',
        messagePlaceholder: 'Расскажите о проекте, целях и сроках...',
        selectPlaceholder: 'Выбрать...',
        options: [
          'Сайт-визитка',
          'Интернет-магазин',
          'Веб-приложение',
          'Редизайн / оптимизация',
          'Другое',
        ],
        error:
          'Произошла ошибка. Попробуйте ещё раз или напишите на issamadayev@gmail.com',
        sending: 'Отправка...',
        submit: 'Отправить сообщение',
      },
    },
    tarifsPage: {
      hero: {
        badge: 'Фиксированная цена · Без сюрпризов · Бесплатный расчёт',
        titleHighlight: 'Тарифы',
        titleAfter: ' создание',
        titleLine2: 'сайта в Нанте',
        sub: 'Чёткие фиксированные цены для каждого проекта. Без неприятных сюрпризов и завышенных смет. Вы точно знаете, сколько платите, до начала работы.',
        ctaQuote: 'Запросить бесплатный расчёт',
        ctaPortfolio: 'Посмотреть работы',
      },
      trust: {
        payment: 'Оплата по завершении проекта',
        fixedPrice: 'Фиксированная цена, закреплённая договором',
        noDeposit: 'Без предоплаты',
        freeQuote: 'Бесплатный расчёт в течение 24 ч',
      },
      plans: {
        sectionTitle: 'Планы и тарифы',
        sectionSubtitle: 'Выберите план, подходящий для вашего проекта.',
        from: 'От ',
        vitrine: {
          label: 'Сайт-визитка',
          delay: 'Сдача за 24-48 ч',
          features: [
            'Дизайн под заказ',
            'Mobile-first и адаптивность',
            'Базовое SEO (теги, мета)',
            'Форма обратной связи',
            'Тексты, ориентированные на конверсию',
            '1 правка включена',
            'Помощь с запуском',
          ],
          excluded: ['Каталог товаров', 'Платёжная система'],
          cta: 'Узнать больше',
        },
        ecommerce: {
          label: 'Интернет-магазин',
          delay: 'Минимальный срок · 1 неделя',
          features: [
            'Полноценный интернет-магазин',
            'Shopify или Next.js (без WooCommerce)',
            'Банковская карта, Stripe и другие методы оплаты по потребности',
            'Управление заказами и остатками',
            'Mobile-first и SEO для e-commerce',
            'Транзакционные письма',
            '1 правка включена',
            'Обучение работе с панелью',
          ],
          cta: 'Узнать больше',
        },
        custom: {
          label: 'Под заказ',
          priceText: 'Бесплатный расчёт',
          delay: 'Сроки по проекту',
          features: [
            'Сложное веб-приложение',
            'API и интеграции сторонних сервисов',
            'База данных под заказ',
            'Аутентификация пользователей',
            'Дашборд и бэк-офис',
            'CI/CD и DevOps',
            'Поддержка в комплекте (опция)',
            'Приоритетная поддержка',
          ],
          cta: 'Запросить расчёт',
        },
      },
      comparison: {
        sectionTitle: 'Сравнение планов',
        sectionSubtitle: 'Всё, что включено в каждый план, без двусмысленности.',
        thFeature: 'Функциональность',
        thVitrine: 'Сайт-визитка',
        thEcommerce: 'Интернет-магазин',
        popularBadge: 'Популярный',
        thCustom: 'Под заказ',
        rows: {
          price: { label: 'Цена', vitrine: '400€ → 700€', ecommerce: 'От 1500€', custom: 'Бесплатный расчёт' },
          delay: { label: 'Срок сдачи', vitrine: '24-48 ч', ecommerce: 'Мин. 1 неделя', custom: 'По проекту' },
          customDesign: 'Дизайн под заказ',
          mobileFirst: 'Mobile-first',
          baseSeo: 'Базовое SEO',
          contactForm: 'Форма обратной связи',
          revision: '1 правка включена',
          ecommerceShop: 'Интернет-магазин',
          securePayments: 'Безопасная оплата',
          stockManagement: 'Управление остатками',
          apiIntegrations: 'API и интеграции',
          backOffice: 'Бэк-офис под заказ',
        },
      },
      faq: {
        sectionTitle: 'Часто задаваемые вопросы',
        sectionSubtitle: 'То, что вы хотите знать перед началом.',
        items: [
          {
            q: 'Сколько стоит сайт-визитка?',
            a: 'Сайты-визитки обычно стоят от 400€ до 700€ в зависимости от сложности, со сдачей за 24-48 часов для стандартного проекта. В расчёт входит: дизайн, разработка, базовое SEO, форма обратной связи и помощь с запуском.',
          },
          {
            q: 'Сколько стоит сайт-визитка для ремесленника или ресторана?',
            a: 'Для ремесленника (сантехник, электрик, столяр…) или ресторана цена та же: от 400 до 700€ в зависимости от содержания и числа страниц. Бесплатный подробный расчёт в течение 24 часов.',
          },
          {
            q: 'Сколько стоит интернет-магазин?',
            a: 'Интернет-магазин под заказ (Shopify или Next.js, без WooCommerce) начинается от 1500€ и может быть выше в зависимости от каталога, интеграций и способов оплаты (карта, Stripe и т.д.). Минимальный срок одна неделя. Бесплатный расчёт до любых обязательств.',
          },
          {
            q: 'Почему диапазон от 400 до 700€ для сайта-визитки?',
            a: '400€ это отправная точка для стандартного сайта-визитки (несколько страниц, дизайн под заказ, базовое SEO). Цена выше, если проект требует больше страниц, дополнительных функций или богатого контента. Вы всегда получаете бесплатный подробный расчёт до принятия решения.',
          },
          {
            q: 'Есть ли скрытые или регулярные платежи?',
            a: 'Нет. Моя цена покрывает разработку сайта. Только хостинг и доменное имя (оформляете сами или с моей помощью) дают ежегодные расходы около 10-30€/год в зависимости от провайдера. Никаких ежемесячных подписок в мою пользу.',
          },
          {
            q: 'Когда я плачу?',
            a: 'Оплата по завершении проекта, после вашего подтверждения. Без предоплаты для стандартных проектов. Вы ничем не рискуете.',
          },
          {
            q: 'Что если я захочу правки после сдачи?',
            a: '1 правка включена в каждый план. Для дополнительных изменений предлагаю почасовую ставку или пакет ежемесячной поддержки в зависимости от ваших потребностей.',
          },
          {
            q: 'В чём разница между сайтом-визиткой и интернет-магазином?',
            a: 'Сайт-визитка представляет вашу деятельность, услуги и контакты цель привлечь лиды и звонки. Интернет-магазин позволяет клиентам покупать напрямую онлайн, с корзиной и оплатой банковской картой.',
          },
        ],
      },
      cta: {
        titleBefore: 'Готовы начать ваш ',
        titleHighlight: 'веб-проект',
        sub: 'Бесплатный расчёт за 24 ч · Визитка 400-700€ · Интернет-магазин от 1500€',
        btn: 'Получить бесплатный расчёт',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: 'Доступен сейчас · Нант и удалённо',
        title: 'Создание',
        titleHighlight: 'сайта-визитки',
        titleLine2: 'для ремесленников, ресторанов и малого бизнеса',
        sub: 'Профессиональный, быстрый сайт, видимый в Google — за 24-48 часов, от 400 до 700€. Без Wix, без шаблонов: полностью под заказ.',
        ctaQuote: 'Запросить бесплатный расчёт',
        ctaPortfolio: 'Посмотреть работы',
      },
      niches: {
        sectionTitle: 'В любой сфере деятельности',
        sectionSubtitle: 'Сайт, созданный для вашего бизнеса, а не универсальный шаблон для всех.',
        items: [
          {
            title: 'Ремесленники и строительные специальности',
            description: 'Сантехник, электрик, столяр, маляр, каменщик — покажите своё мастерство и получайте заявки на расчёт прямо с сайта.',
            tags: ['Сайт для ремесленников', 'Онлайн-заявки'],
          },
          {
            title: 'Рестораны и кафе',
            description: 'Онлайн-меню, фотогалерея, часы работы, форма обратной связи — всё, что нужно, чтобы привлечь гостей и заполнить зал. Легко обновляется.',
            tags: ['Сайт для ресторана', 'Онлайн-меню'],
          },
          {
            title: 'Торговцы и малый бизнес',
            description: 'Магазин, кабинет, агентство — будьте заметны в Google на местном уровне и превращайте посетителей в клиентов.',
            tags: ['Сайт для малого бизнеса', 'Локальное SEO'],
          },
          {
            title: 'Свободные профессии',
            description: 'Врач, юрист, коуч, терапевт, фотограф — представьте свои услуги и биографию, упростите связь и запись на приём.',
            tags: ['Сайт фрилансера', 'Форма обратной связи'],
          },
        ],
      },
      includes: {
        title: 'Что входит в ваш сайт-визитку',
        description: 'Никаких шаблонов. Никаких страниц, сгенерированных по образцу. Каждый сайт создаётся под ваш бизнес.',
        checklist: [
          'Современный дизайн, адаптированный под вашу отрасль',
          'Идеально работает на смартфоне — 70% поисков происходит с мобильного',
          'Виден в Google с первого дня (базовое SEO включено)',
          'Интегрированная форма обратной связи',
          'Тексты, ориентированные на убеждение посетителей (копирайтинг включён)',
          'Сверхбыстрый сайт — загрузка менее 1 секунды',
          '1 правка включена после сдачи',
          'Помощь с запуском',
        ],
        pricingLabel: 'Сайт-визитка',
        pricingPrice: '400€ → 700€',
        pricingSub: 'Сдача за 24-48 ч · Оплата по завершении',
        pricingFeatures: [
          'Сдача за 24-48 ч',
          'Дизайн под заказ',
          'Идеально на мобильном и в Google',
          'Форма обратной связи',
          '1 правка включена',
          'Помощь с хостингом',
          'Без предоплаты',
        ],
        pricingCta: 'Начать проект',
      },
      process: {
        sectionTitle: 'Сдача за 24-48 ч — вот как это работает',
        sectionSubtitle: 'Простой процесс, без технического жаргона.',
        steps: [
          {
            title: '1. Обсуждаем ваш проект',
            description: 'Вы рассказываете о своей деятельности, потребностях и предпочтениях. Я присылаю подробный бесплатный расчёт в течение 24 ч. Никаких обязательств.',
          },
          {
            title: '2. Создаю ваш сайт',
            description: 'Разрабатываю ваш сайт-визитку под заказ. Вы получаете предпросмотр онлайн, чтобы утвердить его до публикации.',
          },
          {
            title: '3. Запуск и оплата',
            description: 'Сайт публикуется на вашем домене. Вы платите только после утверждения — не раньше.',
          },
        ],
      },
      vsWix: {
        title: 'Почему не Wix или WordPress?',
        p1: 'Wix и WordPress кажутся удобными, но на деле сгенерированные сайты медленные, слабо настраиваемые и плохо выходят в топ Google.',
        p2: 'Сайт под заказ загружается в 3 раза быстрее, визуально выделяется на фоне конкурентов и оптимизирован для конверсии с первого дня — без ограничений конструктора.',
        checklist: [
          'Никакой рекламы Wix и бейджа «Создано на WordPress»',
          'Уникальный дизайн — не тот же шаблон, что у конкурента',
          'Сверхбыстрая загрузка (Google отдаёт предпочтение быстрым сайтам)',
          'Никакой ежемесячной подписки Wix',
          'Чистый, поддерживаемый, масштабируемый код',
        ],
        comparisonTitle: 'Под заказ vs. конструктор',
        comparisonSubtitle: 'Что вы получаете с настоящим профессиональным сайтом',
        rows: [
          { label: 'Скорость загрузки', good: '&lt; 1 с', bad: '3-8 с (Wix)' },
          { label: 'Уникальный дизайн', good: '✓', bad: '✗' },
          { label: 'Оптимизированное SEO', good: '✓', bad: 'Частично' },
          { label: 'Ежемесячная подписка', good: 'Нет', bad: '13-25€/мес' },
          { label: 'Реклама на сайте', good: 'Нет', bad: 'Да (бесплатный Wix)' },
        ],
      },
      faq: {
        sectionTitle: 'Часто задаваемые вопросы',
        sectionSubtitle: 'То, что вы хотите знать перед тем, как начать.',
        items: [
          {
            q: 'Сколько стоит сайт-визитка для ремесленника?',
            a: 'Для ремесленника (сантехник, электрик, столяр, маляр…) профессиональный сайт-визитка стоит от 400 до 700€ в зависимости от числа страниц и контента. Сдача за 24-48 ч для стандартного проекта. Бесплатный расчёт в течение 24 ч.',
          },
          {
            q: 'Сколько стоит сайт-визитка для ресторана?',
            a: 'Сайт-визитка для ресторана (онлайн-меню, галерея, бронирование) в том же диапазоне: 400-700€. Если нужна интегрированная система онлайн-бронирования, её можно добавить по необходимости.',
          },
          {
            q: 'Можно ли изменить сайт после сдачи?',
            a: '1 правка включена в каждый план. Для регулярных изменений предлагаю пакет ежемесячной поддержки. За небольшие разовые правки — почасовая оплата.',
          },
          {
            q: 'Зачем платить разработчику, если есть Wix или WordPress?',
            a: 'Wix и WordPress удобны для старта, но результаты часто медленные, плохо оптимизированы для Google и трудно поддаются настройке. Сайт под заказ загружается в 3 раза быстрее, выделяется визуально и создан для конверсии. И вы получаете его за 24-48 ч.',
          },
          {
            q: 'Будет ли мой сайт виден в Google?',
            a: 'Да. В каждый сайт включены основы SEO: теги заголовков, мета-описания, структура заголовков, оптимизированная скорость загрузки. Для сильного локального SEO (например, «сантехник Нант») рекомендую создать профиль Google Business — помогу при необходимости.',
          },
          {
            q: 'Нужно ли платить авансом?',
            a: 'Нет. Для стандартных проектов (визитка, простой интернет-магазин) оплата производится по завершении, после вашего утверждения. Предоплата не требуется.',
          },
        ],
      },
      cta: {
        titleBefore: 'Готовы создать',
        titleHighlight: 'сайт-визитку',
        sub: 'Бесплатный расчёт за 24 ч · От 400 до 700€ · Сдача за 24-48 ч · Оплата после утверждения',
        btn: 'Начать сейчас',
      },
    },
    footer: {
      copyRole: 'Веб-разработчик фрилансер',
      secondaryAria: 'Дополнительная навигация',
    },
  }),
}
resources.de = {
  translation: deepMerge(resources.en.translation, {
    language: {
      label: 'Sprache',
      options: {
        fr: 'Französisch',
        en: 'Englisch',
        es: 'Spanisch',
        ru: 'Russisch',
        de: 'Deutsch',
        nl: 'Niederländisch',
        it: 'Italienisch',
        zh: 'Chinesisch',
        ja: 'Japanisch',
      },
    },
    nav: {
      logoAria: 'MadaDev, freiberuflicher Webentwickler, nach oben',
      mainAria: 'Hauptnavigation',
      links: { services: 'Leistungen', offer: 'Angebot', about: 'Über mich', portfolio: 'Portfolio', contact: 'Kontakt' },
      cta: 'Kontakt aufnehmen',
      menuAria: 'Menü',
    },
    hero: {
      badge: 'Verfügbar für neue Projekte',
      titlePrefix: 'Ich entwickle',
      titleHighlight: 'Web-Erlebnisse',
      titleSuffix: 'die den Unterschied machen',
      description:
        'Leidenschaftlicher freiberuflicher Webentwickler. Ich verwandle Ideen in moderne, schnelle und barrierearme Anwendungen.',
      primaryCta: 'Meine Projekte',
      secondaryCta: 'Lass uns sprechen',
      stats: {
        projectsLabel: 'Gelieferte Projekte',
        experienceValue: '5 Jahre',
        experienceLabel: 'Erfahrung',
        satisfactionLabel: 'Zufriedene Kunden',
      },
    },
    services: {
      title: 'Meine Leistungen',
      subtitle:
        'Weblösungen passend zu deinem Bedarf, von der Konzeption bis zur Produktion.',
      items: [
        {
          icon: '🎨',
          title: 'Showcase-Websites',
          description:
            'Elegante und schnelle Websites, um dein Angebot zu präsentieren und Besucher in Kunden zu verwandeln.',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: 'Online-Shops',
          description:
            'Maßgeschneiderte Online-Shops mit Fokus auf Conversion und sicherer Bezahlung.',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: 'Webanwendungen',
          description:
            'Komplexe Webanwendungen mit Dashboard, Authentifizierung, Datenbank und REST API.',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: 'Optimierung und SEO',
          description:
            'Audit, technisches Refactoring und Optimierung für bessere Performance und Sichtbarkeit.',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: 'API-Integrationen',
          description:
            'Anbindung externer Dienste: CRM, Zahlungsanbieter, E-Mail-Marketing, soziale Netzwerke und mehr.',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: 'Wartung und Support',
          description:
            'Laufende Betreuung, Sicherheitsupdates und technischer Support für maximale Ruhe.',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: 'Angebot',
      title: 'Deine Website als Verkaufsmaschine',
      subtitle:
        'Eine Website ohne Conversion kostet Geld. Ich entwickle Seiten, die Besucher in Kunden verwandeln, mit Lieferung in 24 bis 48 Stunden.',
      benefits: [
        {
          icon: '💰',
          title: 'Eine Website, die verkauft',
          description:
            'Nicht nur eine Visitenkarte, sondern ein Conversion-Tool. Jeder Abschnitt und jeder Text hat ein klares Ziel.',
        },
        {
          icon: '📱',
          title: '100% mobil und schnell',
          description:
            'Mehr als 60% deiner Besucher kommen mobil. Deine Website wird für alle Geräte optimiert.',
        },
        {
          icon: '🎯',
          title: 'Copywriting mit Action-Fokus',
          description:
            'Überschriften, die Aufmerksamkeit erzeugen, Argumente, die überzeugen, und CTAs, die konvertieren.',
        },
        {
          icon: '🔍',
          title: 'SEO und Sichtbarkeit',
          description:
            'Optimiert für Google: semantische Struktur, Tags und Performance für mehr qualifizierten Traffic.',
        },
        {
          icon: '⚡',
          title: 'Express-Lieferung',
          description:
            'Standardprojekte in 24 bis 48 Stunden, je nach Komplexität.',
        },
        {
          icon: '🔧',
          title: 'Volle Unabhängigkeit',
          description:
            'Du erhältst eine Website, die du ohne Abhängigkeit und ohne versteckte Kosten weiterentwickeln kannst.',
        },
      ],
      pricing: {
        label: 'Investition',
        labelVitrine: 'Showcase-Websites',
        note:
          '400-700 € für eine Showcase-Website, je nach Komplexität. Fester vereinbarter Preis.',
        ecommerceLine:
          'E-Commerce nach Maß: ab 1500 €, mindestens 1 Woche Lieferzeit (individuelles Angebot).',
        details: [
          'Lieferung in 24 bis 48 Stunden für eine Standard-Showcase-Website',
          'Kein Abo, einmalige Zahlung',
          'Revisionen inklusive bis zur Zufriedenheit',
          'Hosting- und Domain-Begleitung oder Komplettübernahme',
        ],
        cta: 'Projekt starten',
      },
    },
    about: {
      title: 'Über mich',
      subtitle: 'Seit über 5 Jahren mit Leidenschaft im Web',
      paragraph1:
        'Ich bin freiberuflicher Webentwickler in Frankreich und spezialisiert auf Showcase-Websites, Landingpages und Webanwendungen mit React und Node.js.',
      paragraph2:
        'Mein Ansatz: Ziele verstehen, passende Lösungen liefern, termingerecht liefern und auch nach dem Go-live verfügbar bleiben.',
      perks: [
        'Sauberer und wartbarer Code',
        'Termingerechte Lieferung',
        'Transparente Kommunikation',
        'Support nach dem Launch',
      ],
      cta: 'Zusammenarbeiten',
      skillsTitle: 'Technische Fähigkeiten',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'UI/UX und Figma', level: 75 },
        { name: 'DevOps / Docker', level: 70 },
      ],
    },
    portfolio: {
      title: 'Meine Projekte',
      subtitle: 'Eine Auswahl aktueller Projekte und Ergebnisse.',
      projects: [
        {
          title: 'Locali',
          category: 'Webanwendung',
          description:
            'Lokale Plattform zur Vermittlung von Dienstleistungen und Geschäften in der Nähe.',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: 'Showcase-Website',
          description:
            'Elegante Website für eine Lifestyle-Marke mit durchdachtem Design und flüssiger UX.',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        {
          title: 'Lumia',
          category: 'Webanwendung',
          description:
            'Interaktiver KI-Sprachassistent mit Spracherkennung und Antworten in Echtzeit.',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: 'Projekt ansehen',
      ctaQuestion: 'Hast du ein Projekt im Kopf?',
      ctaAction: 'Lass uns sprechen',
    },
    contact: {
      title: 'Sprechen wir über dein Projekt',
      subtitle:
        'Bereit zu starten? Schreib mir und ich antworte innerhalb von 24 Stunden.',
      emailLabel: 'E-Mail',
      locationLabel: 'Standort',
      locationValue: 'Frankreich (remote)',
      availabilityLabel: 'Verfügbarkeit',
      availabilityValue: 'Ab sofort',
      successTitle: 'Nachricht gesendet!',
      successBody: 'Danke für deine Nachricht. Ich antworte innerhalb von 24 Stunden.',
      form: {
        name: 'Vollständiger Name',
        projectType: 'Projekttyp',
        message: 'Beschreibe dein Projekt',
        namePlaceholder: 'Max Mustermann',
        emailPlaceholder: 'max@beispiel.de',
        messagePlaceholder: 'Erzähl mir von deinem Projekt, Zielen und Zeitplan...',
        selectPlaceholder: 'Auswählen...',
        options: [
          'Showcase-Website',
          'Online-Shop',
          'Webanwendung',
          'Relaunch / Optimierung',
          'Sonstiges',
        ],
        error:
          'Ein Fehler ist aufgetreten. Versuche es erneut oder schreibe an issamadayev@gmail.com',
        sending: 'Wird gesendet...',
        submit: 'Nachricht senden',
      },
    },
    tarifsPage: {
      hero: {
        badge: 'Festpreis · Keine Überraschungen · Kostenloses Angebot',
        titleHighlight: 'Preise',
        titleAfter: ' Webdesign',
        titleLine2: 'in Nantes',
        sub: 'Klare Festpreise für jedes Projekt. Keine bösen Überraschungen, keine überhöhten Angebote. Du weißt genau, was du zahlst, bevor es losgeht.',
        ctaQuote: 'Kostenloses Angebot anfordern',
        ctaPortfolio: 'Referenzen ansehen',
      },
      trust: {
        payment: 'Zahlung nach Projektabschluss',
        fixedPrice: 'Vertraglich festgelegter Festpreis',
        noDeposit: 'Keine Anzahlung',
        freeQuote: 'Kostenloses Angebot innerhalb von 24 h',
      },
      plans: {
        sectionTitle: 'Pläne & Preise',
        sectionSubtitle: 'Wähle den Plan, der zu deinem Projekt passt.',
        from: 'Ab ',
        vitrine: {
          label: 'Showcase-Website',
          delay: 'Lieferung in 24 bis 48 h',
          features: [
            'Individuelles Design',
            'Mobile-first & responsiv',
            'Basis-SEO (Tags, Metas)',
            'Kontaktformular',
            'Conversion-optimierte Texte',
            '1 Revision inklusive',
            'Unterstützung beim Launch',
          ],
          excluded: ['Produktkatalog', 'Zahlungssystem'],
          cta: 'Mehr erfahren',
        },
        ecommerce: {
          label: 'E-Commerce',
          delay: 'Mindestlaufzeit · 1 Woche',
          features: [
            'Vollständiger Online-Shop',
            'Shopify oder Next.js (kein WooCommerce)',
            'Kreditkarte, Stripe und andere Zahlungsmethoden nach Bedarf',
            'Bestell- & Lagerverwaltung',
            'Mobile-first & E-Commerce-SEO',
            'Transaktions-E-Mails',
            '1 Revision inklusive',
            'Schulung zur Verwaltung',
          ],
          cta: 'Mehr erfahren',
        },
        custom: {
          label: 'Individuell',
          priceText: 'Kostenloses Angebot',
          delay: 'Zeitplan je nach Projekt',
          features: [
            'Komplexe Webanwendung',
            'API & Drittanbieter-Integrationen',
            'Individuelle Datenbank',
            'Benutzerauthentifizierung',
            'Dashboard & Back-Office',
            'CI/CD & DevOps',
            'Wartung inklusive (Option)',
            'Prioritäts-Support',
          ],
          cta: 'Angebot anfordern',
        },
      },
      comparison: {
        sectionTitle: 'Planvergleich',
        sectionSubtitle: 'Alles, was in jedem Plan enthalten ist ohne Mehrdeutigkeiten.',
        thFeature: 'Funktion',
        thVitrine: 'Showcase-Website',
        thEcommerce: 'E-Commerce',
        popularBadge: 'Beliebt',
        thCustom: 'Individuell',
        rows: {
          price: { label: 'Preis', vitrine: '400€ → 700€', ecommerce: 'Ab 1500€', custom: 'Kostenloses Angebot' },
          delay: { label: 'Lieferzeit', vitrine: '24 bis 48 h', ecommerce: 'Min. 1 Woche', custom: 'Je nach Projekt' },
          customDesign: 'Individuelles Design',
          mobileFirst: 'Mobile-first',
          baseSeo: 'Basis-SEO',
          contactForm: 'Kontaktformular',
          revision: '1 Revision inklusive',
          ecommerceShop: 'Online-Shop',
          securePayments: 'Sichere Zahlung',
          stockManagement: 'Lagerverwaltung',
          apiIntegrations: 'API & Integrationen',
          backOffice: 'Individuelles Back-Office',
        },
      },
      faq: {
        sectionTitle: 'Häufig gestellte Fragen',
        sectionSubtitle: 'Was du wissen möchtest, bevor du startest.',
        items: [
          {
            q: 'Was kostet eine Showcase-Website?',
            a: 'Showcase-Websites kosten in der Regel zwischen 400€ und 700€, je nach Komplexität, mit Lieferung in 24-48 Stunden für ein Standardprojekt. Das Angebot umfasst: Design, Entwicklung, Basis-SEO, Kontaktformular und Launch-Unterstützung.',
          },
          {
            q: 'Was kostet eine Showcase-Website für ein Handwerk oder ein Restaurant?',
            a: 'Für ein Handwerk (Klempner, Elektriker, Tischler…) oder ein Restaurant ist der Preis derselbe: zwischen 400 und 700€ je nach Inhalt und Seitenanzahl. Ein kostenloses, detailliertes Angebot wird innerhalb von 24 Stunden zugesandt.',
          },
          {
            q: 'Was kostet eine E-Commerce-Website?',
            a: 'Eine individuelle E-Commerce-Website (Shopify oder Next.js, kein WooCommerce) beginnt ab 1500€ und kann je nach Katalog, Integrationen und Zahlungsmethoden (Kreditkarte, Stripe usw.) steigen. Mindestens eine Woche Laufzeit. Kostenloses Angebot vor jeder Verpflichtung.',
          },
          {
            q: 'Warum eine Spanne von 400 bis 700€ für eine Showcase-Website?',
            a: '400€ ist der Einstiegspunkt für eine Standard-Showcase-Website (wenige Seiten, individuelles Design, Basis-SEO). Die Spanne steigt, wenn dein Projekt mehr Seiten, zusätzliche Funktionen oder reichhaltigere Inhalte erfordert. Du erhältst immer ein kostenloses, detailliertes Angebot, bevor du dich festlegst.',
          },
          {
            q: 'Gibt es versteckte oder wiederkehrende Gebühren?',
            a: 'Nein. Mein Preis deckt die Entwicklung der Website ab. Nur Hosting und Domainname (von dir verwaltet oder mit meiner Hilfe) erzeugen jährliche Kosten von ca. 10 bis 30€/Jahr je nach Anbieter. Keine monatliche Abonnementgebühr an mich.',
          },
          {
            q: 'Wann zahle ich?',
            a: 'Die Zahlung erfolgt am Ende des Projekts, sobald du die Website abgenommen hast. Keine Anzahlung bei Standardprojekten. Du gehst kein Risiko ein.',
          },
          {
            q: 'Was passiert, wenn ich nach der Lieferung Änderungen möchte?',
            a: '1 Revision ist in jedem Plan enthalten. Für weitere Änderungen biete ich einen Stundensatz oder ein monatliches Wartungspaket je nach deinen Bedürfnissen an.',
          },
          {
            q: 'Was ist der Unterschied zwischen einer Showcase-Website und einem Online-Shop?',
            a: 'Eine Showcase-Website stellt dein Unternehmen, deine Leistungen und Kontaktdaten vor das Ziel ist, Anfragen und Anrufe zu generieren. Ein Online-Shop ermöglicht es deinen Kunden, direkt online zu kaufen, mit Warenkorb und Kreditkartenzahlung.',
          },
        ],
      },
      cta: {
        titleBefore: 'Bereit, dein ',
        titleHighlight: 'Webprojekt zu starten',
        sub: 'Kostenloses Angebot in 24 h · Showcase 400-700€ · E-Commerce ab 1500€',
        btn: 'Mein kostenloses Angebot erhalten',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: 'Jetzt verfügbar · Nantes & remote',
        title: 'Erstellung einer',
        titleHighlight: 'Showcase-Website',
        titleLine2: 'für Handwerksbetriebe, Restaurants und Kleinunternehmen',
        sub: 'Eine professionelle, schnelle Website, sichtbar auf Google geliefert in 24-48 Stunden, zwischen 400 und 700€. Kein Wix, kein Template: vollständig individuell.',
        ctaQuote: 'Kostenloses Angebot anfordern',
        ctaPortfolio: 'Referenzen ansehen',
      },
      niches: {
        sectionTitle: 'Egal in welcher Branche',
        sectionSubtitle: 'Eine Website, die auf dein Unternehmen zugeschnitten ist, kein generisches Template für alle.',
        items: [
          {
            title: 'Handwerk & Bau',
            description: 'Klempner, Elektriker, Tischler, Maler, Maurer zeige dein Können und erhalte Anfragen direkt über deine Website.',
            tags: ['Website für Handwerker', 'Online-Anfragen'],
          },
          {
            title: 'Restaurants & Cafés',
            description: 'Online-Speisekarte, Fotogalerie, Öffnungszeiten, Kontaktformular alles, was du brauchst, um Gäste anzuziehen und dein Lokal zu füllen. Einfach zu aktualisieren.',
            tags: ['Restaurant-Website', 'Online-Speisekarte'],
          },
          {
            title: 'Einzelhandel & Kleinunternehmen',
            description: 'Geschäft, Praxis, Agentur werde lokal auf Google sichtbar und verwandle Besucher in Kunden mit einer professionellen Präsenz.',
            tags: ['KMU-Website Nantes', 'Lokales SEO'],
          },
          {
            title: 'Freie Berufe',
            description: 'Arzt, Anwalt, Coach, Therapeut, Fotograf präsentiere deine Leistungen und deinen Werdegang und mache es einfach, Kontakt aufzunehmen oder einen Termin zu buchen.',
            tags: ['Website für Freiberufler', 'Kontaktformular'],
          },
        ],
      },
      includes: {
        title: 'Was deine Showcase-Website enthält',
        description: 'Kein Template. Keine serienmäßig erzeugten Seiten. Jede Website wird individuell für dein Unternehmen entwickelt.',
        checklist: [
          'Modernes Design, angepasst an deine Branche',
          'Perfekt auf dem Smartphone 70 % der Suchen erfolgen mobil',
          'Von Tag eins auf Google sichtbar (Basis-SEO inklusive)',
          'Integriertes Kontaktformular',
          'Überzeugende Texte für deine Besucher (Copywriting inklusive)',
          'Ultraschnelle Website Ladezeit unter 1 Sekunde',
          '1 Revision nach Lieferung inklusive',
          'Unterstützung beim Launch',
        ],
        pricingLabel: 'Showcase-Website',
        pricingPrice: '400€ → 700€',
        pricingSub: 'Lieferung in 24-48 h · Zahlung nach Abschluss',
        pricingFeatures: [
          'Lieferung in 24-48 h',
          'Individuelles Design',
          'Perfekt auf Mobil & Google',
          'Kontaktformular',
          '1 Revision inklusive',
          'Hosting-Unterstützung',
          'Keine Anzahlung',
        ],
        pricingCta: 'Mein Projekt starten',
      },
      process: {
        sectionTitle: 'Lieferung in 24-48 h so funktioniert es',
        sectionSubtitle: 'Ein einfacher Prozess, ohne Fachjargon.',
        steps: [
          {
            title: '1. Wir besprechen dein Projekt',
            description: 'Du erzählst mir von deinem Unternehmen, deinen Anforderungen und Vorlieben. Ich schicke dir ein detailliertes, kostenloses Angebot innerhalb von 24 h. Keinerlei Verpflichtung.',
          },
          {
            title: '2. Ich entwickle deine Website',
            description: 'Ich entwickle deine individuelle Showcase-Website. Du erhältst eine Online-Vorschau zur Freigabe, bevor ich etwas veröffentliche.',
          },
          {
            title: '3. Launch & Zahlung',
            description: 'Deine Website wird auf deiner Domain veröffentlicht. Du zahlst erst, wenn die Website freigegeben ist nicht vorher.',
          },
        ],
      },
      vsWix: {
        title: 'Warum nicht Wix oder WordPress?',
        p1: 'Wix und WordPress wirken praktisch, aber in der Realität sind die erzeugten Websites langsam, kaum anpassbar und schwer bei Google zu platzieren.',
        p2: 'Eine individuell entwickelte Website lädt 3-mal schneller, hebt sich visuell von der Konkurrenz ab und ist von Anfang an auf Conversion ausgelegt ohne die Einschränkungen eines Baukastensystems.',
        checklist: [
          'Kein Wix-Banner oder „Erstellt mit WordPress"-Badge',
          'Einzigartiges Design nicht dasselbe Template wie dein Mitbewerber',
          'Ultraschnelle Ladezeit (Google bevorzugt schnelle Websites)',
          'Kein monatliches Abonnement bei Wix',
          'Sauberer, wartbarer, skalierbarer Code',
        ],
        comparisonTitle: 'Individuell vs. Baukasten',
        comparisonSubtitle: 'Was du mit einer echten professionellen Website gewinnst',
        rows: [
          { label: 'Ladegeschwindigkeit', good: '&lt; 1 s', bad: '3-8 s (Wix)' },
          { label: 'Einzigartiges Design', good: '✓', bad: '✗' },
          { label: 'Optimiertes SEO', good: '✓', bad: 'Teilweise' },
          { label: 'Monatliches Abonnement', good: 'Nein', bad: '13-25€/Monat' },
          { label: 'Werbung auf der Website', good: 'Nein', bad: 'Ja (kostenloses Wix)' },
        ],
      },
      faq: {
        sectionTitle: 'Häufig gestellte Fragen',
        sectionSubtitle: 'Was du wissen möchtest, bevor du startest.',
        items: [
          {
            q: 'Was kostet eine Showcase-Website für ein Handwerk?',
            a: 'Für einen Handwerksbetrieb (Klempner, Elektriker, Tischler, Maler…) kostet eine professionelle Showcase-Website zwischen 400 und 700€, je nach Seitenanzahl und Inhalt. Lieferung in 24-48 h für ein Standardprojekt. Kostenloses Angebot innerhalb von 24 h.',
          },
          {
            q: 'Was kostet eine Showcase-Website für ein Restaurant?',
            a: 'Eine Showcase-Website für ein Restaurant (Online-Speisekarte, Galerie, Reservierung) liegt in derselben Preisspanne: 400 bis 700€. Wenn du ein integriertes Online-Reservierungssystem wünschst, kann es je nach Bedarf hinzugefügt werden.',
          },
          {
            q: 'Kann ich meine Website nach der Lieferung anpassen?',
            a: '1 Revision ist in jedem Plan enthalten. Für regelmäßige Änderungen biete ich ein monatliches Wartungspaket an. Für kleinere einmalige Anpassungen rechne ich nach Stunden ab.',
          },
          {
            q: 'Warum nicht selbst mit Wix oder WordPress bauen?',
            a: 'Wix und WordPress sind ein guter Einstieg, aber die Ergebnisse sind oft langsam, schlecht für Google optimiert und schwer wirklich zu personalisieren. Eine individuell entwickelte Website lädt 3-mal schneller, hebt sich optisch ab und ist auf Conversion ausgelegt. Und du bekommst sie in 24-48 h.',
          },
          {
            q: 'Wird meine Website auf Google sichtbar sein?',
            a: 'Ja. Jede Website enthält die SEO-Grundlagen: Title-Tags, Meta-Beschreibungen, Überschriftenstruktur, optimierte Ladezeit. Für starkes lokales SEO (z. B. „Klempner Nantes") empfehle ich ein Google Business-Profil, bei dessen Einrichtung ich helfen kann.',
          },
          {
            q: 'Muss ich im Voraus zahlen?',
            a: 'Nein. Bei Standardprojekten (Showcase, einfacher Shop) erfolgt die Zahlung am Ende des Projekts, sobald du die Website abgenommen hast. Keine Anzahlung erforderlich.',
          },
        ],
      },
      cta: {
        titleBefore: 'Bereit, deine ',
        titleHighlight: 'Showcase-Website zu erstellen',
        sub: 'Kostenloses Angebot in 24 h · Zwischen 400 und 700€ · Lieferung in 24-48 h · Zahlung nach Freigabe',
        btn: 'Jetzt loslegen',
      },
    },
    footer: {
      copyRole: 'Freiberuflicher Webentwickler',
      secondaryAria: 'Sekundäre Navigation',
    },
  }),
}
resources.nl = {
  translation: deepMerge(resources.en.translation, {
    language: {
      label: 'Taal',
      options: {
        fr: 'Frans',
        en: 'Engels',
        es: 'Spaans',
        ru: 'Russisch',
        de: 'Duits',
        nl: 'Nederlands',
        it: 'Italiaans',
        zh: 'Chinees',
        ja: 'Japans',
      },
    },
    nav: {
      logoAria: 'MadaDev, freelance webdeveloper, terug naar boven',
      mainAria: 'Hoofdnavigatie',
      links: { services: 'Diensten', offer: 'Aanbod', about: 'Over mij', portfolio: 'Portfolio', contact: 'Contact' },
      cta: 'Contact opnemen',
      menuAria: 'Menu',
    },
    hero: {
      badge: 'Beschikbaar voor nieuwe projecten',
      titlePrefix: 'Ik ontwerp',
      titleHighlight: 'webervaringen',
      titleSuffix: 'die het verschil maken',
      description: 'Gepassioneerde freelance webdeveloper. Ik zet jouw ideeën om in moderne, snelle en toegankelijke applicaties. Van ontwerp tot lancering, ik regel alles.',
      primaryCta: 'Bekijk mijn projecten',
      secondaryCta: 'Laten we praten',
      stats: {
        projectsLabel: 'Geleverde projecten',
        experienceValue: '5 jaar',
        experienceLabel: 'Ervaring',
        satisfactionLabel: 'Tevreden klanten',
      },
    },
    services: {
      title: 'Mijn diensten',
      subtitle: 'Weboplossingen op maat, van concept tot productie.',
      items: [
        {
          icon: '🎨',
          title: 'Showcase-websites',
          description:
            'Elegante en snelle websites om je activiteit te presenteren en bezoekers om te zetten in klanten.',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: 'Webshops',
          description:
            'Webshops op maat, geoptimaliseerd voor conversie met veilige betalingen.',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: 'Webapplicaties',
          description:
            'Volledige webapplicaties met dashboard, authenticatie, databank en REST API.',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: 'Optimalisatie en SEO',
          description:
            'Audit, technische verbeteringen en optimalisatie voor betere prestaties en zichtbaarheid.',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: 'API-integraties',
          description:
            'Koppelingen met externe diensten: CRM, betalingen, e-mailmarketing en sociale media.',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: 'Onderhoud en support',
          description:
            'Doorlopende opvolging, security-updates en technische ondersteuning.',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: 'Aanbod',
      title: 'Jouw site als verkoopmachine',
      subtitle:
        'Een website die niet converteert is verloren budget. Ik bouw websites die bezoekers omzetten in klanten, opgeleverd in 24 tot 48 uur.',
      benefits: [
        {
          icon: '💰',
          title: 'Een website die verkoopt',
          description:
            'Niet alleen een visitekaartje, maar een echte conversiemachine. Elke sectie en elk woord heeft een doel.',
        },
        {
          icon: '📱',
          title: '100% mobiel en snel',
          description:
            'Meer dan 60% van je bezoekers komt via mobiel. Je site wordt geoptimaliseerd voor elk toestel.',
        },
        {
          icon: '🎯',
          title: 'Actiegerichte copywriting',
          description:
            'Koppen die aandacht trekken, argumenten die overtuigen en CTA\'s die converteren.',
        },
        {
          icon: '🔍',
          title: 'SEO en zichtbaarheid',
          description:
            'Geoptimaliseerd voor Google: semantische structuur, tags en performance voor meer verkeer.',
        },
        {
          icon: '⚡',
          title: 'Snelle oplevering',
          description:
            'Standaardprojecten in 24 tot 48 uur, afhankelijk van de complexiteit.',
        },
        {
          icon: '🔧',
          title: 'Volledige autonomie',
          description:
            'Je krijgt een site die je zelfstandig kunt laten evolueren, zonder verborgen kosten.',
        },
      ],
      pricing: {
        label: 'Investering',
        labelVitrine: 'Showcase websites',
        note:
          '€400 tot €700 voor een showcase website, afhankelijk van complexiteit. Vaste afgesproken prijs.',
        ecommerceLine:
          'E-commerce op maat: vanaf €1500, minimaal 1 week (offerte op maat).',
        details: [
          'Oplevering in 24 tot 48 uur voor een standaard showcase website',
          'Geen abonnement, eenmalige betaling',
          'Aanpassingen inbegrepen tot je tevreden bent',
          'Hosting en domeinbegeleiding of volledige afhandeling',
        ],
        cta: 'Start mijn project',
      },
    },
    about: {
      title: 'Over mij',
      subtitle: 'Al meer dan 5 jaar gepassioneerd door web',
      paragraph1:
        'Ik ben een freelance webdeveloper in Frankrijk, gespecialiseerd in showcase-websites, landingspagina\'s en webapplicaties met React en Node.js.',
      paragraph2:
        'Mijn aanpak: je noden begrijpen, passende oplossingen voorstellen, op tijd opleveren en beschikbaar blijven na de lancering.',
      perks: [
        'Propere en onderhoudbare code',
        'Oplevering op tijd',
        'Transparante communicatie',
        'Support na oplevering',
      ],
      cta: 'Samenwerken',
      skillsTitle: 'Technische vaardigheden',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'UI/UX en Figma', level: 75 },
        { name: 'DevOps / Docker', level: 70 },
      ],
    },
    portfolio: {
      title: 'Mijn projecten',
      subtitle: 'Een selectie van recente projecten.',
      projects: [
        {
          title: 'Locali',
          category: 'Webapplicatie',
          description:
            'Lokaal platform dat gebruikers helpt nabijgelegen diensten en bedrijven te vinden.',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: 'Showcase-website',
          description:
            'Elegante website voor een lifestylemerk met verfijnd design en vlotte UX.',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        {
          title: 'Lumia',
          category: 'Webapplicatie',
          description:
            'Interactieve AI-spraakassistent met spraakherkenning en realtime antwoorden.',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: 'Bekijk project',
      ctaQuestion: 'Heb je een project in gedachten?',
      ctaAction: 'Laten we praten',
    },
    contact: {
      title: 'Laten we over je project praten',
      subtitle: 'Klaar om te starten? Stuur me een bericht, ik antwoord binnen 24 uur.',
      emailLabel: 'E-mail',
      locationLabel: 'Locatie',
      availabilityLabel: 'Beschikbaarheid',
      availabilityValue: 'Per direct',
      successTitle: 'Bericht verzonden!',
      successBody: 'Bedankt voor je bericht. Ik reageer binnen 24 uur.',
      form: {
        name: 'Volledige naam',
        projectType: 'Type project',
        message: 'Beschrijf je project',
        namePlaceholder: 'Jan Jansen',
        emailPlaceholder: 'jan@voorbeeld.nl',
        messagePlaceholder: 'Vertel over je project, doelen en deadline...',
        selectPlaceholder: 'Selecteren...',
        options: [
          'Showcase-website',
          'Webshop',
          'Webapplicatie',
          'Herontwerp / optimalisatie',
          'Anders',
        ],
        error:
          'Er is een fout opgetreden. Probeer opnieuw of mail naar issamadayev@gmail.com',
        sending: 'Verzenden...',
        submit: 'Bericht versturen',
      },
    },
    tarifsPage: {
      hero: {
        badge: 'Vaste prijs · Geen verrassingen · Gratis offerte',
        titleHighlight: 'Tarieven',
        titleAfter: ' webdesign',
        titleLine2: 'in Nantes',
        sub: 'Duidelijke vaste prijzen voor elk project. Geen onaangename verrassingen, geen opgeblazen offertes. Je weet precies wat je betaalt voordat je begint.',
        ctaQuote: 'Gratis offerte aanvragen',
        ctaPortfolio: 'Realisaties bekijken',
      },
      trust: {
        payment: 'Betaling na projectafronding',
        fixedPrice: 'Contractueel vastgelegde vaste prijs',
        noDeposit: 'Geen voorschot',
        freeQuote: 'Gratis offerte binnen 24 u',
      },
      plans: {
        sectionTitle: 'Plannen & tarieven',
        sectionSubtitle: 'Kies het plan dat bij jouw project past.',
        from: 'Vanaf ',
        vitrine: {
          label: 'Showcase-website',
          delay: 'Levering in 24 tot 48 u',
          features: [
            'Maatwerk design',
            'Mobile-first & responsief',
            'Basis-SEO (tags, meta\'s)',
            'Contactformulier',
            'Conversiegerichte teksten',
            '1 revisie inbegrepen',
            'Ondersteuning bij de lancering',
          ],
          excluded: ['Productcatalogus', 'Betaalsysteem'],
          cta: 'Meer weten',
        },
        ecommerce: {
          label: 'E-commerce',
          delay: 'Minimale doorlooptijd · 1 week',
          features: [
            'Volledige webshop',
            'Shopify of Next.js (geen WooCommerce)',
            'Bankpas, Stripe en andere betaalmethoden naar behoefte',
            'Bestelling- & voorraadbeheer',
            'Mobile-first & e-commerce-SEO',
            'Transactionele e-mails',
            '1 revisie inbegrepen',
            'Training voor het beheer',
          ],
          cta: 'Meer weten',
        },
        custom: {
          label: 'Op maat',
          priceText: 'Gratis offerte',
          delay: 'Tijdlijn afhankelijk van project',
          features: [
            'Complexe webapplicatie',
            'API & integraties van derden',
            'Maatwerk database',
            'Gebruikersauthenticatie',
            'Dashboard & back-office',
            'CI/CD & DevOps',
            'Onderhoud inbegrepen (optie)',
            'Prioritaire ondersteuning',
          ],
          cta: 'Offerte aanvragen',
        },
      },
      comparison: {
        sectionTitle: 'Planvergelijking',
        sectionSubtitle: 'Alles wat in elk plan inbegrepen is, zonder onduidelijkheid.',
        thFeature: 'Functionaliteit',
        thVitrine: 'Showcase-website',
        thEcommerce: 'E-commerce',
        popularBadge: 'Populair',
        thCustom: 'Op maat',
        rows: {
          price: { label: 'Prijs', vitrine: '400€ → 700€', ecommerce: 'Vanaf 1500€', custom: 'Gratis offerte' },
          delay: { label: 'Levertijd', vitrine: '24 tot 48 u', ecommerce: 'Min. 1 week', custom: 'Per project' },
          customDesign: 'Maatwerk design',
          mobileFirst: 'Mobile-first',
          baseSeo: 'Basis-SEO',
          contactForm: 'Contactformulier',
          revision: '1 revisie inbegrepen',
          ecommerceShop: 'Webshop',
          securePayments: 'Veilige betalingen',
          stockManagement: 'Voorraadbeheer',
          apiIntegrations: 'API & integraties',
          backOffice: 'Maatwerk back-office',
        },
      },
      faq: {
        sectionTitle: 'Veelgestelde vragen',
        sectionSubtitle: 'Wat je wilt weten voordat je begint.',
        items: [
          {
            q: 'Wat kost een showcase-website?',
            a: 'Showcase-websites kosten doorgaans tussen de 400€ en 700€, afhankelijk van de complexiteit, met levering in 24 tot 48 uur voor een standaardproject. De offerte omvat: design, ontwikkeling, basis-SEO, contactformulier en ondersteuning bij de lancering.',
          },
          {
            q: 'Wat kost een showcase-website voor een ambachtsman of restaurant?',
            a: 'Voor een ambachtsman (loodgieter, elektricien, timmerman…) of een restaurant is de prijs hetzelfde: tussen de 400 en 700€, afhankelijk van de inhoud en het aantal pagina\'s. Een gratis, gedetailleerde offerte wordt binnen 24 uur verstuurd.',
          },
          {
            q: 'Wat kost een e-commerce website?',
            a: 'Een maatwerk e-commerce website (Shopify of Next.js, geen WooCommerce) begint vanaf 1500€ en kan hoger uitvallen afhankelijk van de catalogus, integraties en betaalmethoden (bankpas, Stripe, enz.). Reken op minimaal één week doorlooptijd. Gratis offerte voor elk engagement.',
          },
          {
            q: 'Waarom een range van 400 tot 700€ voor een showcase-website?',
            a: '400€ is het instappunt voor een standaard showcase-website (weinig pagina\'s, maatwerk design, basis-SEO). De prijs stijgt als jouw project meer pagina\'s, extra functionaliteiten of rijkere inhoud vereist. Je ontvangt altijd een gratis, gedetailleerde offerte voordat je je vastlegt.',
          },
          {
            q: 'Zijn er verborgen of terugkerende kosten?',
            a: 'Nee. Mijn prijs dekt de ontwikkeling van de website. Alleen hosting en een domeinnaam (door jou beheerd of met mijn hulp) genereren jaarlijkse kosten van ongeveer 10 tot 30€/jaar, afhankelijk van de provider. Geen maandelijks abonnement aan mij.',
          },
          {
            q: 'Wanneer betaal ik?',
            a: 'Betaling vindt plaats aan het einde van het project, nadat je de website hebt goedgekeurd. Geen voorschot voor standaardprojecten. Je loopt geen enkel risico.',
          },
          {
            q: 'Wat gebeurt er als ik na de oplevering wijzigingen wil?',
            a: '1 revisie is inbegrepen in elk plan. Voor extra wijzigingen bied ik een uurtarief of een maandelijks onderhoudspakket aan, afhankelijk van jouw behoeften.',
          },
          {
            q: 'Wat is het verschil tussen een showcase-website en een webshop?',
            a: 'Een showcase-website stelt jouw bedrijf, diensten en contactgegevens voor het doel is leads en telefoontjes genereren. Een webshop stelt jouw klanten in staat direct online te kopen, met een winkelwagen en een betaalsysteem via bankpas.',
          },
        ],
      },
      cta: {
        titleBefore: 'Klaar om jouw ',
        titleHighlight: 'webproject te starten',
        sub: 'Gratis offerte binnen 24 u · Showcase 400-700€ · E-commerce vanaf 1500€',
        btn: 'Mijn gratis offerte ontvangen',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: 'Nu beschikbaar · Nantes & remote',
        title: 'Maak een',
        titleHighlight: 'showcase-website',
        titleLine2: 'voor ambachtslieden, restaurants en kleine bedrijven',
        sub: 'Een professionele, snelle website, zichtbaar op Google geleverd in 24 tot 48 uur, tussen de 400 en 700€. Geen Wix, geen template: volledig op maat.',
        ctaQuote: 'Gratis offerte aanvragen',
        ctaPortfolio: 'Realisaties bekijken',
      },
      niches: {
        sectionTitle: 'Welke sector ook',
        sectionSubtitle: 'Een website gebouwd voor jouw activiteit, geen generiek template voor iedereen.',
        items: [
          {
            title: 'Ambachtslieden & bouw',
            description: 'Loodgieter, elektricien, timmerman, schilder, metselaar toon jouw vakmanschap en ontvang offerteaanvragen direct via jouw website.',
            tags: ['Website voor ambachtslieden', 'Online offertes'],
          },
          {
            title: 'Restaurants & cafés',
            description: 'Online menukaart, fotogalerij, openingstijden, contactformulier alles wat je nodig hebt om klanten te trekken en je zaak te vullen. Eenvoudig bij te werken.',
            tags: ['Restaurant-website', 'Online menukaart'],
          },
          {
            title: 'Detailhandel & kleine bedrijven',
            description: 'Winkel, praktijk, bureau wees lokaal zichtbaar op Google en zet bezoekers om in klanten met een professionele aanwezigheid.',
            tags: ['Website voor kmo Nantes', 'Lokale SEO'],
          },
          {
            title: 'Vrije beroepen',
            description: 'Arts, advocaat, coach, therapeut, fotograaf presenteer je diensten en parcours en maak contact opnemen of een afspraak maken eenvoudig.',
            tags: ['Website voor freelancers', 'Contactformulier'],
          },
        ],
      },
      includes: {
        title: 'Wat jouw showcase-website inhoudt',
        description: 'Geen template. Geen seriematig gemaakte pagina\'s. Elke website wordt op maat gebouwd voor jouw activiteit.',
        checklist: [
          'Modern design afgestemd op jouw sector',
          'Perfecte werking op smartphones 70% van de zoekopdrachten gebeurt mobiel',
          'Zichtbaar op Google vanaf de eerste dag (basis-SEO inbegrepen)',
          'Geïntegreerd contactformulier',
          'Overtuigende teksten voor jouw bezoekers (copywriting inbegrepen)',
          'Ultrasnelle website laadtijd onder 1 seconde',
          '1 revisie inbegrepen na oplevering',
          'Ondersteuning bij de lancering',
        ],
        pricingLabel: 'Showcase-website',
        pricingPrice: '€400 → €700',
        pricingSub: 'Levering in 24-48 u · Betaling achteraf',
        pricingFeatures: [
          'Levering in 24-48 u',
          'Maatwerk design',
          'Perfecte werking op mobiel & Google',
          'Contactformulier',
          '1 revisie inbegrepen',
          'Hulp bij hosting',
          'Geen voorschot',
        ],
        pricingCta: 'Mijn project starten',
      },
      process: {
        sectionTitle: 'Geleverd in 24-48 u zo werkt het',
        sectionSubtitle: 'Een eenvoudig proces, zonder technisch jargon.',
        steps: [
          {
            title: '1. We bespreken jouw project',
            description: 'Jij vertelt me over jouw activiteit, behoeften en voorkeuren. Ik stuur je een gedetailleerde, gratis offerte binnen 24 u. Geen enkele verplichting.',
          },
          {
            title: '2. Ik bouw jouw website',
            description: 'Ik ontwikkel jouw showcase-website op maat. Je ontvangt een online preview ter goedkeuring voordat ik iets publiceer.',
          },
          {
            title: '3. Lancering & betaling',
            description: 'Jouw website wordt gepubliceerd op jouw domein. Je betaalt pas na goedkeuring niet eerder.',
          },
        ],
      },
      vsWix: {
        title: 'Waarom geen Wix of WordPress?',
        p1: 'Wix en WordPress lijken handig, maar in de praktijk zijn de gegenereerde websites traag, moeilijk aanpasbaar en lastig te ranken op Google.',
        p2: 'Een op maat gemaakte website laadt 3× sneller, onderscheidt zich visueel van de concurrentie en is van meet af aan geoptimaliseerd voor conversie zonder de beperkingen van een websitebouwer.',
        checklist: [
          'Geen Wix-advertentie of "Gemaakt met WordPress"-badge',
          'Uniek design niet hetzelfde template als jouw concurrent',
          'Ultrasnelle laadtijd (Google geeft de voorkeur aan snelle websites)',
          'Geen maandelijks abonnement bij Wix',
          'Schone, onderhoudbare, schaalbare code',
        ],
        comparisonTitle: 'Op maat vs. websitebouwer',
        comparisonSubtitle: 'Wat jij wint met een echte professionele website',
        rows: [
          { label: 'Laadsnelheid', good: '&lt; 1 s', bad: '3-8 s (Wix)' },
          { label: 'Uniek design', good: '✓', bad: '✗' },
          { label: 'Geoptimaliseerde SEO', good: '✓', bad: 'Gedeeltelijk' },
          { label: 'Maandelijks abonnement', good: 'Nee', bad: '€13-25/maand' },
          { label: 'Advertenties op de site', good: 'Nee', bad: 'Ja (gratis Wix)' },
        ],
      },
      faq: {
        sectionTitle: 'Veelgestelde vragen',
        sectionSubtitle: 'Wat je wilt weten voordat je begint.',
        items: [
          {
            q: 'Wat kost een showcase-website voor een ambachtsman?',
            a: 'Voor een ambachtsman (loodgieter, elektricien, timmerman, schilder…) kost een professionele showcase-website tussen de 400 en 700€, afhankelijk van het aantal pagina\'s en de inhoud. Levering in 24-48 u voor een standaardproject. Gratis offerte binnen 24 u.',
          },
          {
            q: 'Wat kost een showcase-website voor een restaurant?',
            a: "Een showcase-website voor een restaurant (online menukaart, galerij, reserveringen) valt in dezelfde prijsklasse: 400-700€. Als je een geïntegreerd online reserveringssysteem wilt, kan dat worden toegevoegd op basis van jouw behoeften.",
          },
          {
            q: 'Kan ik mijn website na de oplevering aanpassen?',
            a: '1 revisie is inbegrepen in elk plan. Voor regelmatige aanpassingen bied ik een maandelijks onderhoudspakket aan. Voor kleine eenmalige aanpassingen reken ik per uur.',
          },
          {
            q: 'Waarom niet zelf bouwen met Wix of WordPress?',
            a: 'Wix en WordPress zijn handig om mee te starten, maar de resultaten zijn vaak traag, slecht geoptimaliseerd voor Google en moeilijk echt te personaliseren. Een op maat gemaakte website laadt 3× sneller, valt visueel op en is ontworpen om bezoekers om te zetten in klanten. En je hebt het in 24-48 u.',
          },
          {
            q: 'Zal mijn website zichtbaar zijn op Google?',
            a: "Ja. Elke website bevat de SEO-basis: title-tags, meta-omschrijvingen, koppenstructuur, geoptimaliseerde laadtijd. Voor sterke lokale SEO (bijv. 'loodgieter Nantes') raad ik aan een Google Business-profiel aan te maken, waarbij ik je indien nodig kan helpen.",
          },
          {
            q: 'Betaal ik op voorhand?',
            a: 'Nee. Voor standaardprojecten (showcase, eenvoudige webshop) vindt betaling plaats aan het einde van het project, nadat jij de website hebt goedgekeurd. Geen voorschot vereist.',
          },
        ],
      },
      cta: {
        titleBefore: 'Klaar om jouw ',
        titleHighlight: 'showcase-website te maken',
        sub: 'Gratis offerte binnen 24 u · Tussen €400 en €700 · Levering in 24-48 u · Betaling na goedkeuring',
        btn: 'Nu starten',
      },
    },
    footer: {
      copyRole: 'Freelance webdeveloper',
      secondaryAria: 'Secundaire navigatie',
    },
  }),
}
resources.it = {
  translation: deepMerge(resources.en.translation, {
    language: {
      label: 'Lingua',
      options: {
        fr: 'Francese',
        en: 'Inglese',
        es: 'Spagnolo',
        ru: 'Russo',
        de: 'Tedesco',
        nl: 'Olandese',
        it: 'Italiano',
        zh: 'Cinese',
        ja: 'Giapponese',
      },
    },
    nav: {
      logoAria: 'MadaDev, sviluppatore web freelance, torna in alto',
      mainAria: 'Navigazione principale',
      links: { services: 'Servizi', offer: 'Offerta', about: 'Chi sono', portfolio: 'Portfolio', contact: 'Contatto' },
      cta: 'Contattami',
      menuAria: 'Menù',
    },
    hero: {
      badge: 'Disponibile per nuovi progetti',
      titlePrefix: 'Progetto',
      titleHighlight: 'esperienze web',
      titleSuffix: 'che fanno la differenza',
      description: 'Sviluppatore web freelance appassionato. Trasformo le tue idee in applicazioni moderne, veloci e accessibili. Dal design al lancio, mi occupo di tutto.',
      primaryCta: 'Vedi i miei progetti',
      secondaryCta: 'Parliamone',
      stats: {
        projectsLabel: 'Progetti consegnati',
        experienceValue: '5 anni',
        experienceLabel: 'Esperienza',
        satisfactionLabel: 'Clienti soddisfatti',
      },
    },
    services: {
      title: 'I miei servizi',
      subtitle: 'Soluzioni web su misura, dalla progettazione alla messa in produzione.',
      items: [
        {
          icon: '🎨',
          title: 'Siti vetrina',
          description:
            'Siti eleganti e veloci per presentare la tua attività e convertire visitatori in clienti.',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: 'Negozi online',
          description:
            'Shop online su misura, ottimizzati per la conversione con pagamenti sicuri.',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: 'Applicazioni web',
          description:
            'Applicazioni web complete con dashboard, autenticazione, database e API REST.',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: 'Ottimizzazione e SEO',
          description:
            'Audit, miglioramenti tecnici e ottimizzazione per prestazioni e visibilità migliori.',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: 'Integrazioni API',
          description:
            'Connessione a servizi esterni: CRM, pagamenti, email marketing, social network e altro.',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: 'Manutenzione e supporto',
          description:
            'Monitoraggio continuo, aggiornamenti di sicurezza e supporto tecnico.',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: 'Offerta',
      title: 'Il tuo sito, la tua macchina di vendita',
      subtitle:
        'Un sito che non converte è denaro perso. Realizzo siti pensati per trasformare visitatori in clienti, consegnati in 24-48 ore.',
      benefits: [
        {
          icon: '💰',
          title: 'Un sito che vende',
          description:
            'Non solo una vetrina, ma un motore di conversione. Ogni sezione, bottone e parola ha uno scopo.',
        },
        {
          icon: '📱',
          title: '100% ottimizzato per dispositivi mobili e veloce',
          description:
            'Oltre il 60% dei visitatori arriva da dispositivi mobili. Il sito è ottimizzato per tutti i dispositivi.',
        },
        {
          icon: '🎯',
          title: 'Copywriting orientato all\'azione',
          description:
            'Titoli che catturano, argomenti che convincono e CTA che convertono.',
        },
        {
          icon: '🔍',
          title: 'SEO e visibilità',
          description:
            'Sito ottimizzato per Google: struttura semantica, tag e performance per aumentare il traffico.',
        },
        {
          icon: '⚡',
          title: 'Consegna rapida',
          description:
            'Consegna in 24-48 ore per progetti standard, in base alla complessità.',
        },
        {
          icon: '🔧',
          title: 'Autonomia totale',
          description:
            'Ricevi un sito che puoi evolvere senza dipendenze e senza costi nascosti.',
        },
      ],
      pricing: {
        label: 'Investimento',
        labelVitrine: 'Siti vetrina',
        note:
          'Fascia 400-700€ per un sito vetrina, a seconda della complessità. Prezzo fisso concordato.',
        ecommerceLine:
          'E-commerce su misura: da 1500€, minimo 1 settimana (preventivo personalizzato).',
        details: [
          'Consegna in 24-48 ore per un sito vetrina standard',
          'Nessun abbonamento, pagamento unico',
          'Revisioni incluse fino alla tua soddisfazione',
          'Supporto o gestione di hosting e dominio',
        ],
        cta: 'Inizia il mio progetto',
      },
    },
    about: {
      title: 'Chi sono',
      subtitle: 'Appassionato di web da oltre 5 anni',
      paragraph1:
        'Sono uno sviluppatore web freelance in Francia, specializzato in siti vetrina, landing page e applicazioni web con React e Node.js.',
      paragraph2:
        'Il mio approccio: capire le tue esigenze, proporre soluzioni adatte, consegnare nei tempi e restare disponibile dopo il lancio.',
      perks: [
        'Codice pulito e manutenibile',
        'Consegna puntuale',
        'Comunicazione trasparente',
        'Supporto post-consegna',
      ],
      cta: 'Lavoriamo insieme',
      skillsTitle: 'Competenze tecniche',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'UI/UX e Figma', level: 75 },
        { name: 'DevOps / Docker', level: 70 },
      ],
    },
    portfolio: {
      title: 'I miei progetti',
      subtitle:
        'Una selezione di progetti recenti che mostrano competenze ed esperienza.',
      projects: [
        {
          title: 'Locali',
          category: 'Applicazione web',
          description:
            'Piattaforma locale che aiuta gli utenti a trovare servizi e attività nelle vicinanze.',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: 'Sito vetrina',
          description:
            'Sito elegante per un brand lifestyle, con design curato ed esperienza fluida.',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        {
          title: 'Lumia',
          category: 'Applicazione web',
          description:
            'Assistente vocale IA interattivo con riconoscimento vocale e risposte in tempo reale.',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: 'Vedi progetto',
      ctaQuestion: 'Hai un progetto in mente?',
      ctaAction: 'Parliamone',
    },
    contact: {
      title: 'Parliamo del tuo progetto',
      subtitle: 'Pronto a iniziare? Inviami un messaggio e rispondo entro 24 ore.',
      locationLabel: 'Posizione',
      locationValue: 'Francia (remoto)',
      availabilityLabel: 'Disponibilità',
      availabilityValue: 'Da subito',
      successTitle: 'Messaggio inviato!',
      successBody: 'Grazie per il messaggio. Ti rispondo entro 24 ore.',
      form: {
        name: 'Nome completo',
        projectType: 'Tipo di progetto',
        message: 'Descrivi il tuo progetto',
        namePlaceholder: 'Mario Rossi',
        emailPlaceholder: 'mario@esempio.it',
        messagePlaceholder: 'Raccontami il tuo progetto, obiettivi e tempi...',
        selectPlaceholder: 'Seleziona...',
        options: [
          'Sito vetrina',
          'Negozio online',
          'Applicazione web',
          'Restyling / ottimizzazione',
          'Altro',
        ],
        error:
          'Si è verificato un errore. Riprova o scrivi a issamadayev@gmail.com',
        sending: 'Invio in corso...',
        submit: 'Invia messaggio',
      },
    },
    tarifsPage: {
      hero: {
        badge: 'Prezzo fisso · Nessuna sorpresa · Preventivo gratuito',
        titleHighlight: 'Tariffe',
        titleAfter: ' creazione',
        titleLine2: 'sito web a Nantes',
        sub: 'Prezzi fissi e trasparenti per ogni progetto. Nessuna sorpresa, nessun preventivo gonfiato. Sai esattamente quanto paghi prima di iniziare.',
        ctaQuote: 'Richiedere un preventivo gratuito',
        ctaPortfolio: 'Vedere le realizzazioni',
      },
      trust: {
        payment: 'Pagamento al termine del progetto',
        fixedPrice: 'Prezzo fisso contrattualizzato',
        noDeposit: 'Nessun anticipo',
        freeQuote: 'Preventivo gratuito entro 24 h',
      },
      plans: {
        sectionTitle: 'Piani e tariffe',
        sectionSubtitle: 'Scegli il piano adatto al tuo progetto.',
        from: 'A partire da ',
        vitrine: {
          label: 'Sito vetrina',
          delay: 'Consegna in 24-48 h',
          features: [
            'Design su misura',
            'Mobile-first e responsive',
            'SEO di base (tag, meta)',
            'Modulo di contatto',
            'Testi orientati alla conversione',
            '1 revisione inclusa',
            'Supporto al lancio',
          ],
          excluded: ['Catalogo prodotti', 'Sistema di pagamento'],
          cta: 'Scopri di più',
        },
        ecommerce: {
          label: 'E-commerce',
          delay: 'Tempo minimo · 1 settimana',
          features: [
            'Negozio online completo',
            'Shopify o Next.js (nessun WooCommerce)',
            'Carta di credito, Stripe e altri metodi di pagamento secondo necessità',
            'Gestione ordini e inventario',
            'Mobile-first e SEO e-commerce',
            'Email transazionali',
            '1 revisione inclusa',
            'Formazione alla gestione',
          ],
          cta: 'Scopri di più',
        },
        custom: {
          label: 'Su misura',
          priceText: 'Preventivo gratuito',
          delay: 'Tempistiche in base al progetto',
          features: [
            'Applicazione web complessa',
            'API e integrazioni di terze parti',
            'Database su misura',
            'Autenticazione utenti',
            'Dashboard e back-office',
            'CI/CD e DevOps',
            'Manutenzione inclusa (opzione)',
            'Supporto prioritario',
          ],
          cta: 'Richiedere un preventivo',
        },
      },
      comparison: {
        sectionTitle: 'Confronto tra piani',
        sectionSubtitle: 'Tutto ciò che è incluso in ogni piano, senza ambiguità.',
        thFeature: 'Funzionalità',
        thVitrine: 'Sito vetrina',
        thEcommerce: 'E-commerce',
        popularBadge: 'Popolare',
        thCustom: 'Su misura',
        rows: {
          price: { label: 'Prezzo', vitrine: '400€ → 700€', ecommerce: 'Da 1500€', custom: 'Preventivo gratuito' },
          delay: { label: 'Tempi di consegna', vitrine: '24-48 h', ecommerce: 'Min. 1 settimana', custom: 'Per progetto' },
          customDesign: 'Design su misura',
          mobileFirst: 'Mobile-first',
          baseSeo: 'SEO di base',
          contactForm: 'Modulo di contatto',
          revision: '1 revisione inclusa',
          ecommerceShop: 'Negozio e-commerce',
          securePayments: 'Pagamenti sicuri',
          stockManagement: 'Gestione inventario',
          apiIntegrations: 'API e integrazioni',
          backOffice: 'Back-office su misura',
        },
      },
      faq: {
        sectionTitle: 'Domande frequenti',
        sectionSubtitle: 'Quello che vuoi sapere prima di iniziare.',
        items: [
          {
            q: 'Quanto costa un sito vetrina?',
            a: 'I siti vetrina costano generalmente tra 400€ e 700€ a seconda della complessità, con consegna in 24-48 ore per un progetto standard. Il preventivo include: design, sviluppo, SEO di base, modulo di contatto e supporto al lancio.',
          },
          {
            q: 'Quanto costa un sito vetrina per un artigiano o un ristorante?',
            a: 'Per un artigiano (idraulico, elettricista, falegname…) o un ristorante, il prezzo è lo stesso: tra 400 e 700€ a seconda del contenuto e del numero di pagine. Un preventivo gratuito e dettagliato viene inviato entro 24 ore.',
          },
          {
            q: 'Quanto costa un sito e-commerce?',
            a: 'Un sito e-commerce su misura (Shopify o Next.js, nessun WooCommerce) parte da 1500€ e può aumentare in base al catalogo, alle integrazioni e ai metodi di pagamento (carta di credito, Stripe, ecc.). Prevedi un minimo di una settimana. Preventivo gratuito prima di qualsiasi impegno.',
          },
          {
            q: 'Perché una forbice da 400 a 700€ per un sito vetrina?',
            a: '400€ è il punto di ingresso per un sito vetrina standard (poche pagine, design su misura, SEO di base). La forbice sale se il tuo progetto richiede più pagine, funzionalità aggiuntive o contenuti più ricchi. Ricevi sempre un preventivo gratuito e dettagliato prima di impegnarti.',
          },
          {
            q: 'Ci sono costi nascosti o ricorrenti?',
            a: 'No. Il mio prezzo copre lo sviluppo del sito. Solo l\'hosting e il nome di dominio (gestiti da te o con il mio aiuto) generano costi annuali di circa 10-30€/anno a seconda del provider. Nessun abbonamento mensile da pagarmi.',
          },
          {
            q: 'Quando pago?',
            a: 'Il pagamento avviene al termine del progetto, una volta che hai approvato il sito. Nessun anticipo per i progetti standard. Non corri alcun rischio.',
          },
          {
            q: 'Cosa succede se voglio modifiche dopo la consegna?',
            a: '1 revisione è inclusa in ogni piano. Per modifiche aggiuntive, propongo una tariffa oraria o un pacchetto di manutenzione mensile in base alle tue esigenze.',
          },
          {
            q: 'Qual è la differenza tra un sito vetrina e un sito e-commerce?',
            a: 'Un sito vetrina presenta la tua attività, i tuoi servizi e i tuoi contatti l\'obiettivo è generare richieste e telefonate. Un sito e-commerce permette ai tuoi clienti di acquistare direttamente online, con un carrello e un sistema di pagamento con carta di credito.',
          },
        ],
      },
      cta: {
        titleBefore: 'Pronto a lanciare il tuo ',
        titleHighlight: 'progetto web',
        sub: 'Preventivo gratuito in 24 h · Vetrina 400-700€ · E-commerce da 1500€',
        btn: 'Ottenere il mio preventivo gratuito',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: 'Disponibile ora · Nantes & remoto',
        title: 'Creazione di un',
        titleHighlight: 'sito vetrina',
        titleLine2: 'per artigiani, ristoranti e piccole imprese',
        sub: 'Un sito professionale, veloce e visibile su Google, consegnato in 24-48 ore, tra 400 e 700€. Niente Wix, niente template: completamente su misura.',
        ctaQuote: 'Richiedere un preventivo gratuito',
        ctaPortfolio: 'Vedere le realizzazioni',
      },
      niches: {
        sectionTitle: 'Qualunque sia il tuo settore',
        sectionSubtitle: 'Un sito pensato per la tua attività, non un template generico per tutti.',
        items: [
          {
            title: 'Artigiani & edilizia',
            description: 'Idraulico, elettricista, falegname, imbianchino, muratore mostra il tuo savoir-faire e ricevi richieste di preventivo direttamente dal tuo sito.',
            tags: ['Sito per artigiani', 'Preventivi online'],
          },
          {
            title: 'Ristoranti & caffè',
            description: 'Menu online, galleria foto, orari, modulo di contatto tutto ciò che serve per attirare clienti e riempire il locale. Facile da aggiornare.',
            tags: ['Sito per ristoranti', 'Menu online'],
          },
          {
            title: 'Commercianti & piccole imprese',
            description: 'Negozio, studio, agenzia sii visibile su Google a livello locale e trasforma i visitatori in clienti con una presenza professionale.',
            tags: ['Sito web PMI Nantes', 'SEO locale'],
          },
          {
            title: 'Liberi professionisti',
            description: 'Medico, avvocato, coach, terapeuta, fotografo presenta i tuoi servizi e il tuo percorso, facilitando il contatto o la prenotazione di appuntamenti.',
            tags: ['Sito per freelance', 'Modulo di contatto'],
          },
        ],
      },
      includes: {
        title: 'Cosa include il tuo sito vetrina',
        description: 'Niente template. Niente pagine prodotte in serie. Ogni sito è costruito su misura per la tua attività.',
        checklist: [
          'Design moderno adatto al tuo settore',
          'Perfetto su smartphone il 70% delle ricerche avviene da mobile',
          'Visibile su Google dal primo giorno (SEO di base inclusa)',
          'Modulo di contatto integrato',
          'Testi persuasivi per i tuoi visitatori (copywriting incluso)',
          'Sito ultra-veloce caricamento in meno di 1 secondo',
          '1 revisione inclusa dopo la consegna',
          'Supporto per la messa online',
        ],
        pricingLabel: 'Sito vetrina',
        pricingPrice: '400€ → 700€',
        pricingSub: 'Consegna 24-48 h · Pagamento al termine',
        pricingFeatures: [
          'Consegna in 24-48 h',
          'Design su misura',
          'Perfetto su mobile & Google',
          'Modulo di contatto',
          '1 revisione inclusa',
          'Supporto hosting',
          'Nessun anticipo richiesto',
        ],
        pricingCta: 'Avviare il mio progetto',
      },
      process: {
        sectionTitle: 'Consegnato in 24-48 h ecco come',
        sectionSubtitle: 'Un processo semplice, senza gergo tecnico.',
        steps: [
          {
            title: '1. Discutiamo il tuo progetto',
            description: "Mi parli della tua attività, delle tue esigenze, di ciò che ti piace. Ti invio un preventivo dettagliato e gratuito entro 24 h. Nessun impegno.",
          },
          {
            title: '2. Creo il tuo sito',
            description: 'Sviluppo il tuo sito vetrina su misura. Ricevi un\'anteprima online da approvare prima che io pubblichi qualsiasi cosa.',
          },
          {
            title: '3. Messa online & pagamento',
            description: 'Il tuo sito viene pubblicato sul tuo dominio. Paghi soltanto dopo aver approvato il sito, non prima.',
          },
        ],
      },
      vsWix: {
        title: 'Perché non usare Wix o WordPress?',
        p1: 'Wix e WordPress sembrano pratici ma in realtà i siti generati sono lenti, poco personalizzabili e difficili da posizionare su Google.',
        p2: 'Un sito sviluppato su misura si carica 3 volte più velocemente, si differenzia visivamente dalla concorrenza ed è ottimizzato per convertire fin da subito, senza i limiti di un costruttore di siti.',
        checklist: [
          'Niente pubblicità Wix o badge "Creato con WordPress"',
          'Design unico non lo stesso template del tuo concorrente',
          'Caricamento ultra-veloce (Google favorisce i siti veloci)',
          'Nessun abbonamento mensile a Wix',
          'Codice pulito, manutenibile, scalabile',
        ],
        comparisonTitle: 'Su misura vs. costruttore',
        comparisonSubtitle: 'Cosa guadagni con un vero sito professionale',
        rows: [
          { label: 'Velocità di caricamento', good: '&lt; 1 s', bad: '3-8 s (Wix)' },
          { label: 'Design unico', good: '✓', bad: '✗' },
          { label: 'SEO ottimizzato', good: '✓', bad: 'Parziale' },
          { label: 'Abbonamento mensile', good: 'No', bad: '13-25€/mese' },
          { label: 'Pubblicità sul sito', good: 'No', bad: 'Sì (Wix gratuito)' },
        ],
      },
      faq: {
        sectionTitle: 'Domande frequenti',
        sectionSubtitle: 'Quello che vuoi sapere prima di iniziare.',
        items: [
          {
            q: 'Quanto costa un sito vetrina per un artigiano?',
            a: 'Per un artigiano (idraulico, elettricista, falegname, imbianchino…), un sito vetrina professionale costa tra 400 e 700€ a seconda del numero di pagine e del contenuto. Consegna in 24-48 h per un progetto standard. Preventivo gratuito entro 24 h.',
          },
          {
            q: 'Quanto costa un sito vetrina per un ristorante?',
            a: 'Un sito vetrina per un ristorante (menu online, galleria, prenotazioni) rientra nella stessa fascia: 400-700€. Se desideri un sistema di prenotazione online integrato, può essere aggiunto in base alle esigenze.',
          },
          {
            q: 'Posso modificare il sito dopo la consegna?',
            a: '1 revisione è inclusa in ogni piano. Per modifiche regolari propongo un pacchetto di manutenzione mensile. Per piccole correzioni una tantum, fattura oraria.',
          },
          {
            q: 'Perché non fare il sito da soli con Wix o WordPress?',
            a: "Wix e WordPress sono comodi per iniziare ma i risultati sono spesso lenti, poco ottimizzati per Google e difficili da personalizzare davvero. Un sito sviluppato su misura si carica 3 volte più velocemente, si distingue visivamente ed è pensato per convertire i visitatori in clienti. E lo ottieni in 24-48 h.",
          },
          {
            q: 'Il mio sito sarà visibile su Google?',
            a: "Sì. Ogni sito include le basi SEO: tag titolo, meta descrizioni, struttura dei titoli, velocità di caricamento ottimizzata. Per un SEO locale forte (es. «idraulico Nantes»), consiglio di associarlo a una scheda Google Business, che aiuto a creare se necessario.",
          },
          {
            q: 'Pago in anticipo?',
            a: 'No. Per i progetti standard (vetrina, e-commerce semplice), il pagamento avviene al termine del progetto, dopo che hai approvato il sito. Nessun anticipo richiesto.',
          },
        ],
      },
      cta: {
        titleBefore: 'Pronto a creare il tuo ',
        titleHighlight: 'sito vetrina',
        sub: 'Preventivo gratuito in 24 h · Tra 400 e 700€ · Consegna 24-48 h · Pagamento dopo approvazione',
        btn: 'Inizia ora',
      },
    },
    footer: {
      copyRole: 'Sviluppatore web freelance',
      secondaryAria: 'Navigazione secondaria',
    },
  }),
}
resources.zh = {
  translation: deepMerge(resources.en.translation, {
    language: {
      label: '语言',
      options: {
        fr: '法语',
        en: '英语',
        es: '西班牙语',
        ru: '俄语',
        de: '德语',
        nl: '荷兰语',
        it: '意大利语',
        zh: '中文',
        ja: '日语',
      },
    },
    nav: {
      logoAria: 'MadaDev 自由职业网页开发者，返回顶部',
      mainAria: '主导航',
      links: { services: '服务', offer: '方案', about: '关于我', portfolio: '案例', contact: '联系' },
      cta: '联系我',
      menuAria: '菜单',
    },
    hero: {
      badge: '可承接新项目',
      titlePrefix: '我打造',
      titleHighlight: '高质量网页体验',
      titleSuffix: '让你的业务脱颖而出',
      description:
        '我是自由职业网页开发者，专注将你的想法落地为现代化、高性能、可访问的应用。从设计到上线，我全程负责。',
      primaryCta: '查看项目',
      secondaryCta: '一起聊聊',
      stats: {
        projectsLabel: '已交付项目',
        experienceValue: '5年',
        experienceLabel: '年经验',
        satisfactionLabel: '满意客户',
      },
    },
    services: {
      title: '我的服务',
      subtitle: '从设计到上线，为你提供定制化网页解决方案。',
      items: [
        {
          icon: '🎨',
          title: '展示型网站',
          description:
            '高质感且高性能的网站，用于展示业务并把访客转化为客户。',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: '电商网站',
          description:
            '定制化电商站点，聚焦转化，集成安全支付。',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: '网页应用开发',
          description:
            '包含后台、鉴权、数据库和 REST 接口的完整网页应用。',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: '性能优化与搜索引擎优化',
          description:
            '技术审计与优化，提升性能和搜索可见性。',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: '接口集成',
          description:
            '对接 CRM、支付、邮件营销、社交平台等第三方服务。',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: '维护与支持',
          description:
            '持续维护、安全更新与技术支持。',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: '服务方案',
      title: '让你的网站成为销售引擎',
      subtitle:
        '不能转化的网站就是浪费预算。我构建以转化为目标的网站，标准项目 24 到 48 小时交付。',
      benefits: [
        {
          icon: '💰',
          title: '能卖货的网站',
          description: '不只是展示，而是转化机器。每个区块、按钮和文字都以让访客变客户为目标。',
        },
        {
          icon: '📱',
          title: '100% 移动端适配且快速',
          description: '超过 60% 的访客来自手机。你的网站将针对所有设备进行优化，体验流畅。',
        },
        {
          icon: '🎯',
          title: '行动导向的文案',
          description: '吸引眼球的标题、有说服力的论据、促成行动的号召。设计服务于内容。',
        },
        {
          icon: '🔍',
          title: '搜索引擎优化与搜索可见性',
          description: '网站针对谷歌优化：语义结构、标签和性能，从上线第一天就吸引流量。',
        },
        {
          icon: '⚡',
          title: '快速交付',
          description: '标准项目 24 到 48 小时交付，复杂需求根据实际情况安排。快速，不牺牲质量。',
        },
        {
          icon: '🔧',
          title: '完全自主',
          description: '你将获得一个可以自行发展的网站。无依赖，无隐性费用，你是工具的主人。',
        },
      ],
      pricing: {
        label: '投入预算',
        labelVitrine: '展示型网站',
        note: '展示型网站约 400-700€，视复杂度而定。约定固定总价，无隐藏费用。',
        ecommerceLine: '定制电商：1500€ 起，最短约一周交付（按报价单）。',
        details: [
          '标准展示型网站 24-48 小时内交付',
          '无订阅，一次性付款',
          '含修改，直到你满意',
          '可提供域名与托管指导或代办',
        ],
        cta: '开始我的项目',
      },
    },
    about: {
      title: '关于我',
      subtitle: '专注网页开发超过 5 年',
      paragraph1:
        '我是一名常驻法国的自由职业网页开发者，专注展示型网站、落地页和基于 React 与 Node.js 的网页应用。',
      paragraph2:
        '我的方法是先理解你的业务目标，再给出合适方案，按时交付，并在上线后持续提供支持。',
      perks: [
        '代码清晰且易维护',
        '按时交付',
        '沟通透明',
        '交付后支持',
      ],
      cta: '一起合作',
      skillsTitle: '技术能力',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'UI/UX 与 Figma', level: 75 },
        { name: 'DevOps / Docker', level: 70 },
      ],
    },
    portfolio: {
      title: '我的项目',
      subtitle: '近期项目精选，展示我的能力与经验。',
      projects: [
        {
          title: 'Locali',
          category: 'Web 应用',
          description: '本地连接平台，帮助用户快速找到附近商家与服务。',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: '品牌展示站',
          description: '为生活方式品牌打造的精致网站，设计考究，体验流畅。',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        { 
          title: 'Lumia',
          category: '网页应用',
          description: '基于 AI 的互动语音助手，支持语音识别与实时回复。',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: '查看项目',
      ctaQuestion: '你有想法中的项目吗？',
      ctaAction: '联系我们聊聊',
    },
    contact: {
      title: '聊聊你的项目',
      subtitle: '准备开始了吗？给我留言，我会在 24 小时内回复。',
      emailLabel: '邮箱',
      locationLabel: '所在地',
      locationValue: '法国（远程）',
      availabilityLabel: '可用时间',
      availabilityValue: '立即可开始',
      successTitle: '消息已发送！',
      successBody: '感谢你的消息，我会在 24 小时内回复。',
      form: {
        name: '姓名',
        email: '邮箱',
        projectType: '项目类型',
        message: '描述你的项目',
        namePlaceholder: '张三',
        emailPlaceholder: 'zhangsan@example.com',
        messagePlaceholder: '告诉我你的项目、目标和时间安排...',
        selectPlaceholder: '请选择...',
        options: ['展示站', '电商', 'Web 应用', '改版 / 优化', '其他'],
        error: '发生错误，请重试，或直接发送邮件到 issamadayev@gmail.com',
        sending: '发送中...',
        submit: '发送消息',
      },
    },
    tarifsPage: {
      hero: {
        badge: '固定报价 · 无隐藏费用 · 免费估价',
        titleHighlight: '收费标准',
        titleAfter: ' 网站建设',
        titleLine2: '南特网站开发',
        sub: '每个项目均有明确的固定报价。无意外，无虚高报价。开始之前就清楚知道自己的支出。',
        ctaQuote: '申请免费报价',
        ctaPortfolio: '查看案例作品',
      },
      trust: {
        payment: '项目完成后付款',
        fixedPrice: '合同约定固定价格',
        noDeposit: '无需预付款',
        freeQuote: '24小时内免费报价',
      },
      plans: {
        sectionTitle: '套餐与收费',
        sectionSubtitle: '选择适合您项目的套餐。',
        from: '起价 ',
        vitrine: {
          label: '展示型网站',
          delay: '24至48小时内交付',
          features: [
            '定制设计',
            '移动端优先 · 响应式布局',
            '基础SEO（标签、元信息）',
            '联系表单',
            '以转化为导向的文案',
            '含1次修改',
            '上线支持',
          ],
          excluded: ['产品目录', '支付系统'],
          cta: '了解更多',
        },
        ecommerce: {
          label: '电商网站',
          delay: '最短交期 · 1周',
          features: [
            '完整在线商店',
            'Shopify 或 Next.js（非 WooCommerce）',
            '银行卡、Stripe 及其他按需支付方式',
            '订单与库存管理',
            '移动端优先 · 电商SEO',
            '交易邮件',
            '含1次修改',
            '后台管理培训',
          ],
          cta: '了解更多',
        },
        custom: {
          label: '定制开发',
          priceText: '免费报价',
          delay: '周期视项目而定',
          features: [
            '复杂网页应用',
            'API 及第三方集成',
            '定制数据库',
            '用户认证',
            '仪表盘与后台管理',
            'CI/CD 与 DevOps',
            '含维护服务（可选）',
            '优先支持',
          ],
          cta: '申请报价',
        },
      },
      comparison: {
        sectionTitle: '套餐对比',
        sectionSubtitle: '每个套餐包含的全部内容，清晰无歧义。',
        thFeature: '功能',
        thVitrine: '展示型网站',
        thEcommerce: '电商网站',
        popularBadge: '热门',
        thCustom: '定制开发',
        rows: {
          price: { label: '价格', vitrine: '400€ → 700€', ecommerce: '起价 1500€', custom: '免费报价' },
          delay: { label: '交付周期', vitrine: '24至48小时', ecommerce: '最短1周', custom: '视项目而定' },
          customDesign: '定制设计',
          mobileFirst: '移动端优先',
          baseSeo: '基础SEO',
          contactForm: '联系表单',
          revision: '含1次修改',
          ecommerceShop: '在线商店',
          securePayments: '安全支付',
          stockManagement: '库存管理',
          apiIntegrations: 'API 集成',
          backOffice: '定制后台',
        },
      },
      faq: {
        sectionTitle: '常见问题',
        sectionSubtitle: '开始前您可能想了解的内容。',
        items: [
          {
            q: '展示型网站费用是多少？',
            a: '展示型网站价格通常在400€至700€之间，视复杂程度而定，标准项目可在24至48小时内交付。报价涵盖设计、开发、基础SEO、联系表单及上线支持。',
          },
          {
            q: '工匠或餐厅的展示型网站费用是多少？',
            a: '无论是工匠（水管工、电工、木工等）还是餐厅，报价相同：根据内容和页面数量，价格在400至700€之间。24小时内提供免费详细报价。',
          },
          {
            q: '电商网站费用是多少？',
            a: '定制电商网站（Shopify 或 Next.js，非 WooCommerce）起价1500€，根据产品目录、集成需求和支付方式（银行卡、Stripe 等）有所不同。最短需要一周时间。承诺前可获得免费报价。',
          },
          {
            q: '展示型网站为何定价在400至700€区间？',
            a: '400€是标准展示型网站（少量页面、定制设计、基础SEO）的起始价格。如果项目需要更多页面、额外功能或更丰富的内容，价格会相应提高。我们始终在您做出承诺前提供免费详细报价。',
          },
          {
            q: '是否有隐藏费用或定期收费？',
            a: '没有。我的报价仅涵盖网站开发费用。只有托管服务和域名（由您自行管理或在我协助下管理）会产生每年约10至30€的费用，具体取决于服务商。我不收取任何月度订阅费用。',
          },
          {
            q: '何时付款？',
            a: '付款在项目完成后进行，即您确认验收网站之后。标准项目无需预付款。您无需承担任何风险。',
          },
          {
            q: '交付后如需修改怎么办？',
            a: '每个套餐含1次修改。如需额外修改，我将根据您的需求提供按小时计费或月度维护套餐。',
          },
          {
            q: '展示型网站与电商网站有何区别？',
            a: '展示型网站用于介绍您的业务、服务和联系方式，目标是获取询价和电话咨询。电商网站则允许客户直接在线购买，配备购物车和银行卡支付系统。',
          },
        ],
      },
      cta: {
        titleBefore: '准备好启动您的',
        titleHighlight: '网站项目',
        sub: '24小时内免费报价 · 展示型网站 400€-700€ · 电商网站起价 1500€',
        btn: '获取免费报价',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: '现已接单 · 南特及远程',
        title: '打造',
        titleHighlight: '展示型网站',
        titleLine2: '面向工匠、餐厅与小微企业',
        sub: '专业、快速、在谷歌可见的网站，24至48小时交付，价格在400至700€之间。无Wix，无模板：完全定制开发。',
        ctaQuote: '申请免费报价',
        ctaPortfolio: '查看案例作品',
      },
      niches: {
        sectionTitle: '无论您从事哪个行业',
        sectionSubtitle: '专为您的业务量身打造，而非适用于所有人的通用模板。',
        items: [
          {
            title: '工匠与建筑业',
            description: '水管工、电工、木工、油漆工、泥水匠展示您的专业技能，通过网站直接获取报价请求。',
            tags: ['工匠网站', '在线报价'],
          },
          {
            title: '餐厅与咖啡馆',
            description: '在线菜单、图片展示、营业时间、联系表单吸引顾客、填满座位所需的一切。易于更新。',
            tags: ['餐厅网站', '在线菜单'],
          },
          {
            title: '零售商与小微企业',
            description: '商店、诊所、机构在谷歌本地搜索中脱颖而出，以专业形象将访客转化为客户。',
            tags: ['南特中小企业网站', '本地SEO'],
          },
          {
            title: '自由职业者',
            description: '医生、律师、教练、治疗师、摄影师展示您的服务与经历，简化联系或预约流程。',
            tags: ['自由职业者网站', '联系表单'],
          },
        ],
      },
      includes: {
        title: '您的展示型网站包含哪些内容',
        description: '无模板，无批量生产页面。每个网站均为您的业务量身定制。',
        checklist: [
          '符合您行业特点的现代设计',
          '在智能手机上完美呈现70%的搜索来自手机',
          '上线即可在谷歌可见（含基础SEO）',
          '集成联系表单',
          '以说服访客为目标的文案（含文案撰写）',
          '超快加载1秒以内',
          '交付后含1次修改',
          '上线全程支持',
        ],
        pricingLabel: '展示型网站',
        pricingPrice: '400€ → 700€',
        pricingSub: '24-48小时交付 · 完成后付款',
        pricingFeatures: [
          '24至48小时内交付',
          '定制设计',
          '手机端与谷歌完美适配',
          '联系表单',
          '含1次修改',
          '托管支持',
          '无需预付款',
        ],
        pricingCta: '启动我的项目',
      },
      process: {
        sectionTitle: '24-48小时交付流程如下',
        sectionSubtitle: '简单流程，无技术术语。',
        steps: [
          {
            title: '1. 我们沟通您的项目',
            description: '您告诉我您的业务、需求和偏好。我在24小时内向您发送详细的免费报价。无任何承诺。',
          },
          {
            title: '2. 我构建您的网站',
            description: '我定制开发您的展示型网站。在发布之前，您将收到在线预览版本供审核确认。',
          },
          {
            title: '3. 上线与付款',
            description: '您的网站发布到您的域名上。仅在您批准网站后付款不早于此。',
          },
        ],
      },
      vsWix: {
        title: '为何不用Wix或WordPress？',
        p1: 'Wix和WordPress看似方便，但实际上生成的网站速度慢、定制困难，且难以在谷歌排名靠前。',
        p2: '定制开发的网站加载速度快3倍，在竞争对手中视觉上更突出，从第一天起就针对转化进行优化没有网站构建工具的限制。',
        checklist: [
          '无Wix广告或"由WordPress创建"徽章',
          '独特设计与竞争对手不同的模板',
          '超快加载速度（谷歌偏好快速网站）',
          '无需支付Wix月度订阅费',
          '简洁、可维护、可扩展的代码',
        ],
        comparisonTitle: '定制开发 vs 网站构建工具',
        comparisonSubtitle: '使用真正专业网站的收益',
        rows: [
          { label: '加载速度', good: '&lt; 1秒', bad: '3-8秒（Wix）' },
          { label: '独特设计', good: '✓', bad: '✗' },
          { label: 'SEO优化', good: '✓', bad: '部分' },
          { label: '月度订阅', good: '无', bad: '13-25€/月' },
          { label: '网站广告', good: '无', bad: '有（免费Wix）' },
        ],
      },
      faq: {
        sectionTitle: '常见问题',
        sectionSubtitle: '开始前您想了解的内容。',
        items: [
          {
            q: '工匠的展示型网站费用是多少？',
            a: '对于工匠（水管工、电工、木工、油漆工……），专业展示型网站费用在400至700€之间，视页面数量和内容而定。标准项目24至48小时内交付。24小时内提供免费报价。',
          },
          {
            q: '餐厅的展示型网站费用是多少？',
            a: '餐厅的展示型网站（在线菜单、图片展示、预订）价格区间相同：400至700€。如需集成在线预订系统，可根据需求添加。',
          },
          {
            q: '交付后可以修改网站吗？',
            a: '每个套餐含1次修改。如需定期更新，可选择月度维护套餐。零散的小修改则按小时计费。',
          },
          {
            q: '为什么不自己用Wix或WordPress做网站？',
            a: 'Wix和WordPress入门方便，但结果往往速度慢、谷歌优化不足、难以真正个性化。定制开发的网站加载速度快3倍，视觉上更突出，并专为将访客转化为客户而设计。而且24-48小时即可拿到成品。',
          },
          {
            q: '我的网站在谷歌上可见吗？',
            a: '是的。每个网站都包含SEO基础：标题标签、元描述、标题结构、优化加载速度。若需强大的本地SEO（例如"南特水管工"），建议配合谷歌商家页面，如有需要我可以协助创建。',
          },
          {
            q: '需要预先付款吗？',
            a: '不需要。对于标准项目（展示型网站、简单电商），付款在项目完成并获得您的批准后进行。无需预付款。',
          },
        ],
      },
      cta: {
        titleBefore: '准备好创建您的',
        titleHighlight: '展示型网站',
        sub: '24小时内免费报价 · 400至700€之间 · 24–48小时交付 · 审核通过后付款',
        btn: '立即开始',
      },
    },
    footer: {
      copyRole: '自由职业网页开发者',
      secondaryAria: '次级导航',
    },
  }),
}
resources.ja = {
  translation: deepMerge(resources.en.translation, {
    language: {
      label: '言語',
      options: {
        fr: 'フランス語',
        en: '英語',
        es: 'スペイン語',
        ru: 'ロシア語',
        de: 'ドイツ語',
        nl: 'オランダ語',
        it: 'イタリア語',
        zh: '中国語',
        ja: '日本語',
      },
    },
    nav: {
      logoAria: 'MadaDev フリーランスウェブ開発者 トップへ戻る',
      mainAria: 'メインナビゲーション',
      links: { services: 'サービス一覧', offer: 'プラン', about: 'プロフィール', portfolio: '実績', contact: 'お問い合わせ' },
      cta: '相談する',
      menuAria: 'メニュー',
    },
    hero: {
      badge: '新規プロジェクト受付中',
      titlePrefix: '成果につながる',
      titleHighlight: 'ウェブ体験',
      titleSuffix: 'を設計します',
      description:
        'フリーランスのウェブ開発者として、アイデアをモダンで高速かつ使いやすいアプリに仕上げます。設計から公開まで一貫して対応します。',
      primaryCta: '実績を見る',
      secondaryCta: '相談してみる',
      stats: {
        projectsLabel: '納品プロジェクト',
        experienceValue: '5年',
        experienceLabel: '経験年数',
        satisfactionLabel: '満足した顧客',
      },
    },
    services: {
      title: '提供サービス',
      subtitle: '設計から本番運用まで、課題に合わせたウェブソリューションを提供します。',
      items: [
        {
          icon: '🎨',
          title: 'コーポレートサイト制作',
          description:
            '事業を魅力的に伝え、訪問者を顧客へ導く高品質・高速なサイトを制作します。',
          tags: ['React', 'Next.js', 'Vite'],
        },
        {
          icon: '🛒',
          title: 'ECサイト構築',
          description:
            '売上につながる導線設計と安全な決済を備えたECサイトを構築します。',
          tags: ['Shopify', 'Next.js', 'Stripe'],
        },
        {
          icon: '⚙️',
          title: 'ウェブアプリ開発',
          description:
            'ダッシュボード、認証、データベース、REST APIを備えたウェブアプリを開発します。',
          tags: ['Node.js', 'Express', 'PostgreSQL'],
        },
        {
          icon: '🚀',
          title: '最適化とSEO',
          description:
            '技術監査と改善で、表示速度と検索での見つかりやすさを高めます。',
          tags: ['Lighthouse', 'Core Web Vitals', 'SEO'],
        },
        {
          icon: '🔗',
          title: 'API連携',
          description:
            'CRM、決済、メール配信、SNSなど外部サービスとの連携を実装します。',
          tags: ['REST API', 'GraphQL', 'Webhooks'],
        },
        {
          icon: '🛡️',
          title: '保守・サポート',
          description:
            '継続的な運用支援、セキュリティ更新、技術サポートを提供します。',
          tags: ['DevOps', 'CI/CD', 'Monitoring'],
        },
      ],
    },
    offer: {
      badge: 'オファー',
      title: 'あなたのサイトを売れる仕組みに',
      subtitle:
        '成果につながらないサイトは機会損失です。訪問者を顧客に変えるサイトを、標準案件なら24〜48時間で提供します。',
      benefits: [
        {
          icon: '💰',
          title: '売れるサイト',
          description: '単なる紹介ページではなく、コンバージョンの仕組み。すべてのセクション・ボタン・テキストが成果を出すために設計されています。',
        },
        {
          icon: '📱',
          title: '100% モバイル対応・高速',
          description: '訪問者の60%以上はスマートフォンから来ます。あらゆるデバイスで快適に動作するよう最適化します。',
        },
        {
          icon: '🎯',
          title: 'アクション重視のコピーライティング',
          description: '惹きつける見出し、納得させる論拠、行動を促すCTA。デザインはメッセージに奉仕します。',
        },
        {
          icon: '🔍',
          title: 'SEOと検索露出',
          description: 'グーグルに評価される構造・タグ・パフォーマンスで、公開初日からトラフィックを獲得します。',
        },
        {
          icon: '⚡',
          title: 'スピード納品',
          description: '標準案件は24〜48時間で納品。要件の複雑さに応じて柔軟に対応します。品質は妥協しません。',
        },
        {
          icon: '🔧',
          title: '完全な自律性',
          description: '依存なし・隠れたコストなし。自分で育てられるサイトをお渡しします。',
        },
      ],
      pricing: {
        label: '料金',
        labelVitrine: 'コーポレートサイト',
        note:
          'コーポレートサイトは約400〜700€（要件により変動）。合意した固定価格です。',
        ecommerceLine:
          'オーダーメイドEC：1500€〜、最短約1週間（お見積り）。',
        details: [
          '標準のコーポレートサイトは24〜48時間で納品',
          'サブスクなし、一括払い',
          '満足いただくまで修正対応',
          'ドメイン・ホスティング設定をサポート',
        ],
        cta: 'プロジェクトを始める',
      },
    },
    about: {
      title: 'プロフィール',
      subtitle: 'ウェブ開発に5年以上取り組んでいます',
      paragraph1:
        'フランスを拠点に活動するフリーランスウェブ開発者です。コーポレートサイト、LP、React と Node.js によるウェブアプリ開発を得意としています。',
      paragraph2:
        '要件理解から提案、納品、公開後のサポートまで一貫して担当し、品質と使いやすさを重視します。',
      perks: [
        '保守しやすいクリーンなコード',
        '納期厳守',
        '透明なコミュニケーション',
        '納品後サポート',
      ],
      cta: '一緒に取り組む',
      skillsTitle: '技術スキル',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js / Express', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'UI/UX と Figma', level: 75 },
        { name: 'DevOps / Docker', level: 70 },
      ],
    },
    portfolio: {
      title: '制作実績',
      subtitle: '最近のプロジェクトから代表例を紹介します。',
      projects: [
        {
          title: 'Locali',
          category: 'ウェブアプリ',
          description:
            '近くの店舗やサービスを見つけやすくするローカルマッチングプラットフォーム。',
          tech: ['React', 'Node.js', 'Maps API'],
          preview: '/previews/locali.jpg',
          link: 'https://www.mylocali.fr',
        },
        {
          title: "L'Essence",
          category: 'コーポレートサイト',
          description:
            'ライフスタイルブランド向けに制作した、上質なデザインと滑らかな体験のサイト。',
          tech: ['Vite', 'React', 'CSS'],
          preview: '/previews/lessence.jpg',
          link: 'https://mada-dev-template1.vercel.app',
        },
        {
          title: 'Lumia',
          category: 'ウェブアプリ',
          description:
            '音声認識とリアルタイム応答に対応した、AI搭載の対話型ボイスアシスタント。',
          tech: ['React', 'Web Speech API', 'AI'],
          preview: '/previews/lumia.jpg',
          link: 'https://vocal-assistant-two.vercel.app',
        },
      ],
      viewProject: 'プロジェクトを見る',
      ctaQuestion: '進めたいプロジェクトはありますか？',
      ctaAction: 'まずは相談する',
    },
    contact: {
      title: 'プロジェクトについて相談しましょう',
      subtitle: '準備ができたらメッセージください。24時間以内に返信します。',
      emailLabel: 'メール',
      locationLabel: '所在地',
      locationValue: 'フランス（リモート）',
      availabilityLabel: '対応状況',
      availabilityValue: '今すぐ対応可能',
      successTitle: '送信完了',
      successBody: 'メッセージありがとうございます。24時間以内に返信します。',
      form: {
        name: 'お名前',
        email: 'メール',
        projectType: 'プロジェクト種別',
        message: 'プロジェクト内容',
        namePlaceholder: '山田 太郎',
        emailPlaceholder: 'taro@example.com',
        messagePlaceholder: '目的、要件、希望納期などを教えてください...',
        selectPlaceholder: '選択してください',
        options: ['コーポレートサイト', 'ECサイト', 'ウェブアプリ', 'リニューアル / 最適化', 'その他'],
        error:
          'エラーが発生しました。再試行するか、issamadayev@gmail.com へ直接ご連絡ください。',
        sending: '送信中...',
        submit: 'メッセージを送信',
      },
    },
    tarifsPage: {
      hero: {
        badge: '固定料金・予算オーバーなし・無料見積もり',
        titleHighlight: '料金',
        titleAfter: ' ウェブ制作',
        titleLine2: 'ナントのウェブサイト',
        sub: 'すべてのプロジェクトに明確な固定料金。嫌な驚きも水増し請求もありません。始める前に支払い金額を正確に把握できます。',
        ctaQuote: '無料見積もりを依頼する',
        ctaPortfolio: '制作実績を見る',
      },
      trust: {
        payment: 'プロジェクト完了後にお支払い',
        fixedPrice: '契約で確定した固定料金',
        noDeposit: '頭金不要',
        freeQuote: '24時間以内に無料見積もり',
      },
      plans: {
        sectionTitle: 'プランと料金',
        sectionSubtitle: 'プロジェクトに合ったプランをお選びください。',
        from: '〜から ',
        vitrine: {
          label: 'ショーケースサイト',
          delay: '24〜48時間で納品',
          features: [
            'カスタムデザイン',
            'モバイルファースト・レスポンシブ',
            '基本SEO（タグ・メタ）',
            'お問い合わせフォーム',
            'コンバージョン重視のコピーライティング',
            '修正1回込み',
            'リリースサポート',
          ],
          excluded: ['商品カタログ', '決済システム'],
          cta: '詳しく見る',
        },
        ecommerce: {
          label: 'Eコマース',
          delay: '最短納期 · 1週間',
          features: [
            '完全なオンラインショップ',
            'ShopifyまたはNext.js（WooCommerceは除く）',
            'クレジットカード・Stripe・その他決済方法（要件に応じて）',
            '注文・在庫管理',
            'モバイルファースト・EコマースSEO',
            'トランザクションメール',
            '修正1回込み',
            '管理画面のトレーニング',
          ],
          cta: '詳しく見る',
        },
        custom: {
          label: 'カスタム',
          priceText: '無料見積もり',
          delay: 'プロジェクトに応じたスケジュール',
          features: [
            '複雑なウェブアプリケーション',
            'API・サードパーティ連携',
            'カスタムデータベース',
            'ユーザー認証',
            'ダッシュボード・バックオフィス',
            'CI/CD・DevOps',
            'メンテナンス込み（オプション）',
            '優先サポート',
          ],
          cta: '見積もりを依頼する',
        },
      },
      comparison: {
        sectionTitle: 'プラン比較',
        sectionSubtitle: '各プランに含まれるすべてのもの。明確に。',
        thFeature: '機能',
        thVitrine: 'ショーケースサイト',
        thEcommerce: 'Eコマース',
        popularBadge: '人気',
        thCustom: 'カスタム',
        rows: {
          price: { label: '料金', vitrine: '400€ → 700€', ecommerce: '1500€〜', custom: '無料見積もり' },
          delay: { label: '納期', vitrine: '24〜48時間', ecommerce: '最短1週間', custom: 'プロジェクト次第' },
          customDesign: 'カスタムデザイン',
          mobileFirst: 'モバイルファースト',
          baseSeo: '基本SEO',
          contactForm: 'お問い合わせフォーム',
          revision: '修正1回込み',
          ecommerceShop: 'オンラインショップ',
          securePayments: '安全な決済',
          stockManagement: '在庫管理',
          apiIntegrations: 'API・連携',
          backOffice: 'カスタムバックオフィス',
        },
      },
      faq: {
        sectionTitle: 'よくある質問',
        sectionSubtitle: '始める前に知りたいこと。',
        items: [
          {
            q: 'ショーケースサイトはいくらですか？',
            a: 'ショーケースサイトは通常、複雑さに応じて400€〜700€の範囲で、標準プロジェクトは24〜48時間で納品します。見積もりにはデザイン、開発、基本SEO、お問い合わせフォーム、リリースサポートが含まれます。',
          },
          {
            q: '職人やレストランのショーケースサイトはいくらですか？',
            a: '職人（配管工、電気工、大工など）やレストランの場合、料金は同じで内容とページ数に応じて400〜700€です。24時間以内に無料の詳細見積もりをお送りします。',
          },
          {
            q: 'Eコマースサイトはいくらですか？',
            a: 'カスタムEコマースサイト（ShopifyまたはNext.js、WooCommerceは除く）は1500€〜で、カタログ・連携・決済方法（クレジットカード、Stripeなど）に応じて変動します。最短1週間の納期が必要です。コミット前に無料見積もり。',
          },
          {
            q: 'ショーケースサイトが400〜700€の幅がある理由は？',
            a: '400€は標準的なショーケースサイト（少ないページ、カスタムデザイン、基本SEO）の出発点です。ページ数が多い、追加機能がある、コンテンツが豊富なプロジェクトは費用が上がります。コミット前に必ず無料の詳細見積もりをご提供します。',
          },
          {
            q: '隠れた費用や定期料金はありますか？',
            a: 'いいえ。料金はサイトの開発のみです。ホスティングとドメイン名（ご自身または私のサポートで管理）だけが年間10〜30€程度の費用になります（プロバイダーにより異なります）。月額サブスクリプションはありません。',
          },
          {
            q: 'いつ支払いますか？',
            a: 'サイトを承認いただいた後、プロジェクト完了時にお支払いいただきます。標準プロジェクトでは頭金は不要です。リスクゼロです。',
          },
          {
            q: '納品後に修正を依頼したい場合は？',
            a: '修正は各プランに1回含まれています。追加の修正については、時間単価または月額メンテナンスパッケージをご提案します。',
          },
          {
            q: 'ショーケースサイトとEコマースサイトの違いは？',
            a: 'ショーケースサイトは事業・サービス・連絡先を紹介し、問い合わせや電話を獲得することが目的です。Eコマースサイトは顧客が直接オンラインで購入でき、カートとカード決済システムを備えています。',
          },
        ],
      },
      cta: {
        titleBefore: 'あなたの',
        titleHighlight: 'ウェブプロジェクト',
        sub: '無料見積もり24時間以内 · ショーケース 400〜700€ · Eコマース 1500€〜',
        btn: '無料見積もりを取得する',
      },
    },
    siteVitrinePage: {
      hero: {
        badge: '今すぐ対応可能 · ナント & リモート',
        title: '制作します',
        titleHighlight: 'ショーケースサイト',
        titleLine2: '職人・飲食店・小規模事業者向け',
        sub: 'プロフェッショナルで高速、Googleに表示されるサイトを24〜48時間で納品。400〜700€。Wix不使用、テンプレートなし、完全フルオーダー。',
        ctaQuote: '無料見積もりを依頼する',
        ctaPortfolio: '制作実績を見る',
      },
      niches: {
        sectionTitle: 'どんな業種にも対応',
        sectionSubtitle: 'あなたのビジネスのために設計されたサイト。誰でも使える汎用テンプレートではありません。',
        items: [
          {
            title: '職人・建設業',
            description: '配管工、電気工、大工、塗装工、左官工あなたの技術をアピールし、サイトから直接見積もり依頼を受け付けましょう。',
            tags: ['職人向けサイト', 'オンライン見積もり'],
          },
          {
            title: 'レストラン・カフェ',
            description: 'オンラインメニュー、フォトギャラリー、営業時間、お問い合わせフォーム来店を促しお席を埋めるために必要なすべてが揃っています。簡単に更新可能。',
            tags: ['飲食店サイト', 'オンラインメニュー'],
          },
          {
            title: '小売業・中小企業',
            description: 'ショップ、クリニック、エージェンシーGoogleローカル検索で目立ち、プロフェッショナルな存在感で訪問者を顧客へと転換します。',
            tags: ['中小企業サイト', 'ローカルSEO'],
          },
          {
            title: '自由業・フリーランス',
            description: '医師、弁護士、コーチ、セラピスト、カメラマンサービスや経歴を伝え、問い合わせや予約を簡単に受け付けましょう。',
            tags: ['フリーランスサイト', 'お問い合わせフォーム'],
          },
        ],
      },
      includes: {
        title: 'ショーケースサイトに含まれるもの',
        description: 'テンプレートなし。量産ページなし。すべてのサイトはあなたのビジネスに合わせてゼロから構築します。',
        checklist: [
          'あなたの業界に合わせたモダンなデザイン',
          'スマートフォンで完璧に表示検索の70%はモバイルから',
          '公開初日からGoogleに表示（基本SEO込み）',
          'お問い合わせフォーム組み込み済み',
          '訪問者を説得するためのコピーライティング（文章作成込み）',
          '超高速サイト1秒以内に読み込み',
          '納品後の修正1回込み',
          '公開サポート付き',
        ],
        pricingLabel: 'ショーケースサイト',
        pricingPrice: '400€ → 700€',
        pricingSub: '24〜48時間納品 · 完了後にお支払い',
        pricingFeatures: [
          '24〜48時間で納品',
          'カスタムデザイン',
          'モバイル & Googleで完璧に表示',
          'お問い合わせフォーム',
          '修正1回込み',
          'ホスティングサポート',
          '頭金不要',
        ],
        pricingCta: 'プロジェクトを始める',
      },
      process: {
        sectionTitle: '24〜48時間で納品その仕組みは',
        sectionSubtitle: 'シンプルなプロセス、専門用語なし。',
        steps: [
          {
            title: '1. プロジェクトをご相談',
            description: 'あなたのビジネス、ご要望、お好みをお聞かせください。24時間以内に詳細な無料見積もりをお送りします。コミットメント不要。',
          },
          {
            title: '2. サイトを制作',
            description: 'あなた専用のショーケースサイトを開発します。公開前にオンラインプレビューをご確認いただけます。',
          },
          {
            title: '3. 公開 & お支払い',
            description: 'サイトをあなたのドメインで公開します。お支払いはサイトを承認いただいた後それ以前はいただきません。',
          },
        ],
      },
      vsWix: {
        title: 'WixやWordPressではダメなの？',
        p1: 'WixやWordPressは便利に見えますが、実際に生成されるサイトは遅く、カスタマイズが難しく、Google上位表示も困難です。',
        p2: 'フルオーダーのサイトは3倍速く読み込まれ、競合他社と視覚的に差別化でき、サイトビルダーの制限なしに初日からコンバージョンに最適化されています。',
        checklist: [
          'Wix広告や「WordPressで作成」バッジなし',
          'ユニークなデザイン競合他社と同じテンプレートなし',
          '超高速読み込み（Googleは速いサイトを優遇）',
          'Wixへの月額サブスクリプションなし',
          'クリーンで保守しやすい、スケーラブルなコード',
        ],
        comparisonTitle: 'フルオーダー vs サイトビルダー',
        comparisonSubtitle: '本格的なプロサイトで得られるもの',
        rows: [
          { label: '読み込み速度', good: '&lt; 1秒', bad: '3〜8秒（Wix）' },
          { label: 'ユニークなデザイン', good: '✓', bad: '✗' },
          { label: 'SEO最適化', good: '✓', bad: '一部のみ' },
          { label: '月額サブスクリプション', good: 'なし', bad: '13〜25€/月' },
          { label: 'サイト上の広告', good: 'なし', bad: 'あり（無料Wix）' },
        ],
      },
      faq: {
        sectionTitle: 'よくある質問',
        sectionSubtitle: '始める前に知りたいこと。',
        items: [
          {
            q: '職人向けショーケースサイトはいくらですか？',
            a: '職人（配管工、電気工、大工、塗装工…）向けのプロフェッショナルなショーケースサイトは、ページ数と内容に応じて400〜700€です。標準プロジェクトは24〜48時間で納品。24時間以内に無料見積もりをご提供します。',
          },
          {
            q: 'レストラン向けショーケースサイトはいくらですか？',
            a: 'レストラン向けショーケースサイト（オンラインメニュー、ギャラリー、予約）は同じ価格帯：400〜700€。オンライン予約システムの統合をご希望の場合は、ニーズに応じて追加できます。',
          },
          {
            q: '納品後にサイトを修正できますか？',
            a: '修正1回は各プランに含まれています。定期的な更新には月額メンテナンスパッケージをご提案します。小さな修正は時間単価で対応します。',
          },
          {
            q: 'WixやWordPressで自分で作ればいいのでは？',
            a: 'WixやWordPressは始めやすいですが、結果は遅くGoogleに最適化されず、真に個性化するのが難しいことが多いです。フルオーダーのサイトは3倍速く読み込まれ、視覚的に目立ち、訪問者を顧客に変えるために設計されています。しかも24〜48時間で納品します。',
          },
          {
            q: 'サイトはGoogleに表示されますか？',
            a: 'はい。すべてのサイトにSEO基礎が含まれています：タイトルタグ、メタ説明、見出し構造、最適化された読み込み速度。強力なローカルSEO（例：「ナント 配管工」）には、Googleビジネスプロフィールの作成をお勧めします必要であればサポートします。',
          },
          {
            q: '前払いは必要ですか？',
            a: 'いいえ。標準プロジェクト（ショーケース、シンプルなEコマース）では、サイトを承認いただいた後、プロジェクト完了時にお支払いいただきます。頭金不要です。',
          },
        ],
      },
      cta: {
        titleBefore: 'あなたの',
        titleHighlight: 'ショーケースサイト',
        sub: '無料見積もり24時間以内 · 400〜700€ · 24〜48時間納品 · 承認後にお支払い',
        btn: '今すぐ始める',
      },
    },
    footer: {
      copyRole: 'フリーランスウェブ開発者',
      secondaryAria: '補助ナビゲーション',
    },
  }),
}

Object.keys(resources).forEach(languageCode => {
  resources[languageCode].translation.language.options = LANGUAGE_AUTONYMS
})

const initialLanguage = detectInitialLanguage()

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', language => {
  localStorage.setItem('language', language)
  document.documentElement.lang = language
})

document.documentElement.lang = initialLanguage

export default i18n
