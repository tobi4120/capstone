import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./auth/login";
import Register from "./auth/register";
import Home from "./home/home";
import JobPostings from './home/job_postings/job_postings';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />}>
                <Route path="/job-postings" element={<JobPostings />} />
            </Route>
        </Routes>
    </Router>
)
}

export default App;
