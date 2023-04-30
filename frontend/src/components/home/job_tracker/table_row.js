import React, { useContext, useEffect, useState, Checkbox } from 'react';
import {recivedInterview, recievedOffer, deleteJob} from '../../../api/job_tracker';

const Table_row = ({job, updateInterviews, updateOffers, refresh, setRefresh}) => {
    const [interview, setInterview] = React.useState(job.receivedInterview);
    const [offer, setOffer] = React.useState(job.receivedOffer);

    const handleChangeInterview = async (e) => {
        setInterview(!interview);
        const responseInterview = await recivedInterview(job, interview)
        console.log(responseInterview)

        updateInterviews(e.target)
      };

    const handleChangeOffer = async (e) => {
        setOffer(!offer);
        const responseOffer = await recievedOffer(job, offer)
        console.log(responseOffer)

        updateOffers(e.target)
    }

    const onClickDelete = async () => {
        const responseOffer = await deleteJob(job)
        setRefresh(!refresh);
        //window.location.reload(false);
        console.log(responseOffer)
    }

    return(
        <tbody>
            <tr key={job.job_id}>
                <td scope="row" class="align-middle"><img src={job.employer_logo} style={{"maxWidth":100}}></img></td>
                <td class="align-middle">{job.employer_name}</td>
                <td class="align-middle">{job.job_title}</td>
                <td class="align-middle">{job.job_city}</td>
                <td class="align-middle">{job.job_publisher}</td>
                <td class="align-middle">
                    <label className="form-check-label">
                        <input type="checkbox" value={job.id} checked={interview} onChange={handleChangeInterview} className="form-checkbox-input form-check-input"/>
                        Interview Recieved
                    </label>

                    {/* <p>Is "Interview" checked? {interview.toString()}</p> */}
                </td>

                <td class="align-middle">
                    <label className="form-check-label">
                        <input type="checkbox" value={job.id} checked={offer} onChange={handleChangeOffer} className="form-checkbox-input form-check-input"/>
                        Offer Recieved
                    </label>

                    {/* <p>Is "Offer" checked? {offer.toString()}</p> */}
                </td>

                <td class="align-middle">
                    <button type="button" class="btn btn-dark" onClick={onClickDelete}>Remove</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Table_row;