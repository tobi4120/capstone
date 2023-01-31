import React, { useState } from "react";
import SearchBar from "./search_bar";
import DisplayPosts from "./display_posts";
import '../../../styles/job_posts.css';
import Filter from "./filter";

const JobPostings = (props) => {
    const [filters, setFilters] = useState({
        datePosted: "all",
        remoteJobsOnly: false,
        employmentType: [],
        jobRequirements: [],
        jobFunction: [],
        industry: []
    })
    const [query, setQuery] = useState("");
    const [searchForJob, setSearchForJob] = useState(false);

    const handleFilterChange = (e) => {
        if (e.target.name === "datePosted" || e.target.name === "remoteJobsOnly") {
            setFilters({ ...filters, [e.target.name]: e.target.value })
            return
        }

        if (e.target.checked) {
            setFilters({ ...filters, [e.target.name]: [...filters[e.target.name], e.target.value]})
        } else {
            const array = filters[e.target.name].filter(x => x !== e.target.value)
            setFilters({ ...filters, [e.target.name]: array })
        }
    }   

    return (
        <div className="job_postings_page">
            <div className="filter">
                <Filter
                    filters={filters} 
                    handleFilterChange={handleFilterChange}
                    query={query}
                    searchForJob={searchForJob}
                    setSearchForJob={setSearchForJob} />
            </div>

            <div className="search_and_display_jobs">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    searchForJob={searchForJob}
                    setSearchForJob={setSearchForJob} />
                <DisplayPosts
                    query={query}
                    filters={filters}
                    searchForJob={searchForJob}
                    setSearchForJob={setSearchForJob} />
            </div>
        </div>
    )
}
export default JobPostings