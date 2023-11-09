import React from 'react';

import {useState} from 'react';
import ChildrenDetail from '../Data/childrendetail'
import ClothingDetail from '../Data/detail';



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../Search/search';
import { filteredChildren } from '../Store/allProduct';
import { useDispatch } from "react-redux";

function Childrenlist() {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const handleCardClick = (item) => {
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

  const maleCardList = filteredChildren.map(maleclothesItem => (
    <Col key={maleclothesItem.id} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Img
          variant="top"
          src={maleclothesItem.img}
          style={{ width: '288px', height: '230px' }}
          onClick={() => handleCardClick(maleclothesItem)}/>
        <Card.Body>
          <Card.Title style={{  fontFamily:'' ,}}>{maleclothesItem.title}</Card.Title>
          <Card.Text style={{  fontFamily:'' ,}}>{maleclothesItem.desc}</Card.Text>
          <Card.Text style={{  fontFamily:'' ,}}> ₦{maleclothesItem.price}</Card.Text>
          <Button onClick={() => handleAddToCart(maleclothesItem)} style={{  fontFamily:'',}}variant="dark">Add to cart 🛒</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      <Search/>
      {selectedItem && <ClothingDetail clothingItem={selectedItem} />}
      <Row>{maleCardList}</Row>
    </div>
  );
}

export default Childrenlist;
