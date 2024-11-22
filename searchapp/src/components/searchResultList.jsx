import React from 'react'
import './searchResultList.css'

const SearchResultList = ({results}) => {
  return (
    <div className ="ResultList">
      {
        results.map((result,id) => {
          return( <div key={id}> {result.name}</div>)
        })
      }
  
    </div>
  )
}

export default SearchResultList
