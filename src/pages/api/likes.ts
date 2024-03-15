import { db, desc, Likes, Meta } from 'astro:db'
import { count } from 'drizzle-orm'

export const prerender = false

export async function GET() {
  const likes = await db
    .select({ slug: Likes.slug, count: count() })
    .from(Likes)
    .groupBy(Likes.slug)
    .orderBy(desc(count()))

  return new Response(
    JSON.stringify({
      likes,
    })
  )
}
