import axios from 'axios';

const backend_url = process.env.REACT_APP_BACKEND_URL

export const getPosts = async (query, filters) => {
    let response = "";

    try {
        response = await axios.get(`${backend_url}/job-posts`, { params: { 
            query: query,
            date_posted: filters.datePosted,
            remote_jobs_only: filters.remoteJobsOnly,
            employment_types: filters.employmentType.toString(),
            job_requirements: filters.jobRequirements.toString(),
            categories: filters.jobFunction.toString(),
            company_types: filters.industry.toString()
        } });
    } catch (err) {
        response = err.response
    }
    
    return response;
}

export const markJob = async (post) => {
    let response = "";

    try {
        response = await axios.post(`${backend_url}/jobs-applied-to/`, { 
            posting_id: post.job_id,
            employer_logo: post.employer_logo,
            employer_name: post.employer_name,
            job_apply_link: post.job_apply_link,
            job_title: post.job_title
        });
    } catch (err) {
        response = err.response
    }
    
    return response;
}