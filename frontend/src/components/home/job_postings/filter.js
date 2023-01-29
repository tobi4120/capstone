import React, { useState } from 'react'

export default function Filter() {
    const [datePosted, setDatePosted] = useState("all");
    const [remoteJobsOnly, setRemoteJobsOnly] = useState(false);
    const [employmentType, setEmploymentType] = useState([]);
    const [jobRequirements, setJobRequirements] = useState([]);
    const [jobFunction, setJobFunction] = useState([]);
    const [industry, setIndustry] = useState([]);

    const handleDatePostedChange = (e) => {
        setDatePosted(e.target.name);
    }

    const handleRemoteChange = (e) => {
        setRemoteJobsOnly(e.target.name !== "all-jobs");
    }

    const handleEmploymentTypeChange = (e) => {
        if (e.target.checked) {
            setEmploymentType([...employmentType, e.target.name])
        } else {
            setEmploymentType(current =>
                current.filter(type => type !== e.target.name))
        }
    }

    const handleJobRequirementsChange = (e) => {
        if (e.target.checked) {
            setJobRequirements([...jobRequirements, e.target.name])
        } else {
            setJobRequirements(current =>
                current.filter(req => req !== e.target.name))
        }
    }

    const handleJobFunctionChange = (e) => {
        if (e.target.checked) {
            setJobFunction([...jobFunction, e.target.name])
        } else {
            setJobFunction(current =>
                current.filter(func => func !== e.target.name))
        }
    }

    const handleIndustryChange = (e) => {
        if (e.target.checked) {
            setIndustry([...industry, e.target.name])
        } else {
            setIndustry(current =>
                current.filter(industry => industry !== e.target.name))
        }
    }

    return (
        <div>
            <h3>Filters</h3>

            {/* Date posted */}
            <form onChange={handleDatePostedChange}>
                <h4>Date posted</h4>
                <label>
                    <input
                        type="radio"
                        name="all"
                        checked={datePosted === "all"}
                        className="form-radio-input" />
                    All
                </label>

                <label>
                    <input
                        type="radio"
                        name="today"
                        checked={datePosted === "today"}
                        className="form-radio-input" />
                    Today
                </label>

                <label>
                    <input
                        type="radio"
                        name="week"
                        checked={datePosted === "week"}
                        className="form-radio-input" />
                    Past week
                </label>

                <label>
                    <input
                        type="radio"
                        name="month"
                        checked={datePosted === "month"}
                        className="form-radio-input" />
                    Past month
                </label>
            </form>

            {/* Remote jobs only */}
            <form onChange={handleRemoteChange}>
                <h4>Remote</h4>
                <label>
                    <input
                        type="radio"
                        name="all-jobs"
                        checked={!remoteJobsOnly}
                        className="form-radio-input" />
                    All jobs
                </label>

                <label>
                    <input
                        type="radio"
                        name="remote-only"
                        checked={remoteJobsOnly}
                        className="form-radio-input" />
                    Remote only
                </label>
            </form>

            {/* Employment type */}
            <form onChange={handleEmploymentTypeChange}>
                <h4>Employment Type</h4>
                <label>
                    <input
                        type="checkbox"
                        name="FULLTIME"
                        checked={employmentType.includes("FULLTIME")}
                        className="form-checkbox-input" />
                    Full-time
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="CONTRACTOR"
                        checked={employmentType.includes("CONTRACTOR")}
                        className="form-checkbox-input" />
                    Contract
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="PARTTIME"
                        checked={employmentType.includes("PARTTIME")}
                        className="form-checkbox-input" />
                    Part-time
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="INTERN"
                        checked={employmentType.includes("INTERN")}
                        className="form-checkbox-input" />
                    Internship
                </label>
            </form>

            {/* Job Requirements */}
            <form onChange={handleJobRequirementsChange}>
                <h4>Job Requirements</h4>
                <label>
                    <input
                        type="checkbox"
                        name="under_3_years_experience"
                        checked={jobRequirements.includes("under_3_years_experience")}
                        className="form-checkbox-input" />
                    Under 3 years experience
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="more_than_3_years_experience"
                        checked={jobRequirements.includes("more_than_3_years_experience")}
                        className="form-checkbox-input" />
                    3+ years experience
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="no_experience"
                        checked={jobRequirements.includes("no_experience")}
                        className="form-checkbox-input" />
                    No experience
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="no_degree"
                        checked={jobRequirements.includes("no_degree")}
                        className="form-checkbox-input" />
                    No degree
                </label>
            </form>

            {/* Job Function */}
            <form onChange={handleJobFunctionChange}>
                <h4>Job Function</h4>
                <label>
                    <input
                        type="checkbox"
                        name="R0MwODpDb21wdXRlcklU"
                        checked={jobFunction.includes("R0MwODpDb21wdXRlcklU")}
                        className="form-checkbox-input" />
                    Computer & IT
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="R0MyNzpTY2llbmNlRW5naW5lZXJpbmc="
                        checked={jobFunction.includes("R0MyNzpTY2llbmNlRW5naW5lZXJpbmc=")}
                        className="form-checkbox-input" />
                    Science & Engineering
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="R0MwMzpBZHZlcnRpc2luZ01hcmtldGluZw=="
                        checked={jobFunction.includes("R0MwMzpBZHZlcnRpc2luZ01hcmtldGluZw==")}
                        className="form-checkbox-input" />
                    Advertising & Marketing
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="R0MxODpNYW5hZ2VtZW50"
                        checked={jobFunction.includes("R0MxODpNYW5hZ2VtZW50")}
                        className="form-checkbox-input" />
                    Management
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="R0MyNjpTYWxlc1JldGFpbA=="
                        checked={jobFunction.includes("R0MyNjpTYWxlc1JldGFpbA==")}
                        className="form-checkbox-input" />
                    Sales & Retail
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="R0MwNTpBcnRGYXNoaW9uRGVzaWdu"
                        checked={jobFunction.includes("R0MwNTpBcnRGYXNoaW9uRGVzaWdu")}
                        className="form-checkbox-input" />
                    Art, Fashion & Design
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="R0MwMTpBY2NvdW50aW5nRmluYW5jZQ=="
                        checked={jobFunction.includes("R0MwMTpBY2NvdW50aW5nRmluYW5jZQ==")}
                        className="form-checkbox-input" />
                    Accounting & Finance
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="R0MyNTpSZXN0YXVyYW50SG9zcGl0YWxpdHk="
                        checked={jobFunction.includes("R0MyNTpSZXN0YXVyYW50SG9zcGl0YWxpdHk=")}
                        className="form-checkbox-input" />
                    Restaurant & Hospitality
                </label>
            </form>

            {/* Industry */}
            <form onChange={handleIndustryChange}>
                <h4>Industry</h4>
                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy81MjpGaW5hbmNl"
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81MjpGaW5hbmNl")}
                        className="form-checkbox-input" />
                    Financial Services
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy8zMTpNYW51ZmFjdHVyaW5n"
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy8zMTpNYW51ZmFjdHVyaW5n")}
                        className="form-checkbox-input" />
                    Manufacturing
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy81MTpJbmZvcm1hdGlvbg=="
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81MTpJbmZvcm1hdGlvbg==")}
                        className="form-checkbox-input" />
                    Technology, Information and Internet
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy81NDE2OkNvbnN1bHRpbmc="
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81NDE2OkNvbnN1bHRpbmc=")}
                        className="form-checkbox-input" />
                    Consulting
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy81NDEzOkVuZ2luZWVyaW5nIFNlcnZpY2Vz"
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81NDEzOkVuZ2luZWVyaW5nIFNlcnZpY2Vz")}
                        className="form-checkbox-input" />
                    Engineering Services
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy8yMzpDb25zdHJ1Y3Rpb24="
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy8yMzpDb25zdHJ1Y3Rpb24=")}
                        className="form-checkbox-input" />
                    Construction
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy82MTpFZHVjYXRpb24="
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy82MTpFZHVjYXRpb24=")}
                        className="form-checkbox-input" />
                    Education
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy83MTpFbnRlcnRhaW5tZW50"
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy83MTpFbnRlcnRhaW5tZW50")}
                        className="form-checkbox-input" />
                    Entertainment
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="L2J1c2luZXNzL25haWNzMjAwNy82MjpIZWFsdGggQ2FyZQ=="
                        checked={industry.includes("L2J1c2luZXNzL25haWNzMjAwNy82MjpIZWFsdGggQ2FyZQ==")}
                        className="form-checkbox-input" />
                    Health Care
                </label>
            </form>
            
        </div>
    )
}
