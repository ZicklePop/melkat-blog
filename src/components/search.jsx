const cx = {
  form: 'mb-8',
  label: 'hidden',
  input: 'appearance-none border-2 border-cerulean-700 rounded-md px-3 py-2',
  button: 'bg-cerulean-700 hover:bg-cerulean-600 focus:bg-cerulean-800 font-semibold white px-5 py-2.5 rounded-md',
}

const Search = () => {

  return (
    <form className={cx.form}>
      <label className={cx.label} htmlFor='search'>
        Search
      </label>
      <input
        className={cx.input}
        type='search'
        id='search'
        name='search'
        placeholder='Search'
      />
      <button className={cx.button} type='submit'>
        Search
      </button>
    </form>
  )
}

export default Search
