import React from 'react';
import { NavLink } from 'react-router-dom';


const ReminderHeader = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <NavLink to={"/"} className="navbar-brand">Location Reminder</NavLink>
        </nav>
    )
}
export default ReminderHeader;