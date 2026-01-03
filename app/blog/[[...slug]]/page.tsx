import { notFound } from 'next/navigation'
import { getAllMarkdownSlugs, getMarkdownBySlug } from '@/lib/markdown'

export async function generateStaticParams() {
  return getAllMarkdownSlugs().map(slug => ({ slug }))
}

export default async function MarkdownPage({
  params
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params

  if (!slug) return notFound()

  const result = await getMarkdownBySlug(slug)

  if (!result) return notFound()

  return (
    <main style={{ padding: 40 }}>
      <article
        dangerouslySetInnerHTML={{ __html: result.html }}
      />
    </main>
  )
}
