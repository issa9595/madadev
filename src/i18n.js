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
          'Ориентир 400–700€ для сайта-визитки в зависимости от сложности. Фиксированная договорённая цена.',
        ecommerceLine:
          'Интернет-магазин на заказ: от 1500€, минимум 1 неделя (индивидуальный расчёт).',
        details: [
          'Сдача за 24–48 ч для стандартного сайта-визитки',
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
          '400–700 € für eine Showcase-Website, je nach Komplexität. Fester vereinbarter Preis.',
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
          'Fascia 400–700€ per un sito vetrina, a seconda della complessità. Prezzo fisso concordato.',
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
        note: '展示型网站约 400–700€，视复杂度而定。约定固定总价，无隐藏费用。',
        ecommerceLine: '定制电商：1500€ 起，最短约一周交付（按报价单）。',
        details: [
          '标准展示型网站 24–48 小时内交付',
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
      logoAria: 'MadaDev フリーランスWeb開発者 トップへ戻る',
      mainAria: 'メインナビゲーション',
      links: { services: 'サービス一覧', offer: 'プラン', about: 'プロフィール', portfolio: '実績', contact: 'お問い合わせ' },
      cta: '相談する',
      menuAria: 'メニュー',
    },
    hero: {
      badge: '新規プロジェクト受付中',
      titlePrefix: '成果につながる',
      titleHighlight: 'Web体験',
      titleSuffix: 'を設計します',
      description:
        'フリーランスのWeb開発者として、アイデアをモダンで高速かつ使いやすいアプリに仕上げます。設計から公開まで一貫して対応します。',
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
      subtitle: '設計から本番運用まで、課題に合わせたWebソリューションを提供します。',
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
          title: 'Webアプリ開発',
          description:
            'ダッシュボード、認証、データベース、REST APIを備えたWebアプリを開発します。',
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
      subtitle: 'Web開発に5年以上取り組んでいます',
      paragraph1:
        'フランスを拠点に活動するフリーランスWeb開発者です。コーポレートサイト、LP、React と Node.js によるWebアプリ開発を得意としています。',
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
          category: 'Webアプリ',
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
        options: ['コーポレートサイト', 'ECサイト', 'Webアプリ', 'リニューアル / 最適化', 'その他'],
        error:
          'エラーが発生しました。再試行するか、issamadayev@gmail.com へ直接ご連絡ください。',
        sending: '送信中...',
        submit: 'メッセージを送信',
      },
    },
    footer: {
      copyRole: 'フリーランスWeb開発者',
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
