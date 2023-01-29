export const getDomain = (link: string): string =>
  link
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .split('.')
    .slice(-2)
    .join('.')

export default getDomain
