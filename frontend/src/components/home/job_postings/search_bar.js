import React from "react";

const SearchBar = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setSearchForJob(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search by title, company or any jobs keyword..."
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
                required />
            <input 
                type="submit"
                value="Find" />
        </form>
    )
}
export default SearchBar;