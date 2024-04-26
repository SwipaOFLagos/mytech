
import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import {data} from '../DB/ProductDB'
import DetailCard from '../components/DetailCard'


const DetailPage = ({product}) => {
    const {id} = useParams()
    // console.log(`Product ${id} clicked`);
    // console.log(data);

    // Go into the database and find the product with the id === productid 
    const pro = data.find((p)=> p.id === parseInt(id))

  return (
    <div> 
        <h1>Detail Page</h1>
        <div className="">
            <h3>Product {id} clicked</h3>
            {/* <ProductCard product ={pro}/> */}
            <DetailCard product ={pro}/>
        </div>
        
    </div>
  )
}

export default DetailPage

