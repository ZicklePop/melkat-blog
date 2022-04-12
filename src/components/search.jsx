import FeedArticle from './feed-article'
import Fuse from 'fuse.js/dist/fuse.basic'
import { useState, useEffect } from 'react'

const SEARCH_OPTIONS = {
  keys: ['title', 'content_html', 'external_url', 'tags'],
  includeScore: true,
}

const cx = {
  div: 'mb-8',
  label: 'hidden',
  input:
    'appearance-none outline-none bg-transparent border border-cerulean-700 rounded-md px-3 py-2 focus:ring-3 ring-cerulean-700',
  button:
    'appearance-none outline-none border border-cerulean-700 bg-cerulean-700 hover:bg-cerulean-600 focus:bg-cerulean-800 font-semibold white px-3 py-2 rounded-r-md focus:ring-2 ring-cerulean-700',
}

const Search = () => {
  const [query, setQuery] = useState('')
  const [db, setDb] = useState(false)
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!db) {
      fetch('/feed.json')
        .then((res) => res.json())
        .then((d) => setDb(d.items))
    }
  }, [db, setDb])

  useEffect(() => {
    if (!!query) {
      const fuse = new Fuse(db, SEARCH_OPTIONS)
      const result = fuse.search(query).filter((o) => o.score < 0.1)
      setResults(result)
    }
  }, [db, query, results, setResults])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
      {showNoResults && <p>No results</p>}
      {showResults &&
        results.map(({ item }) => <FeedArticle key={item.id} {...item} />)}
    </>
  )
}

export default Search
