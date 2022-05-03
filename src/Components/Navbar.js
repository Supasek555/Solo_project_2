import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEarthAsia} from "@fortawesome/free-solid-svg-icons"

// import style from "../style.css"

export default function Navbar(){
    return (
        <div className="navbar">

            

          
            
            <h1 className="header"><span><FontAwesomeIcon icon={faEarthAsia} /></span> My Travel Journal.</h1>
        
        </div>
    )
}