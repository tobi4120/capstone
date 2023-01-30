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
            } else {
                setError(true);
            }

            props.setSearchForJob(false);
        }
        setLoading(false);
    }

    if (loading) return <Loader />

    if (error) return <div>Failed to load job posts. Please refresh the page and try again.</div>

    if (jobPosts.length === 0) return <div>No postings shown. Search for a job posting above!</div>

    return (
        <div>
            {jobPosts.map(post => {
                return <Post key={post.job_id} post={post} />
            })}
        </div>
    )
}
