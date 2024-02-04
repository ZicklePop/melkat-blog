export { renderers } from '../renderers.mjs'
export { onRequest } from '../_empty-middleware.mjs'

const page = () => import('./prerender_3c8d6db8.mjs').then(n => n.d)

export { page }
