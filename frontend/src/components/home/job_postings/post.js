import React, { useState } from 'react';
import PostPopUp from './post_pop_up';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Post({ post }) {
    const [PostPopUpShown, setPostPopUpShown] = useState(false);

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
        <div className='post' onClick={() => setPostPopUpShown(true)}>
            <div className='post-header'>
                <img className='post-logo' src={post.employer_logo} />
                <div className='post-title-name'>
                    <h3 className='post-job-title'>{post.job_title}</h3>
                    <p>{post.employer_name}</p>
                </div>
            </div>

            <p className='post-job-description'>{post.job_description}</p>

            <div className='location'>
                <LocationOnIcon />
                <p>{post.job_city}, {post.job_state}, {post.job_country}</p>
            </div>

            {post.job_min_salary && post.job_max_salary &&
                <p className='salary'>${addCommas(post.job_min_salary)} - ${addCommas(post.job_max_salary)}</p>}
            
            {PostPopUpShown && <PostPopUp post={post} />}
        </div>
    )
}
