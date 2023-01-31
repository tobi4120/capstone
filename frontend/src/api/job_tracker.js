import axios from 'axios';

const backend_url = process.env.REACT_APP_BACKEND_URL

export const recivedInterview = async (post, checkedInterview) => {
    console.log(checkedInterview)
    let response = "";

    try {
        response = await axios.patch(`${backend_url}/jobs-applied-to/${post.id}/`, {
            receivedInterview: !checkedInterview
        });
    } catch (err) {
        response = err.response
    }
    
    return response;
}

export const recievedOffer = async (post, checkedOffer) => {
    console.log(checkedOffer)
    let response = "";

    try {
        response = await axios.patch(`${backend_url}/jobs-applied-to/${post.id}/`, {
            receivedOffer: !checkedOffer
        });
    } catch (err) {
        response = err.response
    }
    
    return response;
}

export const deleteJob = async (post) => {
    
    let response = "";

    try {
        response = await axios.delete(`${backend_url}/jobs-applied-to/${post.id}/`, {
            
        });
    } catch (err) {
        response = err.response
    }
    
    return response;
}