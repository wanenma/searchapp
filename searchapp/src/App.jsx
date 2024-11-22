import React ,{useState} from 'react'
import './App.css'
import Searchbar from './components/searchbar'
import SearchResultList from './components/searchResultList'

const App = () => {
  const [results , setResult] = useState([]);
  return (
    <div className="app">
      <div className="container">
        <Searchbar setResults={setResult}/>
        <SearchResultList results = {results} />
      </div>
    </div>
  )
}

export default App

