import React from "react";
import image from './Assets/loading.gif'

const Loader = ()=>{
    return(
        <div className="w-100 container" style={{marginTop:300}}>
            <img className="mx-auto d-block w-50" src={image} alt="loading gif"/>
        </div>
    )
}
export default Loader;