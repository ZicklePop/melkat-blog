const MY_FINGER =
  'https://nyan.lol/.well-known/webfinger?resource=acct:zicklepop@nyan.lol'

export const prerender = true

export async function GET() {
  const res = await fetch(MY_FINGER)
  const json = await res.json()
  return {
    body: JSON.stringify(json),
  }
}
