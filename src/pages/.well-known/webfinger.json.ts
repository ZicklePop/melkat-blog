const MY_FINGER =
  'https://nyan.lol/.well-known/webfinger?resource=acct:zicklepop@nyan.lol'

export async function get() {
  const res = await fetch(MY_FINGER)
  const json = await res.json()
  return {
    body: JSON.stringify(json),
  }
}
