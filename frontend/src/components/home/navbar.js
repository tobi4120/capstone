import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts';
import { delete_token_fromDB } from "../../api/auth";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname)

    const logout = async () => {
        delete_token_fromDB();
        localStorage.removeItem('token');
        navigate("/login"); 
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">JOBITE</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname === "/job-postings"? "active" : ""}`} aria-current="page" href="/job-postings">Job Postings</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname === "/job-tracker"? "active" : ""}`} href="/job-tracker">Job Tracker</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <p className='navbar-text'>Welcome, {user.first_name}</p>
                        <button style={{ "margin-left": "15px"}} className='btn btn-outline-light' onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
