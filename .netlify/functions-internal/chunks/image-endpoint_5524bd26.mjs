export { renderers } from '../renderers.mjs'
export { onRequest } from '../_empty-middleware.mjs'

const page = () => import('./pages/image-endpoint_a240ce1b.mjs').then(n => n.i)

export { page }
