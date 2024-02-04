async function getMod() {
  return import('./links-for-2023-04-02_6bd96c10.mjs')
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
