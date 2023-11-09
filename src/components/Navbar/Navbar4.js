import React, { useState , useContext } from 'react';
import { Link  } from 'react-router-dom';
import GUI_LOGO from '../../images/logogucci.jpg';
import ELL_LOGO from '../../images/logoell.png';
import BAL_LOGO from '../../images/55.png';
import HUB_LOGO from '../../images/logohublo.png';
import NIK_LOGO from '../../images/99.png';
import ADI_LOGO from '../../images/890.jpg';
import NF_LOGO from '../../images/5.png';
import TH_LOGO from '../../images/logoth.jpg';
import PAL_LOGO from '../../images/logopal.png';
import DM_LOGO from '../../images/dm.png';
import PM_LOGO from '../../images/pm.jpg';
import ER_LOGO from '../../images/kpk.png';
import S_LOGO from '../../images/555.png';
import RE_LOGO from '../../images/re.png';
import M_LOGO from '../../images/m.png';
import H_LOGO from '../../images/h.png';
import L_LOGO from '../../images/l.jpg';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image4 from '../../images/image5.jpg';
import image3 from '../../images/image3.jpg';
import image11 from '../../images/image11.jpg';
import image21 from '../../images/image21.jpg';
import image41 from '../../images/image41.jpg';
import image31 from '../../images/image32.jpg';


import { AuthContext } from '../User/AuthContext';
import Caro from "../Quick/Carousel";
import Caro2 from "../Quick/Carousel2";
import Caro3 from "../Quick/Carousel3";
import Caro4 from "../Quick/Carousel4";
import Caro6 from "../Quick/Carousel6";



import RE_LOGO2 from '../../images/900.jpg';
import RE_LOGO3 from '../../images/50000.jpg';


