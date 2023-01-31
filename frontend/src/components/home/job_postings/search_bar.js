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
                placeholder="Search for a job (ex. software developer in chicago or marketing manager in new york via linkedin)"
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
                required
                className="search-bar form-control" />
            <input 
                type="submit"
                value="Find"
                className="btn btn-primary" />
        </form>
    )
}
export default SearchBar;