import React from 'react'

export default function Filter(props) {
    return (
        <div>
            <h3>Filters</h3>

            <form onChange={props.handleFilterChange}>

                {/* Date posted */}
                <h4>Date posted</h4>
                <label>
                    <input
                        type="radio"
                        name="datePosted"
                        value="all"
                        checked={props.filters.datePosted === "all"}
                        className="form-radio-input" />
                    All
                </label>

                <label>
                    <input
                        type="radio"
                        name="datePosted"
                        value="today"
                        checked={props.filters.datePosted === "today"}
                        className="form-radio-input" />
                    Today
                </label>

                <label>
                    <input
                        type="radio"
                        name="datePosted"
                        value="week"
                        checked={props.filters.datePosted === "week"}
                        className="form-radio-input" />
                    Past week
                </label>

                <label>
                    <input
                        type="radio"
                        name="datePosted"
                        value="month"
                        checked={props.filters.datePosted === "month"}
                        className="form-radio-input" />
                    Past month
                </label>

                {/* Remote jobs only */}
                <h4>Remote</h4>
                <label>
                    <input
                        type="radio"
                        name="remoteJobsOnly"
                        value={false}
                        checked={props.filters.remoteJobsOnly == "false"}
                        className="form-radio-input" />
                    All jobs
                </label>

                <label>
                    <input
                        type="radio"
                        name="remoteJobsOnly"
                        value={true}
                        checked={props.filters.remoteJobsOnly == "true"}
                        className="form-radio-input" />
                    Remote only
                </label>

                 {/* Employment type */}
                 <h4>Employment Type</h4>
                <label>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="FULLTIME"
                        checked={props.filters.employmentType.includes("FULLTIME")}
                        className="form-checkbox-input" />
                    Full-time
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="CONTRACTOR"
                        checked={props.filters.employmentType.includes("CONTRACTOR")}
                        className="form-checkbox-input" />
                    Contract
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="PARTTIME"
                        checked={props.filters.employmentType.includes("PARTTIME")}
                        className="form-checkbox-input" />
                    Part-time
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="INTERN"
                        checked={props.filters.employmentType.includes("INTERN")}
                        className="form-checkbox-input" />
                    Internship
                </label>

                {/* Job Requirements */}
                <h4>Job Requirements</h4>
                <label>
                    <input
                        type="checkbox"
                        name="jobRequirements"
                        value="under_3_years_experience"
                        checked={props.filters.jobRequirements.includes("under_3_years_experience")}
                        className="form-checkbox-input" />
                    Under 3 years experience
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobRequirements"
                        value="more_than_3_years_experience"
                        checked={props.filters.jobRequirements.includes("more_than_3_years_experience")}
                        className="form-checkbox-input" />
                    3+ years experience
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobRequirements"
                        value="no_experience"
                        checked={props.filters.jobRequirements.includes("no_experience")}
                        className="form-checkbox-input" />
                    No experience
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobRequirements"
                        value="no_degree"
                        checked={props.filters.jobRequirements.includes("no_degree")}
                        className="form-checkbox-input" />
                    No degree
                </label>

                {/* Job Function */}
                <h4>Job Function</h4>
                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MwODpDb21wdXRlcklU"
                        checked={props.filters.jobFunction.includes("R0MwODpDb21wdXRlcklU")}
                        className="form-checkbox-input" />
                    Computer & IT
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MyNzpTY2llbmNlRW5naW5lZXJpbmc="
                        checked={props.filters.jobFunction.includes("R0MyNzpTY2llbmNlRW5naW5lZXJpbmc=")}
                        className="form-checkbox-input" />
                    Science & Engineering
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MwMzpBZHZlcnRpc2luZ01hcmtldGluZw=="
                        checked={props.filters.jobFunction.includes("R0MwMzpBZHZlcnRpc2luZ01hcmtldGluZw==")}
                        className="form-checkbox-input" />
                    Advertising & Marketing
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MxODpNYW5hZ2VtZW50"
                        checked={props.filters.jobFunction.includes("R0MxODpNYW5hZ2VtZW50")}
                        className="form-checkbox-input" />
                    Management
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MyNjpTYWxlc1JldGFpbA=="
                        checked={props.filters.jobFunction.includes("R0MyNjpTYWxlc1JldGFpbA==")}
                        className="form-checkbox-input" />
                    Sales & Retail
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MwNTpBcnRGYXNoaW9uRGVzaWdu"
                        checked={props.filters.jobFunction.includes("R0MwNTpBcnRGYXNoaW9uRGVzaWdu")}
                        className="form-checkbox-input" />
                    Art, Fashion & Design
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MwMTpBY2NvdW50aW5nRmluYW5jZQ=="
                        checked={props.filters.jobFunction.includes("R0MwMTpBY2NvdW50aW5nRmluYW5jZQ==")}
                        className="form-checkbox-input" />
                    Accounting & Finance
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="jobFunction"
                        value="R0MyNTpSZXN0YXVyYW50SG9zcGl0YWxpdHk="
                        checked={props.filters.jobFunction.includes("R0MyNTpSZXN0YXVyYW50SG9zcGl0YWxpdHk=")}
                        className="form-checkbox-input" />
                    Restaurant & Hospitality
                </label>

                {/* Industry */}
                <h4>Industry</h4>
                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy81MjpGaW5hbmNl"
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81MjpGaW5hbmNl")}
                        className="form-checkbox-input" />
                    Financial Services
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy8zMTpNYW51ZmFjdHVyaW5n"
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy8zMTpNYW51ZmFjdHVyaW5n")}
                        className="form-checkbox-input" />
                    Manufacturing
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy81MTpJbmZvcm1hdGlvbg=="
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81MTpJbmZvcm1hdGlvbg==")}
                        className="form-checkbox-input" />
                    Technology, Information and Internet
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy81NDE2OkNvbnN1bHRpbmc="
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81NDE2OkNvbnN1bHRpbmc=")}
                        className="form-checkbox-input" />
                    Consulting
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy81NDEzOkVuZ2luZWVyaW5nIFNlcnZpY2Vz"
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy81NDEzOkVuZ2luZWVyaW5nIFNlcnZpY2Vz")}
                        className="form-checkbox-input" />
                    Engineering Services
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy8yMzpDb25zdHJ1Y3Rpb24="
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy8yMzpDb25zdHJ1Y3Rpb24=")}
                        className="form-checkbox-input" />
                    Construction
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy82MTpFZHVjYXRpb24="
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy82MTpFZHVjYXRpb24=")}
                        className="form-checkbox-input" />
                    Education
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy83MTpFbnRlcnRhaW5tZW50"
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy83MTpFbnRlcnRhaW5tZW50")}
                        className="form-checkbox-input" />
                    Entertainment
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="industry"
                        value="L2J1c2luZXNzL25haWNzMjAwNy82MjpIZWFsdGggQ2FyZQ=="
                        checked={props.filters.industry.includes("L2J1c2luZXNzL25haWNzMjAwNy82MjpIZWFsdGggQ2FyZQ==")}
                        className="form-checkbox-input" />
                    Health Care
                </label>
            </form>            
        </div>
    )
}
