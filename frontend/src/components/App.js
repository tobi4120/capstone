import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./auth/login";
import Register from "./auth/register";
import Home from "./home/home";

// https://dribbble.com/shots/19880852-Jobite-Freelancing-Marketplace

function App() {
    return (
        <Router>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </Router>
    )
}
export default App;