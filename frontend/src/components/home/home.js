import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { verify_token } from '../../api/auth';
import Loader from './loader';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts';
import "../../styles/home.css";
import Navbar from './navbar';

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

    if (loading) return <Loader />

    return (
        <div className='home'>
            <UserContext.Provider value={user}>
                <Navbar />
                <Outlet />
            </UserContext.Provider>
        </div>
    )
}