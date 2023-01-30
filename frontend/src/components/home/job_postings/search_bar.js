import React from "react";
import "../../../styles/search_bar.css";

const SearchBar = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setSearchForJob(true);
    }

    return (
        <form className="search-job" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search by title, company or any jobs keyword..."
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
                required
                className="search-bar" />
            <input 
                type="submit"
                value="Find" />
        </form>
    )
}
export default SearchBar;