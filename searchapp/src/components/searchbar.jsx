import React, { useState } from 'react';
import './searchbar.css';
import { FaSearch } from 'react-icons/fa';


const Searchbar = ({setResults}) => {
    const [input , setInput] = useState('');

/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Fetches data from the API and filters it by the input value
     * @param {string} value the input value to filter by
     */
/******  a19e4514-386b-4e49-8134-6b6bff7af893  *******/
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
        .then(json => {
            const results = json.filter((user) => {
                return  value && user.name.toLowerCase().includes(value.toLowerCase())
            });
             setResults(results);   
            }) ;
    }
    const HandleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
  return (
    <div className="inputWrapper">
        <FaSearch id="search-icon"/>
        <input placeholder="Search" value={input} onChange ={(e) => HandleChange(e.target.value)} />   
      
    </div>
  )
}

export default Searchbar
