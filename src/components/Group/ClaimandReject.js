import React from "react"
import {NavLink} from "react-router-dom"

const ClaimandReject=()=>{
    return (
        <div style={{height:"100vh"}}>
            <nav className="navbar navbar-dark bg-primary">
                <NavLink to={"/homepage"} className="navbar-brand"><i className="fas fa-arrow-left"></i></NavLink>
                <div className="form-inline" style={{margin:"0 auto"}}>
                    <h4 className="navbar-item navbar-center" style={{color:"white"}}>Claim Task</h4>
                </div>
            </nav>
            <div className="container pt-4" style={{marginTop: "70px"}}>
                <div className="container">
                    <div className="col">
                        <div className="row">
                            <div className="btn btn-success form-control" style={{height:"200px",lineHeight:"180px",fontSize:"3rem"}}>Claim</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="btn btn-danger form-control" style={{height:"200px",lineHeight:"180px",fontSize:"3rem"}}>Reject</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClaimandReject;