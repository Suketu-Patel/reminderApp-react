import React, { useState } from "react"
import './style.css'
import { withRouter } from 'react-router-dom';
import fire from "../config/fire";

const Login = (props) => {
    const [userCreds,setUserCreds] = useState({username:'',password:''});
    const [loginError,setLoginError] = useState("")
    const setCreds =(e)=> {
        setUserCreds({...userCreds,[e.target.name] : e.target.value}) 
    }
    return (
        
        <div style={{ height:"100vh",overflow:'hidden'}}>
            <div className="container" style={{marginTop:100}}>
            <form style={{width:"70%", margin:'0 auto'}} onSubmit={(e)=>{
                e.preventDefault();
                fire.auth().signInWithEmailAndPassword(userCreds.username,userCreds.password).then((data)=>{
                    localStorage.setItem("user",JSON.stringify(data.user))
                    return props.history.push("/homepage")
                }).catch((error)=>{
                    console.log("ERROR",error)
                    setLoginError("invalid login credentials")
                });
            }}>

            <h2 className="mb-5" style={{margin:"0 auto", textAlign:"center"}}>Log In</h2>
                <label style={{color:"red"}}>{loginError}</label>
                <div className="form-group row">
                    <div className="col">
                        <input type="text" className="inputBtn form-control" placeholder="Enter your email" name="username" onChange = {setCreds} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <input type="password" className="inputBtn form-control" id="inputPassword" name="password" onChange = {setCreds} placeholder="Enter your password" required/>
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