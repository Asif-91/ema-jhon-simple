import React from 'react';
import  { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';

const Shop = () => { 
     const first15 = fakeData.slice(0,15);
     const [products, ] = useState(first15);
     const [cart, setCart] = useState([]);
     
     const handleAddProduct = (product) => {
         const newCart = [...cart, product];
         setCart(newCart);
        }
    

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddProduct ={handleAddProduct}
                        product={pd}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;