import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { verify_token, delete_token_fromDB } from '../../api/auth';
import Loader from './loader';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts';
import "../../styles/home.css";

export default function Home() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        loadUserData();
        
        if (location.pathname === "/")
            navigate("/job-postings"); 
    }, [])

    const loadUserData = async () => {
        // Check token in local storage
        const response = await verify_token();
        
        if (response.status && response.status === 200) {
            setUser(response.data);
            setLoading(false);
        } else {
            // Redirect back to login if invalid token
            navigate("/login"); 
        }
    }

    const logout = async () => {
        delete_token_fromDB();
        localStorage.removeItem('token');
        navigate("/login"); 
    }

    if (loading) return <Loader />

    return (
        <UserContext.Provider value={user}>
            Welcome, {user.first_name}
            <button onClick={logout}>Logout</button>
            <Outlet />
        </UserContext.Provider>
    )
}