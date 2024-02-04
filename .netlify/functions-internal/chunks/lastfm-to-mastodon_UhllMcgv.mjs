async function getMod() {
  return import('./lastfm-to-mastodon_f8RawZwG.mjs')
}
const collectedLinks = []
const collectedStyles = []
const collectedScripts = []
const defaultMod = {
  __astroPropagation: true,
  getMod,
  collectedLinks,
  collectedStyles,
  collectedScripts,
}

export { defaultMod as default }
