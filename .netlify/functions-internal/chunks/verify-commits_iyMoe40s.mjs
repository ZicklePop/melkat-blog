async function getMod() {
  return import('./verify-commits_qmGMK10C.mjs')
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
