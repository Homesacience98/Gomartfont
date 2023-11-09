import React, { useEffect, useState } from 'react';

// Declare the products array outside the component
const products = [];

function ProductList() {
    const [fetchedProducts, setFetchedProducts] = useState([]);

    useEffect(() => {
        // Make a GET request using the fetch API
        fetch('https://itssaj.pythonanywhere.com/api/products/') // Adjust the URL as needed
            .then(response => {
                if (!response.ok) {
                    throw new Error('network error');
                }
                return response.json();
            })
            .then(data => {
                // Update the fetchedProducts state
                setFetchedProducts(data);
                products.length = 0;
                products.push(...data); // Push the fetched data into the external array
                console.log(data);
            })
            .catch(error => {
                console.error('fetch error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {fetchedProducts.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <img style={{width:'200px',height:'200px'}} src={`https://itssaj.pythonanywhere.com/${product.image}`}  />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { products }; // Export the products array
export default ProductList;
