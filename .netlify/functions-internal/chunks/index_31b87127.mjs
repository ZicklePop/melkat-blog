export { renderers } from '../renderers.mjs'
export { onRequest } from '../_empty-middleware.mjs'

const page = () => import('./pages/index_ea2b23dc.mjs').then(n => n.o)

export { page }
