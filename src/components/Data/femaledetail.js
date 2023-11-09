import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Quickfemale from '../Quick/quickfemale'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";



function  FemaleDetail({ femaleItem }) {
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
          src={`http://itssaj.pythonanywhere.com/${femaleItem.image}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{femaleItem.name}</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://itssaj.pythonanywhere.com/${femaleItem.img1}`} 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{femaleItem.name}</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`http://itssaj.pythonanywhere.com/${femaleItem.img2}`}

          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{femaleItem.name}</h5>
          {/* <p> */}
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          {/* </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <Image   src={femaleItem.img}  thumbnail /> */}
      </div>
      <div class = 'col-md-6 col-sm-6  col-lg-6 ' style={{padding: '20px',}} > <br/> 
      <h5 >  <b>{femaleItem.name}</b></h5> <br/> 
      <hr/>
      <h6 style={{color:'grey'}} > ₦{femaleItem.price}</h6><hr/>
      <h6> Rating : <span style={{marginLeft:'',color:'brown'}}>★★★☆☆</span></h6>  <br/>
      <h6> Color : <span style={{marginLeft:''}}>{femaleItem.color}</span></h6>  <br/>
      <h6>Size : </h6>      
    <div>    
  <br/>
  <hr/>
  <div  class='container'>
         <i class='fab fa-cc-apple-pay' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-paypal' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-visa' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-mastercard' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-apple-pay' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          <i class='fab fa-cc-paypal' style={{fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;
          </div>
</div><br/>
<div className='container'>
  <Row className="justify-content-md-left">
    <Col xs={4} lg={2}><Image className="img-fluid" src={`http://itssaj.pythonanywhere.com/${femaleItem.image}`} alt="Image 1"/></Col>
    <Col xs={4} lg={2}><Image className="img-fluid" src={`http://itssaj.pythonanywhere.com/${femaleItem.img1}`} alt="Image 1"/></Col>
    <Col xs={4} lg={2}><Image className="img-fluid" src={`http://itssaj.pythonanywhere.com/${femaleItem.img2}`} alt="Image 1"/></Col>
  </Row>
  <br/>
  <hr/>
  <button  onClick={() => handleAddToCart(femaleItem)} variant="outline-dark" class="btn btn-dark w-100 btn-block" type="button">Add to cart 🛒</button>
</div><br/>
 </div>


    </div>
    </div>

  );
}

export default FemaleDetail;
