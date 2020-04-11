import React from "react";
import image from './Assets/loading.gif'

const Loader = ()=>{
    return(
        <div className="w-100 container" style={{marginTop:200}}>
        <p style={{textAlign:"center",color:"#cdcdcd", margin:"0",fontSize:"1.2rem"}}>Loading</p>
            <img className="mx-auto d-block w-50" src={image} alt="loading gif"/>
        </div>
    )
}
export default Loader;