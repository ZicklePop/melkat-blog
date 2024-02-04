async function getMod() {
  return import('./lastfm-to-mastodon.550e1860.mjs')
}
const collectedLinks = '@@ASTRO-LINKS@@'
const collectedStyles = '@@ASTRO-STYLES@@'
const collectedScripts = '@@ASTRO-SCRIPTS@@'

export { collectedLinks, collectedScripts, collectedStyles, getMod }
