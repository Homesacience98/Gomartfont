// FemaleBrandPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../Search/Filter'; // Import the Filter component
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ClothingDetail from '../Data/detail'
import Search from '../Search/search';



function FemaleBrandPage() {

  const { brandName } = useParams();
  console.log('Brand Name:', brandName);
  const [femaleProducts, setFemaleProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [gender, brand] = brandName.split('-');
  console.log('Gender:', gender);
  console.log('Brand:', brand);
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


  useEffect(() => {
    fetch(`https://itssaj.pythonanywhere.com/api/products/?gender=${gender}&brand=${brand}`)
          .then((response) => {
        if (!response.ok) {
          throw new Error('Network not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFemaleProducts(data);
        setFilteredProducts(data); 
        console.log('API URL:', `https://itssaj.pythonanywhere.com/api/products/?gender=${gender}&brand=${brand}`);

        console.log(data);
      })

      .catch((error) => {
        console.error('Problem with the fetch:', error);
      });
  }, [brandName]);

const applyFilters = (filters) => {
  let filtered = [...femaleProducts];

  if (filters.gender || filters.brand) {
    filtered = filtered.filter((product) => {
      const matchesGender = !filters.gender || product.gender === filters.gender;
      const matchesBrand = !filters.brand || product.brand === filters.brand;
      return matchesGender && matchesBrand;
    });
  }

  if (filters.group) {
    filtered = filtered.filter((product) => product.group === filters.group);
  }
  if (filters.category) {
    filtered = filtered.filter((product) => product.group === filters.category);
  }

  if (filters.color) {
    filtered = filtered.filter((product) => product.color === filters.color);
  }

  if (filters.minPrice) {
    filtered = filtered.filter((product) => product.price >= filters.minPrice);
  }

  if (filters.maxPrice) {
    filtered = filtered.filter((product) => product.price <= filters.maxPrice);
  }

  setFilteredProducts(filtered);  };
  

  return (
    <div className="container">
      <Search/>
      <hr/>
 <h6> &nbsp;  {brandName}   <i style={{color:'pink'}} class="fa fa-gear fa-spin" ></i> </h6>
      <Filter applyFilters={applyFilters} initialFilters={{ gender: gender, brand: brand }} />
      <hr/>

      {selectedItem && <ClothingDetail clothingItem={selectedItem} />}

      <div className="row">
        {filteredProducts.filter((product) =>  product.gender === 'F' && product.brand=== brand).map((product) => (

<Col
style={{ paddingLeft: '', paddingRight: '0px',padding:''  }}
      key={product.id}
  sm={6}
  md={6}
  lg={3}
>
  <Card style={{ width: '268px', marginBottom: '5px',border: '0.1px solid white ' }}>
    <Card.Img
      variant="top"
      src={`https://itssaj.pythonanywhere.com/${product.image}`}
      style={{ width: '267px', height: '300px',padding: ''}}

      onClick={() => handleCardClick(product)}
    />
 <Card.Body>
      <Card.Title style={{ fontFamily: '' }}>
       <h6> {product.name}</h6>
      </Card.Title>
      <Card.Title style={{ fontFamily: '',float:'right',marginTop:'-30px' ,color:'grey'}}>
       <h6>₦ {product.price}</h6>
      </Card.Title>

      {/* <Card.Text style={{ fontFamily: 'Helvetica' }}>
        {product.desc} so get it now
      </Card.Text> */}
      {/* <Card.Text style={{ fontFamily: '' }}>
        ₦{product.price}
      </Card.Text>
      <h5>★★★☆☆</h5> */}
      {/* <Button
onClick={() => handleAddToCart(product)}
          variant="dark"
        style={{ fontFamily: '' }}
      >
        Add to cart 🛒
      </Button> */}
    </Card.Body>
  </Card>
</Col>



        ))}
      </div>
    </div>
  );
}

export default FemaleBrandPage;
