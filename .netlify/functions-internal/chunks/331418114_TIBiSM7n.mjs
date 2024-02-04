async function getMod() {
  return import('./331418114_cFVl8U9N.mjs')
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
