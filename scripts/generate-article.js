import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

const client = new Anthropic()

const KEYWORDS = [
  "combien coûte un site vitrine",
  "pourquoi un restaurant a besoin d'un site web",
  "shopify ou woocommerce lequel choisir",
  "comment choisir son développeur web freelance",
  "site vitrine pour artisan nantes",
  "délai création site web",
  "créer site e-commerce pas cher nantes",
  "erreurs qui font fuir les visiteurs d'un site web",
  "pourquoi votre site web est lent",
  "site web mobile responsive nantes",
]

function toSlug(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60)
}

function getNextKeyword() {
  const blogDir = 'src/content/blog'
  const existing = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir)
    : []

  for (const kw of KEYWORDS) {
    const slug = toSlug(kw)
    const alreadyPublished = existing.some(f => f.includes(slug.slice(0, 25)))
    if (!alreadyPublished) return { keyword: kw, slug }
  }

  // Tous publiés — recommence depuis le début avec un suffixe de date
  const kw = KEYWORDS[0]
  return { keyword: kw, slug: toSlug(kw) }
}

async function generateArticle() {
  const { keyword, slug } = getNextKeyword()
  const date = new Date().toISOString().split('T')[0]
  const filename = `${date}-${slug}.md`
  const outputDir = 'src/content/blog'

  console.log(`Génération de l'article : "${keyword}"`)

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: `Tu es un expert SEO et rédacteur web pour MadaDev, agence web freelance basée à Nantes (mada-dev.com).

Écris un article de blog SEO complet en français sur le sujet : "${keyword}"

RÈGLES STRICTES :
- Commence UNIQUEMENT par le frontmatter YAML entre --- et ---
- Frontmatter obligatoire :
  title: (titre accrocheur avec le mot-clé)
  description: (155 caractères max, inclut le mot-clé)
  date: ${date}
  slug: ${slug}
  tags: (liste de 3-4 tags pertinents)
- Ensuite le contenu Markdown :
  - H1 contenant le mot-clé exact
  - 3 à 4 sections H2 avec des sous-questions pertinentes
  - Entre 900 et 1200 mots au total
  - Ton naturel, professionnel, accessible — pas trop technique
  - Cible : TPE/PME, artisans, restaurateurs de Nantes et Loire-Atlantique
  - Mentionne naturellement MadaDev comme solution 1 à 2 fois
  - Termine OBLIGATOIREMENT par un CTA : "Demandez votre devis gratuit" avec lien vers /contact
- Retourne UNIQUEMENT le Markdown brut, sans commentaire ni explication`
    }]
  })

  const content = message.content[0].text

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(path.join(outputDir, filename), content, 'utf8')
  console.log(`Article généré et sauvegardé : ${outputDir}/${filename}`)
}

generateArticle().catch(err => {
  console.error('Erreur génération article :', err)
  process.exit(1)
})
