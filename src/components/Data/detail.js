import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";
import QuickSneakers from '../Quick/quicksneaker';
import Quickfemale from '../Quick/quickfemale';
import Quickmale from '../Quick/quickmale';
import QuickAdidas from '../Details/Adidasdetails';
import QuickGucci from '../Details/Guccidetails';
import QuickBalenciaga from '../Details/Balenciagadetials';
import QuickNike from '../Details/Nikedetails';
import QuickNorthface from '../Details/Northfacedetails';
import QuickConverse from '../Details/Conversedetails';
import QuickPuma from '../Details/Pumadetials';
import QuickReebok from '../Details/Reebokdetials';
import QuickHublot from '../Details/Hublotdetails';
import QuickKeppa from '../Details/Keppadetails';
import QuickEllesse from '../Details/Ellesedetails';
import QuickMetalica from '../Details/Metalicadetails';
import QuickPalace from '../Details/Palacedetails';
import QuickTh from '../Details/Thdetails';
import Brands3 from '../Views/Brands3';
import Brands from '../Views/Brands';
import QuickDrm from '../Details/Drmdetails';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import jwt_decode from 'jwt-decode'; // You may need to install this library


function ClothingDetail({ clothingItem , onClose }) {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSize, setSelectedSize] = useState('L');
  const [ratingValue, setRatingValue] = useState(0); 
  const [quantity, setQuantity] = useState(1);
  const [loggedinUser, setLoggedinUser] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  // Retrieve the "loggedin user" from local storage when the component mounts
useEffect(() => {
  const user = localStorage.getItem('loggedInUsername');
  setLoggedinUser(user);
}, []);

const [addedToCart, setAddedToCart] = useState(false);


const addToCart12 = async (clothingItem,item) => {
  const url = 'https://itssaj.pythonanywhere.com/api/add-to-cart/';
  const token = localStorage.getItem('authToken');
  const user1 = localStorage.getItem('loggedInUsername');

  if (token) {
    try {
      // You can skip checking token expiration here and rely on Django's JWT middleware.
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ product_name: clothingItem.name,
          usercart: user1,
          product_price: clothingItem.price,
          product_image: clothingItem.image,
quantity2:quantity,
selectedSize:selectedSize,
ratingValue:ratingValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the response data as needed.
        console.log(data);
        console.log('Adding to cart:', item);
        const prevItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...prevItems, clothingItem];
               localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setAddedItems(updatedCartItems);
        dispatch({ type: 'ADD_CAR', payload: { quantity: quantity } });
                console.log('q',    dispatch)
                this.setState((prevState) => ({
          itemCount: prevState.itemCount + 1,
        }));
        setCartCount(cartCount + 1);
        // You can also update local storage here if needed
        localStorage.setItem('cartCount', cartCount + 1);

        console.log(clothingItem.name);
      } else {
        // Handle non-success HTTP responses (e.g., 401 for unauthorized)
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    // Handle the case when no token is found in local storage.
    console.error('No token found in local storage.');
  }
};

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      console.log(newQuantity)
    }
  };
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const toggleDetail = () => {
    setIsOpen(!isOpen);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  if (!isOpen) {
    return (
      <button style={{ float: 'right', zIndex: 1, marginLeft:'14px' }} className="btn btn-dark btn-sm open-button float-right" onClick={handleOpen}>
   <i className="fas fa-bars"></i>
      </button>
    );
  }   
  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

// ...


// ...


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
 <button style={{float:'right'}}  className="btn btn-outline-dark close-button float-right" onClick={handleClose}>
         <i className="fas fa-bars"></i>
      </button>   
      <br/>   
    <div  class= 'row'>
      <br/>   
      <br/>   
      <div class='col-md-6 col-sm-6  col-lg-6' >
      <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://itssaj.pythonanywhere.com/${clothingItem.image}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{clothingItem.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://itssaj.pythonanywhere.com/${clothingItem.img1}`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{clothingItem.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://itssaj.pythonanywhere.com/${clothingItem.img2}`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{clothingItem.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div variant="elevation" class = 'col-md-6 col-sm-6  col-lg-6 ' style={{padding: '', fontSize:'15px' ,elevation:'1'}} > <br/> 
      <h5 >  <b>{clothingItem.name}</b></h5> <br/> 
      <hr/>
      <h6 style={{fontSize:'14px',color:'GrayText'}}>  {clothingItem.description} clothing item material is a the well made and selected fitting for comfortablity. offers the best quality when it comes to affordable clothing item this is washable and ironable. This is a {clothingItem.description}</h6><hr/>
      <b style={{float:'right'}}>

   &nbsp;

   {clothingItem.color.charAt(0).toUpperCase() + clothingItem.color.slice(1).toLowerCase()}
   &nbsp; <span style={{ marginLeft: '3px', border:'1px black solid',textTransform: 'capitalize', display: 'inline-block', width: '15px', height: '12px',borderRadius:'5O%', backgroundColor: clothingItem.color }}></span>
   </b>
      <h6 style={{color:'grey'}} > ₦{clothingItem.price}</h6><hr/>




      
      <b> Rating : <span style={{marginLeft:'',color:'brown'}}> <Rating
        name="simple-controlled"
        value={ratingValue} 
        onChange={handleRatingChange} 
        style={{color:'brown',fontSize:'20px'}}
      /></span></b>   
    <b style={{float:'right'}}>  {ratingValue}  </b><br/>
    <br/>  <b style={{float:''}}>Available:    &nbsp;
<div class="btn-group container-6" role="group" aria-label="Size">
    <button type="button" class="btn  btn-outline-dark btn-sm" onClick={() => handleSizeSelect('XL')}>XL</button>
    <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => handleSizeSelect('L')}>L</button>
    <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => handleSizeSelect('M')}>M</button>
    <button type="button" class="btn  btn-outline-dark btn-sm" onClick={() => handleSizeSelect('S')}>S</button>
    <button type="button" class="btn btn-outline-dark btn-sm" onClick={() => handleSizeSelect('XS')}>XS</button>
  </div>  </b>  
  <b style={{float:'right'}}>  &nbsp;   <b>{selectedSize}</b> </b>
    <div>   








