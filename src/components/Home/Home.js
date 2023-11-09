import React from "react";
import { Carousel } from "react-bootstrap";
import ad1 from "../../images/ad99.png";
import ad2 from "../../images/ad2 (2).jpg";
import ad3 from "../../images/ad5.jpg";
import Button from "react-bootstrap/Button";
import Quickmale from "../Quick/quickmale";
import Quickyarn from "../Quick/quickyarn";
import Quickfemale from "../Quick/quickfemale";
import Quickadult from "../Quick/quicksneaker";
import Quicknew from "../Quick/quicknew";
// import  ad7 from  '../../images/ad150.jpg'
// import Image from 'react-bootstrap/Image';
import Quickwrist from "../Quick/quickwrist";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Search from "../Search/search";
import BigSearch from "./bigSearch";
import Twomaleview from "../Views/Twomaleview";
import Footer from "../Footer/Footer";


// import Item from '../Cart/item'
// import Cart from '../Cart/Cart'
// import Cart from '../Cart/cart'
import ligra from '../../images/lingra.jpg';
import ad10 from '../../images/900.jpg';



import { Link } from 'react-router-dom';
import ProductList from "../Store/Productlist";
import QuickSneakers from "../Quick/quicksneaker";
import Brands from "../Views/Brands";
import Brands2 from "../Views/Brand2";
import Brands3 from "../Views/Brands3";
import Carolina from "../Quick/Carousel";
import Caro from "../Quick/Carousel";
import Caro2 from "../Quick/Carousel2";
import Caro3 from "../Quick/Carousel3";
import Caro4 from "../Quick/Carousel4";
import Caro6 from "../Quick/Carousel6";
import Header from "../Views/Header";
import UserInfo from "../User/Userinfo";
import CartUser from "../Cart/CartUser";
import ProfileForm from "../User/ProfileForm";
import ViewProfile from "../User/Profileview";

