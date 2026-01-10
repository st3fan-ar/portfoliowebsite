import { getPostBySlug, getAllPostSlugs, BlogPost } from '@/lib/blog'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: Props) {
  const post: BlogPost | null = await getPostBySlug(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-[var(--text-secondary)] mb-8 flex items-center gap-2">
          <time>{new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <article className="prose prose-invert max-w-full" dangerouslySetInnerHTML={{ __html: post.content }} />
        {post.tags && (
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map(tag => (
              <span key={tag} className="bg-[var(--bg-primary)] border border-[#e5e4dc] px-3 py-1 rounded-full text-xs">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
