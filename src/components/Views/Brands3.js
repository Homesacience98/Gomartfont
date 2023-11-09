import React, { useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/search";
import {useState} from 'react';
import ClothingDetail from '../Data/detail'
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  NF_LOGO  from '../../images/dm.png'


function Brands3() {
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
    fetch('https://itssaj.pythonanywhere.com/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('network error');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('fetch error:', error);
      });
  }, []);

    const maleCardList = products.filter((maleclothesItem) => maleclothesItem.brand === 'Drm').slice( 0,3).map((maleclothesItem) => (

      <Col
      style={{ paddingLeft: '', paddingRight: '0px',padding:''  }}
            key={maleclothesItem.id}
        sm={3}
        md={3}
        lg={3}
      >
        <Card style={{ width: '', marginBottom: '5px',border: '0.1px solid white ' }}>
        <img class="card-img-top" src={`https://itssaj.pythonanywhere.com/${maleclothesItem.image}`} alt="Card image"
                    onClick={() => handleCardClick(maleclothesItem)} />
<div class="card-img-overlay">
  <h6 class="col text-wrap text-sm text-md text-lg text-xl">Dr martens</h6>
 {/* <p class="card-text">Some example text.</p>  */}
  <a
    onClick={() => handleCardClick(maleclothesItem)}
    variant="outline-dark"
    style={{ fontFamily: '' }}
    class="btn btn-outline-dark"
  >
    view
  </a>
</div>
 </Card>
      </Col>
    ));

  return (
    <div className='text-secondary container'      style={{ backgroundColor: "" ,padding:'',paddingLeft:'' }}>

        <a  href='drm'>  <img   style={{ backgroundColor: "" ,padding:'', border:'solid 2px ',width:'70px',height:' 70x',color:'grey'}} src={NF_LOGO}></img></a> 
      
      {/* <img   style={{ backgroundColor: "" ,padding:'40px', border:'solid 2px '}} src={NIK_LOGO}></img>
<br/> */}
  {selectedItem && <ClothingDetail clothingItem={selectedItem} />}  
  <Row>{maleCardList}</Row>

  
    </div>
  );
}

export default Brands3;
