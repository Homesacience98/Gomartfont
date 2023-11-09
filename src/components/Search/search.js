import React, { useEffect,useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Table, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import MaleDetail from '../Data/maledetail';
import ClothingDetail from '../Data/detail';


const Search = () => {
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
        console.error('fetch not okay:', error);
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
        <div
          style={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: '20px',
          }}
        >
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
              style={{
                marginLeft: '10px',
              }}
            >
              <i className="fas fa-search"></i> Search Gomart
            </Button>
          </InputGroup>  

        </div>
        
        {searchQuery === '' ? (
          <h1></h1>    
        ) : (

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Row>
          </Row>

          {selectedItem ? (
        <ClothingDetail clothingItem={selectedItem} />
        ) : (
        <>
          <Row>
          {goSearch.map(product => (
 <Table className='' striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr onClick={() => handleCardClick(product)} key={product.id}>
            <td  >
              <img
                src={`https://itssaj.pythonanywhere.com/${product.image}`}
                alt={product.name}
                onClick={() => handleCardClick(product)}
                style={{
                  cursor: 'pointer',
                  height: '100px', // Adjust the height as needed
                }}
              />
            </td>
            <td>{product.name}</td>
            <td>
            ₦ {product.price}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
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

export default Search;
