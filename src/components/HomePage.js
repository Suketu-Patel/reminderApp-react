import React from "react"
import TaskList from "./TaskList"
import AssignedTask from "./AssignedTask"
import Groups from "./Group/Groups"
import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <div className="container pt-4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TaskList />
                    </div>
                    <div className="col">
                        <AssignedTask />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                <h5>Groups</h5>
                <Groups />
            </div>
            <div style={{ position: "relative" }}>
                <Link className="addReminder" to="/addReminder">
                    <button className="btn btn-primary" style={{ width: "300px" }}>
                        <i className="fas fa-sticky-note"></i> Add Reminder
                    </button>
                </Link>
            </div>
            <div style={{ position: "relative" }}>
                <Link className="addGroup" to="/addGroup">
                    <button className="btn btn-info" style={{ width: "300px" }}>
                        <i className="fas fa-users"></i> New Group
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default HomePage;