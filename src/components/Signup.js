import React from "react"
import './style.css'
const Signup = () => {
    return (
        <div style={{ height:"100vh",overflow:'hidden'}}>
            <div className="container" style={{marginTop:100}}>
            <form style={{width:"70%", margin:'0 auto'}}>
            <h2 className="mb-5" style={{margin:"0 auto", textAlign:"center"}}>Create Your Account</h2>
                <div className="form-group row">
                    <div className="col">
                        <input type="text" readonly className="inputBtn form-control" placeholder="Enter your Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <input type="text" readonly className="inputBtn form-control" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <input type="password" className="inputBtn form-control" id="inputPassword" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                    <input className="btn btn-primary inputBtn form-control" type="Submit"></input>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Signup