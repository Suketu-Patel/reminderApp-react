import React from 'react';
import { NavLink } from 'react-router-dom';


const ReminderHeader = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <NavLink to={"/"} className="navbar-brand">Location Reminder</NavLink>
            <div className="form-inline">
                <NavLink to={"/"} className="navbar-item mr-3" activeStyle={{backgroundColor:"white",color:"black"}} style={{color:"white"}} >Login</NavLink>
                <NavLink to={"/signup"} className="navbar-item" activeStyle={{backgroundColor:"white",color:"black"}} style={{color:"white"}} >Register</NavLink>
            </div>
        </nav>
    )
}
export default ReminderHeader;