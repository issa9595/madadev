export const SUPPORTED_LANGUAGES = ['fr', 'en', 'es', 'ru', 'de', 'nl', 'it', 'zh', 'ja']

export const LANGUAGE_AUTONYMS = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  ru: 'Русский',
  de: 'Deutsch',
  nl: 'Nederlands',
  it: 'Italiano',
  zh: '中文',
  ja: '日本語',
}

export const normalizeLanguageCode = locale => {
  if (!locale || typeof locale !== 'string') return null
  const lower = locale.toLowerCase()
  if (lower.startsWith('zh')) return 'zh'
  const base = lower.split('-')[0]
  return SUPPORTED_LANGUAGES.includes(base) ? base : null
}

export const detectInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language')
  if (SUPPORTED_LANGUAGES.includes(savedLanguage)) return savedLanguage

  const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const locale of browserLocales) {
    const normalized = normalizeLanguageCode(locale)
    if (normalized) return normalized
  }

  return 'fr'
}

export const resolveSelectableLanguage = i18nLanguage => {
  const normalized = normalizeLanguageCode(i18nLanguage)
  return normalized && SUPPORTED_LANGUAGES.includes(normalized) ? normalized : ''
}
