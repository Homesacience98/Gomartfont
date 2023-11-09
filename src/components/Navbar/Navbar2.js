import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GUI_LOGO  from '../../images/logogucci.jpg'
import  ELL_LOGO  from '../../images/logoell.png'
import BAL_LOGO   from '../../images/55.png'
import HUB_LOGO from '../../images/logohublo.png'
import  NIK_LOGO  from '../../images/99.png'
import ADI_LOGO from '../../images/890.jpg'
import NF_LOGO from '../../images/5.png'
import TH_LOGO from '../../images/logoth.jpg'
import PAL_LOGO from '../../images/logopal.png'
import DM_LOGO from '../../images/dm.png'
import PM_LOGO from '../../images/pm.jpg'
import ER_LOGO from '../../images/kpk.png'
import S_LOGO from '../../images/555.png'
import RE_LOGO from '../../images/re.png'
import M_LOGO from '../../images/m.png'
import H_LOGO from '../../images/h.png'
import L_LOGO from '../../images/l.jpg'

import { AuthContext } from '../User/AuthContext';



function NavbarDark() {
  const { loggedInUsername, logout } = useContext(AuthContext);
  return (
    <Navbar variant="dark" bg="dark" expand="lg" style={{fontSize:'',height:'43px'}}>
      <Container fluid>
        <Navbar.Brand href="/">Gomart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav  >
            <NavDropdown
              title="Shop"
              id="nav-dropdown-dark-example"
              menuVariant="light"
              class="dropdown-menu container "
            >
            
              {/* Brands dropdown */}

              <div class='row' style={{width:'200px' ,display: 'flex'}}>

<div   >
              
              
  {loggedInUsername ? (
    <NavDropdown.Item href="/bag">
    <i className="fa-solid fa-shopping-bag"></i> Bag
    </NavDropdown.Item>
  ) : (
    <NavDropdown.Item href="/login">
   <i class='fas fa-door-closed'></i> Login
    </NavDropdown.Item>
  )}
              
              <NavDropdown.Item href="/checkout">
              <i class='fab fa-cc-amazon-pay'></i>     Checkout
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">
                <i className="fa fa-plus-square"></i> New in stock
              </NavDropdown.Item>
              <NavDropdown.Item href="/search">
              <i class='fas fa-glasses'></i> Search
              </NavDropdown.Item>
              <NavDropdown.Item href="/profileform">
              <i class='fas fa-h-square'></i> Help
              </NavDropdown.Item>

              </div>
              <div 
               Variant="dark"
              // class='col-md-6'
              style={{marginLeft:'180px',marginTop:'-169px',width:'120px',backgroundColor:'black',borderRadius:'5px',marginBottom:'-9px'}}
              >
              </div>




              <div 
              class='-md-6'
              style={{marginLeft:'180px',marginTop:'-130px',width:'',backgroundColor:''}}
              >
                              <NavDropdown
                title="Clothing"
                id="brands-dropdown"
                class="dropdown-menu "
                style={{marginLeft:'',marginTop:'-30px',width:''}} >

              <NavDropdown
               Variant="dark"
                title="Tshirts "
                id="brands-dropdown"
                class="dropdown-menu  "
                style={{color:'black',backgroundColor:'black',}}

              >      
              
              <NavDropdown.Item  class="dropdown-menu dropdown-menu" href="/maletshirt" style={{color:'white',backgroundColor:'black',}}>
                <i className="fas fa-user-tie"></i> Male
              </NavDropdown.Item>

              <NavDropdown.Item class="dropdown-menu dropdown-menu-end" href="/femaletshirt" style={{color:'white',backgroundColor:'#3b3b3b',}}>
              <i className="fas fa-user-tag"></i> Female
              </NavDropdown.Item>


              {/* </div> */}
              
              </NavDropdown>
              <NavDropdown
               Variant="dark"
                title="Hoodie "
                id="brands-dropdown"
                class="dropdown-menu  "
                style={{color:'black',backgroundColor:'black',}}

              >      
              
              <NavDropdown.Item  class="dropdown-menu dropdown-menu" href="/hoodie" style={{color:'white',backgroundColor:'black',}}>
                <i className="fas fa-user-tie"></i> Male
              </NavDropdown.Item>

              <NavDropdown.Item class="dropdown-menu dropdown-menu-end" href="/hoodie" style={{color:'white',backgroundColor:'#3b3b3b',}}>
                <i className="fas fa-user-tag"></i> Female
              </NavDropdown.Item>


              {/* </div> */}
              
              </NavDropdown>


              <NavDropdown
               Variant="dark"
                title="Shorts"
                id="brands-dropdown"
                class="dropdown-menu  "
                style={{color:'white',backgroundColor:'black',}}
              >      
            
              <NavDropdown.Item class="dropdown-menu dropdown-menu" href="/maleshorts" style={{color:'white',backgroundColor:'black',}}>
              <i class='fas fa-child'></i>  Male
              </NavDropdown.Item>

              <NavDropdown.Item class="dropdown-menu dropdown-menu" href="/femaleshorts" style={{color:'white',backgroundColor:'#3b3b3b',}}>
              <i class='fas fa-female'></i>  Female
              </NavDropdown.Item>
              {/* </div> */}      
              </NavDropdown>
              
              </NavDropdown>


              <NavDropdown
                title="Brands"
                id="brands-dropdown "
                class="dropdown-menu-dark dropright w-fluid "
                variant='dark'
                style={{marginTop:'-10px'}}
              >  
              <div className='container' style={{display:'flex' ,backgroundColor:'white'}}>  
              <div className='row md-7  lg-7 xs-12' style={{marginLeft:''}}>
                        <NavDropdown.Item className=' xp-5' href="/gucci">
                     <img src={GUI_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px' ,}} />
                  
                     <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Gucci</span>                </NavDropdown.Item> 
                <NavDropdown.Item className=' xp-5' href="/nike">
                <img src={NIK_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Nike</span>                </NavDropdown.Item>
                <NavDropdown.Item className=' xp-5' href="/balenciaga">
                <img src={BAL_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Balenciaga</span>                </NavDropdown.Item>
                <NavDropdown.Item className=' xp-5' href="/ellesse">
                <img src={ELL_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Ellesse</span>                </NavDropdown.Item>
                <NavDropdown.Item className=' xp-5' href="/hublot">
                <img src={HUB_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     hublot</span>                </NavDropdown.Item>
                </div>
                

                <div className='row md-6 lg-6 xs-12' style={{marginLeft:''}}>
                <NavDropdown.Item className=' xp-5' href="/puma">
                <img src={PM_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Puma</span>                </NavDropdown.Item>

                <NavDropdown.Item  className=' xp-5' href="/drm">
                <img src={DM_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Dr Martens</span>                </NavDropdown.Item>
                <NavDropdown.Item className=' xp-5' href="/keppa">
                <img src={ER_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Keppa</span>                </NavDropdown.Item>
                <NavDropdown.Item  className=' xp-5' href="/metalica">
                <img src={M_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Metalica</span>                </NavDropdown.Item>

                <NavDropdown.Item className=' xp-5' href="/adidas">
                <img   src={ADI_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />

                <span  style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Adidas</span>                </NavDropdown.Item>

                </div>
                {/* </div> */}
                <div className='row md-6 lg-6 xs-12' style={{marginLeft:''}}>

                <NavDropdown.Item className=' xp-5' href="/converse">
                <img className='' src={S_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none  d-lg-inline">     Converse</span>                </NavDropdown.Item>
                <NavDropdown.Item className=' xp-5' href="/nf">
                <img className='' src={NF_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">       North face  </span>                </NavDropdown.Item>
                <NavDropdown.Item className=' xp-5' href="/th">
                <img className='' src={TH_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Tommy </span>                </NavDropdown.Item>

                <NavDropdown.Item className=' xp-5' href="/palace">
                <img className=' ' src={PAL_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Palace</span>                </NavDropdown.Item>
                <NavDropdown.Item className=' xp-5' href="/reebok">
                <img className='' src={RE_LOGO} alt="Gucci Logo" style={{width:'30px',height:'30px', padding:'1px', borderRadius:'50px',border:'solid white px'}} />
                <span style={{color:'black',fontSize:'12px'}} className="d-none d-lg-inline">     Reebok</span>                </NavDropdown.Item>

                </div>
                </div>  

              {/* </div> */}
              
              </NavDropdown>
              </div>
              

              <div 
              // class='col-md-6'
              style={{marginLeft:'180px',marginTop:'-100px',width:'100px'}} >
              <NavDropdown
                title="Accesories"
                id="brands-dropdown"
                class="dropdown-menu  "
                variant='dark'
              >      
                            
              <NavDropdown.Item href="/sneakerlist"  style={{color:'white',backgroundColor:'black',}} >
              <i class='fas fa-shoe-prints'></i> sneakers
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/watchlist"                  style={{color:'white',backgroundColor:'#3b3b3b',}}

 >
                <i className="fas fa-clock"></i> Watches
              </NavDropdown.Item>


              {/* </div> */}
              
              </NavDropdown>

                                          <NavDropdown
               Variant="light"
                title="Bags"
                id="brands-dropdown"
                class="dropdown-menu  "
                style={{color:'white',backgroundColor:'black',marginTop:'-10px'}}
              >      
            
              <NavDropdown.Item class="dropdown-menu dropdown-menu" href="/femalebag" style={{color:'white',backgroundColor:'black',}}>
              <i class='fas fa-child'></i>  Male
              </NavDropdown.Item>

              <NavDropdown.Item class="dropdown-menu dropdown-menu" href="/femalebag" style={{color:'white',backgroundColor:'#3b3b3b',}}>
              <i class='fas fa-female'></i>  Female
              </NavDropdown.Item>
              {/* </div> */}      
              </NavDropdown>


              <NavDropdown
                title="Gender"
                id="brands-dropdown"
                class="dropdown-menu "
                style={{marginLeft:'',marginTop:'-10px',width:''}} >

              <NavDropdown
               Variant="light"
                title="Adult "
                id="brands-dropdown"
                class="dropdown-menu  "
                style={{color:'black',backgroundColor:'black',}}

              >      
              
              <NavDropdown.Item  class="dropdown-menu dropdown-menu" href="/malelist" style={{color:'white',backgroundColor:'black',}}>
                <i className="fas fa-user-tie"></i> Male
              </NavDropdown.Item>

              <NavDropdown.Item class="dropdown-menu dropdown-menu-end" href="/femalelist" style={{color:'white',backgroundColor:'#3b3b3b',}}>
                <i className="fas fa-user-tag"></i> Female
              </NavDropdown.Item>


              {/* </div> */}
              
              </NavDropdown>


              <NavDropdown
               Variant="light"
                title="Kids"
                id="brands-dropdown"
                class="dropdown-menu  "
                style={{color:'black',backgroundColor:'#3b3b3b',}}

              >      
              
              <NavDropdown.Item class="dropdown-menu dropdown-menu" href="/boylist" style={{color:'white',backgroundColor:'black',}}>
              <i class='fas fa-child'></i>  Boy
              </NavDropdown.Item>

              <NavDropdown.Item class="dropdown-menu dropdown-menu" href="/girllist" style={{color:'white',backgroundColor:'#3b3b3b',}}>
              <i class='fas fa-female'></i>  Girl
              </NavDropdown.Item>


              {/* </div> */}
              
              </NavDropdown>
              
              </NavDropdown>

              </div>

              </div >

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDark;