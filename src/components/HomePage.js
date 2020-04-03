import React from "react"
import TaskList from "./TaskList"
import AssignedTask from "./AssignedTask"
import Groups from "./Groups"
import {Link} from "react-router-dom"

const HomePage=()=>{
    return(
        <div className="container pt-5">
            <TaskList/>
            <AssignedTask/>
            <hr></hr>
            <div>
                <h5>Groups</h5>
                <Groups/>
            </div>
            <div style={{position:"relative"}}>
                <button  className="addReminder"><Link to="/addReminder">
                    <i class="fas fa-plus-circle"></i></Link>
                </button>
            </div>
        </div>
    )
}
export default HomePage;