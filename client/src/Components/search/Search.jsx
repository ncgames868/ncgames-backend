import React from 'react'
import { useState } from 'react'
import { SearchGamesContainer } from '../../AppGlobalStyles'

const Search = ({ setSearch }) => {

  const [visibility, setVisibility] = useState('hide')

  const handleVisibility = (e) => {
    let inputContain = e.target.value

    if (inputContain.length === 0) {
      setVisibility('hide')
    } else {
      setVisibility('')
    }
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  return (
    <SearchGamesContainer>
      <span>
        <label className='color-gray' htmlFor="search-id">Search Games</label>
        <input
          onBlur={handleVisibility}
          onFocus={handleVisibility}
          onChange={(e) => {
            searcher(e)
            handleVisibility(e)
          }}
          type="search"
          id="search-id"
          name="search"
          placeholder="Search"
        />
        <div className={`errase__button ${visibility}`}></div>
      </span>
    </SearchGamesContainer>
  )
}
export default Search