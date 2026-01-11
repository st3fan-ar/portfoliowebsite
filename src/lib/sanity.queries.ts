import { client } from './sanity.client'

export interface SanityBlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  body: any[]
  tags?: string[]
  readTime?: string
}

export async function getAllPosts(): Promise<SanityBlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    tags,
    readTime
  }`
  
  return await client.fetch(query)
}

export async function getPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    body,
    tags,
    readTime
  }`
  
  return await client.fetch(query, { slug })
}

export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post"].slug.current`
  return await client.fetch(query)
}