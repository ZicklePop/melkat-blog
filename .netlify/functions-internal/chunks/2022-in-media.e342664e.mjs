async function getMod() {
  return import('./2022-in-media.e529985a.mjs')
}
const collectedLinks = '@@ASTRO-LINKS@@'
const collectedStyles = '@@ASTRO-STYLES@@'
const collectedScripts = '@@ASTRO-SCRIPTS@@'

export { collectedLinks, collectedScripts, collectedStyles, getMod }