<br/>
<div className=' d-flex  '>
    <div     className="input-group ">
    <b > Quantity:    &nbsp;</b> 

      <div className="input-group-append">
        <button
          className="btn btn-secondary"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
       </button>  
        <input
        type="number"
        className=" "
        value={quantity}
        onChange={handleQuantityChange}
        style={{border:"2px white solid", width:'45px',float:''}}
         />

<button
          className="btn btn-secondary"
          onClick={() =>
            setQuantity(quantity > 1 ? quantity - 1 : quantity)
          }
        >
          -
        </button> 

        
      </div>
    </div>


    </div>
  <hr/>
  <div  class='container-12'>
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
    <Col xs={4} lg={2}><Image className="img-fluid" src={`https://itssaj.pythonanywhere.com/${clothingItem.image}`} alt="Image 1"/></Col>
    <Col xs={4} lg={2}><Image className="img-fluid" src={`https://itssaj.pythonanywhere.com/${clothingItem.img1}`} alt="Image 1"/></Col>
    <Col xs={4} lg={2}><Image className="img-fluid" src={`https://itssaj.pythonanywhere.com/${clothingItem.img2}`} alt="Image 1"/></Col>
  </Row>
  <br/>
  <hr/>
  <button  onClick={() => addToCart12(clothingItem)} variant="outline-danger" class="btn btn-dark   w-100  btn-block" type="button">Add to cart 🛒</button>
  <hr/>
</div>
 </div>
    <div style={{marginTop:''}}  >
<hr/>
<h5 style={{marginLeft:'80px'}} > </h5>
{clothingItem.brand === 'Nike' ? (
              <QuickNike />
            ) : clothingItem.brand === 'Adidas' ? (
              <QuickAdidas/>
            ) : clothingItem.brand === 'Gucci' ? (
              <QuickGucci />
            ) : clothingItem.brand === 'Balenciaga' ? (
                <QuickBalenciaga />
            ) : clothingItem.brand === 'Nike' ? (
                  <QuickNike />
           ) : clothingItem.brand === 'Northface' ? (
                 <QuickNorthface />
           ) : clothingItem.brand === 'Converse' ? (
                  <QuickConverse />
           ) : clothingItem.brand === 'Puma' ? (
                    <QuickPuma/>
           ) : clothingItem.brand === 'Reebok' ? (
                      <QuickReebok/>
          ) : clothingItem.brand === 'Ellesse' ? (
                        <QuickEllesse/>
          ) : clothingItem.brand === 'Hublot' ? (
                          <QuickHublot/>
          ) : clothingItem.brand === 'Keppa' ? (
                            <QuickKeppa/>
          ) : clothingItem.brand === 'Metalica' ? (
                              <QuickMetalica/>
          ) : clothingItem.brand === 'Palace' ? (
                                <QuickPalace/>
          ) : clothingItem.brand === 'Tommy Hilfiger' ? (
                                  <QuickTh/>
          ) : clothingItem.brand === 'Drm' ? (
                                    <QuickDrm/>
            ) : (
             <QuickNike/>
            )}
</div>
    </div>
    <hr/>
  </div>
    
  );
}

export default ClothingDetail;
