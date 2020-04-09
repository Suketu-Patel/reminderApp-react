import React from "react"
import TaskList from "./TaskList"
import AssignedTask from "./AssignedTask"
import Groups from "./Groups"
import {Link} from "react-router-dom"
import fire from "../config/fire"
const HomePage=()=>{
    // fire.firestore().collection("users").get().then((querySnapshot)=>{
    //     querySnapshot.forEach((docs)=>{
    //         console.log(docs.id,docs.data())
    //     })
    // })
    return(
        <div className="container pt-5">
            <TaskList/>
            <AssignedTask/>
            <hr></hr>
            <div>
                <h5>Groups</h5>
                <Groups/>
            </div>
            <Link to="/" onClick={()=>{ localStorage.setItem("user",null); fire.auth().signOut()}}>logout</Link>
            <div style={{position:"relative"}}>
                <button  className="addReminder"><Link to="/addReminder">
                    <i className="fas fa-plus-circle"></i></Link>
                </button>
            </div>
        </div>
    )
}
export default HomePage;