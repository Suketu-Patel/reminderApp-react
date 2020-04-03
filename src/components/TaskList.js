import React from "react"
import {Link} from "react-router-dom"
const TaskList = ()=>{
    return(
        <div>
            <Link className="btn btn-primary form-control" to="/tasks">Task List</Link>
        </div>
    )
}
export default TaskList