function Home() {
  const storedToken = localStorage.getItem('authToken');
  return (
    <div>
       {/* <Cart/> */}
      {/* <Search/> */}
      {/* <ProfileForm/> */}
{/* <UserInfo/> */}
{/* <ViewProfile/> */}
{/* <CartUser/> */}
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ad1}
            alt="First slide"
            style={{ height: "" }}
          />
          {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}

          <Carousel.Caption>
            {/* <br/> */}
            {/* <h5 style={{marginTop: '600px',}}>Shop Adult Wears</h5> */}
            <h1
              style={{
                marginBottom: "50px",
                fontFamily: "",
                fontStyle: "oblique",
              }}
            >
              Gomart{" "}
              <span
                style={{
                  marginBottom: "",
                  fontStyle: "oblique",
                  color: "white",
                }}
              >
                {" "}
                Online store
              </span>{" "}
              <i class="fa-solid fa-cart-shopping"></i>
            </h1>
            {/* <InputGroup  style={{marginBottom:'400px',}}   >
        <Form.Control  style={{backgroundColor:'rgba(255,255,255,0.5) ', border:'white 1px solid', color:'red'}}  as="textarea" aria-label="With textarea" />
        <Button  variant="outline-dark" id="button-addon2">
        <i class='fas fa-search'></i>  Search Gomart
        </Button>
      </InputGroup> */}
            <div style={{ marginBottom: "400px", height: "150px" }}>
              <BigSearch />
            </div>
            <h5 style={{ marginTop: "" }}>
              Gomart Online store <i class="fa-solid fa-cart-shopping"></i>
            </h5>
            <p>
              {" "}
              5% off sales till december . Exlpore to discover varities of
              clothing categories
            </p>
            <i class="fab fa-cc-apple-pay" style={{ fontSize: "30px" }}></i>
            &nbsp;&nbsp;&nbsp;
            <i class="fab fa-cc-paypal" style={{ fontSize: "30px" }}></i>
            &nbsp;&nbsp;&nbsp;
            <i class="fab fa-cc-visa" style={{ fontSize: "30px" }}></i>
            &nbsp;&nbsp;&nbsp;
            <i class="fab fa-cc-mastercard" style={{ fontSize: "30px" }}></i>
            &nbsp;&nbsp;&nbsp;
            {/* <div style={{marginTop: '-700px', marginLeft:'-100px',}}><Quickfemale/> </div>  */}
            {/* <Button   style={{width:'500px' ,height:'', marginLeft:'',marginTop:'', }} variant="outline-success">Shop</Button> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ad2} alt="Second slide" />
          <Carousel.Caption>
            <h1
              style={{
                marginBottom: "50px",
                fontFamily: "",
                fontStyle: "oblique",
              }}
            >
              Gomart{" "}
              <span
                style={{
                  marginBottom: "",
                  fontStyle: "oblique",
                  color: "white",
                }}
              >
                {" "}
                Online store
              </span>{" "}
              <i class="fa-solid fa-cart-shopping"></i>
            </h1>

            {/* <InputGroup  style={{marginBottom:'280px',}}   >
        <Form.Control  style={{backgroundColor:'rgba(255,255,255,0.5) ', border:'white 1px solid', color:'red'}}  as="textarea" aria-label="With textarea" />
        <Button  variant="dark" id="button-addon2">
        <i class='fas fa-search'></i>  Search Gomart
        </Button>
      </InputGroup> */}
            <div style={{ marginTop: "", height: "150px" }}>
              <BigSearch />
            </div>

            <h5 style={{ marginTop: "300px", color: "white" }}>
              Gomart Online store <i class="fa-solid fa-cart-shopping"></i>
            </h5>
            <p style={{ marginTop: "", color: "white" }}>
              {" "}
              5% off sales till december . Explore to discover varities of
              clothing categories
            </p>
            <Link to='/black'>
            <Button  variant="outline-light" size="lg">
              Discover Goblack
            </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ad3} alt="Third slide" />
          <Carousel.Caption>
            <h1
              style={{
                marginBottom: "80px",
                fontFamily: "",
                fontStyle: "oblique",
              }}
            >
              Gomart{" "}
              <span
                style={{
                  marginBottom: "",
                  fontStyle: "oblique",
                  color: "gold",
                }}
              >
                {" "}
                Online store
              </span>{" "}
              <i class="fa-solid fa-cart-shopping"></i>
            </h1>

            <div style={{ marginBottom: "400px", height: "150px" }}>
              <BigSearch />
            </div>
            <h5 style={{ marginTop: "" }}>
              Gomart Online store <i class="fa-solid fa-cart-shopping"></i>
            </h5>
            <p>
              {" "}
              5% off sales till december . Exlpore to discover varities of
              clothing categories
            </p>
            <Link to='/black'>
            <Button  variant="outline-light" size="lg">
              Discover Goblack
            </Button>
            </Link>

            {/* <Button variant="outline-light">Light</Button>{' '} */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <ProductList/> */}
      {/* <Twomaleview/> */}


      <Quickyarn />
      {/* <div style={{ backgroundColor: "#7f7f7f" }}>
        <Quickmale />
      </div> */}
      <br/>





      <div
      style={{ backgroundColor: "" ,padding:'',paddingLeft:'' }}
      data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        class="container"
      >
        <h4 id="list-item-1">
          {" "}
          {/* <Quickmale />{" "} */}
        </h4>


      </div>
      <Quickmale />{" "}


      <Quickyarn />
<div className="container p-4"><div className="row p-4"> <div className="col-6" style={{heigth:'100px'}}>  <Caro/></div>
<div className="col-6">  <Caro2/></div>
 </div></div>


      {/* <Quickmale/> */}
      {/* <div> */}

