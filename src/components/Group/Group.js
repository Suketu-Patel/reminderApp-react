import React, { useState } from "react"
import { useParams,NavLink, Link } from "react-router-dom"
import fire from "../../config/fire";

const Group = ()=>{
    const {groupId} = useParams();
    let [groupdata,setgroupdata]=useState({});
    fire.firestore().collection("groups").doc(groupId).get().then((qss)=>{
        setgroupdata(qss.data())
    })
    return(
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <NavLink to={"/homepage"} className="navbar-brand"><i className="fas fa-arrow-left"></i></NavLink>
                <div className="form-inline" style={{margin:"0 auto"}}>
                    <h4 className="navbar-item navbar-center" style={{color:"white"}}>{groupdata.title}</h4>
                </div>
            </nav>

            <div className="container" style={{height:"500px",overflowX:"hidden",overflowY:"scroll"}}>
                <div>c</div>
                <div>c</div>
                <div>c</div>
                <div>c</div>
                <div>c</div>
            </div>

            <div style={{ position: "relative" }}>
                <Link className="addReminder" style={{top:"70px"}}>
                    <button className="btn btn-primary" style={{ width: "300px" }}>
                        <i className="fas fa-sticky-note"></i> Add Reminder
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Group