import Navbar from 'react-bootstrap/Navbar';

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Navbar4() {
  const { loggedInUsername, logout } = useContext(AuthContext);
  const [basicActive, setBasicActive] = useState('tab1');
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      setBasicActive(null);
    } else {
      setBasicActive(value);
    }
  };
  
  return (
    <>
      <MDBTabs pills className='mb-2 bg-black' style={{height:'60px'}}>
        <MDBTabsItem>
          <Link                                   onClick={() => handleBasicClick('clothing')}

          to='/'
            active={basicActive === 'tab1'}
            className='my-5'
            style={{ textDecoration: 'none',color:'white', marginTop:'30px' , verticalAlign: 'middle'   }}
          >
        <h5 style={{marginTop:'20px',marginLeft:'20px'}}>  Gomart &nbsp;</h5>  &nbsp; &nbsp; 
          </Link >
        </MDBTabsItem>
        <MDBTabsItem>
            <Navbar.Brand>
          <Link                                  

          //            onMouseOut={() => handleBasicClick('tab2')}

          // onMouseOver={() => handleBasicClick('tab2')}
            onClick={() => handleBasicClick('tab2')}
            active={basicActive === 'tab2'}
            style={{ textDecoration: 'none',color:'white', marginTop:'', verticalAlign: 'middle'  }}
          >
        <h6 style={{marginTop:'25px',marginLeft:'60px'}}>  Male &nbsp;</h6>   
          </Link ></Navbar.Brand>
        </MDBTabsItem>
        <MDBTabsItem>
          <Link                                               onClick={() => handleBasicClick('tab3')}


          //  onMouseOver={() => handleBasicClick('tab2')}
          //  onMouseOut={() => handleBasicClick('tab2')}

            active={basicActive === 'tab3'}
            style={{ textDecoration: 'none',color:'white', marginTop:'30px' , verticalAlign: 'middle'  }}
          >
        <h6 style={{marginTop:'25px',marginLeft:'27px'}}>  Female &nbsp;</h6>   
          </Link >
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent style={{marginTop:'-9px'}}  className='bg-light'>
        
        <MDBTabs show={basicActive === 'tab1'}></MDBTabs>
        <MDBTabsPane show={basicActive === 'tab2'}>
          <br/>

          <div style={{display:'flex'}}  className='container bg-light'>

<br/><div>

  {/* <br/> */}
  <hr/>
            <img className='row-12  text-muted' style={{height:'90px',width:'90px',float:''}}   src={RE_LOGO3} /><br/>
                    <div href='/malelist' className='text-muted text-decoration-none '><Link                                   onClick={() => handleBasicClick('clothing')}
 className='text-muted text-decoration-none ' to='/malelist'><br/><h6> <i className="fas fa-user-tag"></i> Men</h6></Link ></div>
          <div className='text-muted text-decoration-none '><Link                                   onClick={() => handleBasicClick('clothing')}
 className='text-muted text-decoration-none ' to="/boylist"><h6> </h6></Link ></div>&nbsp;

          </div>
<div className='row-6 row-gap text-muted ' style={{marginLeft:'125px' ,display:'flex'}} >
  <div className="container">
        <div className="row p-1">
{/* <div className="col" style={{heigth:'100px'}}>  <Caro3/></div>
<div className="col" style={{heigth:'100px'}}>  <Caro2/></div>
<div className="col" style={{heigth:'100px'}}>  <Caro4/></div>
<div className="col" style={{heigth:'100px'}}>  <Caro/></div> */}
{/* <div className="col" style={{heigth:'100px'}}>  <Caro6/></div> */}

<div className="col">
        <img href="/maletshirt" src= {image11} alt="Image 11" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div  className="col">
        <img  href="/maletshirt"src= {image21} alt="Image 21" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="col">
        <img href="/maletshirt" src= {image41}  alt="Image 31" style={{ width: '100%', height: 'auto' }} />
        {/* <div className="col" style={{heigth:'100px'}}>  <Caro4/></div> */}

      </div>
      <div className="col">
        <img href="/maletshirt" src= {image31} alt="Image 41" style={{ width: '100%', height: 'auto' }} />
      </div>

</div>
<br/>

</div>



</div>
            {/* <h6>Female</h6> */}
          </div>

          {/* <br/> */}

{/* <hr/> */}
        <div
            className='container bg-light text-muted '
            style={{ display: 'flex', wordSpacing: '', textDecoration: 'none' }}
          >
            <div className='row row-gap text-muted'>
              <Link                                   onClick={() => handleBasicClick('clothing')}

                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'black' }}
              >
              <b> Accessories:</b> 
              </Link >
              <br />
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/malebag"                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey'  }}
              >
               <i class="fa fa-shopping-bag  "></i> <i class="fa fa-jeans fa-spin fa-2x"></i>


 Bags
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/sneakerlist"                 active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }}
              >
            <i class="fa fa-shoe-prints  "></i> Sneakers
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/watchlist"                 active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }}
              >
            <i class="fa fa-clock  "></i>  Watches
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/cap"                 active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }}
              >
              <i class="fa fa-hat-cowboy  "></i>  Cap
              </Link >
            </div>
            <div className='row row-gap'>
              <Link                                   onClick={() => handleBasicClick('clothing')}

                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'black' }}
              >
             <b>Clothing:</b>   
              </Link >
              <br />
              <Link                                   onClick={() => handleBasicClick('clothing')}

                to="/maletshirt"
                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none' ,color:'grey' }}
              >
                Tshirt
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

 to="/hoodie" 
                 active={basicActive === 'clothing'}
                style={{ textDecoration: 'none' ,color:'grey'}}
              >
                Hoodie
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

              to="/maleshorts" 
                                      active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }}
              >
                Shorts
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

              to="/maletrouser"  active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }} >
Trouser
  </Link >

  <Link                                   onClick={() => handleBasicClick('clothing')}

to="/boylist"  active={basicActive === 'clothing'}
  style={{ textDecoration: 'none',color:'grey' }} >
