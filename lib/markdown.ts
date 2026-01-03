import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')


export async function getMarkdownBySlug(slug: string[]) {
  const fullPath = path.join(CONTENT_DIR, ...slug) + '.md'

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const file = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(file)

  const processed = await remark().use(html).process(content)

  return {
    html: processed.toString(),
    frontmatter: data
  }
}

export function getAllMarkdownSlugs(): string[][] {
  function walk(dir: string, acc: string[] = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    let result: string[][] = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        result = result.concat(walk(fullPath, [...acc, entry.name]))
      } else if (entry.name.endsWith('.md')) {
        result.push([...acc, entry.name.replace('.md', '')])
      }
    }

    return result
  }

  return walk(CONTENT_DIR)
}
