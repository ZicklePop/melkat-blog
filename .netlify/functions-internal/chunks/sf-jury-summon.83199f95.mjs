async function getMod() {
  return import('./sf-jury-summon.eccd9b1f.mjs')
}
const collectedLinks = '@@ASTRO-LINKS@@'
const collectedStyles = '@@ASTRO-STYLES@@'
const collectedScripts = '@@ASTRO-SCRIPTS@@'

export { collectedLinks, collectedScripts, collectedStyles, getMod }
