import React, { useEffect, useState } from 'react';
import { create_account, delete_token_fromDB } from "../../api/auth";
import { useNavigate } from 'react-router-dom';

export default function Regiser() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            delete_token_fromDB();
            localStorage.removeItem('token');
        }
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (formData.password !== formData.passwordConfirm) {
            alert("Passwords do not match!")
            return
        }

        // Call API to verify credentials
        const response = await create_account(formData);

        if (response.status && response.status === 200) { 
            // Put token in local storage
            localStorage.setItem('token', response.data.token)

            // Redirect to home page
            navigate("/");
        } else {
            if (response.data.email.length > 0) {
                alert("A user with this email already exists")
            }
        }
    }   

    return (
        <div>
            <h1>Register</h1>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    required />

                <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    required />      
                        
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    required />

                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    required />

                <input 
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    value={formData.passwordConfirm}
                    required />

                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    )
}