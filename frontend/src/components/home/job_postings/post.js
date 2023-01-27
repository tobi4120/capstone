import React, { useState } from 'react';
import PostPopUp from './post_pop_up';

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
        <div onClick={() => setPostPopUpShown(true)}>
            <img src={post.employer_logo} />
            <h3>{post.job_title}</h3>
            <p>{post.employer_name}</p>
            <p>{post.job_description}</p>
            <p>{post.job_city}, {post.job_state}, {post.job_country}</p>
            {post.job_min_salary && post.job_max_salary &&
                <p>${addCommas(post.job_min_salary)} - ${addCommas(post.job_max_salary)}</p>}
            
            {PostPopUpShown && <PostPopUp post={post} />}
        </div>
    )
}
