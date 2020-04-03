import React from "react"
import MapBody from "./MapBody"
import SearchBar from "./SearchBar"
import "./style.css"
const LocationBased = ()=>{
    return(
        <div className="container mainWrapper">
            <SearchBar/>
            <MapBody/>
        </div>
    )
} 
export default LocationBased