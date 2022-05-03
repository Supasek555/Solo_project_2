import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"


export default function Card(props){
    return (
        <div className="card">
            <img className="card_pic" src={props.imageUrl}/>
            
            <div className="card_text">
                
                <div className="card_intro">

                    
           
                    
                    <h3 className="card_country"><span className="dot"><FontAwesomeIcon icon={faLocationDot}/></span> {props.location}</h3>
                    
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h1 className="card_place">{props.title}</h1>
                
                <h4 className="card_date">{props.startDate} - {props.endDate}</h4>
                
                <p className="card_detail">{props.description}</p>
                
             
            
            </div>
        
        </div>
    )
}