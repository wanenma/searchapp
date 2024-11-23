import React, { useState } from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ setResults }) => {
	const [input, setInput] = useState("");
	const fetchData = (value) => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => {
				const results = json.filter((user) => {
					return value && user.name.toLowerCase().includes(value.toLowerCase());
				});
				setResults(results);
			});
	};
	const HandleChange = (value) => {
		setInput(value);
		fetchData(value);
	};
	return (
		<div className="inputWrapper">
			<FaSearch id="search-icon" />
			<input
				placeholder="Search"
				value={input}
				onChange={(e) => HandleChange(e.target.value)}
			/>
		</div>
	);
};

export default Searchbar;
