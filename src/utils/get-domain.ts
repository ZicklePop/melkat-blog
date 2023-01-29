export const getDomain = link =>
  link
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .split('.')
    .slice(-2)
    .join('.')

export default getDomain
