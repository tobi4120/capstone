import axios from 'axios';

const backend_url = process.env.REACT_APP_BACKEND_URL

export const verify_login = async (email, password) => {
    let response = "";
    try {
        response = await axios.post(`${backend_url}/loginAPI`, {
            email: email,
            password: password,
        })
    } catch(err) {
        response = err.response
    }
    return response;
}

export const verify_token = async () => {
    let response = "";
    try {
        response = await axios.get(`${backend_url}/userAPI`, {headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }})
    } catch(err) {
        response = err.response
    }
    return response;
}

export const create_account = async (user) => {
    let response = "";
    try {
        response = await axios.post(`${backend_url}/registerAPI`, {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password: user.password,
        })
    } catch (err) {
        response = err.response
    }
    return response;
}

export const delete_token_fromDB = async () => {
    try {
        await axios.post(`${backend_url}/logoutAPI`, {
        }, {headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }});
    } catch {}
}