import React, { useEffect, useState } from 'react';
import { create_account, delete_token_fromDB } from "../../api/auth";
import { useNavigate } from 'react-router-dom';
import AuthNavbar from './auth_navbar';

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
            <AuthNavbar />
            <div className='auth'>
                <h2>Register</h2>
                <form onChange={handleChange} onSubmit={handleSubmit} className='auth-form'>
                    <input 
                        type="text"
                        className='auth-input form-control' 
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        required />

                    <input 
                        type="text" 
                        className='auth-input form-control'
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        required />      
                            
                    <input 
                        type="email" 
                        className='auth-input form-control'
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        required />

                    <input 
                        type="password"
                        className='auth-input form-control'
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        required />

                    <input 
                        type="password"
                        className='auth-input form-control'
                        name="passwordConfirm"
                        placeholder="Confirm password"
                        value={formData.passwordConfirm}
                        required />

                    <input className='btn btn-primary' type="submit" value="Register" />
                </form>
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
    )
}