import React, { useEffect, useState } from 'react'
import { getPosts } from '../../../api/job_postings'
import Loader from "../loader";
import Post from './post';

export default function DisplayPosts(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [jobPosts, setJobPosts] = useState([]);

    useEffect(() => {
        loadData();
    }, [props.searchForJob])

    const loadData = async () => {
        setLoading(true);
        if (props.searchForJob) {
            const response = await getPosts(props.query, props.filters);
            
            if (response.status && response.status === 200) {
                setJobPosts(response.data);
                console.log(response.data)
            } else {
                setError(true);
            }

            props.setSearchForJob(false);
        }
        setLoading(false);
    }

    if (loading) return <div className='posts'><Loader /></div>

    if (error) return <div className='posts'>Failed to load job posts. Please refresh the page and try again.</div>

    if (jobPosts.length === 0) return <div className='posts'>
        No postings shown. Search for a job posting above!
        If you've already searched for a job and don't see any results, try a different query.
    </div>

    return (
        <div className='posts'>
            <div className='posts-data'>
                {jobPosts.map(post => {
                    return <Post 
                                key={post.job_id}
                                post={post}
                                jobsRecentlyAppliedTo={props.jobsRecentlyAppliedTo}
                                setjobsRecentlyAppliedTo={props.setjobsRecentlyAppliedTo} />
                })}
            </div>
        </div>
    )
}
