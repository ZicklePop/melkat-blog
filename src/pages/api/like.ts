import { getRandomValues, getHash } from '../../utils/cryptography'
import {
  getCurrentSalt,
  getLikesForSlug,
  getPostsByLikes,
  likePostBySlug,
  updateSalt,
} from '../../utils/db'
import type { APIContext } from 'astro'

export const prerender = false

function getSlug(url: string): string | null {
  return url ? new URL(url).searchParams.get('slug') : null
}

export async function GET({ request }: APIContext) {
  const slug = getSlug(request.url)

  if (slug) {
    return new Response(
      JSON.stringify({
        count: await getLikesForSlug(slug),
      })
    )
  }

  const likes = await getPostsByLikes()

  return new Response(
    JSON.stringify({
      likes,
    })
  )
}

export async function POST({ clientAddress, request }: APIContext) {
  const slug = getSlug(request.url)

  if (!slug) {
    return new Response(
      JSON.stringify({
        message: 'Missing slug',
      }),
      { status: 400 }
    )
  }

  const currentSalt = await getCurrentSalt()
  const currentSaltUpdated = currentSalt?.updated?.toISOString().split('T')[0]
  const currentDate = new Date().toISOString().split('T')[0]
  let salt = currentSalt?.value

  // Needs fresh salt
  if (!salt || currentSaltUpdated !== currentDate) {
    salt = getRandomValues()
    await updateSalt(salt)
  }

  const ua = request.headers.get('user-agent')
  const hash = await getHash(`${slug}${clientAddress}${ua}${salt}`)
  if (hash && slug) {
    await likePostBySlug(hash, slug)
  }

  return new Response(
    JSON.stringify({
      count: await getLikesForSlug(slug),
    })
  )
}
