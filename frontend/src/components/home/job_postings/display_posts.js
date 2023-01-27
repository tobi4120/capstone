import React, { useEffect, useState } from 'react'
import { getPosts } from '../../../api/job_postings'
import Loader from "../loader";
import Post from './post';

export default function DisplayPosts(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [jobPosts, setJobPosts] = useState();

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await getPosts();

        if (response.status && response.status === 200) {
            setJobPosts(response.data);
        } else {
            setError(true);
        }

        setLoading(false);
    }

    if (loading) return <Loader />

    if (error) return <div>Failed to load job posts. Please refresh the page and try again.</div>

    return (
        <div>
            {jobPosts.map(post => {
                return <Post key={post.job_id} post={post} />
            })}
        </div>
    )
}
