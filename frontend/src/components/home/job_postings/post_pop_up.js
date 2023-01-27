import React from 'react'

export default function PostPopUp({ post }) {
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

    return (
        <div>
            {/* Basic info */}
            <div className='basic_info'>
                <h3>{post.job_title}</h3>
                <p>{post.employer_name}</p>
                <p>{post.job_city}, {post.job_state}, {post.job_country}</p>
                <p>{timePassed(post.job_posted_at_datetime_utc)}</p>
            </div>
            
            {/* Job Description */}
            <div className='job_description'>
                <h4>About the job</h4>
                <p>{post.job_description}</p>
            </div>

            {/* Experience and education */}
            {(getEducation(post.job_required_education) || post.job_required_experience.required_experience_in_months != null) &&
                <div className='experience_and_education'>
                    <h4>Required Experience and Education</h4>
                    <ul>
                        {getEducation(post.job_required_education) && 
                            <li>{getEducation(post.job_required_education)}</li>
                        }

                        {post.job_required_experience.required_experience_in_months &&
                            <li>{getYearOfExp(post.job_required_experience.required_experience_in_months)}</li>
                        }
                    </ul>
                </div>
            }

            {/* Additional info */}
            <div className='additional_info'>
                <h4>Additonal info</h4>
                <ul>
                    <li>Employment type: {post.job_employment_type}</li>
                    {post.job_is_remote && <l1>Remote</l1>}
                    <li>Source: {post.job_publisher}</li>
                </ul>
            </div>

            {/* Apply go job button */}
            <a href={post.job_apply_link}>Apply for this position</a>
        </div>
    )
}
