import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import Data from "./data"

export default function App(){
    const data = Data.map(i => {
        return <Card
            key={i.id}
            // img={i.coverImg}
            // rating = {i.stats.rating}
            // reviewcount = {i.stats.reviewCount}
            // country = {i.location}
            // title = {i.title}
            // price = {i.price}
            // openSpot = {i.openSpots}

            //item={i}
            {...i}
            />
    })
    return(
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
                {data}
            </section>
        </div>
    )
}