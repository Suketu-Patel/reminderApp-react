import React from "react"
import { Link } from "react-router-dom"

const AssignedTask = ()=>{
    return(
        <div>
            <Link className="btn btn-warning form-control" to="/assignedtask" style={{height:"100px",lineHeight:"90px"}}>Assigned Tasks</Link>
        </div>
    )
}
export default AssignedTask