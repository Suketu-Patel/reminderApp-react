import React from "react"

import ReminderHeader from "./ReminderHeader"

const LandingPage = () =>{
    return(
        <div style={{height:'100vh', overflow:"hidden"}}>
           <ReminderHeader/>
           <div className="container" style={{marginTop:"180px",textAlign:"center"}}>
                <h1 style={{textDecoration:"underline"}}>Welcome to, NotifyMe!</h1>
           </div>
           <div style={{position:"relative"}}>
               <img className="stickyImage" src="https://img.freepik.com/free-vector/collection-of-sticky-note-illustrations_53876-8291.jpg"></img>
           </div>
        </div>
    )
}
export default LandingPage