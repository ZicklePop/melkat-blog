import FeedArticle from './feed-article'
import map from 'lodash/map'
import uFuzzy from '@leeoniya/ufuzzy'
import { useEffect, useMemo, useState } from 'react'
import { pageSize } from '../consts/config'

const cx = {
  div: 'mb-8',
  label: 'hidden',
  input:
    'appearance-none focus:outline-none bg-transparent border border-cerulean-700 rounded-md px-3 py-2 focus:ring-2 ring-offset-2 ring-sky-300 w-full',
  p: 'mb-8 italic',
}

const uf = new uFuzzy()
const getSearchableDb = db =>
  map(
    db,
    ({ title = '', body = '', external_url = '', tags = [] }) =>
      `${title} ${body} ${external_url} ${tags.join(' ')}`
  )

const Search = () => {
  const [query, setQuery] = useState('')
  const [db, setDb] = useState(false)
  const results = useMemo(() => {
    const stringDb = getSearchableDb(db)
    const idxs = uf.filter(stringDb, query)
    const info = uf.info(idxs, stringDb, query)
    const order = uf.sort(info, stringDb, query)
    return map(order, i => {
      const idx = idxs[i]
      return db[idx]
    }).slice(0, pageSize * 2)
  }, [query])

  useEffect(() => {
    if (!db) {
      fetch('/feed.json')
        .then(res => res.json())
        .then(d =>
          setDb(
            d.items.map(item => ({
              ...item,
              body: item.content_html
                .replace(/<\/?[^>]+(>|$)/gm, '')
                .split(' '),
            }))
          )
        )
    }
  }, [db, setDb])

  const showResults = query.length > 0 && results.length > 0
  const showNoResults = results.length < 1 && query.length > 0

  return (
    <>
      <div className={cx.div}>
        <label className={cx.label} htmlFor="search">
          Search
        </label>
        <input
          className={cx.input}
          type="search"
          id="search"
          name="q"
          placeholder="Type to search"
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {showNoResults && <p className={cx.p}>No results</p>}
      {showResults &&
        map(results, ({ id, ...rest }) => <FeedArticle key={id} {...rest} />)}
    </>
  )
}

export default Search
