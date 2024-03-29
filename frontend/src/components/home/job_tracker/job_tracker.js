import React, { useContext, useEffect, useState, Checkbox } from 'react';
import { UserContext } from '../../../contexts';
import { getJobsAppliedTo } from "../../../api/job_postings";
import Loader from "../loader";
import Table_row from './table_row';

export default function JobTracker(props) {
    const user = useContext(UserContext);
    const [jobsAppledTo, setJobsAppliedTo] = useState([]);
    const [jobsInterview, setjobsInterview] = useState([]);
    const [jobsOffer, setjobsOffer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        loadData();
        countInterviews();
        countOffers();
    }, [props.jobsRecentlyAppliedTo, refresh])

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

    const countInterviews = async () => {
        const response = await getJobsAppliedTo()

        const data = response.data.filter(x => x.user === user.id)
        const interviews = data.filter(x => x.receivedInterview === true)
        console.log(interviews)
        setjobsInterview(interviews)
    }

    const countOffers = async () => {
        const response = await getJobsAppliedTo()

        const data = response.data.filter(x => x.user === user.id)
        const offers = data.filter(x => x.receivedOffer === true)
        console.log(offers)
        setjobsOffer(offers)
    }

    const updateInterviews = async (target) => {
        const index = jobsAppledTo.findIndex(x => x.id === parseInt(target.value))
        if (target.checked) {
            setjobsInterview([...jobsInterview, jobsAppledTo[index]])
        } else {
            setjobsInterview(jobsInterview.filter(x => x.id !== parseInt(target.value)))
        }
    }

    const updateOffers = async (target) => {
        const index = jobsAppledTo.findIndex(x => x.id === parseInt(target.value))
        if (target.checked) {
            setjobsOffer([...jobsOffer, jobsAppledTo[index]])
        } else {
            setjobsOffer(jobsOffer.filter(x => x.id !== parseInt(target.value)))
        }
    }

    if (loading) return <Loader />

    if (error) return <div>Error: Data could not be loaded. Please refresh the page and try again.</div>

    return (
        <div>
            <p>&nbsp;&nbsp;&nbsp;</p>

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
                        <Table_row 
                            job={job} 
                            updateInterviews={updateInterviews} 
                            updateOffers={updateOffers}
                            refresh={refresh}
                            setRefresh={setRefresh}/>
                    )
                })}
            </table>
            
            <p>&nbsp;&nbsp;&nbsp;</p>

            <h3>&nbsp;&nbsp;Job Search Statistics for {user.first_name}</h3>
            <h4>&nbsp;&nbsp;&nbsp;</h4>

            <table class="table table-hover text-center">
                <tr>Number of Job Applied To: {jobsAppledTo.length}</tr>
                <tr>Interview Conversion Rate: {jobsInterview.length} / {jobsAppledTo.length} = {Math.round((jobsInterview.length / jobsAppledTo.length) * 100)} %</tr>
                <tr>Offer Conversion Rate: {jobsOffer.length} / {jobsInterview.length} = {Math.round((jobsOffer.length / jobsInterview.length) * 100)} %</tr>
            </table>

        </div>
    )
}
