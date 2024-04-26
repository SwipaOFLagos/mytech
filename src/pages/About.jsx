import React from "react";
import "../CSS/About.css"
import Hero from "../components/Hero";
import img from "../assets/images/s-l500.jpg"

const About = () => {

    // JSX
  const myJsx = <h3>This is awesome JSX</h3>

  // myFavFood
  const food = ["amala", "tuwo", "jollof", "spaghetti"]

  const myStyle = {listStyle: "none", color: "blue", marginTop: "4rem",
  backgroundColor: "yellowgreen", width: "50%", marginInline: "auto"}
  
  
  return (
    <div>
        <Hero heading = "welocome to about page" image={img}/>
      <div>
        <ul>
          <li>rice</li>
          <li>beans</li>
          <li>egg</li>
          <li>pepsi</li>
        </ul>
        <h1>Eddie's React App 1.0</h1>
        {myJsx}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis soluta
        dicta, doloremque officia nisi dolorum sed placeat nihil aliquid optio.
      </p>

      {/* map through food array */}
      <h3>My favourite food</h3>
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>   
            <p>My favourite food is {f}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About
