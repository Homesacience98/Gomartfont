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
import TH_LOGO from '../../images/logoth.jpg'

function Th() {
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

  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('http://itssaj.pythonanywhere.com/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network p');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(' fetch p:', error);
      });
  }, []);

    const maleCardList = products.filter((maleclothesItem) => maleclothesItem.brand === 'Tommy Hilfiger').map((maleclothesItem) => (

      <Col
      style={{ paddingLeft: '', paddingRight: '0px',padding:''  }}
            key={maleclothesItem.id}
        sm={6}
        md={6}
        lg={3}
      >
        <Card style={{ width: '268px', marginBottom: '5px',border: '0.1px solid white ' }}>
          <Card.Img
            variant="top"
            src={`http://itssaj.pythonanywhere.com/${maleclothesItem.image}`}
            style={{ width: '267px', height: '300px',padding: ''}}
  
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
              variant="dark"
              style={{ fontFamily: '' }}
            >
              Add to cart 🛒
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <div  className='container'>
            <Search/>
            <div class="video-container">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uqO0IrMJcHE"   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

            <a href="/th">

            <img  class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white  ',width:'150px',height:'120px'}} src={TH_LOGO}></img>
</a>
{selectedItem && <ClothingDetail clothingItem={selectedItem} />}

      <Row>{maleCardList}</Row>
    </div>  );
}

export default Th;
