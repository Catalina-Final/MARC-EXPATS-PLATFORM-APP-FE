import React from 'react'
import {useHistory} from "react-router-dom"



const AdCard = ({jobID,  jobOverview}) => {
    const history = useHistory()

    

    return (
        <div>
            <p onClick={()=>history.push(`/job/${jobID}`)}>{jobOverview.jobTitle}</p>
        </div>
    )
}

export default AdCard
