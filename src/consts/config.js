export const pageSize = 25
export const description = 'a blog by Melanie Kat'
export const title = 'melkat.blog'
export const baseUrl = 'https://melkat.blog'
export const defaultCover = '/cover.png'
export const baseCoverUrl = `${baseUrl}${defaultCover}`

export const cxs = {
  a: 'text-cerulean-700 dark:text-cerulean-500 underline',
  aHover:
    'no-underline hover:underline text-cerulean-700 dark:text-cerulean-500',
  h1: 'font-light text-4xl my-6',
  h2: 'mb-4 text-xl font-medium',
  li: 'inline-block uppercase my-1',
  prose: 'prose prose-melkat dark:prose-invert',
}

export default {
  baseUrl,
  cxs,
  defaultCover,
  description,
  pageSize,
  title,
}
