import React from 'react';
import c1 from '../../images/c1.jpg';
import c2 from '../../images/c2.jpg';
import c3 from '../../images/c3.jpg';
import c4 from '../../images/c4.jpg';
import c5 from '../../images/c5.jpg';

import {useState} from 'react';
import ChildrenDetail from '../Data/childrendetail'
import { useDispatch } from "react-redux";


// import Detail  from './components/Detail/Detail';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Quickchildren() {
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
    setAddedItems((prevItems) => [...prevItems, item]);
    dispatch({ type: 'ADD_CAR', payload: item });
   
  };



    
  const maleclothes = [
    {
      id: 1,
      title: 'Guccishirt',
      img: c1,
      price: '2000',
      desc: 'gusevgsveu',
      category: 'malelux',
    },
    {
      id: 2,
      title: 'Balenciaga',
      img: c2,
      price: '2000',
      desc: 'gusevgsveu',
      category: 'malelux',
    },
    {
        id: 3,
        title: 'Balenciaga',
        img: c3,
        price: '2000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 4,
        title: 'Balenciaga',
        img: c4,
        price: '2000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 5,
        title: 'Balenciaga',
        img: c5,
        price: '2000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 6,
        title: 'Balenciaga2',
        img: c2,
        price: '2000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
  ];
  const addedItemsTable = (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {addedItems.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const maleCardList = maleclothes.map(maleclothesItem => (
    <Col  key={maleclothesItem.id} sm={6} md={6} lg={3}>
      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Img
          variant="top"
          src={maleclothesItem.img}
          style={{ width: '288px', height: '230px' }}
          onClick={() => handleCardClick(maleclothesItem)}          />
        <Card.Body>
          <Card.Title style={{  fontFamily:'Cursive' ,}}>{maleclothesItem.title}</Card.Title>
          <Card.Text style={{ fontFamily:' Helvetica' }}>{maleclothesItem.desc}</Card.Text>
          <Card.Text style={{  fontFamily:'Cursive' ,}}> ₦{maleclothesItem.price}</Card.Text>
          <Button           onClick={() => handleAddToCart(maleclothesItem)}
 variant="outline-dark" style={{  fontFamily:'Cursive' ,}}>Add to cart 🛒</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
  {selectedItem ? (
        <ChildrenDetail childrenItem={selectedItem} />
      ) : (

        <>

        {addedItems.length > 0 && addedItemsTable}
        
        <Row>{maleCardList}</Row>
        </>
      )}
    </div>
  );
}

export default Quickchildren;
