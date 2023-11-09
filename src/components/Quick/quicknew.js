import React, { useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/search";
import {useState} from 'react';
import ClothingDetail from '../Data/detail'
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BAL_LOGO   from '../../images/logobal.jpg'


function Quicknew() {
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

    const maleCardList = products.filter((maleclothesItem) => maleclothesItem.brand === 'Balenciaga').slice( 3,8).map((maleclothesItem) => (

      <Col
      style={{ paddingLeft: '', paddingRight: '0px',padding:''  }}
            key={maleclothesItem.id}
        sm={3}
        md={3}
        lg={3}
                // xs={10}

      >
        <Card style={{ width: '', marginBottom: '5px',border: '0.1px solid white ' }}>
        <img class="card-img-top" src={`http://itssaj.pythonanywhere.com/${maleclothesItem.image}`}
                   onClick={() => handleCardClick(maleclothesItem)} />
 <div class="card-img-overlay">
 <h6 class="card-title">Balenciaga</h6>
 {/* <p class="card-text">Some example text.</p> */}
 
 <h6><a                        onClick={() => handleCardClick(maleclothesItem)}
              variant="outline-dark"
              style={{ fontFamily: 'Cursive',marginTop:'',float: 'right' }}
 class="btn btn-outline-dark">view</a></h6>
 </div>        </Card>
      </Col>
    ));

  return (
    <div className='text-warning container p-50 d-flex justify-content-center'      style={{ backgroundColor: "" ,padding:'40px',paddingLeft:'' }}>

      {/* <h6>  <a href='Balenciaga'>  <img   style={{ backgroundColor: "" ,padding:'', border:'solid 2px ',width:'40px',height:' 40x',color:'grey',borderRadius:'50%'}} src={BAL_LOGO}></img> </a>    </h6 ><br/><br/> */}
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

export default Quicknew;
