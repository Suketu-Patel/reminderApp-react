import React from "react"
import {Route, Redirect} from "react-router-dom"
// import { StoreContext } from ".."


const ProtectedRoute = ({children,...rest}) =>{
    // const store=useContext(StoreContext);
    return (
        <Route {...rest}>
            <>{(localStorage.getItem("user")!=="null")?
                <>{children}</>               
            :
            <Redirect to={{pathname:"/",state:{from:rest.location}}}/>
            }</>
        </Route>
    )
}
export default ProtectedRoute;