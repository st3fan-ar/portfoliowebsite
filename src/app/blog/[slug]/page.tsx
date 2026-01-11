import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllPostSlugs } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-24 px-6">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-6">
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

          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-[var(--text-primary)]">
            {post.title}
          </h1>

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            {post.excerpt}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[var(--bg-secondary)] border border-[#e5e4dc] px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {post.mainImage && (
          <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden border border-[#e5e4dc]">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-[var(--text-secondary)]">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) => (
                  <div className="my-8">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#e5e4dc]">
                      <Image
                        src={urlFor(value).width(1000).url()}
                        alt={value.alt || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {value.caption && (
                      <p className="text-sm text-center text-[var(--text-secondary)] mt-2">
                        {value.caption}
                      </p>
                    )}
                  </div>
                ),
              },
              block: {
                h2: ({ children }) => (
                  <h2 className="font-heading text-3xl font-bold mt-12 mb-4 text-[var(--text-primary)]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-heading text-2xl font-bold mt-8 mb-3 text-[var(--text-primary)]">
                    {children}
                  </h3>
                ),
                normal: ({ children }) => (
                  <p className="leading-relaxed mb-6">
                    {children}
                  </p>
                ),
              },
            }}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-[#e5e4dc]">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline font-medium"
          >
            ← All Posts
          </Link>
        </div>
      </article>
    </main>
  )
}