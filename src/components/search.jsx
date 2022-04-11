import { useState, useEffect } from 'react'
import Fuse from 'fuse.js/dist/fuse.basic'

const SEARCH_OPTIONS = {
  keys: ['title', 'content_html', 'external_url', 'tags'],
  includeScore: true,
}

const cx = {
  form: 'mb-8',
  label: 'hidden',
  input:
    'appearance-none outline-none bg-transparent border border-r-0 border-blue-700 rounded-l-md px-3 py-2 focus:ring-2 ring-blue-700',
  button:
    'appearance-none outline-none border border-blue-700 bg-blue-700 hover:bg-blue-600 focus:bg-blue-800 font-semibold white px-3 py-2 rounded-r-md focus:ring-2 ring-blue-700',
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
      const result = fuse
        .search(query)
        .filter((o) => o.score < 0.1)
        .sort((a, b) => b.score - a.score)
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
      <form className={cx.form} onSubmit={handleSubmit}>
        <label className={cx.label} htmlFor="search">
          Search
        </label>
        <input
          className={cx.input}
          type="search"
          id="search"
          name="q"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={cx.button} type="submit">
          Search
        </button>
      </form>
      {showNoResults && <p>No results</p>}
      {showResults &&
        results.map((result) => (
          <pre key={result.item.id}>{JSON.stringify(result, null, 2)}</pre>
        ))}
    </>
  )
}

export default Search