{/* <div class='container' >
  <div class='row' >
        <div class=' col-lg-12 col-md-12 '  style={{width:'', height:'300px',backgroundImage: `url(${ligra})`,}} >


wdjincidjwncwjncndj


        </div>
  </div>
</div>
</div> */}

      <Quickyarn />
      <div
      style={{ backgroundColor: "" ,padding:'',paddingLeft:'' }}
        data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        class="container"
      >
      

        <h4  id="list-item-2">
        </h4>
      </div>
      <Quickfemale />


      
      <Quickyarn />

      <Twomaleview/>

<br/>
{/* <Quickyarn />
<div className=" h-25"   style={{heigth:'50px'}}>  <Caro4/></div> */}


{/* <Brands/> */}
<Quickyarn />

<div className="container">

<Brands2/>
</div>

      {/* <Quickfemale/> */}

      <div id="list-example" class="list-group">
        {/* <a class="list-group-item list-group-item-action" href="#list-item-1">Shop generally </a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">New in stock</a> */}

        {/* <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a> */}

        <Quickyarn />
      </div>
      {/* <div
      style={{ backgroundColor: "" ,padding:'',paddingLeft:'' }}
      data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        class="container"
      >
        <h4 id="list-item-1">
          {" "}
        </h4>


      </div> */}
      <Quickwrist />{" "}


      <Quickyarn />
      <h5>
          Latest in stock <i class="fa fa-plus-square"></i>
        </h5>


<div style={{ backgroundColor: "black" ,padding:'',paddingRight:'' }}>
      <div
      style={{ backgroundColor: "#212121" ,padding:'',paddingRight:'' }}
        data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        class="scrollspy-example container"
      >
      

        <h4  id="list-item-2">
          <Quicknew />
        </h4>
      </div>
      </div>
      {/* <Image style={{width:'',height:'100px'}} src={ad7} fluid />;
<Image style={{width:'',height:'100px'}} src={ad7} fluid />;
<Image style={{width:'',height:'100px'}} src={ad7} fluid />;
<Image style={{width:'',height:'100px'}} src={ad7} fluid />;
<Image style={{width:'250px',height:'100px'}} src={ad7} fluid />; */}

      {/* <img
          className="d-block w-100"
          src={ad7}
          style={{height:'70px', width:'auto'}} 
          // alt="Second slide"
          
        /> */}
      <Quickyarn />
<div className="container p-4"><div className="row p-4"> <div className="col-6" style={{heigth:'100px'}}>  <Caro6/></div>
<div className="col-6">  <Caro4/></div>
 </div></div>


      <Quickyarn />

      {/* <Quickadult /> */}
      <div
      style={{ backgroundColor: "" ,padding:'',paddingLeft:'' }}
      data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        class="container"
      >
      

        <h4  id="list-item-2">
        </h4>





        
      </div>
      <QuickSneakers />

{/* 
      <Quickyarn />

<div class= 'row'> 
 <div   class= 'col-12' >
 <Link to="/black">

     <img
           className="d-block w-100"
           src={ad10}
           style={{ height: "" }}
         />      </Link>

         <div class= '  col-12' style={{marginTop:'-100px' , textAlign:'center',color:'white' }}>
           <h6>Blackmart</h6>
           <Link to="/black">
           <Button  variant="outline-light" size="lg">
             Discover blackmart
           </Button>
     </Link>
         </div>
</div>
</div>  */}
        <Quickyarn />
<Header/>
<br/>

      <Quickyarn /><br/>
      <div className="container">
        <div className="row p-1">
<div className="col" style={{heigth:'100px'}}>  <Caro3/></div>
<div className="col" style={{heigth:'100px'}}>  <Caro2/></div>
<div className="col" style={{heigth:'100px'}}>  <Caro4/></div>
<div className="col" style={{heigth:'100px'}}>  <Caro/></div>
<div className="col" style={{heigth:'100px'}}>  <Caro6/></div>

</div>
<br/>

</div>
      <Quickyarn />

      <Brands3/>

      


      {/* <Cart/> */}
    </div>
  );
}

export default Home;
