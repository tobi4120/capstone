import axios from 'axios';
import { getCookie } from './cookie'
require("regenerator-runtime");

// Configure axios to accept the CSRF Token
const headers = {
    'X-CSRFToken': getCookie('csrftoken') || ""
}

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

const backend_url = process.env.REACT_APP_BACKEND_URL

export const verify_login = async (email, password) => {
    let response = "";
    try {
        response = await axios.post(`${backend_url}/loginAPI`, {
            email: email,
            password: password,
        }, { headers: headers })
    }
    catch(err) {
        response = err.response
    }
    return response;
}