import React from "react"
import './style.css'
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    return (
        <div style={{ height:"100vh",overflow:'hidden'}}>
            <div className="container" style={{marginTop:100}}>

            <form style={{width:"70%", margin:'0 auto'}} onSubmit={(e)=>{
                e.preventDefault();
                return props.history.push("/homepage")
            }}>

            <h2 className="mb-5" style={{margin:"0 auto", textAlign:"center"}}>Log In</h2>
                <div className="form-group row">
                    <div className="col">
                        <input type="text" className="inputBtn form-control" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <input type="password" className="inputBtn form-control" id="inputPassword" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                    <input className="btn btn-primary inputBtn form-control" type="Submit" defaultValue="Log In"></input>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}
export default withRouter(Login)