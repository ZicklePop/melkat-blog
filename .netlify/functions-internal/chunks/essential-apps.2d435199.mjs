async function getMod() {
  return import('./essential-apps.f9bcfb31.mjs')
}
const collectedLinks = '@@ASTRO-LINKS@@'
const collectedStyles = '@@ASTRO-STYLES@@'
const collectedScripts = '@@ASTRO-SCRIPTS@@'

export { collectedLinks, collectedScripts, collectedStyles, getMod }
