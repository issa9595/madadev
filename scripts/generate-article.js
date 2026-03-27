import Anthropic from '@anthropic-ai/sdk'
import { GoogleGenerativeAI } from '@google/generative-ai'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const RSS_FEEDS = [
  {
    url: 'https://news.google.com/rss/search?q=création+site+web&hl=fr&gl=FR&ceid=FR:fr',
    theme: 'création de site web'
  },
  {
    url: 'https://news.google.com/rss/search?q=ecommerce+boutique+en+ligne+France&hl=fr&gl=FR&ceid=FR:fr',
    theme: 'e-commerce'
  },
  {
    url: 'https://news.google.com/rss/search?q=transformation+digitale+PME+TPE&hl=fr&gl=FR&ceid=FR:fr',
    theme: 'digital PME/TPE'
  },
  {
    url: 'https://news.google.com/rss/search?q=SEO+Google+algorithme+2025&hl=fr&gl=FR&ceid=FR:fr',
    theme: 'SEO et référencement'
  },
  {
    url: 'https://news.google.com/rss/search?q=numérique+entreprise+Nantes&hl=fr&gl=FR&ceid=FR:fr',
    theme: 'numérique à Nantes'
  },
  {
    url: 'https://news.google.com/rss/search?q=réseaux+sociaux+vs+site+internet+entreprise&hl=fr&gl=FR&ceid=FR:fr',
    theme: 'réseaux sociaux vs site web'
  },
]

async function fetchRSS(feedUrl) {
  try {
    const res = await fetch(feedUrl)
    const text = await res.text()
    const items = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(text)) !== null && items.length < 5) {
      const item = match[1]
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
        || item.match(/<title>(.*?)<\/title>/)?.[1] || ''
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
      if (title) items.push({ title: title.trim(), pubDate: pubDate.trim() })
    }
    return items
  } catch (e) {
    console.warn(`Erreur fetch RSS ${feedUrl}:`, e.message)
    return []
  }
}

function getPublishedSlugs() {
  const blogDir = 'src/content/blog'
  if (!fs.existsSync(blogDir)) return []
  return fs.readdirSync(blogDir).map(f => f.replace('.md', ''))
}

async function pickBestTopicWithGemini(allNews, publishedSlugs) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const newsText = allNews.map(({ theme, items }) =>
    `Thème "${theme}" :\n${items.map(i => `- ${i.title}`).join('\n')}`
  ).join('\n\n')

  const publishedText = publishedSlugs.length > 0
    ? `\n\nArticles déjà publiés (ne pas répéter ces sujets) :\n${publishedSlugs.join('\n')}`
    : ''

  const prompt = `Tu es un expert en stratégie de contenu SEO pour MadaDev, agence web freelance basée à Nantes qui crée des sites vitrine et e-commerce pour TPE/PME, artisans et restaurateurs.

Voici les actualités de la semaine par thématique :

${newsText}
${publishedText}

En te basant sur ces actualités, propose UN SEUL sujet d'article de blog qui :
1. Est inspiré d'une actualité réelle de la liste ci-dessus
2. Est pertinent pour les clients de MadaDev (artisans, restaurateurs, TPE/PME nantais)
3. N'a pas déjà été traité dans les articles publiés
4. Permet de mettre en avant les services de MadaDev naturellement
5. Est original et différent des autres articles déjà publiés

Réponds UNIQUEMENT avec un objet JSON valide sans backticks :
{
  "titre": "Le titre de l'article",
  "slug": "le-slug-en-kebab-case",
  "actualite": "L'actualité qui a inspiré ce sujet",
  "angle": "L'angle choisi pour lier l'actualité aux services MadaDev",
  "motcle": "Le mot-clé SEO principal ciblé"
}`

  const result = await model.generateContent(prompt)
  const text = result.response.text().trim()

  try {
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    return JSON.parse(cleaned)
  } catch (e) {
    console.error('Erreur parsing JSON Gemini:', text)
    throw new Error('Gemini n\'a pas retourné un JSON valide')
  }
}

async function generateArticleWithClaude(topic, date) {
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2500,
    messages: [{
      role: 'user',
      content: `Tu es un expert SEO et rédacteur web pour MadaDev, agence web freelance basée à Nantes (mada-dev.com) qui crée des sites vitrine et e-commerce pour TPE/PME, artisans et restaurateurs.

Écris un article de blog SEO complet en français sur le sujet suivant :

Titre : ${topic.titre}
Mot-clé principal : ${topic.motcle}
Actualité d'inspiration : ${topic.actualite}
Angle éditorial : ${topic.angle}

RÈGLES STRICTES :
- Commence UNIQUEMENT par le frontmatter YAML entre --- et ---
- Frontmatter obligatoire :
  title: "${topic.titre}"
  description: (155 caractères max contenant le mot-clé)
  date: ${date}
  slug: "${topic.slug}"
  tags: (3-4 tags pertinents en liste YAML)
  actualite: "${topic.actualite}"
- Ensuite le contenu Markdown :
  - H1 contenant le mot-clé exact
  - Introduction qui mentionne l'actualité d'inspiration naturellement
  - 3 à 4 sections H2 avec des conseils pratiques
  - Entre 900 et 1200 mots
  - Ton naturel, professionnel, accessible — pas trop technique
  - Cible : TPE/PME, artisans, restaurateurs de Nantes et Loire-Atlantique
  - Mentionne MadaDev comme solution 1 à 2 fois maximum, de façon naturelle
  - Termine par un CTA : "Demandez votre devis gratuit" avec lien Markdown vers /contact
- Retourne UNIQUEMENT le Markdown brut, sans commentaire ni explication`
    }]
  })

  return message.content[0].text
}

async function main() {
  console.log('Fetch des actualités Google News...')
  const allNews = []
  for (const feed of RSS_FEEDS) {
    const items = await fetchRSS(feed.url)
    console.log(`  ${feed.theme} : ${items.length} actualités`)
    if (items.length > 0) allNews.push({ theme: feed.theme, items })
  }

  if (allNews.length === 0) {
    throw new Error('Aucune actualité récupérée — vérifier les flux RSS')
  }

  const publishedSlugs = getPublishedSlugs()
  console.log(`Articles déjà publiés : ${publishedSlugs.length}`)

  console.log('Sélection du meilleur sujet avec Gemini...')
  const topic = await pickBestTopicWithGemini(allNews, publishedSlugs)
  console.log(`Sujet choisi : "${topic.titre}"`)
  console.log(`Inspiré de : ${topic.actualite}`)

  const date = new Date().toISOString().split('T')[0]

  console.log('Génération de l\'article avec Claude...')
  const content = await generateArticleWithClaude(topic, date)

  const outputDir = 'src/content/blog'
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

  const filename = `${date}-${topic.slug}.md`
  fs.writeFileSync(path.join(outputDir, filename), content, 'utf8')
  console.log(`Article sauvegardé : ${outputDir}/${filename}`)
}

main().catch(err => {
  console.error('Erreur :', err)
  process.exit(1)
})
