import React from "react";
import Katie from "../katie-zaferes.png"
import Star from "../star.png"

export default function Card(){
    return(
        <div className="card"> 
            <img src={Katie} className="card--image"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>5.0</span>
                <span className="grey"> (6) •</span>
                <span className="grey">USA</span>

            </div>
            <p>Life lessons with Katie Zafesres</p>
            <p><span className="bold">From $136</span>/ person</p>
        </div>

    )
}