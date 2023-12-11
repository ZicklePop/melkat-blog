import map from 'lodash/map'
import uFuzzy from '@leeoniya/ufuzzy'
import { pageSize } from '../consts/config'
import type { CollectionEntry } from 'astro:content'

type EntryProp = CollectionEntry<'posts'>

const uf = new uFuzzy()
const getSearchableDb = (db: Array<EntryProp>) =>
  map(
    db,
    ({ body = '', data: { title, tags, link } }) =>
      `${title} ${body} ${link} ${tags.join(' ')}`
  )

export default function fuzzySearch(q?: string, entries?: Array<EntryProp>) {
  if (!q || !entries) {
    return []
  }
  const stringDb = getSearchableDb(entries)
  const idxs = uf.filter(stringDb, q)
  const info = idxs && uf.info(idxs, stringDb, q)
  const order = info && uf.sort(info, stringDb, q)
  return map(order, i => {
    const idx = idxs && idxs[i]
    if (idx) {
      return entries[idx]
    }
  }).slice(0, pageSize * 2)
}
