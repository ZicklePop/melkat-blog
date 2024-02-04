async function getMod() {
  return import('./2019-in-media.16c43ba1.mjs')
}
const collectedLinks = '@@ASTRO-LINKS@@'
const collectedStyles = '@@ASTRO-STYLES@@'
const collectedScripts = '@@ASTRO-SCRIPTS@@'

export { collectedLinks, collectedScripts, collectedStyles, getMod }
