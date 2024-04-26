
import React,{useState, useEffect} from 'react'
import axios from 'axios';



const FetchData = () => {
  // Hooks
  const [blogs, setBlogs] = useState([])
  console.log(blogs);
  const [loading, setloading] = useState(false);
  // fetching blogs with axios 
  const fetchBlogs = async () => {
    const url = " https://blogg-api-v1.onrender.com/blogs/all"
   try {
    const response = await axios.get(url)
    const data = await response?.data
    console.log(data?.blogs)
    setBlogs(data?.blogs)
   
    
   } catch (error) {
    console.log(error);
   }   
  }
  // fetchBlogs
  useEffect(()=>{
    fetchBlogs();
  }, [])
  console.log(blogs);
  return (
    <div>
        <h1>Fetch data components</h1>
        <div className="row d-flex gap-3 justify-content-center">
          {blogs.map((blog) => {
            return (
              <div className="col-12 col-md-4 col-lg-3 rounded" style={{height : "400px"}} >
                <div className="card-image" style={{width: "100%", backgroundColor:""}}>
                  <img src={blog.imageUrl} alt="" width= "100%" height= "200px"/>
                </div>
                <div className="text-start">
                  <p>{blog.title}</p>
                  <p>{blog.content.slice(0,35)}</p>
                 <p>{blog.author}</p>
                  <p>{blog.read_time}min</p>

                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default FetchData







