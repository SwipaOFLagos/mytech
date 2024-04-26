

import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard({product}) {
    // const {id, title, price, desc, image} = data;
  return (
    <Card style={{ width: '18rem', height: "25rem", textAlign: "left" }}>
      <Card.Img variant="top" src={product?.image} style={{width: "100%", height: "200px"}} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.desc}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <NavLink to={`/src/pages/$Buy.jsx`} style={{textDecoration : "none", color: "white"}}>
        <Button variant="primary">BUY NOW</Button>
        </NavLink>
        <Button className='ms-4' variant="warning">
          <NavLink to={`/product/${product?.id}`} style={{textDecoration: "none", color: "white"}}>
            VIEW MORE...
          </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;