import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { verify_token } from '../../api/auth';
import Loader from './loader';
import { UserContext } from '../../contexts';
import "../../styles/home.css";
import Navbar from './navbar';
import JobPostings from './job_postings';
import JobTracker from './job_tracker/job_tracker';

export default function Home() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [showJobPostings, setShowJobPostings] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const [jobsRecentlyAppliedTo, setjobsRecentlyAppliedTo] = useState([]);

    useEffect(() => {
        loadUserData();
        
        if (location.pathname === "/")
            navigate("/job-postings"); 
        else if (location.pathname === "/job-postings") 
            setShowJobPostings(true)
        else if (location.pathname === "/job-tracker")
            setShowJobPostings(false)
    }, [location])

    const loadUserData = async () => {
        // Check token in local storage
        const response = await verify_token();
        
        if (response.status && response.status === 200) {
            setUser(response.data);
            setLoading(false);
        } else {
            // Redirect back to login if invalid token
            navigate("/login"); 
        }
    }

    if (loading) return <Loader />

    return (
        <div className='home'>
            <UserContext.Provider value={user}>
                <Navbar />

                <div style={{ overflow: "hidden", display: showJobPostings? "flex": "none" }}>
                    <JobPostings
                        jobsRecentlyAppliedTo={jobsRecentlyAppliedTo}
                        setjobsRecentlyAppliedTo={setjobsRecentlyAppliedTo}
                     />
                </div>

                <div style={{ display: showJobPostings? "none": "block" }}>
                    <JobTracker
                        jobsRecentlyAppliedTo={jobsRecentlyAppliedTo}
                     />
                </div>

            </UserContext.Provider>
        </div>
    )
}