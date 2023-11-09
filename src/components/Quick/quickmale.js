import React, { useEffect, useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MaleDetail from '../Data/maledetail';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../style.css'
import ClothingDetail from '../Data/detail';


function Quickmale({ item }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    console.log('Card clicked:', item);
    // setAddedItems((prevItems) => [...prevItems, item]);
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
    fetch("https://itssaj.pythonanywhere.com/api/products/")


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
        console.error('problem with fetch:', error);
      });
  }, []);

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100; // Adjust the scroll amount
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100; // Adjust the scroll amount
    }
  };

  const maleCardList = products
    .filter((maleclothesItem) => maleclothesItem.gender === 'M')
    // .slice(0, 8)
    .map((maleclothesItem) => (
      <Col
        key={maleclothesItem.id}
        // sm={6}
        // md={6}
        // lg={3}
        style={{
          margin: '5px', // Adjust margin for spacing between cards
        }}
      >
        <Card
          style={{
            width: '268px',
            border: '0.1px solid white',
          }}
        >
          <Card.Img
            variant="top"
            src={`http://itssaj.pythonanywhere.com/${maleclothesItem.image}`}
            style={{ width: '267px', height: '300px', padding: '0' }}
            onClick={() => handleCardClick(maleclothesItem)}
          />
          <Card.Body>
            <Card.Title style={{ fontFamily: '' }}>
              <h6>{maleclothesItem.name}</h6>
            </Card.Title>
            <Card.Title
              style={{
                fontFamily: '',
                float: 'right',
                marginTop: '-30px',
                color: 'grey',
              }}
            >
              <h6>₦ {maleclothesItem.price}</h6>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <div class='px-5'>
        {selectedItem && <ClothingDetail clothingItem={selectedItem} />}

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <button onClick={scrollLeft}>{"<"}</button> */}
        <div className=''>    <Link onClick={scrollLeft}><h6><i class='fas fa-arrow-alt-circle-left  text-muted'></i></h6></Link></div>

        <div
          className="horizontal-scroll"
          ref={containerRef}
          style={{
            display: 'flex',
            overflowX: 'scroll', 
            whiteSpace: 'nowrap',
          
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <hr/><hr/> <br/>
            <hr/><hr/> <br/>
            {maleCardList}
          </div>
        </div>
      <div className=''>    <Link onClick={scrollRight}> <h6><i class='fas fa-arrow-alt-circle-right  text-muted'></i></h6></Link></div>
      </div>
    </div>
  );
}

export default Quickmale;
