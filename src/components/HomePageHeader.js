import React from 'react';
import { NavLink } from 'react-router-dom';
import fire from "../config/fire"

const HomePageHeader = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <span className="navbar-brand">Notify Me!</span>
            <div className="form-inline">
                <NavLink to={"/"} 
                    className="navbar-item mr-3" 
                    onClick={() => { localStorage.setItem("user", null); fire.auth().signOut() }} 
                    style={{color:"white"}} 
                >Logout </NavLink>
            </div>
        </nav>
    )
}
export default HomePageHeader;