import React, { useState } from 'react';
import { verify_login } from "../../api/auth";
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email} />

                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password} />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}