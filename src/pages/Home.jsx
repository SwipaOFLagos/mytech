
import img1 from "../assets/images/images.bbb.jpeg"
import img2 from "../assets/images/one-piece-wallpaper.jpg"
import Menu from "../components/Nav"
// import Spin from "../components/Loader"
import Hero from "../components/Hero"
import "../CSS/Home.css"
import ProductCard from "../components/ProductCard"
import NotFoundPage from "./404Page"

function Home () {


    return(
<>
{/* <Menu/> */}
{/* <Spin/> */}
<Hero heading = "welcome to home page" image={img1}/>
{/* <Productcard/> */}

{/* <h1 className="bg-danger text-light">welcome to home page</h1> */}
<div className="" style={{backgroundColor : "purple", height: "50%", borderRadius: "15px",}}>
    
    <img src={img1} alt=""/>
</div>
<div className="" style={{backgroundColor : "purple", height :"50%", borderRadius : "15px" }}>
    <img src={img2} alt="" height={300}/>
</div>
</>
    )  
}
export default Home