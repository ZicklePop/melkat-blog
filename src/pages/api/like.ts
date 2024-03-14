import { db, eq, Likes, Meta } from 'astro:db'
import { count } from 'drizzle-orm'
import type { APIContext } from 'astro'
import { getRandomValues, getHash } from '../../utils/cryptography'

export const prerender = false

export async function POST({ clientAddress, request }: APIContext) {
  const data = await request.json()
  const slug = data?.slug
  if (!slug) {
    return new Response(
      JSON.stringify({
        message: 'Missing slug',
      }),
      { status: 400 }
    )
  }

  const [currentSalt] = await db.select().from(Meta).where(eq(Meta.key, 'salt'))
  const currentSaltUpdated = currentSalt?.updated?.toISOString().split('T')[0]
  const currentDate = new Date().toISOString().split('T')[0]
  let salt = currentSalt?.value

  // Needs fresh salt
  if (!currentSalt || currentSaltUpdated !== currentDate) {
    salt = getRandomValues()
    await db
      .update(Meta)
      .set({ value: salt, updated: new Date() })
      .where(eq(Meta.key, 'salt'))
  }

  const ua = request.headers.get('user-agent')
  const hash = await getHash(`${clientAddress}${ua}${salt}`)
  if (slug && hash) {
    await db.insert(Likes).values({ hash, slug }).onConflictDoNothing()
  }

  const [{ count: likeCount }] = await db
    .select({ count: count() })
    .from(Likes)
    .where(eq(Likes.slug, slug))

  return new Response(
    JSON.stringify({
      count: likeCount,
    })
  )
}
