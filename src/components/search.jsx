import FeedArticle from './feed-article'
import { useEffect, useMemo, useState } from 'react'

const Fuse = (await import('fuse.js/dist/fuse.basic.js')).default

const SEARCH_OPTIONS = {
  keys: ['title', 'body', 'external_url', 'tags'],
  includeScore: true,
  threshold: 0.25,
}

const cx = {
  div: 'mb-8',
  label: 'hidden',
  input:
    'appearance-none focus:outline-none bg-transparent border border-cerulean-700 rounded-md px-3 py-2 focus:ring-2 ring-offset-2 ring-sky-300 w-full',
  p: 'mb-8 italic',
}

const Search = () => {
  const [query, setQuery] = useState('')
  const [db, setDb] = useState(false)
  const fuse = useMemo(() => new Fuse(db, SEARCH_OPTIONS), [db])
  const results = useMemo(() => fuse.search(query), [fuse, query])

  useEffect(() => {
    if (!db) {
      fetch('/feed.json')
        .then((res) => res.json())
        .then((d) =>
          setDb(
            d.items.map((item) => ({
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
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {showNoResults && <p className={cx.p}>No results</p>}
      {showResults &&
        results.map(({ item }) => <FeedArticle key={item.id} {...item} />)}
    </>
  )
}

export default Search
