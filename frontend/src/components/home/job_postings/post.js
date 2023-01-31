import React, { useState } from 'react';
import PostPopUp from './post_pop_up';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Post({ post }) {
    const addCommas = (num) => {
        if (!num) return;

        let str_num = num.toString();
        let count = 1;
        for (let i = str_num.length - 1; i > 0; i--) {
            if (count % 3 === 0) 
                str_num = str_num.slice(0, i) + "," + str_num.slice(i);
            
            count++;
        }
        return str_num;
    }

    return (
        <div className='post'>
            <div className='post-header'>
                <img className='post-logo' src={post.employer_logo} />
                <div className='post-title-name'>
                    <h3 className='post-job-title'>{post.job_title}</h3>
                    <p className='post-company'>{post.employer_name}</p>
                </div>
            </div>

            <p className='post-job-description'>{post.job_description}</p>

            <div className='post-footer'>
                <div className='location'>
                    <LocationOnIcon />
                    <p>{post.job_city}, {post.job_state}, {post.job_country}</p>
                </div>
                
                <div style={{ "flex": "1" }}>
                    {post.job_min_salary && post.job_max_salary &&
                        <div style={{ "display": "flex", "alignItems": "center" }}s>
                            <span className='middle-dot' style={{ "color": "#5d6066" }}>&#183;</span>
                            <p className='salary'>${addCommas(post.job_min_salary)} - ${addCommas(post.job_max_salary)}</p>
                        </div>
                    }
                </div>

                {/* Show popup */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#J${post.job_id.substring(0,post.job_id.length-2)}Modal`}>
                    Show more info
                </button>
            </div>
            
            
            {/* Popup */}
            <div className="modal fade" id={`J${post.job_id.substring(0,post.job_id.length-2)}Modal`} tabIndex="-1" aria-labelledby={`J${post.job_id.substring(0,post.job_id.length-2)}ModalLabel`} aria-hidden="true">
                <PostPopUp post={post} />
            </div>
        </div>
    )
}
