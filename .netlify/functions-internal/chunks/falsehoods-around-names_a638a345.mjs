async function getMod() {
  return import('./falsehoods-around-names_5af2c48f.mjs')
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
