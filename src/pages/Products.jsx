import React from "react";
// import img1 from "../assets/images/images.bbb.jpeg";
// import img2 from "../assets/images/images.dss.jpeg";
// import img3 from "../assets/images/images.jpeg";
// import img4 from "../assets/images/images.juy.jpeg";
// import img5 from "../assets/images/images.rsd.jpeg";
// import img6 from "../assets/images/images.uvv.jpeg";
import ProductCard from "../components/ProductCard";
import {data} from "../DB/ProductDB"

const Products = () => {
  return (
    <div>
      <h1>Product page</h1>
      <div className= "d-flex justify-content-between flex-wrap gap-3">
        {data.map((product) => {
          return (
            <div className="" key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;