export { renderers } from '../renderers.mjs'
export { onRequest } from '../_empty-middleware.mjs'

const page = () => import('./prerender_6ff3f189.mjs').then(n => n.i)

export { page }
