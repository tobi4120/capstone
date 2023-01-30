import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts";
import SearchBar from "./search_bar";
import DisplayPosts from "./display_posts";
import '../../../styles/job_posts.css';
import Filter from "./filter";

const JobPostings = (props) => {
    const user = useContext(UserContext);
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
        <div>
            <h3>Job Postings</h3>
            <SearchBar
                query={query}
                setQuery={setQuery}
                searchForJob={searchForJob}
                setSearchForJob={setSearchForJob} />
            <Filter
                filters={filters} 
                handleFilterChange={handleFilterChange}  />
            <DisplayPosts
                query={query}
                filters={filters}
                searchForJob={searchForJob}
                setSearchForJob={setSearchForJob} />
        </div>
    )
}
export default JobPostings