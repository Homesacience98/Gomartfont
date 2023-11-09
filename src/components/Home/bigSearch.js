import React, {useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MaleDetail from '../Data/maledetail';
import SearchBigdetails from '../Data/searchBigdetails';

const BigSearch = () => { 
      const [searchQuery, setSearchQuery] = useState('');
      const [addedItems, setAddedItems] = useState([]);
      const [products, setProducts] = useState([]);
      const [selectedItem, setSelectedItem] = useState(null);
      const handleCardClick = (item) => {
        console.log('Card clicked:', item);
        setAddedItems((prevItems) => [...prevItems, item]);
        setSelectedItem(item);
      };
    
  useEffect(() => {
    fetch('https://itssaj.pythonanywhere.com/api/products/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('network response error');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(' a   fetch operation problem:', error);
      });
  }, []);

  const goSearch = products.filter(product => product.description.toLowerCase().includes(searchQuery));

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = () => {
    console.log('User entered:', searchQuery);
  };

  return (
    <div class="grid-container">
    
      <div style={{ display: 'flex',flexDirection: 'column',alignItems: 'center',padding: '20px',}}class="grid-item">
        <div style={{width: '100%', maxWidth: '500px', }}class="grid-item">
          <InputGroup>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Enter your search"
              style={{backgroundColor:'rgba(255,255,255,0.5) ', border:'white 1px solid', color:'red' ,height:'60px'}}
            />
            <Button
              onClick={handleSearch} 
              variant="dark"
              id="button-addon2"
              style={{ marginLeft: '10px', }} >
              <i className="fas fa-search"></i> Search Gomart
            </Button>
          </InputGroup>
          
        </div>
        {searchQuery === '' ? ( <h1></h1> ) : (

        <div style={{width: '100%',display: 'flex',flexWrap: 'wrap',justifyContent: 'center',}}class="grid-item"> 
       
       <Row>{goSearch.slice(0, 4).map(product => (<Col key={product.id}></Col>))}</Row>

    {selectedItem ? (<SearchBigdetails maleclothes={selectedItem} />) : (
    <>
          <Row>
          {goSearch.slice(0,4).map(product => (
              <Col key={product.id} sm={6} md={4} lg={3}>
                <Card style={{position: 'relative', marginBottom: '50px',borderRadius: '50px',}}>
                  <Card.Img
                    variant="top" 
                    style={{height: '100px',border:' white 3px solid',borderRadius: '50px',}}
                    src={`https://itssaj.pythonanywhere.com/${product.image}`}
                    alt={product.name}
                    onClick={() => handleCardClick(product)}
                  />
                  {/* <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary">See details</Button>
                  </Card.Body> */}
                </Card>
              </Col>
            ))}
          </Row>

        </>
      )}


<div style={{textAlign:'center'}} >
<br/><br/>
<br/>
<br/>
  see more</div>

        </div>
        )}
      </div>
    </div>
  );
};

export default BigSearch;
