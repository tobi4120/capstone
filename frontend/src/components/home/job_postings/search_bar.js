import React from "react";

const SearchBar = (props) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search by title, company or any jobs keyword..."
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)} />
            <button>Find</button>
        </div>
    )
}
export default SearchBar;