export { renderers } from '../renderers.mjs'
export { onRequest } from '../_empty-middleware.mjs'

const page = () => import('./prerender_1c4220ef.mjs').then(n => n.j)

export { page }
