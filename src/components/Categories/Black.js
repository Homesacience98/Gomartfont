import React, { useEffect} from 'react';
import { filteredBalenciaga } from "../Store/allProduct";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/search";
import {useState} from 'react';
import ClothingDetail from '../Data/detail'
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  NIK_LOGO  from '../../images/151.jpg'
import  NIK2_LOGO  from '../../images/105.jpg'
import  NIK3_LOGO  from '../../images/102.jpg'
import Filter from '../Search/Filter';


function Black() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
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
  };  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('https://itssaj.pythonanywhere.com/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('response not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(' problem with  fetch :', error);
      });
  }, []);

    const maleCardList = products.filter((maleclothesItem) => maleclothesItem.category === 'B').map((maleclothesItem) => (

      <Col
      style={{ paddingLeft: '', paddingRight: '0px',padding:''  }}
            key={maleclothesItem.id}
        sm={6}
        md={6}
        lg={3}
      >
        <Card style={{ width: '268px', marginBottom: '8px',border: '0.8px solid black ',backgroundColor:'black' ,color:'white'}}>
          <Card.Img
            variant="top"
            src={`https://itssaj.pythonanywhere.com/${maleclothesItem.image}`}
            style={{ width: '267px', height: '330px',padding: ''}}
            onClick={() => handleCardClick(maleclothesItem)}
          />
       <Card.Body>
            <Card.Title style={{ fontFamily: '' }}>
             <h6> {maleclothesItem.name}</h6>
            </Card.Title>
            <Card.Title style={{ fontFamily: '',float:'right',marginTop:'-30px' ,color:'grey'}}>
             <h6>₦ {maleclothesItem.price}</h6>
            </Card.Title>
  
            {/* <Card.Text style={{ fontFamily: 'Helvetica' }}>
              {maleclothesItem.desc} so get it now
            </Card.Text> */}
            {/* <Card.Text style={{ fontFamily: '' }}>
              ₦{maleclothesItem.price}
            </Card.Text>
            <h5>★★★☆☆</h5> */}
            <Button
              onClick={() => handleAddToCart(maleclothesItem)}
              variant="outline-dark"
              style={{ fontFamily: '' }}
            >
              Add to cart 🛒
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    
    <div  style={{backgroundColor:'black' ,color:'white'}}><br/>
                <Search/><br/>

                <div class="video-container">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_CqKv0Y1FB0"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<hr/>



    <div>
            <a href="/black">

<img  class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'8px', border:'solid 8px white  ',width:'',height:'300px'}} src={NIK2_LOGO}></img>
<img  class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'8px', border:'solid 8px grey ',width:'',height:'300px'}} src={NIK_LOGO}></img>
<img  class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'8px', border:'solid 8px white  ',width:'',height:'300px'}} src={NIK3_LOGO}></img>

</a>
</div>
<br/><br/><br/>
    <div class='container'>
    <h6> &nbsp;  Goblack <i class="fa fa-life-ring fa-spin "></i>
 </h6>
        <Filter applyFilters={applyFilters} />
        <hr/>
        {selectedItem && <ClothingDetail clothingItem={selectedItem} />}

<Row>{maleCardList}</Row>
</div>    </div>
  );
}

export default Black;
