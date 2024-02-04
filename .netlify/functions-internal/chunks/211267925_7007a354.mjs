async function getMod() {
  return import('./211267925_8421b64b.mjs')
}
const collectedLinks = '@@ASTRO-LINKS@@'
const collectedStyles = '@@ASTRO-STYLES@@'
const collectedScripts = '@@ASTRO-SCRIPTS@@'
const defaultMod = {
  __astroPropagation: true,
  getMod,
  collectedLinks,
  collectedStyles,
  collectedScripts,
}

export { defaultMod as default }
