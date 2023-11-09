import React from 'react';
import gm1 from '../../images/g1.jpg';
import bm9 from '../../images/bm9.jpg';
import thm1 from '../../images/s2.png';
import ellm1 from '../../images/ellm1.jpg';
// import bapm1 from '../../images/bapm1.jpeg';
import plm1 from '../../images/b2.jpg';
import m2 from '../../images/ww3.jpg';
import m3 from '../../images/g4.jpg';

import ellm3 from '../../images/ellm3.jpeg';
import {useState} from 'react';
import ClothingDetail from '../Data/detail'


// import Detail  from './components/Detail/Detail';



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Quickmalesug() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };


    
  const maleclothes = [
    {
      id: 1,
      title: 'Nigerian white',
      img: gm1,
      price: '15,000',
      desc: 'gusevgsveu',
      category: 'malelux',
    },
    {
      id: 2,
      title: 'Ellesse Track',
      img: bm9,
      price: '40,000',
      desc: 'gusevgsveu',
      category: 'malelux',
    },
    {
        id: 3,
        title: 'Nike Airforce',
        img: thm1,
        price: '60,000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 4,
        title: 'Ellesse',
        img: ellm1,
        price: '10,000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 5,
        title: 'Ellesse white',
        img: ellm3,
        price: '15,000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 6,
        title: 'Lakers white',
        img: plm1,
        price: '20,000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 7,
        title: 'Quatz wtach',
        img: m2,
        price: '200,000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
      {
        id: 8,
        title: 'Golden state',
        img: m3,
        price: '15,000',
        desc: 'gusevgsveu',
        category: 'malelux',
      },
  ];

  const maleCardList = maleclothes.map(maleclothesItem => (
    <Col   key={maleclothesItem.id} sm={6} md={4} lg={3}>
      <Card style={{ width: '14rem', marginBottom: '15px' ,marginLeft: '40px' }}>
        <Card.Img
          variant="top"
          src={maleclothesItem.img}
          style={{ width: '220px', height: '200px' }}
          onClick={() => handleCardClick(maleclothesItem)}          />
        <Card.Body>
          <Card.Title style={{  fontFamily:'Cursive' ,}}>{maleclothesItem.title}</Card.Title>
          <Card.Text style={{  fontFamily:'Cursive' ,}}>{maleclothesItem.desc}</Card.Text>
          <Card.Text style={{  fontFamily:'Cursive' ,}}> ₦{maleclothesItem.price}</Card.Text>
          <h5>★★★☆☆</h5>

          <Button style={{  fontFamily:'Cursive' ,}} variant="outline-dark">Add to cart 🛒</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      <br/>

      <h5 style={{textAlign:'center',}}>   </h5>
  {selectedItem ? (
        <ClothingDetail clothingItem={selectedItem} />
      ) : (



      <Row>{maleCardList}</Row>
      )}
    </div>
  );
}

export default Quickmalesug;
