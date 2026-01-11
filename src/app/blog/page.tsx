import Link from 'next/link'
import { getAllPosts } from '@/lib/sanity.queries'

export const metadata = {
  title: 'Blog - Stefan',
  description: 'Thoughts on Power Electronics, Engineering Leadership, and Hydrogen Technology',
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8">
          ← Back to Home
        </Link>
        
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-[var(--text-secondary)] mb-16">
          Insights on Power Electronics, Engineering Leadership, and Green Hydrogen
        </p>
        
        {posts.length === 0 ? (
          <div className="bg-[var(--bg-secondary)] border border-[#e5e4dc] rounded-2xl p-12 text-center">
            <h2 className="font-heading text-2xl font-bold mb-3">Coming Soon</h2>
            <p className="text-[var(--text-secondary)]">Blog posts in preparation.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <article className="bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-8 hover:border-[var(--accent)] transition-all group">
                  <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-4">
                    <time>
                      {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime || '5 min read'}</span>
                  </div>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-[var(--text-secondary)] mb-6">{post.excerpt}</p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[var(--bg-primary)] border border-[#e5e4dc] px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>
        )}
        
        <div className="mt-12 pt-8 border-t border-[#e5e4dc]">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              Home
            </Link>
            <span className="text-[var(--text-secondary)]">•</span>
            <Link href="/datenschutz" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              Datenschutz
            </Link>
            <span className="text-[var(--text-secondary)]">•</span>
            <Link href="/impressum" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}