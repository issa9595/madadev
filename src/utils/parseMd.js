/**
 * Minimal frontmatter parser — browser-safe, no Buffer dependency.
 * Supports: string values, quoted strings, inline arrays [a, b], block arrays (- item).
 */
export function parseMd(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const yamlStr = match[1]
  const content = match[2]
  const data = {}

  const lines = yamlStr.split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const colonIdx = line.indexOf(':')

    if (colonIdx === -1) { i++; continue }

    const key = line.slice(0, colonIdx).trim()
    const rest = line.slice(colonIdx + 1).trim()

    if (rest === '') {
      // Could be a block list — look ahead for "  - item" lines
      const items = []
      i++
      while (i < lines.length && /^\s+-\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\s+-\s*/, '').trim().replace(/^["']|["']$/g, ''))
        i++
      }
      data[key] = items.length > 0 ? items : ''
      continue
    }

    // Inline array: [a, b, c]
    if (rest.startsWith('[') && rest.endsWith(']')) {
      data[key] = rest.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''))
    } else {
      data[key] = rest.replace(/^["']|["']$/g, '')
    }

    i++
  }

  return { data, content }
}
