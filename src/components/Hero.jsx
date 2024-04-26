import React from 'react'
import Gate from "../assets/images/s-l500.jpg"

 
const Hero = (props) => {
    // destructuring the props
    const {heading = "welcome to my page",  image } = props
  return (
    <div style={{backgroundColor: "purple", color: "white"}}>
     {/* <div className="">
        <img src={image} alt="" />
        
        </div>    */}
        {/* <h1>welcome to my page</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero;