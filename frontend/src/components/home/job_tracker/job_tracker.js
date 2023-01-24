import React, { useContext } from 'react';
import { UserContext } from '../../../contexts';

export default function JobTracker(props) {
    const user = useContext(UserContext);

    return (
        <div>
            Job Tracker for {user.first_name}
        </div>
    )
}
