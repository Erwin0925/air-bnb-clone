import React from "react";
import photogrid from "../photogrid.png";

export default function Hero(){
    return(
        <section className="hero">
            <img src={photogrid} alt="photogrid" className="hero--photo" />
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">
                Join Unique interactive activites lead by one-of-a-kind
                hosts-all without leaving home.
            </p>
        </section>
    )
}