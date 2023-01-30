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