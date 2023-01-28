import React, { useContext } from "react";
import { UserContext } from "../../../contexts";
import SearchBar from "./search_bar";
import DisplayPosts from "./display_posts";
import '../../../styles/job_posts.css';

const JobPostings = (props) => {
    const user = useContext(UserContext);

    return (
        <div>
            <h3>Job Postings</h3>
            <SearchBar />
            <DisplayPosts />
        </div>
    )
}
export default JobPostings