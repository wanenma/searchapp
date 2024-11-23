import React from 'react'
import './searchResultList.css'
import SearchResult from './searchResult.jsx'

const SearchResultList = ({results}) => {
  return (
    <div className ="ResultList">
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={result.id} />
        })
      }
  
    </div>
  )
}

export default SearchResultList
