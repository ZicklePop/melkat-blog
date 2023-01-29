import { byCount } from './sort'

export const countKeys = data =>
  Object.keys(data)
    .map(key => ({ key, count: data[key] }))
    .sort(byCount)

export default countKeys
