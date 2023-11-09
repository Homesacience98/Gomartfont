// Import necessary libraries
import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Search2 from '../Search/search2';
import { AuthContext } from '../User/AuthContext';
import { Link } from 'react-router-dom';
import Search from '../Search/search';

function Navbar3({ cartLength }) {
  const countObj = useSelector((store) => store.countReducer);
  const expand = false; // This sets the Navbar to not expand (hamburger menu)
  const [count, setCount] = useState([]);
  const tomi =   count + countObj.count.length 
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch the list of customers from your Django backend
    fetch('http://itssaj.pythonanywhere.com/api/customer-list/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching customer list:', error);
        setLoading(false);
      });
  }, []);

  const loggedInUser = localStorage.getItem('loggedInUsername');
  const filteredCustomers = customers.filter((customer) => customer.customeruser === loggedInUser);
  const reversedCustomers = filteredCustomers.slice().reverse();
  const lastCustomer = reversedCustomers[0];
  console.log(lastCustomer);

  // Save the lastCustomer to local storage
// localStorage.setItem('lastCustomer', JSON.stringify(lastCustomer));

  // After fetching and getting lastCustomer, save the customer image URL in local storage




  // Function to retrieve count data from local storage
  const getCountFromLocalStorage = () => {
    const cartItems = localStorage.getItem("cartItemCount");
    if (cartItems) {
      setCount((cartItems));
    }
  };
  const { loggedInUsername, logout } = useContext(AuthContext);
  // Call the function to get count data from local storage when the component mounts
  useEffect(() => {
    getCountFromLocalStorage();
  }, []);

  // Use a useEffect to check count on every page reload
  useEffect(() => {
    window.addEventListener("storage", getCountFromLocalStorage);
    return () => {
      window.removeEventListener("storage", getCountFromLocalStorage);
    };
  }, []);
  const [username, setUsername] = useState('');



  return (
    <div className=' ' style={{height:''}}>
      <Navbar expand={expand} className="bg-body-tertiary mb-3 text-xxs " style={{fontSize:'small',height:'48px'}}>
        <Container     style={{fontSize:'small'}} fluid >
        {/* <Navbar.Brand href="/cart">
  {loggedInUsername && ( // Check if the user is logged in
    <span style={{ backgroundColor: '', borderRadius: '', width: '', color: 'black', fontSize: 'large' }}>
      <i class="fa-solid fa-cart-shopping"></i> {/* Shopping cart icon */}
      {/* <b> {count.length} </b>
      <span style={{ fontSize: 'small' }}>
        {countObj.count.length > 0 ? '🚧'.repeat(countObj.count.length) : ''}
      </span>
    </span>
  )}
</Navbar.Brand> */}
{/* <Navbar.Brand >
  {loggedInUsername ? (
    <h6 class="text-muted ">Welcome {loggedInUsername}</h6>
  ) : (
    <h6 class="text-muted">Login to view cart</h6>
  )}
</Navbar.Brand>  */}

<Navbar.Brand href="/" style={{fontSize:'18px'}}  > <i className="fa-solid fa-home text-xs"></i>

</Navbar.Brand>

<Navbar.Brand>



</Navbar.Brand>


<Navbar.Toggle
  aria-controls={`offcanvasNavbar-expand-${expand}`}
  style={{  height:'20px',border:'solid 1px white',fontSize:'20px'}} // Use inline CSS to adjust the height
>
  <h6 style={{fontSize:'18px', marginTop:'-3px'}}><i class='fas fa-user-alt '></i>
</h6> {/* Shopping cart icon */}
</Navbar.Toggle>         

  <Navbar.Brand   href="/cart-view" className="mr-auto" style={{ marginLeft: '15px', marginRight: 'auto',fontSize:'small' }}>
  {loggedInUsername && ( // Check if the user is logged in
  <span style={{ backgroundColor: '', borderRadius: '6px', width: '', color: 'grey', position: 'relative', border:'solid white 1px',fontSize:'18px' }}>
  &nbsp;&nbsp;<i class="fa-solid fa-cart-shopping"></i> {/* Shopping cart icon */} &nbsp;
  <b style={{fontSize:'15px', position: 'absolute', top: '-11px', right: '-8px', backgroundColor: '', color: 'black', padding: '', borderRadius: '' }}>&nbsp;
   &nbsp; &nbsp; <span style={{fontSize:'10px'}} class='text-muted'></span>      
      { + count + + countObj.count.length  
 > 0 ?  + count + + countObj.count.length  
 : null}
   {
 
//  + count + + countObj.count.length  

}
  </b>
  &nbsp;
  {/* <span style={{ fontSize: '5px', marginTop: '10px', color: 'black' }}>
   &nbsp;  {countObj.count.length > 0 ? '🚧'.repeat(countObj.count.length) : ''}
  </span> */}
</span>

  )}
</Navbar.Brand>


<Navbar.Brand href="/profile-view">
  {lastCustomer && (
    <img
      src={`http://itssaj.pythonanywhere.com${lastCustomer.customerimage}`}
      alt="Profile"
      style={{
        width:"40px",
        maxWidth: '42px',   // Set the maximum width
        height: '40px',      // Adjust the height as needed
        borderRadius: '50%',
        border: '2px solid lime',
        marginTop: '-8px',
      }}
    />
  )}
</Navbar.Brand>

{/* <Navbar.Brand  href="/cart" className="mr-auto" style={{ marginLeft: '', marginRight: '',marginTop:'-6px' }}>
  {loggedInUsername && ( // Check if the user is logged in
// 

  )}
</Navbar.Brand> */}




<Navbar.Brand  className='' >
  {loggedInUsername ? (
    <h6 style={{fontSize:'14px',marginTop:'10px'}} class="text-black ">Welcome {loggedInUsername}</h6>
  ) : (
    <h6 style={{fontSize:'small',marginTop:'10px'}} class="text-muted">Login to view cart</h6>
  )}
</Navbar.Brand >
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
           
          >
            
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Gomart
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/review">Review</Nav.Link>
                <NavDropdown title={ loggedInUsername ? loggedInUsername : 'Profile'} id={`offcanvasNavbarDropdown-expand-${expand}`}>
   
                  <NavDropdown.Divider />


                  
        {loggedInUsername ? (
          <Nav>
          
          <NavDropdown.Item href="/cart" >
          <Nav.Link class=' nav-link'href="/cart"> &nbsp;&nbsp; Cart <i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item href="/profile-view" >
          <Nav.Link class=' nav-link'href="/profile-view"> &nbsp;&nbsp; Profile <i class='fas fa-portrait'></i></Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item href="/profile-form" >
          <Nav.Link class=' nav-link'href="/profile-form"> &nbsp;&nbsp; Edit Profile <i class='fas fa-cog'></i></Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="/profile-form" >
  {/* You can use lastCustomer data here in your Navbar component */}
  {/* Other Navbar content */}
  </NavDropdown.Item  >



<NavDropdown.Item onClick={logout}>
        <NavDropdown.Item >Logout</NavDropdown.Item>


           </NavDropdown.Item>
           </Nav>
                   ) : (
          <Nav>
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/register"> Register</NavDropdown.Item>
          </Nav>

          )}
                </NavDropdown>
              </Nav>

              <div style={{marginLeft:'-30px'}} >
                <Search2/>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar3;