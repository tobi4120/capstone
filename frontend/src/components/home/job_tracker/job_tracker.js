import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts';
import { getJobsAppliedTo } from "../../../api/job_postings";
import Loader from "../loader";

export default function JobTracker(props) {
    const user = useContext(UserContext);
    const [jobsAppledTo, setJobsAppliedTo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await getJobsAppliedTo();
        
        if (response.status && response.status === 200) {

            // Get only the jobs that the current user has applied to
            const data = response.data.filter(x => x.id !== user.id)
            console.log(data);
        } else {
            setError(true);
            console.log(response)
        }

        setLoading(false);
    }

    if (loading) return <Loader />

    if (error) return <div>Error: Data could not be loaded. Please refresh the page and try again.</div>

    return (
        <div>
            Job Tracker for {user.first_name}
        </div>
    )
}
