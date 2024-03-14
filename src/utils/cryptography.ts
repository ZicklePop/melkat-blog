export function getRandomValues() {
  return `${crypto.getRandomValues(new Uint8Array(16))}`
}

export async function getHash(input: string) {
  const hash = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(input)
  )
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}
