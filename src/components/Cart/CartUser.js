import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import MaleDetail from '../Data/maledetail';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search/search';
import Quickyarn from '../Quick/quickyarn';
import ClothingDetail from '../Data/detail';
import Navbar3 from '../Navbar/Navbar3';

function CartUser({ item }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const [checkoutPrice, setCheckoutPrice] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const csrfToken = getCookie('csrftoken');
const handleDeleteItem = (cartItemId) => {
  fetch(`https://itssaj.pythonanywhere.com/api/cart/delete/${cartItemId}/`, {
      method: 'DELETE',
      // Add headers and other necessary options here.
  })
  .then((response) => {
      if (response.ok) {
        // window.alert('Item removed successfully.');
        window.location.reload(); 
          // Item successfully deleted, update your cart state or UI.
      } else {
          // Handle errors here if needed.
      }
  })
  .catch((error) => {
      console.error('Error deleting item:', error);
  });
};

  useEffect(() => {
    fetch('https://itssaj.pythonanywhere.com/api/cart/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFilteredProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Problem with fetch operation:', error);
      });
  }, []);

  const user1 = localStorage.getItem('loggedInUsername');

  const handleCheckout = () => {
    const cartItems = Object.values(productWithQuantity).map((productItem) => `${productItem.product} (Quantity: ${productItem.quantity2} , Size:${productItem.selectedSize}) `);
    const formattedCartItems = cartItems.join('// ');
    const checkoutData = {
      cartItems: formattedCartItems,
            totalAmount: checkoutPrice,
      // user: loggedInUsername,
      usercart: user1,

    };
    const token = localStorage.getItem('authToken');

    // Send a POST request to the Django API for checkout
    fetch('https://itssaj.pythonanywhere.com/api/Checkout/', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(checkoutData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Checkout failed');
        }
        return response.json();
      })
      .then((data) => {
        // Handle success, e.g., clear the cart, show a success message, etc.
        window.open('/checkout')
      })
      .catch((error) => {
        console.error('Checkout failed:', error);
        console.log(checkoutData)
      });
  };

  const productWithQuantity = {};

  filteredProducts
  .filter((maleclothesItems) => maleclothesItems.cartuser === loggedInUsername)
  .forEach((maleclothesItems) => {
    const { product, quantity2, price } = maleclothesItems;
    if (productWithQuantity[product]) {
      
      productWithQuantity[product].quantity2 = Number(quantity2) + Number(productWithQuantity[product].quantity2);
                   productWithQuantity[product].totalPrice = price * productWithQuantity[product].quantity2; // Recalculate the total price
    } else {
      productWithQuantity[product] = {
        ...maleclothesItems,
        totalPrice: price * quantity2,
      };
    }
  });
        const maleCardList = Object.values(productWithQuantity).reverse()
    .map((productItem) => (    <tr key={productItem.id}>
      <td style={{width:"250px"}}>
        <img
          src={`https://itssaj.pythonanywhere.com/${productItem.image}`}
          alt={productItem.product}
          style={{ width: '150px', height: '150px' }}
        />

      </td>
      {/* <td><b>{productItem.product}</b> <b><br/>  <b style={{float:'right'}} > ₦ {productItem.price} </b><br/> Size: {productItem.selectedSize} <br/> Item: {productItem.quantity2} <br/></b>  </td> */}
      <td><b>{productItem.product} <i style={{color:'red'}} class='fas fa-check-circle'></i></b>  <b style={{float:'right'}}> ₦ {productItem.totalPrice}</b >  <b>    < hr style={{color:'lime',fontSize:'35px'}} /></b>
 <b> <span style={{float:'',color:"grey"}} > Price: ₦{productItem.price} </span> <span style={{float:'right',color:"grey"}}>   {productItem.selectedSize} </span><br/> <span style={{float:'',color:"grey"}}> Item: {productItem.quantity2} </span>  <br/></b>           <button style={{float:"right"}} onClick={() => handleDeleteItem(productItem.id)} className="btn btn-dark">
        Remove
      </button>
  <td> </td>
 </td> 

      {/* <td>{productItem.quantity2}</td> */}
      {/* <td>{productItem.totalPrice}</td> */}
      {/* <td>{productItem.selectedSize}</td> */}
      
    </tr>
  ));
  useEffect(() => {
  const totalItemCount = Object.values(productWithQuantity).reduce(
    (acc, productItem) => acc + Number(productItem.quantity2) ,
    0
  );
  setCartItemCount(totalItemCount);
  localStorage.setItem('cartItemCount', totalItemCount.toString());
}, [productWithQuantity]);

  useEffect(() => {
    const total = Object.values(productWithQuantity).reduce(
      (acc, productItem) => acc + parseFloat(productItem.totalPrice),
      0
    );
    setCheckoutPrice(total);
  }, [productWithQuantity]);

  return (
    <div className="">
      {/* <Search /> */}
      {/* <br/> */}
      {/* < hr style={{color:'green'}} /> */}
      {/* <div style={{backgroundColor:'#8A9A5B', color:'white'}}> */}
{/* <hr/> */}
 {/* <i class='fas fa-cart-arrow-down'></i> */}

      {/* <h6> */}
      {/* {cartItemCount} */}
      {/* &nbsp;  {loggedInUsername}'s &nbsp;
        // <i class='fas fa-cart-arrow-down'></i>
      </h6>
      <p> &nbsp; Cart Amount : ₦{checkoutPrice}</p> */}
      {/* </div> */}

      < hr style={{color:'lime'}} />
      {selectedItem && <ClothingDetail clothingItem={selectedItem} />}
      {/* <Navbar3 cartItemCount={cartItemCount} /> */}


<div className='container'>
{/* < hr style={{color:'lime'}} /> */}

{/* < hr style={{color:'green'}} /> */}
      <div style={{backgroundColor:'#088F8F', color:'white'}}>
<hr/>

      <h6>
      {/* {cartItemCount} */}
      &nbsp;  {loggedInUsername}'s &nbsp;
        <i class='fas fa-cart-arrow-down'></i>
      </h6>
      <p> &nbsp; Cart Amount : ₦{checkoutPrice}</p>
      </div>





      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>Image</th> */}
            {/* <th>Product</th> */}
            {/* <th>Price</th> */}
            {/* <th>Quantity</th> */}
            {/* <th>Total</th> */}
            {/* <th>selectedSize</th> */}

          </tr>
        </thead>
        <tbody>{maleCardList}</tbody>
      </Table>

      <button   style={{ float: '', textDecoration: '' , color:'white'}} onClick={handleCheckout} className="btn btn-dark">
      <i class='fab fa-cc-amazon-pay'></i>  &nbsp;  ₦{checkoutPrice}
</button>
</div>
          <br/>
      <hr/>
    </div>
  );
}

export default CartUser;
