import React, { useContext } from 'react'
import { UserContext } from "../../../contexts";
import { markJob } from "../../../api/job_postings";

export default function PostPopUp({ post }) {
    const user = useContext(UserContext);
    const getEducation = (education_obj) => {
        if (education_obj.professional_certification) return "Professional Certification"
        if (education_obj.high_school) return "High School"
        if (education_obj.associates_degree) return "Associates degree"
        if (education_obj.bachelors_degree) return "Bachelors degree"
        return null
    }

    const getYearOfExp = (months) => {
        const year = Math.floor(months/12);

        if (year === 0) return "Entry level"
        if (year === 1) return "1 year of experience"
        return `${year} years of experience`
    }

    const timePassed = (date) => {
        var currentDate = new Date();
        var inputDate = new Date(date);
        var timeDiff = Math.abs(currentDate.getTime() - inputDate.getTime());
        var dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); 
        var weekDiff = Math.floor(dayDiff / 7);
        var monthDiff = Math.floor(dayDiff / 30);

        if (monthDiff > 0) return `${monthDiff} month${monthDiff > 1? "s": ""} ago`
        if (weekDiff > 0) return `${weekDiff} week${weekDiff > 1? "s": ""} ago`
        if (dayDiff > 0) return `${dayDiff} day${dayDiff > 1? "s": ""} ago`
    }

    const findKeyWords = () => {
        let job_description = post.job_description;

        if (!post.job_highlights.Qualifications) return;

        for (const keyphrase of post.job_highlights.Qualifications) {
            const start = job_description.indexOf(keyphrase);
            const end = start + keyphrase.length;

            job_description = job_description.slice(0, start) + "<p class='keyphrase'>" + job_description.slice(start, end) + "</p>" + job_description.slice(end, job_description.length)
        }
        return job_description;
    }

    const markJobPostRequest = async () => {
        const response = await markJob(post, user);

        if (response.status && response.status === 201) {
            alert("Job successfully saved")
        } else if (response.data && response.data.job_id && response.data.job_id[0] === "jobs applied to with this job id already exists.") {
            alert("Error: Job has already been marked")
        } else {
            console.log(response)
            alert("Error: Job could not be saved")
        }
    }

    return (
        <div className="modal-dialog">
            <div className="modal-content">

                {/* Header */}
                <div className="modal-header">
                    <div className='basic-info' style={{ "display": "flex", "alignItems": "center" }}>
                        {post.employer_logo && <img className='modal-emplouer-logo' src={post.employer_logo} />}

                        <div>
                            <h3 className="modal-title fs-5" >{post.job_title}</h3>
                            <div className='modal-sub-header'>
                                <p>{post.employer_name}</p>
                                <span className='middle-dot'>&#183;</span>
                                <p>{post.job_city}, {post.job_state}, {post.job_country}</p>
                                <span className='middle-dot'>&#183;</span>
                                <p>{timePassed(post.job_posted_at_datetime_utc)}</p>
                            </div>
                        </div>
                        
                    </div>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    <div className='job_description'>

                        {/* Job Description */}
                        <h4 className='modal-body-header'>About the job</h4>
                        <div className='modal-body-desc modal-text' dangerouslySetInnerHTML={{__html: findKeyWords(post.job_description)}} />

                        {/* Experience and education */}
                        {(getEducation(post.job_required_education) || post.job_required_experience.required_experience_in_months != null) &&
                            <div className='experience_and_education'>
                                <h4 className='modal-body-header'>Required Experience and Education</h4>
                                <ul>
                                    {getEducation(post.job_required_education) && 
                                        <li className='modal-text'>{getEducation(post.job_required_education)}</li>
                                    }

                                    {post.job_required_experience.required_experience_in_months &&
                                        <li className='modal-text'>{getYearOfExp(post.job_required_experience.required_experience_in_months)}</li>
                                    }
                                </ul>
                            </div>
                        }

                        {/* Additional info */}
                        <div className='additional_info'>
                            <h4 className='modal-body-header'>Additonal info</h4>
                            <ul>
                                <li className='modal-text'>Employment type: {post.job_employment_type}</li>
                                {post.job_is_remote && <l1>Remote</l1>}
                                <li className='modal-text'>Source: {post.job_publisher}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    {/* Mark job as applied to */}
                    <button type="button" className="btn btn-secondary" onClick={markJobPostRequest}>Mark job as applied to</button>

                    {/* Apply to job button */}
                    <a className="btn btn-primary" href={post.job_apply_link}>Apply for this position</a>
                </div>
            </div>
        </div>
    )
}
