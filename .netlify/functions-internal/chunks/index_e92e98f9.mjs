export { renderers } from '../renderers.mjs'
export { onRequest } from '../_empty-middleware.mjs'

const page = () => import('./pages/index_72321847.mjs').then(n => n.o)

export { page }
