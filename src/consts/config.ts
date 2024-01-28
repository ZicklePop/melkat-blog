export const pageSize = 15
export const description =
  'hi there! please enjoy my blog of things i think are interesting'
export const title = 'melkat.blog'
export const baseUrl = 'https://melkat.blog'
export const defaultCover = '/cover.png'
export const baseCoverUrl = `${baseUrl}${defaultCover}`

export const cxs = {
  a: 'text-cerulean-700 dark:text-cerulean-600 underline',
  aHover:
    'no-underline hover:underline text-cerulean-700 dark:text-cerulean-600',
  aIcon:
    'text-cerulean-700 dark:text-cerulean-600 underline flex items-center gap-1',
  h1: 'font-light text-4xl my-6',
  h2: 'mb-4 text-xl font-medium',
  li: 'inline-block my-1 mr-2',
  prose: 'prose prose-melkat dark:prose-invert md:prose-lg',
}

export default {
  baseUrl,
  cxs,
  defaultCover,
  description,
  pageSize,
  title,
}
