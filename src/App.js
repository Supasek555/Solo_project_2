import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import style from "./style.css"
import data from "./data"

export default function App(){

    const cardData = data.map(

        function(info){
            return(
                <Card 
                    {...info}
                />
            )
        }
    )

    return (
        <div className="App">
            
            <Navbar />
            <div className="card_box">
            {cardData}
            </div>
            
        
        </div>
    )
}