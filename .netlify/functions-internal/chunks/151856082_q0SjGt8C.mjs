async function getMod() {
  return import('./151856082_4h0Axy_X.mjs')
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
