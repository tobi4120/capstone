import React, { useContext } from "react";
import { UserContext } from "../../../contexts";

const JobPostings = (props) => {
    const user = useContext(UserContext);

    return (
        <div>
            Job Postings
        </div>
    )
}
export default JobPostings