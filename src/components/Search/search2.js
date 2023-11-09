import React, { useEffect,useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MaleDetail from '../Data/maledetail';
import Search2Detail from '../Data/search2detail';


const Search2 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
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
          throw new Error('response not okay');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(' fetch problem:', error);
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
    <div className="container">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '500px',marginBottom: '20px', }} >
          <InputGroup>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Enter your search"
            />
            <Button
              onClick={handleSearch}
              variant="dark"
              id="button-addon2"
              style={{marginLeft: '10px',}}>
              <i className="fas fa-search"></i> Search Gomart
            </Button>
          </InputGroup>
          
        </div>
        
        {searchQuery === '' ? (
          <h1></h1>
               ) : (
          
            <div
          style={{ width: '100%', display: 'flex',flexWrap: 'wrap', justifyContent: 'center',}} >

          <Row> </Row>
          {selectedItem ? ( <Search2Detail maleclothes={selectedItem} />) : ( <>

          <Row>
          {goSearch.map(product => (
              <Col key={product.id} sm={6} md={6} lg={6}>
                <Card
                  style={{ width: '10rem', marginBottom: '10px',}}>
                  <Card.Img
                    style={{height: '140px'}}
                    variant="top"
                    src={`https://itssaj.pythonanywhere.com/${product.image}`}
                    alt={product.name}
                    onClick={() => handleCardClick(product)}
                  />
                  <Card.Body style={{marginLeft:'',backgroundColor:'#3b3b3b', color:'white',fontSize:'45px'}}>
                     <Card.Title   onClick={() => handleCardClick(product)}
                   style={{marginLeft:'',fontSize:'16px'}}>{product.name}</Card.Title>
                    {/* <Card.Text>{product.price}</Card.Text> */}
                    {/* <Button     onClick={() => handleCardClick(product)} variant="outline-primary">See details</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </>
      )}

        </div>
        

        )}
      </div>
    </div>
  );
};

export default Search2;