Shop boy
</Link >


            </div>
            <div className='container bg-light' style={{ display: 'flex', backgroundColor: 'white' }}>
              <div className='row lg-7 xs-12' style={{ marginLeft: '' }}>
                <Link                                   onClick={() => handleBasicClick('clothing')}
  active={basicActive === 'clothing'}>
                </Link >

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Gucci" style={{ textDecoration: 'none' }}>
                  <img src={GUI_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Gucci</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Nike" style={{ textDecoration: 'none' }}>
                  <img src={NIK_LOGO} alt="Gucci Logo" style={{ width: '23px', height: '23px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Nike</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Balenciaga" style={{ textDecoration: 'none' }}>
                  <img src={BAL_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Balenciaga</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Ellesse" style={{ textDecoration: 'none' }}>
                  <img src={ELL_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Ellesse</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/hublot" style={{ textDecoration: 'none' }}>
                  <img src={HUB_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  hublot</span>
                </Link >
              </div>
              <div className='row lg-6 xs-12' style={{ marginLeft: '' }}>
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Puma" style={{ textDecoration: 'none' }}>
                  <img src={PM_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Puma</span>
                </Link >

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/drm" style={{ textDecoration: 'none' }}>
                  <img src={DM_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Dr Martens</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Keppa" style={{ textDecoration: 'none' }}>
                  <img src={ER_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Keppa</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Metalica" style={{ textDecoration: 'none' }}>
                  <img src={M_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Metalica</span>
                </Link >

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Adidas" style={{ textDecoration: 'none' }}>
                  <img src={ADI_LOGO} alt="Gucci Logo" style={{ width: '22px', height: '22px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Adidas</span>
                </Link >
              </div>

              <div className='row md-6 lg-6 xs-12' style={{ marginLeft: '' }}>

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Converse"  style={{ textDecoration: 'none' }}>
                  <img className='' src={S_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Converse </span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Northface" style={{ textDecoration: 'none' }}>
                  <img className='' src={NF_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> North face</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Tommy Hilfiger" style={{ textDecoration: 'none' }}>
                  <img className='' src={TH_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Tommy</span>
                </Link >

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Palace"  style={{ textDecoration: 'none' }}>
                  <img className=' ' src={PAL_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">Palace</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/male/brand/Male-Reebok"  style={{ textDecoration: 'none' }}>
                  <img className='' src={RE_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">Reebok</span>
                </Link >
              </div>
            </div>
          </div>
          <br/>

        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>
          <br/>

          <div style={{display:'flex'}}  className='container bg-light'>

<br/><div>

  {/* <br/> */}
  <hr/>
            <img className='row-12  text-muted' style={{height:'70px',width:'90px',float:''}}   src={RE_LOGO2} /><br/>
             {/* <br/> <i className="fas fa-user-tag"></i>  Girl */}
             <div href='/malelist' className='text-muted text-decoration-none '><Link                                   onClick={() => handleBasicClick('clothing')}
 className='text-muted text-decoration-none ' to='/femalelist'><br/><h6> <i className="fas fa-user-tag"></i> Women</h6></Link ></div>
           {/* <div className='text-muted text-decoration-none '><Link                                   onClick={() => handleBasicClick('clothing')}
 className='text-muted text-decoration-none ' to="/girllist"><h6> <i className="fas fa-user-tag text-decoration-none text-muted"></i> Girl</h6></Link ></div>&nbsp; */}

          </div> 
            {/* <div className='row row-gap text-muted'><h6>Kids : <i class='fas fa-child'></i> Girl </h6></div>&nbsp; */} 
            <div className='row-6 row-gap text-muted' style={{ marginLeft: '125px', display: 'flex' }}>
  <div className="container">
    <div className="row p-1">
      <div className="col">
        <img src= {image1} alt="Image 1" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="col">
        <img src= {image2} alt="Image 2" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="col">
        <img src= {image4}  alt="Image 3" style={{ width: '100%', height: 'auto' }} />
        {/* <div className="col" style={{heigth:'100px'}}>  <Caro4/></div> */}

      </div>
      <div className="col">
        <img src= {image3} alt="Image 3" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
    <br />
  </div>
</div>
            {/* <h6>Female</h6> */}
          </div>

          {/* <br/> */}

{/* <hr/> */}
        <div
            className='container bg-light text-muted '
            style={{ display: 'flex', wordSpacing: '', textDecoration: 'none' }}
          >
            <div className='row row-gap text-muted'>
              <Link                                   onClick={() => handleBasicClick('clothing')}

                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'black' }}
              >
              <b> Accessories:</b> 
              </Link >
              <br />
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/femalebag"                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey'  }}

              >
               <i class="fa fa-shopping-bag  "></i> Bags
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/sneakerlist"                 active={basicActive === 'clothing'}

                style={{ textDecoration: 'none',color:'grey' }}
              >
                            <i class="fa fa-shoe-prints  "></i> Sneakers
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/watchlist"                 active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }}

              >
                            <i class="fa fa-clock  "></i> Watches
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

to="/cap"                 active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }}
              >
              <i class="fa fa-hat-cowboy  "></i> Cap
              </Link >

            </div>
            <div className='row row-gap'>
              <Link                                   onClick={() => handleBasicClick('clothing')}

                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'black' }}
              >
             <b>Clothing:</b>   
              </Link >
              <br />
              <Link                                   onClick={() => handleBasicClick('clothing')}

                to="/femaletshirt"
                active={basicActive === 'clothing'}
                style={{ textDecoration: 'none' ,color:'grey' }}

              >
                Tshirt
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

 to="/hoodie" 
                 active={basicActive === 'clothing'}
                style={{ textDecoration: 'none' ,color:'grey'}}


              >
                Hoodie
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

              to="/femaleshorts" 
                                      active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }}

              >
                Shorts
              </Link >
              <Link                                   onClick={() => handleBasicClick('clothing')}

              to="/femaletrouser"  active={basicActive === 'clothing'}
                style={{ textDecoration: 'none',color:'grey' }} >

Trouser
  </Link >

  <Link                                   onClick={() => handleBasicClick('clothing')}

to="/girllist"  active={basicActive === 'clothing'}
  style={{ textDecoration: 'none',color:'grey' }} >
Shop girl
</Link >


            </div>
            <div className='container bg-light' style={{ display: 'flex', backgroundColor: 'white' }}>
              <div className='row lg-7 xs-12' style={{ marginLeft: '' }}>
                <Link                                   onClick={() => handleBasicClick('clothing')}
  active={basicActive === 'clothing'}>
                </Link >

                                <Link                                   onClick={() => handleBasicClick('clothing')}
  className='xp-1 mb-2' to="/female/brand/Female-Gucci" style={{ textDecoration: 'none' }}>
                  <img src={GUI_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Gucci</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Nike" style={{ textDecoration: 'none' }}>
                  <img src={NIK_LOGO} alt="Gucci Logo" style={{ width: '23px', height: '23px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Nike</span>
                </Link >



                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2'to="/female/brand/Female-Balenciaga" style={{ textDecoration: 'none' }}>
                  <img src={BAL_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Balenciaga</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Ellesse" style={{ textDecoration: 'none' }}>
                  <img src={ELL_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Ellesse</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/hublot" style={{ textDecoration: 'none' }}>
                  <img src={HUB_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  hublot</span>
                </Link >
              </div>
              <div className='row lg-6 xs-12' style={{ marginLeft: '' }}>
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Puma" style={{ textDecoration: 'none' }}>
                  <img src={PM_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Puma</span>
                </Link >

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/drm" style={{ textDecoration: 'none' }}>
                  <img src={DM_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Dr Martens</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Keppa" style={{ textDecoration: 'none' }}>
                  <img src={ER_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Keppa</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Metalica" style={{ textDecoration: 'none' }}>
                  <img src={M_LOGO} alt="Gucci Logo" style={{ width: '27px', height: '27px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Metalica</span>
                </Link >

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Adidas" style={{ textDecoration: 'none' }}>
                  <img src={ADI_LOGO} alt="Gucci Logo" style={{ width: '22px', height: '22px', padding: '', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Adidas</span>
                </Link >
              </div>

              <div className='row md-6 lg-6 xs-12' style={{ marginLeft: '' }}>

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Converse" style={{ textDecoration: 'none' }}>
                  <img className='' src={S_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> Converse </span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Northface" style={{ textDecoration: 'none' }}>
                  <img className='' src={NF_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline"> North face</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Tommy Hilfiger" style={{ textDecoration: 'none' }}>
                  <img className='' src={TH_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">  Tommy</span>
                </Link >

                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Palace" style={{ textDecoration: 'none' }}>
                  <img className=' ' src={PAL_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">Palace</span>
                </Link >
                <Link                                   onClick={() => handleBasicClick('clothing')}
 className='xp-1 mb-2' to="/female/brand/Female-Reebok" style={{ textDecoration: 'none' }}>
                  <img className='' src={RE_LOGO} alt="Gucci Logo" style={{ width: '26px', height: '26px', padding: '1px', borderRadius: '50px', border: 'solid white px' }} />
                  <span style={{ color: 'black', fontSize: '12px' }} className="d-none d-lg-inline">Reebok</span>
                </Link >
              </div>
            </div>
          </div>
          <br/>

        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
