# SEO Canonical Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corriger les URLs canoniques en double signalées par Google Search Console et normaliser les URLs du site.

**Architecture:** Le projet est une SPA React+Vite déployée sur Vercel. `react-helmet-async` est déjà installé. `SeoHead` injecte les canoniques dynamiquement via `HelmetProvider`. Le problème central est une incohérence entre le canonical statique dans `index.html` (`https://mada-dev.com`) et celui injecté par `Home.jsx` (`https://mada-dev.com/` avec slash). Vercel ne redirige pas encore les URLs avec slash final.

**Tech Stack:** React 18, react-helmet-async 3, react-router-dom 7, Vercel

---

### Diagnostic : état actuel

| Page | Canonical actuel | Statut |
|------|-----------------|--------|
| `/` (Home) | `https://mada-dev.com/` (Home.jsx) vs `https://mada-dev.com` (index.html) | **INCOHÉRENT** |
| `/site-vitrine` | `https://mada-dev.com/site-vitrine` via SeoHead | ✓ |
| `/ecommerce` | `https://mada-dev.com/ecommerce` via SeoHead | ✓ |
| `/nantes` | `https://mada-dev.com/nantes` via SeoHead | ✓ |
| `/tarifs` | `https://mada-dev.com/tarifs` via SeoHead | ✓ |
| `/blog` | `https://mada-dev.com/blog` via SeoHead | ✓ |
| `/blog/:slug` | `https://mada-dev.com/blog/<slug>` via SeoHead | ✓ |
| `404` (NotFound) | Aucune balise, pas de noindex | **MANQUANT** |

---

### Task 1 : Fix canonical de la page Home

**Files:**
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1 : Corriger le canonical dans Home.jsx**

Changer `https://mada-dev.com/` (avec slash) en `https://mada-dev.com` (sans slash) pour correspondre au canonical statique dans `index.html` et à la convention des autres pages :

```jsx
// src/pages/Home.jsx
<Helmet>
  <title>Création Site Web Nantes | Freelance Vitrine &amp; E-commerce - MadaDev</title>
  <meta
    name="description"
    content="MadaDev, développeur web freelance à Nantes. Sites vitrine 400-700€ en 24-48h. E-commerce sur mesure dès 1500€ (min. 1 semaine). Devis gratuit."
  />
  <link rel="canonical" href="https://mada-dev.com" />
</Helmet>
```

- [ ] **Step 2 : Commit**

```bash
git add src/pages/Home.jsx
git commit -m "fix(seo): align Home canonical with index.html – remove trailing slash"
```

---

### Task 2 : Normalisation des trailing slashes dans vercel.json

**Files:**
- Modify: `vercel.json`

- [ ] **Step 1 : Ajouter le redirect trailing-slash**

Dans `vercel.json`, ajouter avant les `rewrites` un redirect qui supprime le slash final sur toutes les routes (sauf la racine `/` qui est déjà gérée par l'URL canonique) :

```json
{
  "redirects": [
    { "source": "/home", "destination": "/", "permanent": true },
    { "source": "/home/", "destination": "/", "permanent": true },
    { "source": "/:path+/", "destination": "/:path+", "permanent": true }
  ],
  "headers": [ ... ],
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Note : Le pattern `/:path+/` redirige `/blog/` → `/blog`, `/site-vitrine/` → `/site-vitrine`, etc. Il ne match pas `/` seul (chemin vide), donc pas de boucle.

- [ ] **Step 2 : Commit**

```bash
git add vercel.json
git commit -m "fix(vercel): redirect trailing slash to canonical URL without slash"
```

---

### Task 3 : Ajouter noindex sur la page 404

**Files:**
- Modify: `src/pages/NotFound.jsx`

- [ ] **Step 1 : Ajouter Helmet noindex dans NotFound.jsx**

```jsx
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import './NotFound.css'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
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
    </>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/pages/NotFound.jsx
git commit -m "fix(seo): add noindex to 404 page"
```

---

## Rapport final attendu

Après ces 3 tâches :
- `/` : canonical `https://mada-dev.com` cohérent entre index.html et React
- `/site-vitrine`, `/ecommerce`, `/nantes`, `/tarifs`, `/blog`, `/blog/:slug` : canoniques déjà corrects, inchangés
- Toutes les URLs avec slash final redirigent vers la version sans slash (301)
- La page 404 est exclue de l'index Google
