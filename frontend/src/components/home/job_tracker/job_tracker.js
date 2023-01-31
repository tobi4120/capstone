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
            <h3>&nbsp;&nbsp;Job Tracker for {user.first_name}</h3>

            <table class="table table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Logo</th>
                        <th scope="col">Employer</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Location</th>
                        <th scope="col">Source</th>
                        <th scope="col">Interview Recieved</th>
                        <th scope="col">Offer Recieved</th>
                        <th scope="col">Remove Job</th>
                    </tr>
                </thead>

                {jobsAppledTo.map(job => {
                    return (
                        <Table_row job={job}/>
                    )
                })}
            </table>

            <h3>&nbsp;&nbsp;Job Search Statistics for {user.first_name}</h3>

            
        </div>
    )
}
