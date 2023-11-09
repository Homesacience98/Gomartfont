import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MaleDetail from '../Data/maledetail';
import { useSelector, useDispatch } from 'react-redux';
import NF_LOGO from '../../images/5.png'
import ClothingDetail from '../Data/detail';


function QuickNorthface({ item }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    console.log('Card clicked:', item);
    setAddedItems((prevItems) => [...prevItems, item]);
    setSelectedItem(item);
  };

   const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
  
    const prevItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    const updatedCartItems = [...prevItems, item];
  
   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
    setAddedItems(updatedCartItems);
  
    dispatch({ type: 'ADD_CAR', payload: item });
  };


  const countObj = useSelector((store) => store.countReducer);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://itssaj.pythonanywhere.com/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('network not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('problem with the fetch:', error);
      });
  }, []); 

  const maleCardList = products.filter((maleclothesItem) => maleclothesItem.brand === 'Northface').slice(0 ,8).map((maleclothesItem) => (
    
    <Col
    style={{ paddingLeft: '', paddingRight: '40px',padding:''  }}
          key={maleclothesItem.id}
      sm={6}
      md={6}
      lg={3}
      xs={12}
    >
      <Card style={{ width: '268px', marginBottom: '5px', border: '0.1px solid white'  }}>
        <Card.Img
          variant="top"
          src={`https://itssaj.pythonanywhere.com/${maleclothesItem.image}`}
          style={{ width: '267px', height: '300px',padding: ''}}
          onClick={() => handleCardClick(maleclothesItem)}
        />
        <Card.Body>
          <Card.Title style={{ fontFamily: 'Cursive' }}>
           <h6> {maleclothesItem.name}</h6>
          </Card.Title>
          <Card.Title style={{ fontFamily: 'Cursive',float:'right',marginTop:'-30px' ,color:'grey'}}>
           <h6>₦ {maleclothesItem.price}</h6>
          </Card.Title>

        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
        <a  href='nf'>  <img   style={{ backgroundColor: "" ,padding:'', border:'solid 2px ',width:'45px',height:' 40px',color:'grey'}} src={NF_LOGO}></img></a> 

        {selectedItem && <ClothingDetail clothingItem={selectedItem} />}
    </div>
  );
}

export default QuickNorthface;
