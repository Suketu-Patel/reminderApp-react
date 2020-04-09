import React,{useState} from "react"
import './style.css'
import fire from "../config/fire";
import { withRouter } from "react-router-dom";
const Signup = (props) => {

    const [userCreds,setUserCreds] = useState({name:'',email:'',password:''});
    const setCreds =(e)=> {
        setUserCreds({...userCreds,[e.target.name] : e.target.value}) 
    }

    return (
        <div style={{ height:"100vh",overflow:'hidden'}}>
            <div className="container" style={{marginTop:100}}>
            <form style={{width:"70%", margin:'0 auto'}} onSubmit={(e)=>{
                e.preventDefault();
                fire.auth().createUserWithEmailAndPassword(userCreds.email,userCreds.password).then((authUser)=>{
                    fire.firestore().collection("users").doc(authUser.user.uid).set({
                        emailid: userCreds.email,
                        uid: authUser.user.uid,
                        username: userCreds.name
                    }).catch(error=>console.log(error))
                    return props.history.push("/login");
                })
            }}>
            <h2 className="mb-5" style={{margin:"0 auto", textAlign:"center"}}>Create Your Account</h2>
                <div className="form-group row">
                    <div className="col">
                        <input type="text" readonly className="inputBtn form-control" placeholder="Enter your Name" name="name" onChange={setCreds}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <input type="text" readonly className="inputBtn form-control" placeholder="Enter your email" name="email" onChange={setCreds}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <input type="password" className="inputBtn form-control" id="inputPassword" placeholder="Enter your password" name="password" onChange={setCreds}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                    <input className="btn btn-primary inputBtn form-control" type="Submit"  defaultValue="Register"></input>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}
export default withRouter(Signup)