import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'; // Import Bootstrap components

function Navbar2() {
  return (
    <div>
{/* <Button variant="primary">Primary</Button>{' '} */}
<Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#"><i class="fa-solid fa-cart-shopping"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Form inline>
          <FormControl style={{width:'250px' ,height:'20px', marginLeft:'400px', marginTop:'', }}  type="text" placeholder="Search" className="mr-sm-2" />
          {/* <Button   style={{width:'' ,height:'30px', marginLeft:'480px',marginTop:'-40px', }} variant="outline-success">Search</Button> */}
        </Form>
        
        <Nav className="ml-auto">
          <NavLink style={{ marginLeft:'350px',}}  class="nav-link active" to="/profile" ><i class="fas fa-user-alt"></i></NavLink>
          {/* <NavLink style={{ marginLeft:'350px',}}  class="nav-link active" to="/cart" ><i class="fas fa-user-alt"></i></NavLink> */}

        </Nav>

      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navbar2
