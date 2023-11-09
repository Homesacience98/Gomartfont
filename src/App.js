import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar2 from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Navbar3 from './components/Navbar/Navbar3';
import Male from './components/Gender/Male';
import Female from './components/Gender/Female';
import Malelist from './components/Data/malelist';
import NavbarDark from './components/Navbar/Navbar2';
import Children from './components/Gender/Children';
// import Detail  from './components/Detail/Detail';
import ProductDetail from './components/Data/detail'
import Femalelist from './components/Data/femalelist';
import ChildrenList from './components/Data/childrenlist';
import '@fortawesome/fontawesome-free/css/all.css';
import Watchlist from './components/Data/watchlist';
// import {createStore} from "redux";
import { Provider } from 'react-redux';
// import rootReducer from './reducers';

// import countReducer from './Reducers/countReducer';
// import playerReducer from './Reducers/playerReducer';

// import Cart from './components/Cart/cart';
import {createStore} from "redux"
// import { Provider } from 'react';
import Cart from './components/Cart/Cart'
import Player from './components/Cart/Player';
import rootReducer from './Reducers/rootReducer';
import Item from './components/Cart/item';
import Maincart from './components/Cart/mainCart';
import Gucci from './components/Categories/Gucci';
import Nike from './components/Categories/Nike';
import Balenciaga from './components/Categories/Balenciaga';
import Black from './components/Categories/Black';
// import Ellese from './components/Categories/Ellesse';
import Hublot from './components/Categories/Hublot';
import Ellesse from './components/Categories/Ellesse';
import Search from './components/Search/search';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Sneakerlist from './components/Data/sneakerlist';
import Boylist from './components/Data/boylist';
import Girllist from './components/Data/girllist';
import Reebok from './components/Categories/Reebok';
import Adidas from './components/Categories/Adidas';
import Keppa from './components/Categories/Keppa';
import Metalica from './components/Categories/Metalica';
import Supreme from './components/Categories/Converse';
import Th from './components/Categories/Th';
import Drm from './components/Categories/Drm';
import Puma from './components/Categories/Puma';
import NF from './components/Categories/Nf';
import Palace from './components/Categories/Palace';
import Converse from './components/Categories/Converse';
import Quickmale from './components/Quick/quickmale';
import MaleDetail from './components/Data/maledetail';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';
import Checkout from './components/Checkout/Checkout';
import UserProfile from './components/User/ProfileForm';
import MaleTshirt from './components/Gender/MaleTshirts';
import FemaleTshirt from './components/Gender/FemaleTshirts';
import MaleShort from './components/Gender/MaleShorts';
import Hoodie from './components/Gender/Hoodie';
import FemaleBag from './components/Gender/FemaleBag';
import Navbar4 from './components/Navbar/Navbar4';

// import Sneakerlist from './components/Data/adultlist';
// import bigSearch from './components/Home/bigSearch';
// import AddedItemsTable from './components/Cart/mainCart';
 
import FemaleBrandPage from './components/Gender/FemaleBrand';
import MaleBrandPage from './components/Gender/MaleBrand';
import MaleBag from './components/Gender/MaleBag';
import MaleTrouser from './components/Gender/MaleTrouser';
import FemaleShorts from './components/Gender/FemaleShorts';
import FemaleTrouser from './components/Gender/FemaleTrouser';
import CartUser from './components/Cart/CartUser';
import ProfileForm from './components/User/ProfileForm';
import VeiwProfile from './components/User/Profileview';


function App() {

  // const store = createStore(countReducer)
  const store = createStore(rootReducer)

  return (
<Provider store={store} >
 <BrowserRouter>
         <div >
      <div style={{position:'fixed' , flex:'right',  zIndex: '1000', width:'100%',}}  ><Navbar3/>

      {/* <NavbarDark/> */}
      </div>  
      <NavbarDark/>
      <Navbar4/>
      {/* <NavbarDark/> */}

      <Routes>
             <Route path="/" element={<Home/>} />
              <Route path="shop" element={<Shop/>} />
              <Route path="male" element={<Male/>} />
              <Route path="female" element={<Female/>} />
              <Route path="malelist" element={<Malelist/>} />
              <Route path="femalelist" element={<Femalelist/>} />
              <Route path="/female/brand/:brandName" element={<FemaleBrandPage/>}/>
              <Route path="/male/brand/:brandName" element={<MaleBrandPage/>}/>

              <Route path="children" element={<Children/>} />
              <Route path="sneakerlist" element={<Sneakerlist/>} />
              <Route path="childrenlist" element={<ChildrenList/>} />
              <Route path="watchlist" element={<Watchlist/>} />
              <Route path="player" element={<Player/>} />
              <Route path="item" element={<Item/>} />
              <Route path="maincart" element={<Maincart/>} />
              <Route path="gucci" element={<Gucci/>} />
              <Route path="nike" element={<Nike/>} />
              <Route path="Balenciaga" element={<Balenciaga/>} />
              <Route path="black" element={<Black/>} />
              <Route path="ellesse" element={<Ellesse/>} />
              <Route path="hublot" element={<Hublot/>} />
              <Route path="search" element={<Search/>} />
              <Route path="login" element={<Login/>} />
              <Route path="register" element={<Register/>} />
              <Route path="bag" element={<Cart/>} />
              <Route path="boylist" element={<Boylist/>} />
              <Route path="girllist" element={<Girllist/>} />

              <Route path="reebok" element={<Reebok/>} />
              <Route path="adidas" element={<Adidas/>} />
              <Route path="puma" element={<Puma/>} />
              <Route path="drm" element={<Drm/>} />
              <Route path="th" element={<Th/>} />
              <Route path="converse" element={<Converse/>} />
              <Route path="metalica" element={<Metalica/>} />
              <Route path="keppa" element={<Keppa/>} />
              <Route path="nf" element={<NF/>} />
              <Route path="palace" element={<Palace/>} />
              <Route path="quickmale" element={<Quickmale/>} />
              <Route path="maledetails" element={<MaleDetail/>} />
                            <Route path="footer" element={<Footer/>} />
                            <Route path="maletshirt" element={<MaleTshirt/>} />
                            <Route path="femaletshirt" element={<FemaleTshirt/>} />
                            <Route path="maleshorts" element={<MaleShort/>} />
                            <Route path="femaleshorts" element={<FemaleShorts/>} />

                            <Route path="hoodie" element={<Hoodie/>} />
                            <Route path="femalebag" element={<FemaleBag/>} />
                            <Route path="malebag" element={<MaleBag/>} />
                            <Route path="maletrouser" element={<MaleTrouser/>} />
                            <Route path="femaletrouser" element={<FemaleTrouser/>} />
                            <Route path="cart" element={<CartUser/>} />
                            <Route path="profile-form" element={<ProfileForm/>} />
                            <Route path="profile-view" element={<VeiwProfile/>} />

                            <Route path="cart-view" element={<Cart/>} />


                            <Route path="review" element={<Review/>} />
                            <Route path="checkout" element={<Checkout/>} />
                            <Route path="profileform" element={<UserProfile/>} />

              <Route path="/product/:productId" component={ProductDetail} />
       </Routes>

<Footer/>
          </div>
 </BrowserRouter> 
 </Provider>  
  );
}

export default App;
