import React from "react";
import './style.css';
import NavBar from "./components/navbar";
import Card from "./components/card.js";
import Hero from "./components/hero.js";
import Data from "./data.js";

export default function App() {
const cards=Data.map((item)=>
{
  return(
    <Card
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    openspots={item.openSpots}
    />
  )
})
    return (
      <div>
       <NavBar/>
       <Hero/>
       <section className="cards-list">
                {cards}
            </section>
       </div>
    )
};


