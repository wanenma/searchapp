import React from "react";
import "./searchResult.css";

const SearchResult = ({ result }) => {
	return (
		<div className="searchResult"
			onClick={(e) => {alert(`you clicked on ${result.name}`)}} >
			{result.name}
		</div>
	);
};

export default SearchResult;
