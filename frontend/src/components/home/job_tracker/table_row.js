import React, { useContext, useEffect, useState, Checkbox } from 'react';
import {recivedInterview, recievedOffer} from '../../../api/job_tracker';

const Table_row = ({job}) => {
    const [interview, setInterview] = React.useState(job.receivedInterview);
    const [offer, setOffer] = React.useState(job.receivedOffer);

    const handleChangeInterview = async () => {
        setInterview(!interview);
        const responseInterview = await recivedInterview(job, interview)
        console.log(responseInterview)
      };

    const hangleChangeOffer = async () => {
        setOffer(!offer);
        const responseOffer = await recievedOffer(job, offer)
        console.log(responseOffer)
    }

    return(
        <tr key={job.job_id}>
            <td><img src={job.employer_logo} style={{"maxWidth":100}}></img></td>
            <td>{job.employer_name}</td>
            <td>{job.job_title}</td>
            <td>{job.job_city}</td>
            <td>{job.job_publisher}</td>
            <td>
            <label>
                <input type="checkbox" checked={interview} onChange={handleChangeInterview}/>
                Interview Recieved
            </label>

            {/* <p>Is "Interview" checked? {interview.toString()}</p> */}
            </td>

            <td>
            <label>
                <input type="checkbox" checked={offer} onChange={hangleChangeOffer}/>
                Offer Recieved
            </label>

            {/* <p>Is "Offer" checked? {offer.toString()}</p> */}
            </td>
        </tr>
    )
        
}

export default Table_row;