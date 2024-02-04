async function getMod() {
  return import('./164564932_f5fg4AYK.mjs')
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
