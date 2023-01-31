import React, { useContext, useEffect, useState, Checkbox } from 'react';
import { UserContext } from '../../../contexts';
import { getJobsAppliedTo } from "../../../api/job_postings";
import Loader from "../loader";
import Table_row from './table_row';

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
            console.log(user.id)

            // Get only the jobs that the current user has applied to
            const data = response.data.filter(x => x.user === user.id)
            console.log(data);
            setJobsAppliedTo(data)

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
            <table>
            <tr>
                <th>Logo</th>
                <th>Employer</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Source</th>
                <th>Interview Recieved</th>
                <th>Offer Recieved</th>
            </tr>

                {jobsAppledTo.map(job => {
                    return (
                        <Table_row job={job}/>
                    )
                })}
            </table>
        </div>
    )
}
