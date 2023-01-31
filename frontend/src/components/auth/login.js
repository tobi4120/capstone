import React, { useState, useEffect } from 'react';
import { verify_login, delete_token_fromDB } from "../../api/auth";
import { useNavigate } from 'react-router-dom';
import AuthNavbar from './auth_navbar';
import "../../styles/auth.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            delete_token_fromDB();
            localStorage.removeItem('token');
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call API to verify credentials
        const response = await verify_login(email, password);

        if (response.status && response.status === 200) { 
            // Put token in local storage
            localStorage.setItem('token', response.data.token)

            // Redirect to home page
            navigate("/");
        } else {
            alert("Incorrect credentials!")
            setEmail("");
            setPassword("");
        }
    }   

    return (
        <div>
            <AuthNavbar />
            <div className='auth'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className='auth-form'>
                    <input 
                        type="email" 
                        className='auth-input form-control'
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required />

                    <input 
                        type="password" 
                        className='auth-input form-control'
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        required />

                    <input className="btn btn-primary" type="submit" value="Login" />
                </form>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    )
}