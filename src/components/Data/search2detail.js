import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Quickmale from '../Quick/quickmale'
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../actions/cartActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";



function  Search2Detail({ maleclothes }) {
    const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
  
    const prevItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    const updatedCartItems = [...prevItems, item];
  
   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
    setAddedItems(updatedCartItems);
  
    dispatch({ type: 'ADD_CAR', payload: item });
  };


  return (
    <div class= 'container-md'>
    <div  class= 'row'>
      <div class='col-md-6 col-sm-6  col-lg-6' >
        
      <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://itssaj.pythonanywhere.com/${maleclothes.image}`}

          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{maleclothes.title}</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          src={`https://itssaj.pythonanywhere.com/${maleclothes.img1}`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{maleclothes.name}</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://itssaj.pythonanywhere.com/${maleclothes.img1}`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{maleclothes.name}</h5>
          {/* <p> */}
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          {/* </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <Image   src={maleclothes.img}  thumbnail /> */}
      </div>
      <div class = 'col-md-6 col-sm-6  col-lg-6 '  >  
      <h6>{maleclothes.name}</h6>

           <h6>{maleclothes.desc}</h6>
      <h6  > ₦{maleclothes.price}</h6>
      <Dropdown>
      <Dropdown.Toggle  variant="light" id="dropdown-basic">
       select
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">XL</Dropdown.Item>
        <Dropdown.Item href="#/action-2">L</Dropdown.Item>
        <Dropdown.Item href="#/action-3">M</Dropdown.Item>
        <Dropdown.Item href="#/action-3">S</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
    <Button onClick={() => handleAddToCart(maleclothes)} variant="outline-dark">Add to cart 🛒</Button>

    
    <div>    
  <br/>
    {/* <i class='fab fa-cc-apple-pay' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-paypal' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-visa' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-mastercard' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp; */}
</div>
<br/>


    </div>

    <div style={{marginTop:'180px'}}  >


{/* <h5 style={{marginLeft:'80px'}} >More male shirts you might like: </h5> */}

<div class='row'>

<div style={{padding:'40px'}} class ='col'>
{/* <Quickmale/> */}


</div>

</div>


</div>

    </div>

    </div>
  );
}

export default Search2Detail;
