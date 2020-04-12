import React from "react"
import {Link} from "react-router-dom"

const Groups = ()=>{
    return(
        <div>
            <Link style={{borderRadius:"10px"}} to="/group/1" className="form-control groupBtn border mb-1"><i className="fas fa-users text-info"></i> Group 1 <span className="taskNumber">5</span></Link>
            <Link style={{borderRadius:"10px"}} to="/group/1" className="form-control groupBtn border mb-1"><i className="fas fa-users text-info"></i> Group 2 <span className="taskNumber">1</span></Link>
            <Link style={{borderRadius:"10px"}} to="/group/1" className="form-control groupBtn border mb-1"><i className="fas fa-users text-info"></i> Group 3 <span className="taskNumber">8</span></Link>
            <Link style={{borderRadius:"10px"}} to="/group/1" className="form-control groupBtn border mb-1"><i className="fas fa-users text-info"></i> Group 4 <span className="taskNumber">10</span></Link>
        </div>
    )
}
export default Groups