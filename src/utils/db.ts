import { db, desc, eq, Likes, Meta } from 'astro:db'
import { count } from 'drizzle-orm'

export async function getLikesForSlug(slug: string): Promise<number> {
  const [{ count: likeCount }] = await db
    .select({ count: count() })
    .from(Likes)
    .where(eq(Likes.slug, slug))
  return likeCount
}

export async function getPostsByLikes() {
  const likes = await db
    .select({ slug: Likes.slug, count: count() })
    .from(Likes)
    .groupBy(Likes.slug)
    .orderBy(desc(count()))
  return likes
}

export async function likePostBySlug(hash: string, slug: string) {
  await db.insert(Likes).values({ hash, slug }).onConflictDoNothing()
}

export async function getCurrentSalt() {
  const [currentSalt] = await db.select().from(Meta).where(eq(Meta.key, 'salt'))
  return currentSalt
}

export async function updateSalt(value: string) {
  await db
    .update(Meta)
    .set({ value, updated: new Date() })
    .where(eq(Meta.key, 'salt'))
}
