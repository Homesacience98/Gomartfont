import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MaleDetail from '../Data/maledetail';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search/search';
import Quickyarn from '../Quick/quickyarn';
import ClothingDetail from '../Data/detail';
import Filter from '../Search/Filter';



function Watchlist({ item }) {
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
  const applyFilters = (filters) => {
    const filteredItems = products.filter((product) => {
      if (filters.brand && product.brand !== filters.brand) {
        return false;
      }
      if (filters.gender && product.gender !== filters.gender) {
        return false;
      }
      if (
        (filters.minPrice &&
          product.price < parseFloat(filters.minPrice)) ||
        (filters.maxPrice &&
          product.price > parseFloat(filters.maxPrice))
      ) {
        return false;
      }
      if (filters.group && product.group !== filters.group) {
        return false;
      }
      if (filters.color && product.color !== filters.color) {
        return false;
      }
      return true;
    });

    setFilteredProducts(filteredItems);
  };
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products, setProducts] = useState([]); 

  useEffect(() => {
  
    fetch('https://itssaj.pythonanywhere.com/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(' response not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error(' problem with  fetch operation:', error);
      });
  }, []); 

  const maleCardList = filteredProducts.filter((maleclothesItem) => maleclothesItem.gender === 'W').map((maleclothesItem) => (
    <Col
    style={{ paddingLeft: '', paddingRight: '',padding:''  }}
          key={maleclothesItem.id}
      sm={6}
      md={6}
      lg={3}
    >
      <Card style={{ width: '268px', marginBottom: '', border: '0.1px solid white'  }}>
        <Card.Img
          variant="top"
          src={`https://itssaj.pythonanywhere.com/${maleclothesItem.image}`}
          style={{ width: '267px', height: '380px',padding: ''}}

          onClick={() => handleCardClick(maleclothesItem)}
        />
        <Card.Body>
          <Card.Title style={{ fontFamily: '' }}>
           <h6> {maleclothesItem.name}</h6>
          </Card.Title>
          <Card.Title style={{ fontFamily: '',float:'right',marginTop:'-30px' ,color:'grey'}}>
           <h6>₦ {maleclothesItem.price}</h6>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div  className='container'>
        <Search/>
        <hr/>
 <h6> &nbsp;  Watches <i class="fa fa-clock fa-spin text-info"></i>



 </h6>

        <Filter applyFilters={applyFilters} />
        <hr/>
        {selectedItem && <ClothingDetail clothingItem={selectedItem} />}

        <>
          <Row>{maleCardList}</Row>
        </>
      {/* )} */}

    </div>
  );
}

export default Watchlist;
