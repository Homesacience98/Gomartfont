import React, { useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/search";
import {useState} from 'react';
import ClothingDetail from '../Data/detail'
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  NIK_LOGO  from '../../images/logonike.jpg'


function Twomaleview() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleCardClick = (item) => {
    setSelectedItem(item);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
    dispatch({ type: 'ADD_CAR', payload: item });   
  };
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('http://itssaj.pythonanywhere.com/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network  not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(' problem with fetch :', error);
      });
  }, []);

    const maleCardList = products.filter((maleclothesItem) => maleclothesItem.brand === 'Nike').slice(0 ,4).map((maleclothesItem) => (

      <Col
      style={{ paddingLeft: '', paddingRight: '0px',padding:''  }}
            key={maleclothesItem.id}
        sm={3}
        md={3}
        lg={3}
      >
        <Card style={{ width: '', marginBottom: '5px',border: '0.1px solid white ' }}>
          <Card.Img
            variant="top"
            src={`http://itssaj.pythonanywhere.com/${maleclothesItem.img1}`}
            style={{ width: '', height: '',padding: ''}}
  
            onClick={() => handleCardClick(maleclothesItem)}
          />
       <Card.Body>
            {/* <Card.Title style={{ fontFamily: 'Cursive' }}>
             <h6> {maleclothesItem.name}</h6>
            </Card.Title>
            <Card.Title style={{ fontFamily: 'Cursive',float:'right',marginTop:'-30px' ,color:'grey'}}>
             <h6>₦ {maleclothesItem.price}</h6>
            </Card.Title> */}
  
            {/* <Card.Text style={{ fontFamily: 'Helvetica' }}>
              {maleclothesItem.desc} so get it now
            </Card.Text> */}
            {/* <Card.Text style={{ fontFamily: 'Cursive' }}>
              ₦{maleclothesItem.price}
            </Card.Text>
            <h5>★★★☆☆</h5> */}
            {/* <Button
              onClick={() => handleAddToCart(maleclothesItem)}
              variant="outline-dark"
              style={{ fontFamily: 'Cursive' }}
            >
              Add to cart 🛒
            </Button> */}
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <div   className='container'    style={{ backgroundColor: "" ,padding:'40px',paddingLeft:'' }}>

      <h6> Shop Nike   <a href='nike'  >  <img   style={{ backgroundColor: "" ,padding:'', border:'solid 2px black ',width:'30px',height:' 80x'}} src={NIK_LOGO}></img></a>
   </h6>
      {/* <img   style={{ backgroundColor: "" ,padding:'40px', border:'solid 2px '}} src={NIK_LOGO}></img>
<br/> */}
  {selectedItem ? (
        <ClothingDetail clothingItem={selectedItem} />
      ) : (

      <Row>{maleCardList}</Row>
      )}
    </div>
  );
}

export default Twomaleview;
