import axios from 'axios';

const backend_url = process.env.REACT_APP_BACKEND_URL

export const getPosts = async (query, filters) => {
    let response = "";

    try {
        response = await axios.get(`${backend_url}/job-posts`);
    } catch (err) {
        response = err.response
    }
    
    return response;
}